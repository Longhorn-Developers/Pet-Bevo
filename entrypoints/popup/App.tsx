import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import playIconStatic from '@/assets/icons/Play icon.svg';
import playIcon from '@/assets/icons/colorless/Play icon.svg';
import './App.css';
import { RectangularButton, SquareButton, ButtonIcon } from '@/components/Button/Button';

function App() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex">
          <img src={reactLogo} alt="logo" />
          <h1 style={{'font-size': '32px'} as React.CSSProperties}>Pet Bevo</h1>
        </div>
        <div className="flex items-center gap-2">
          <SquareButton color="green"><ButtonIcon src={playIconStatic} /></SquareButton>
          <RectangularButton color="orange">Timer</RectangularButton>
          <SquareButton color="brown" radius="4"><ButtonIcon src={playIcon} /></SquareButton>
        </div>
      </div>
      <hr />
      <div>
        <p>FOCUS</p>
        <h1>25:00</h1>
      </div>
    </>
  );
}

export default App;
