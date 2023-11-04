import { useState, useEffect } from 'react';
import DeckBoxCSS from "./DeckBox.module.css";

export interface IDeckBoxProps {
  character_name: string;
  ace_monster: string;
  alternative_card_art_id: string | '';
  ygoomega_code: string | '';
  ygopro2_code: string | '';
}
export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}
export default function DeckBox(props: IDeckBoxProps) {
  const [aceMonster, setAceMonster] = useState<string>()
  const getCharacterAceMonster = async () => {
    try {
      const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + props.ace_monster);
      const data = await res.json();
      const cardImages: CardImage[] = data.data[0].card_images;
      
      if(props.alternative_card_art_id) {  
        const cardImageURL = cardImages.find(card => card.id.toString() === props.alternative_card_art_id)?.image_url_cropped
        setAceMonster(cardImageURL)
      } else {
        setAceMonster(cardImages[0].image_url_cropped)
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacterAceMonster();
    return () => {
    }
  }, [])
  console.log(aceMonster);

  const copyToClipboard = () => {
    console.log("copying");
    
    navigator.clipboard.writeText(props.ygopro2_code);
  }; 
  return (
    <>
      <div className={`${DeckBoxCSS.box}`} onClick={copyToClipboard}>
        {!aceMonster 
        ? (<div className={`${DeckBoxCSS.background_wrap}`}></div>) 
        : (<img className={`${DeckBoxCSS.background_wrap} `} src={aceMonster} />)
        }
        <div className={`${DeckBoxCSS.deck_name}`}><p>{props.character_name.toUpperCase()}</p></div>
      </div>
    </>
  );
}
