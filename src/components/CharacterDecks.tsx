import * as React from 'react';
import { useEffect } from 'react';
import DeckBox from './Deckbox';
import CharacterDecksCSS from './CharacterDecks.module.css';
import example_db from "../assets/example_db.json"

export interface IDeckData {
  era:string;
  character_name:string;
  ace_monster:string;
  alternative_card_art_id:string | ''; 
  ygoomega_code:string;
  ygopro2_code:string;
}

export default function CharacterDecks() {
  const tsExampleDB: IDeckData[] = example_db
  const getCharacterDeckSheet = async () => {
    try {
      const res = await fetch('https://api.steinhq.com/v1/storages/6543d9e2c5ad5604ce26fd4b/Character Decks');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    //getCharacterDeckSheet();
    return () => {
    }
  }, [])

  return (
    <div className={CharacterDecksCSS.box_container}>
      {tsExampleDB.map(deck => {
        return <DeckBox  />
      })}


    </div>
  );
}
