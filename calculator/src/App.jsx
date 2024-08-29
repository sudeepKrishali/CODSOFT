import { useState, useEffect } from 'react'
import './App.css'
import { evaluate } from 'mathjs';

function App() {

  const [equation, setEquation] = useState("0");
  const [result, setResult] = useState(0);

  const handleNum = async (value) => {
    let num = Number(value)
    if (equation == '0') {
      setResult(num);
      setEquation(value);
    }
    else {
      let sign = equation.slice(-1);

      if (sign == '+' || sign == '-' || sign == '/' || sign == '*' || sign == '.') {
        setEquation(equation + value)
        setResult(evaluate(equation + value))
      }
      else {
        setEquation(equation + value)
        setResult(result * 10 + num);
      }
    }
  };

  const handleSign = async (sign) => {
    if (equation.length != 0 && (equation.slice(-1) == '.' || equation.slice(-1) == '+' || equation.slice(-1) == '-' || equation.slice(-1) == '*' || equation.slice(-1) == '/')) {
      setEquation('error');
      setResult(0);
    }
    else if (sign == '.') {
      const result_float = parseFloat(result);
      setResult(result_float);
      setEquation(equation + sign);
    }
    else if(sign == '/' && result==0){
         setEquation('error');           
    }
    else {
      setEquation(equation + sign);
    }
  }

  const handleClear = () => {
    setEquation('0');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(equation));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleRemoveOne = () => {

    if (equation.length == 1) {
      setEquation("0");
      setResult("0");
    }
    else if (equation.length > 1) {
      //case -> 1+
      let last = equation.slice(-1);
      if (['+', '-', '*', '/'].includes(last)) {
        let eq = equation.slice(0, -1);
        setEquation(eq);
        return;
      }
      else {
        // case => 1+2
        let eq = equation.slice(0, -1);
        let sec_last = equation.charAt(equation.length - 2);
        
        if (['+', '-', '*', '/'].includes(sec_last)) {
          setEquation(eq);
          eq = eq.slice(0,-1);
          setResult(evaluate(eq))
          return;
        }
        else {
          setEquation(eq);
          setResult(evaluate(eq))
        }
      }

    }

  }


  return (
    <>

      <div className="calculator">
        <div className='calculator-container'>
          <div className="calc-screen">
            <p>{equation}</p>
            <p>{result}</p>
          </div>
          <div className="calc-keypad">
            <button onClick={() => handleNum('1')}>1</button>
            <button onClick={() => handleNum('2')}>2</button>
            <button onClick={() => handleNum('3')}>3</button>
            <button onClick={() => handleSign('+')}>+</button>
            <button onClick={() => handleNum('4')}>4</button>
            <button onClick={() => handleNum('5')}>5</button>
            <button onClick={() => handleNum('6')}>6</button>
            <button onClick={() => handleSign('-')}>-</button>
            <button onClick={() => handleNum('7')}>7</button>
            <button onClick={() => handleNum('8')}>8</button>
            <button onClick={() => handleNum('9')}>9</button>
            <button onClick={() => handleSign('*')}>x</button>
            <button onClick={() => handleNum('0')}>0</button>
            <button onClick={() => handleSign('.')}>.</button>
            <button onClick={handleRemoveOne}>&larr;</button>
            <button onClick={() => handleSign('/')}>/</button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleCalculate}>=</button>

          </div>
        </div>
      </div >
    </>
  )
}

export default App
