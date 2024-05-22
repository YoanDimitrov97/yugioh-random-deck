import { useEffect, useState } from "react";
import { ICardProps } from "../utils/getAllCards.ts";
import { bannedCardArchetypes, bannedCardArchetypesInDesc, extraDeckTypes } from "../assets/card_archetypes.ts";

export default function App() {
  const [allCards, setAllCards] = useState<ICardProps[]>();

  const [allMonsterCards, setAllMonsterCards] = useState<ICardProps[]>();
  const [allSpellCards, setAllSpellCards] = useState<ICardProps[]>();
  const [allTrapCards, setAllTrapCards] = useState<ICardProps[]>();

  const [randomizedDeck, setRandomizedDeck] = useState<ICardProps[]>();
  // const [allExtraDeckCards, setAllExtraDeckCards] = useState<ICardProps[]>();
  const cardRatio: string[] = ["Monster", "Monster", "Monster", "Monster", "Monster", "Spell", "Spell", "Spell", "Trap", "Trap"];
  
  
  const getAllCards = async () => {
    try {
      const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
      const data = await res.json();
      const allFetchedCards: ICardProps[] = data.data.filter(card => !["skill", "token"].includes(card.frameType))
      setAllCards(allFetchedCards);
      filterCards(allFetchedCards)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCards();
  }, [allCards])


  const filterCards = (allCards: ICardProps[] | undefined) => {
    if (!allCards) return;
    console.log(allCards);
    
    const allFilteredCards = allCards?.filter(card => !bannedCardArchetypes.includes(card.archetype) && !bannedCardArchetypesInDesc.includes(card.desc))
    //setting all monsters
    const allMonsters = allFilteredCards?.filter(card => !extraDeckTypes.includes(card.frameType) && !["spell", "trap"].includes(card.frameType));
    setAllMonsterCards(allMonsters);

    // //setting all spells
    const allSpells = allFilteredCards?.filter(card => !extraDeckTypes.includes(card.frameType) && ["Spell Card"].includes(card.type));
    setAllSpellCards(allSpells);

    //setting all traps
    const allTraps = allFilteredCards?.filter(card => !extraDeckTypes.includes(card.frameType) && ["Trap Card"].includes(card.type));
    setAllTrapCards(allTraps);
  }


  // console.log("=======================================================================");

  // console.log("Monsters", allMonsterCards);
  // console.log("Spells", allSpellCards);
  // console.log("Traps", allTrapCards);
  // console.log(allCards)

  if (allMonsterCards && allSpellCards && allTrapCards) {
    setRandomizedDeck([])
    for (let index = 0; index < 40; index++) {
      let randomCardType = Math.floor(Math.random() * cardRatio?.length)
      switch (cardRatio[randomCardType]) {
        case "Monster":
          let randomMonster = Math.floor(Math.random() * allMonsterCards?.length);
          setRandomizedDeck((prev) => {
            // Check if prev is undefined, use an empty array as default
            const updatedDeck = prev === undefined ? [] : [...prev];
            updatedDeck.push(allMonsterCards[randomMonster]);
            return updatedDeck;
          });
          break;
        case "Spell":
          let randomSpell = Math.floor(Math.random() * allSpellCards?.length);
          setRandomizedDeck((prev) => {
            // Check if prev is undefined, use an empty array as default
            const updatedDeck = prev === undefined ? [] : [...prev];
            updatedDeck.push(allSpellCards[randomSpell]);
            return updatedDeck;
          });
          break;
        case "Trap":
          let randomTrap = Math.floor(Math.random() * allTrapCards?.length);
          setRandomizedDeck((prev) => {
            // Check if prev is undefined, use an empty array as default
            const updatedDeck = prev === undefined ? [] : [...prev];
            updatedDeck.push(allTrapCards[randomTrap]);
            return updatedDeck;
          });
          break;
        default:
          break;
      }
    }
  }

  // const randomizedDeckJsx = randomizedDeck?.map(card => {
  //   console.log(card.card_image);

  //   // return <img src={card.card_image[0].image_url} alt="" />
  // })
  return (
    <>
      <h1>BRO</h1>
    </>
  );
}