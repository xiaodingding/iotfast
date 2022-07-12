package libMath

import (
	"errors"
	"fmt"
	"strconv"
)

var precedence = map[string]int{"+": 20, "-": 20, "*": 40, "/": 40, "%": 40, "^": 60}

type ExprAST interface {
	toStr() string
}

type NumberExprAST struct {
	Val float64
	Str string
}

type BinaryExprAST struct {
	Op string
	Lhs,
	Rhs ExprAST
}

type FunCallerExprAST struct {
	Name string
	Arg  []ExprAST
}

func (n NumberExprAST) toStr() string {
	return fmt.Sprintf(
		"NumberExprAST:%s",
		n.Str,
	)
}

func (b BinaryExprAST) toStr() string {
	return fmt.Sprintf(
		"BinaryExprAST: (%s %s %s)",
		b.Op,
		b.Lhs.toStr(),
		b.Rhs.toStr(),
	)
}

func (n FunCallerExprAST) toStr() string {
	return fmt.Sprintf(
		"FunCallerExprAST:%s",
		n.Name,
	)
}

type AST struct {
	Tokens []*Token

	source    string
	currTok   *Token
	currIndex int
	depth     int

	Err error
}

func NewAST(toks []*Token, s string) *AST {
	a := &AST{
		Tokens: toks,
		source: s,
	}
	if a.Tokens == nil || len(a.Tokens) == 0 {
		a.Err = errors.New("empty token")
	} else {
		a.currIndex = 0
		a.currTok = a.Tokens[0]
	}
	return a
}

func (a *AST) ParseExpression() ExprAST {
	a.depth++ // called depth
	lhs := a.parsePrimary()
	r := a.parseBinOpRHS(0, lhs)
	a.depth--
	if a.depth == 0 && a.currIndex != len(a.Tokens) && a.Err == nil {
		a.Err = errors.New(
			fmt.Sprintf("bad expression, reaching the end or missing the operator\n%s",
				ErrPos(a.source, a.currTok.Offset)))
	}
	return r
}

func (a *AST) getNextToken() *Token {
	a.currIndex++
	if a.currIndex < len(a.Tokens) {
		a.currTok = a.Tokens[a.currIndex]
		return a.currTok
	}
	return nil
}

func (a *AST) getTokPrecedence() int {
	if p, ok := precedence[a.currTok.Tok]; ok {
		return p
	}
	return -1
}

func (a *AST) parseNumber() NumberExprAST {
	f64, err := strconv.ParseFloat(a.currTok.Tok, 64)
	if err != nil {
		a.Err = errors.New(
			fmt.Sprintf("%v\nwant '(' or '0-9' but get '%s'\n%s",
				err.Error(),
				a.currTok.Tok,
				ErrPos(a.source, a.currTok.Offset)))
		return NumberExprAST{}
	}
	n := NumberExprAST{
		Val: f64,
		Str: a.currTok.Tok,
	}
	a.getNextToken()
	return n
}

func (a *AST) parseFunCallerOrConst() ExprAST {
	name := a.currTok.Tok
	a.getNextToken()
	// call func
	if a.currTok.Tok == "(" {
		f := FunCallerExprAST{}
		if _, ok := defFunc[name]; !ok {
			a.Err = errors.New(
				fmt.Sprintf("function `%s` is undefined\n%s",
					name,
					ErrPos(a.source, a.currTok.Offset)))
			return f
		}
		a.getNextToken()
		exprs := make([]ExprAST, 0)
		if a.currTok.Tok == ")" {
			// function call without parameters
			// ignore the process of parameter resolution
		} else {
			exprs = append(exprs, a.ParseExpression())
			for a.currTok.Tok != ")" && a.getNextToken() != nil {
				if a.currTok.Type == COMMA {
					continue
				}
				exprs = append(exprs, a.ParseExpression())
			}
		}
		def := defFunc[name]
		if def.argc >= 0 && len(exprs) != def.argc {
			a.Err = errors.New(
				fmt.Sprintf("wrong way calling function `%s`, parameters want %d but get %d\n%s",
					name,
					def.argc,
					len(exprs),
					ErrPos(a.source, a.currTok.Offset)))
		}
		a.getNextToken()
		f.Name = name
		f.Arg = exprs
		return f
	}
	// call const
	if v, ok := defConst[name]; ok {
		return NumberExprAST{
			Val: v,
			Str: strconv.FormatFloat(v, 'f', 0, 64),
		}
	} else {
		a.Err = errors.New(
			fmt.Sprintf("const `%s` is undefined\n%s",
				name,
				ErrPos(a.source, a.currTok.Offset)))
		return NumberExprAST{}
	}
}

func (a *AST) parsePrimary() ExprAST {
	switch a.currTok.Type {
	case Identifier:
		return a.parseFunCallerOrConst()
	case Literal:
		return a.parseNumber()
	case Operator:
		if a.currTok.Tok == "(" {
			t := a.getNextToken()
			if t == nil {
				a.Err = errors.New(
					fmt.Sprintf("want '0-9' but nothing at all\n%s",
						ErrPos(a.source, a.currTok.Offset)))
				return nil
			}
			e := a.ParseExpression()
			if e == nil {
				return nil
			}
			if a.currTok.Tok != ")" {
				a.Err = errors.New(
					fmt.Sprintf("want ')' but get %s\n%s",
						a.currTok.Tok,
						ErrPos(a.source, a.currTok.Offset)))
				return nil
			}
			a.getNextToken()
			return e
		} else if a.currTok.Tok == "-" {
			if a.getNextToken() == nil {
				a.Err = errors.New(
					fmt.Sprintf("want '0-9' but get '-'\n%s",
						ErrPos(a.source, a.currTok.Offset)))
				return nil
			}
			bin := BinaryExprAST{
				Op:  "-",
				Lhs: NumberExprAST{},
				Rhs: a.parsePrimary(),
			}
			return bin
		} else {
			return a.parseNumber()
		}
	case COMMA:
		a.Err = errors.New(
			fmt.Sprintf("want '(' or '0-9' but get %s\n%s",
				a.currTok.Tok,
				ErrPos(a.source, a.currTok.Offset)))
		return nil
	default:
		return nil
	}
}

func (a *AST) parseBinOpRHS(execPrec int, lhs ExprAST) ExprAST {
	for {
		tokPrec := a.getTokPrecedence()
		if tokPrec < execPrec {
			return lhs
		}
		binOp := a.currTok.Tok
		if a.getNextToken() == nil {
			return lhs
		}
		rhs := a.parsePrimary()
		if rhs == nil {
			return nil
		}
		nextPrec := a.getTokPrecedence()
		if tokPrec < nextPrec {
			rhs = a.parseBinOpRHS(tokPrec+1, rhs)
			if rhs == nil {
				return nil
			}
		}
		lhs = BinaryExprAST{
			Op:  binOp,
			Lhs: lhs,
			Rhs: rhs,
		}
	}
}
