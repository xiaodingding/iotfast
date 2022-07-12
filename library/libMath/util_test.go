package libMath

import (
	"math/rand"
	"testing"
	"time"
)

func TestParseAndExecSimple(t *testing.T) {
	type U struct {
		Expr string
		R    float64
	}
	exprs := []U{
		{"1", 1},
		{"1+", 1},
		{"1+2", 3},
		{"-1+2", 1},
		{"-(1+2)", -3},
		{"-(1+2)*5", -15},
		{"-(1+2)*5/3", -5},
		{"1+(-(1+2)*5/3)", -4},
		{"3^4", 81},
		{"3^4.5", 140.29611541307906},
		{"3.5^4.5", 280.7412308013823},
		{"8%2", 0},
		{"8%3", 2},
		{"8%3.5", 2},
		{"1e2", 100},
		{"1e+2", 100},
		{"1e-2", 0.01},
		{"1e-2+1e2", 100.01},
		{"1e-2+1e2*6/3", 200.01},
		{"(1e-2+1e2)*6/3", 200.02},
		{"(88*8)+(1+1+1+1)+(6/1.5)-(99%9*(2^4))", 712},
		{"1/3*3", 1},
		{"123_456_789", 123456789},
		{"123_456_789___", 123456789},
		{"pi", 3.141592653589793},
		{"abs(1)", 1},
		{"abs(-1)", 1},
		{"ceil(90.2)", 91},
		{"ceil(90.8)", 91},
		{"ceil(90.0)", 90},
		{"floor(90.2)", 90},
		{"floor(90.8)", 90},
		{"floor(90.0)", 90},
		{"round(90.0)", 90},
		{"round(90.4)", 90},
		{"round(90.5)", 91},
		{"round(90.9)", 91},
		{"sqrt(4)", 2},
		{"cbrt(27)", 3},
		{"sqrt(4) + cbrt(27)", 5},
		{"sqrt(2^2) + cbrt(3^3)", 5},
		{"127^2+5/2-sqrt(2^2) + cbrt(3^3)", 16132.5},
		{"max(2)", 2},
		{"max(abs(1)+10)", 11},
		{"max(abs(1)+10)*2-1", 21},
		{"max(2,3.5)", 3.5},
		{"max(2^3,3+abs(-1)*6)", 9},
		{"max(2^3,3+abs(-1)*6, 20)", 20},
		{"max(2^3,3+abs(-1)*6,ceil(9.4))", 10},
		{"max(1,2,3,4,5,6,10,7,4,5,6,9.8)", 10},
		{"min(3.5)", 3.5},
		{"min(ceil(1.2))", 2},
		{"min(2,3.5)", 2},
		{"min(2^3,3+abs(-1)*6)", 8},
		{"min(2^3,3+abs(-1)*6,1^10)", 1},
		{"min(99.1,0.2,3,4,5,6,10,7,4,5,6,9.8)", 0.2},
		{"max(2^3,3^2)", 9},
		{"min(2^3,3^2)", 8},
		{"noerr(1/0)", 0},
		{"noerr(1/(1-1))", 0},
		{"0.1+0.2", 0.3},
		{"0.3-0.1", 0.2},
		{"10^-1", 0.1},
		{"10^-2", 0.01},
		{"10^-1*100", 10},
		{"10%0", 0},
	}
	for _, e := range exprs {
		r, _ := ParseAndExec(e.Expr)
		if r != e.R {
			t.Error(e, " ParseAndExec:", r)
		}
	}
}

func TestParseAndExecTrigonometric(t *testing.T) {
	type U struct {
		Expr       string
		RadianMode float64
		AngleMode  float64
	}
	exprs := []U{
		{"sin(pi/2)", 1, 0.027412133592044294},
		{"csc(pi/2)", 1, 36.48019577324057},
		{"cos(0)", 1, 1},
		{"sec(0)", 1, 1},
		{"tan(pi/4)", 1, 0.013708642534394057},
		{"cot(pi/4)", 1, 72.94668290394674},

		{"sin(90)", 0.893996663600558, 1},
		{"csc(90)", 1.1185724071637082, 1},
		{"cos(0)", 1, 1},
		{"sec(0)", 1, 1},
		{"tan(45)", 1.6197751905438615, 1},
		{"cot(45)", 0.6173696237835551, 1},
	}
	for _, e := range exprs {
		TrigonometricMode = RadianMode
		r, _ := ParseAndExec(e.Expr)
		if r != e.RadianMode {
			t.Error(e, " ParseAndExec RadianMode:", r)
		}
		TrigonometricMode = AngleMode
		r, _ = ParseAndExec(e.Expr)
		if r != e.AngleMode {
			t.Error(e, " ParseAndExec AngleMode:", r)
		}
	}
}

func TestRegFunction(t *testing.T) {
	funs := []struct {
		Name string
		Argc int
		Fun  func(expr ...ExprAST) float64
		Exp  string
		R    float64
	}{
		{
			"double",
			1,
			func(expr ...ExprAST) float64 {
				return ExprASTResult(expr[0]) * 2
			},
			"double(6)",
			12,
		},
		{
			"percentage50",
			1,
			func(expr ...ExprAST) float64 {
				return ExprASTResult(expr[0]) / 2
			},
			"percentage50(6)",
			3,
		},
		{
			"range",
			0,
			func(expr ...ExprAST) float64 {
				return 10.0
			},
			"range()",
			10,
		},
		{
			"choice",
			-1,
			func(expr ...ExprAST) float64 {
				rand.Seed(time.Now().UnixNano())
				return ExprASTResult(expr[rand.Intn(len(expr))])
			},
			"choice(1.1, 9.8, 2.5, 100)",
			10,
		},
	}
	for _, f := range funs {
		_ = RegFunction(f.Name, f.Argc, f.Fun)
		r, err := ParseAndExec(f.Exp)
		if f.Name == "choice" {
			if !inSlices(r, []float64{1.1, 9.8, 2.5, 100}) {
				t.Error(err, "RegFunction errors when register new function: ", f.Name)
			}
			continue
		} else if r != f.R {
			t.Error(err, "RegFunction errors when register new function: ", f.Name)
		}
	}

}

func TestParseAndExecError(t *testing.T) {
	exprs := []string{
		"(",
		"((((((",
		"((xscdfddff",
		"(1",
		"(1+",
		"1#1",
		"_123_456_789___",
		"1ee3+3",
		"sin()",
		"sin",
		"pi(",
		"sin(1, 50)",
		"max",
		"max()",
		"max(1,)",
		"max(1,4,6,7,5,)",
		"min",
		"min(,)",
		"min()",
		"min(1,)",
		"min(1,998,4,23,234,2,)",
		"min(1,998,4,23,234,2,,,)",
		"1/0",
		"99.9 / (2-1-1)",
		"(1+2)3",
		"1+1 111",
		"1+1 111+2",
		"1 3",
		"1 3-",
	}
	for _, e := range exprs {
		_, err := ParseAndExec(e)
		if err == nil {
			t.Error(e, " this is error expr!")
		}
	}
}

func inSlices(target float64, s []float64) bool {
	for _, v := range s {
		if v == target {
			return true
		}
	}
	return false
}
