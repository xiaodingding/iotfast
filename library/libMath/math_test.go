package libMath

import (
	"testing"
)

func TestExecA(t *testing.T) {
	exp := "1+2"
	exec(exp)
}

func TestExecB(t *testing.T) {
	exp := "1+2-4"
	exec(exp)
}

func TestExecC(t *testing.T) {
	exp := "1+2-4*3-8"
	exec(exp)
}

func TestExecD(t *testing.T) {
	exp := "1+2-(4*3-8)"
	exec(exp)
}

func TestExecE(t *testing.T) {
	exp := "1+2-(4*3+(1-8))"
	exec(exp)
}

func TestExecF(t *testing.T) {
	exp := "1+(2-(4*3+(1-8)))"
	exec(exp)
}

func TestExecG(t *testing.T) {
	exp := "((1-2)*(3-8))*((((9+2222))))"
	exec(exp)
}

func TestExecH(t *testing.T) {
	exp := "0.8888-0.1 * 444         -0.2"
	exec(exp)
}

func TestExecI(t *testing.T) {
	exp := "0.8888-0.1 * (444         -0.2)"
	exec(exp)
}

func TestExecJ(t *testing.T) {
	exp := "1_234_567*2-3"
	exec(exp)
}

func TestExecK(t *testing.T) {
	exp := "2.3e4*4/3"
	exec(exp)
}

func TestExecL(t *testing.T) {
	exp := "-1+9-88"
	exec(exp)
}

func TestExecM(t *testing.T) {
	exp := "-1+9-88+(88)"
	exec(exp)
}

func TestExecN(t *testing.T) {
	exp := "-1+9-88+(-88)*666-1"
	exec(exp)
}

func TestExecO(t *testing.T) {
	exp := "-(1)+(3)-(-3)*7-((-3))"
	exec(exp)
}

func TestExecP(t *testing.T) {
	exp := "-(-9+3)"
	exec(exp)
}

func TestExecQ(t *testing.T) {
	exp := "2e-3*2+2e2+1"
	exec(exp)
}

func TestExecR(t *testing.T) {
	exp := "3.8 - 56 / (1-1) - 4"
	exec(exp)
}

func TestExecS(t *testing.T) {
	exp := "noerr(3.8 - 56 / (1-1) - 4)"
	exec(exp)
}
