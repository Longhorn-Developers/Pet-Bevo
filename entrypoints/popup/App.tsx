import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import PlayIconStatic from '@/assets/icons/Play icon.svg?react';
import ExitIconStatic from '@/assets/icons/Exit icon.svg?react';
import PlayIcon from '@/assets/icons/colorless/Play icon.svg?react';
import RoomIcon from '@/assets/icons/colorless/Room icon.svg?react';
import { RectangularButton, SquareButton } from '@/components/Button/Button';

function App() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex">
          <img src={reactLogo} alt="logo" />
          <h1 style={{'font-size': '32px'} as React.CSSProperties}>Pet Bevo</h1>
        </div>
        <div className="flex items-center gap-2">
          <SquareButton className="bg-green2 hover:bg-green1"><PlayIconStatic /></SquareButton>
          <RectangularButton className="bg-orange2 hover:bg-orange1"><p>Timer</p></RectangularButton>
          <SquareButton className="bg-yellow2 hover:bg-yellow1" rounded="full"><ExitIconStatic /></SquareButton>
          <SquareButton className="bg-brown2 hover:bg-brown1" size={110}><RoomIcon className="size-18" /></SquareButton>
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
