import { useState } from 'react'
import AppCSS from './App.module.css'
import CharacterDeck from './components/CharacterDecks';

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
        {showRandomDeckComponent && <h1>Hello</h1>}
        {showCharacterDecksComponent && <CharacterDeck />}
      </main>
    </>
  );
}

export default App
