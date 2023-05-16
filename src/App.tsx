// core
// import { useEffect } from "react"
import Logo from "./assets/logo.svg"
import { useAppSelector } from "./app/hooks"

// assets
import "./App.css"

// components
import Wrapper from "./components/Wrapper";
import WelcomeScreen from "./components/GameScreens/WelcomeScreen"
import LevelScreen from "./components/GameScreens/LevelScreen";
import GameScreen from "./components/GameScreens/GameScreen";
import { LevelObject } from "./app/types";

// actions

function App() {

  // screens list
  const screens = {
    welcome: WelcomeScreen,
    level: LevelScreen,
    game: GameScreen
  }

  // screen state variable
  const screen: string = useAppSelector(({ root }) => root.screen);
  const levels: Array<object> =  useAppSelector(({ root }) => root.allLevels);
  const currentLevel: LevelObject | undefined = useAppSelector(({ root }) => root.currentLevel);
  
  return (
    <div className="App">
      <header><Wrapper><img src={Logo}/></Wrapper></header>
      <main>
        { (screens as any)[screen]({ levels, currentLevel }) }
      </main>
    </div>
  )
};

export default App
