import { useState, useEffect } from "react";
import DeckBox from "./DeckBox";
import CSS from "./CharacterDecks.module.css";
import example_db from "../assets/example_db.json";

export interface IDeckData {
  era: string;
  character_name: string;
  ace_monster: string;
  alternative_card_art_id: string | "";
  ygoomega_code: string;
  ygopro2_code: string;
}

export default function CharacterDecks() {
  //const tsExampleDB: IDeckData[] = example_db
  const [loading, setLoading] = useState(true);
  const [DMEraDecks, setDMEraDecks] = useState<IDeckData[]>();
  const [GXEraDecks, setGXEraDecks] = useState<IDeckData[]>();

  const getCharacterDeckSheet = async () => {
    try {
      const res = await fetch(
        "https://api.steinhq.com/v1/storages/6543d9e2c5ad5604ce26fd4b/Character Decks"
      );

      const data: IDeckData[] = await res.json();

      let dmDecks = data.filter((deck) => deck.era === "DM");
      let gxDecks = data.filter((deck) => deck.era === "GX");

      setDMEraDecks(dmDecks);
      setGXEraDecks(gxDecks);
      setLoading(false);
    } catch (error) {
      setDMEraDecks(example_db);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCharacterDeckSheet();
    return () => {};
  }, []);
  console.log("DMERADECKS:", DMEraDecks); // Log the sheetDB state
  console.log("loading:", loading); // Log the loading state
  return (
    <>
      {loading ? (
        <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
      ) : (
        <div className={CSS.box_wrapper}>
          {/* LIST DM ERA DECKS*/}
          <div className={CSS.dmContainer}>
            <div className={`${CSS.era_label} ${CSS.era_label_dm}`}>
              <p>DM</p>
            </div>
            <div className={CSS.box_container}>
              {DMEraDecks?.map((deck, index) => (
                <DeckBox
                  key={index} // Make sure to use a unique key
                  character_name={deck.character_name}
                  ace_monster={deck.ace_monster}
                  alternative_card_art_id={deck.alternative_card_art_id}
                  ygoomega_code={deck.ygoomega_code}
                  ygopro2_code={deck.ygopro2_code}
                />
              ))}
            </div>
          </div>

          {/* LIST GX ERA DECKS*/}
          <div className={CSS.gxContainer}>
            <div className={`${CSS.era_label} ${CSS.era_label_gx}`}>
              <p>GX</p>
            </div>
            <div className={CSS.box_container}>
              {GXEraDecks?.map((deck, index) => (
                <DeckBox
                  key={index} // Make sure to use a unique key
                  character_name={deck.character_name}
                  ace_monster={deck.ace_monster}
                  alternative_card_art_id={deck.alternative_card_art_id}
                  ygoomega_code={deck.ygoomega_code}
                  ygopro2_code={deck.ygopro2_code}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}