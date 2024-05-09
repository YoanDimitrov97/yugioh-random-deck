import { useState } from "react";

export interface ICardProps {
  name: string;
  type: string;
  desc: string;
  race: string;
  archetype: string;
  card_image: string;
}

export default function App() {
  const [allCards, setAllCards] = useState<ICardProps[]>();
  console.log(allCards);
  
  const getAllCards = async () => {
    try {
      const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
      const data = await res.json();
      setAllCards(data.data);
    } catch (error) {console.log(error);
    }
  };

  return (
    <div>
      THIS SECTION IS IN DEVELOPMENT!!
      <button onClick={getAllCards}>AYO</button>
    </div>
  );
}
