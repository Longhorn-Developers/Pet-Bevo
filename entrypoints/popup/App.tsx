import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import PlayIconStatic from '@/assets/icons/Play icon.svg?react';
import ExitIconStatic from '@/assets/icons/Exit icon.svg?react';
import PlayIcon from '@/assets/icons/colorless/Play icon.svg?react';
import RoomIcon from '@/assets/icons/colorless/Room icon.svg?react';
import './App.css';
import { RectangularButton, SquareButton, BigSquareButton } from '@/components/Button/Button';

function App() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex">
          <img src={reactLogo} alt="logo" />
          <h1 style={{'font-size': '32px'} as React.CSSProperties}>Pet Bevo</h1>
        </div>
        <div className="flex items-center gap-2">
          <SquareButton color="green"><PlayIconStatic /></SquareButton>
          <RectangularButton color="orange"><p>Timer</p></RectangularButton>
          <SquareButton color="brown" radius="4"><ExitIconStatic /></SquareButton>
          <BigSquareButton color="brown"><RoomIcon /></BigSquareButton>
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
