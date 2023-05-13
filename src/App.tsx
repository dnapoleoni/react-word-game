import { ColourChanger } from "./components/ColourChanger/ColourChanger"
import { useAppSelector, colourChangerHex } from "./app/hooks"
import "./App.css"
import { BasicButton } from "./components/BasicButton"

function App() {
  return (
    <div className="App">
      <main className="min-h-screen">
        <h1>Word Game</h1>
        <h2>Prototype v1.0</h2>
        <br/>
        <p>Here are some Instructions</p>
        <br/>
        <BasicButton onClick={() => console.log('Clicked!')}>Play Game</BasicButton>
      </main>
    </div>
  )
};

export default App
