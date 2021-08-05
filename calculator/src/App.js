import React from 'react';
import './App.css';

class App extends React.Component {
  initialState = {
    calc: '0',
    lastPressed: undefined,
    operation: undefined
  }
  
  constructor(){
    super();

    this.state = {
      ...this.initialState
    };
  }
  
  nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  ops = [ '/', '*', '-', '+'];
  ids = {
  7: 'seven', 
  8: 'eight', 
  9: 'nine', 
  4: 'four', 
  5: 'five', 
  6: 'six', 
  1: 'one', 
  2: 'two', 
  3: 'three', 
  0: 'zero',
  '/': 'divide', 
  '*': 'multiply', 
  '-': 'subtract', 
  '+': 'add'
}
  
  handleClick = (e) => {
    const { lastPressed, calc } = this.state;
          
    const { innerText } = e.target;
    
    if(!Number.isNaN(Number(innerText))) {
      if(calc === '0') {
        this.setState({
          calc: innerText
        });
      } else {
        this.setState({
          calc: calc + innerText
        });
      }
    }
      
    switch(innerText) {
      case 'AC': {
        this.setState({
          calc: '0',
          prevNumber: undefined
        });
        break;
      }
      case '.': {
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        
        if(!last.includes('.')) {
          this.setState({
            calc: calc + '.'
          });
        }
        break;
      }
      case '=': {
        const evaluated = eval(calc);
        this.setState({
          calc: evaluated
        });
        break;
      }
        
      default: {
        let e = undefined;
        // check for other op
        if(this.ops.includes(innerText)) {
          if(this.ops.includes(lastPressed) && innerText !== '-') {
            // oh boii...
            const lastNumberIdx = calc.split('').reverse()
                .findIndex(char => char !== ' ' && this.nums.includes(+char)); 
            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          e = (calc === '0') ? innerText : (calc + innerText);
        }
        
        this.setState({
          calc: e
        });
      }
    }
    
    this.setState({
      lastPressed: innerText
    })
  }
 
  
  render() {
    return (
      <div className="calculator">
        <div className="screen" id="display">
          {this.state.calc}
        </div>
        <div className="container">
          <div className="nums-container">
            <button 
              className="ac-button"
              onClick={this.handleClick}
              id="clear"
            >
              AC
            </button>
            {this.nums.map((num, idx) => (
              <button 
                className={`nums ${num === 0 && 'big-n'}`}
                onClick={this.handleClick}
                id={this.ids[num]}
                key={idx}
               >
                {num}
              </button>
            ))}
            <button 
              className="dot-button" 
              onClick={this.handleClick} 
              id="decimal"
             >
              .
            </button>
          </div>
          <div className="ops-container">
            {this.ops.map((op, idx) => (
              <button 
                onClick={this.handleClick}
                id={this.ids[op]}
                key={idx}
              >
                {op}
              </button>
            ))}
            <button 
              className="equal" 
              onClick={this.handleClick} 
              id="equals"
             >
              =
            </button>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
