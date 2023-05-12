import { ColourChanger } from "./components/ColourChanger/ColourChanger"
import { useAppSelector, colourChangerHex } from "./app/hooks"
import "./App.css"

function App() {
  return (
    <div className="App" style={
      { backgroundColor: useAppSelector(colourChangerHex)} 
    }>
      <header className="App-header">
        <ColourChanger />
      </header>
    </div>
  )
}

export default App
