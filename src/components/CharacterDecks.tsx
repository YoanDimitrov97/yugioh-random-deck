import { useState, useEffect } from 'react';
import DeckBox from './DeckBox';
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
  //const tsExampleDB: IDeckData[] = example_db
  const [loading, setLoading] = useState(true);
  const [sheetDB, setSheetDB] = useState<IDeckData[]>()

  const getCharacterDeckSheet = async () => {
    try {
      const res = await fetch('https://api.steinhq.com/v1/storages/6543d9e2c5ad5604ce26fd4b/Character Decks');
      const data = await res.json();
      setSheetDB(data)
      setLoading(false);

    } catch (error) {
      setSheetDB(example_db)
      setLoading(false);

    }
  }
  useEffect(() => {
    getCharacterDeckSheet();
    return () => {
    }
  }, [])
  console.log('sheetDB:', sheetDB); // Log the sheetDB state
  console.log('loading:', loading); // Log the loading state
  return (
    <div className={CharacterDecksCSS.box_container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        sheetDB?.map((deck, index) => (
          <DeckBox
            key={index} // Make sure to use a unique key
            character_name={deck.character_name}
            ace_monster={deck.ace_monster}
            alternative_card_art_id={deck.alternative_card_art_id}
            ygoomega_code={deck.ygoomega_code}
            ygopro2_code={deck.ygopro2_code}
          />
        ))
      )}
    </div>
  );
}
