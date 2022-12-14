import React, { useState } from 'react';
import Calculate from '../logic/Calculate';
import Button from './btn';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onBtnPressed = (btnName) => {
    const result = Calculate(state, btnName);
    setState(result);
  };

  const { total, next, operation } = state;
  const buffer = `${total}${operation}${next}`.replace(/null/g, '');
  const window = buffer.replace(/undefined/g, '');
  return (
    <div className="cal-body">
      <div className="main">
        <Display display={window === '' ? '0' : window} />
        <Button ctrls={['AC', '+/-', '%', '÷']} setBtn={onBtnPressed} last={false} />
        <Button ctrls={['7', '8', '9', 'x']} setBtn={onBtnPressed} last={false} />
        <Button ctrls={['4', '5', '6', '-']} setBtn={onBtnPressed} last={false} />
        <Button ctrls={['1', '2', '3', '+']} setBtn={onBtnPressed} last={false} />
        <Button ctrls={['0', '.', '=']} setBtn={onBtnPressed} last />
      </div>
    </div>

  );
};

export default Calculator;
