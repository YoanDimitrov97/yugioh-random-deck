import { useState } from 'react'
import AppCSS from './App.module.css'
import CharacterDeck from './components/CharacterDecks';
import RandomDeck from './components/RandomDeck'

function App() {
  const [showRandomDeckComponent, setShowRandomDeckComponent] = useState<boolean>(true);
  const [showCharacterDecksComponent, setShowCharacterDecksComponent] =
    useState<boolean>(false);

  return (
    <>
      <header className={AppCSS.nav_header}>
        <div onClick={()=>{setShowCharacterDecksComponent(!showCharacterDecksComponent); setShowRandomDeckComponent(!showRandomDeckComponent)}}>
          <div className={AppCSS.background_wrap}> </div>
          <h2>RANDOM DECK</h2>
        </div>
        <div onClick={()=>{setShowCharacterDecksComponent(!showCharacterDecksComponent); setShowRandomDeckComponent(!showRandomDeckComponent)}}>
          <div className={`${AppCSS.background_wrap}`}></div>
          <h2>CHARACTER DECK</h2>
        </div>
      </header>
      <main>
        {showRandomDeckComponent && <h1 style={{color:"white", textAlign:"center"}}><RandomDeck /></h1>}
        {showCharacterDecksComponent && <CharacterDeck />}
      </main>
    </>
  );
}

export default App
