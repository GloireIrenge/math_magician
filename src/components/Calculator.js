import React, { PureComponent } from 'react';

export class Calculator extends PureComponent {
  render() {
    return (
      <>
        <div className="calculator">
          <div className="display">
            <div className="value">0</div>
          </div>
          <div className="keypad">
            <div className="row_btn">
              <div className="keys">AC</div>
              <div className="keys">+/-</div>
              <div className="keys">%</div>
              <div className="keys sign">:</div>
            </div>
            <div className="row_btn">
              <div className="keys">7</div>
              <div className="keys">8</div>
              <div className="keys">9</div>
              <div className="keys sign">x</div>
            </div>
            <div className="row_btn">
              <div className="keys">4</div>
              <div className="keys">5</div>
              <div className="keys">6</div>
              <div className="keys sign">-</div>
            </div>
            <div className="row_btn">
              <div className="keys">1</div>
              <div className="keys">2</div>
              <div className="keys">3</div>
              <div className="keys sign">+</div>
            </div>
            <div className="row_btn">
              <div className="keys zero">0</div>
              <div className="keys">.</div>
              <div className="keys sign">=</div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Calculator;
