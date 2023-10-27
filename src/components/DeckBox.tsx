import * as React from 'react';
import DeckBoxCSS from "./DeckBox.module.css";

export interface IDeckBoxProps {
}

export default function DeckBox (props: IDeckBoxProps) {
  return (
    <>
      <div className={`${DeckBoxCSS.box}`}>
        <div className={`${DeckBoxCSS.background_wrap}`}></div>
      </div>
    </>
  );
}
