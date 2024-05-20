import { useEffect, useState } from "react";
import { getAllCards, ICardProps } from "../utils/getAllCards.ts";
import { bannedCardArchetypes, bannedCardArchetypesInDesc, extraDeckTypes } from "../assets/card_archetypes.ts";

export default function App() {
  const [allCards, setAllCards] = useState<ICardProps[]>();
  const [allMonsterCards, setAllMonsterCards] = useState<ICardProps[]>();
  const [allSpellCards, setAllSpellCards] = useState<ICardProps[]>();
  const [allTrapCards, setAllTrapCards] = useState<ICardProps[]>();
  const [allExtraDeckCards, setAllExtraDeckCards] = useState<ICardProps[]>();
  const cardRatio: string[] = ["Monster", "Monster", "Monster", "Monster", "Monster", "Spell", "Spell", "Spell", "Trap", "Trap"];

  useEffect(() => {
    getAllCards(setAllCards)

    //setting all monsters
    const allMonsters = allCards?.filter(card => !bannedCardArchetypes.includes(card.archetype) && !bannedCardArchetypesInDesc.includes(card.desc) && !extraDeckTypes.includes(card.frameType) && !["spell", "trap"].includes(card.frameType));
    setAllMonsterCards(allMonsters);

    //setting all spells
    const allSpells = allCards?.filter(card => !bannedCardArchetypes.includes(card.archetype) && !bannedCardArchetypesInDesc.includes(card.desc) && !extraDeckTypes.includes(card.frameType) && ["Spell Card"].includes(card.type));
    setAllSpellCards(allSpells);

  }, [])

  // allCards?.filter(card => console.log(card));





  console.log(allMonsterCards);
  console.log(allSpellCards);
  // console.log(allCards)
  return (
    <div>
      THIS SECTION IS IN DEVELOPMENT!!
    </div>
  );
}
