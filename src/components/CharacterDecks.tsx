import * as React from 'react';
import DeckBox from './Deckbox';
import CharacterDecksCSS from './CharacterDecks.module.css';

export interface ICharacterDecksProps {
}

export default function CharacterDecks (props: ICharacterDecksProps) {
  return (
    <div className={CharacterDecksCSS.box_container}>
      <DeckBox />
      <DeckBox />
      <DeckBox />
      <DeckBox />
      <DeckBox />
      <DeckBox />
      <DeckBox />
      <DeckBox />
    </div>
  );
}
