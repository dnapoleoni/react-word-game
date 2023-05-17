import Board from "../Board";
import Table from "../Table";

const styles = {
  container: "grid lg:grid-rows-1 lg:grid-cols-2 h-full",
  child: "flex items-center justify-center bg-slate-100 rounded-xl p-4 m-4"
}


function GameScreen({ ... rest }) {

  // get current loaded level daya
  const level = rest.currentLevel;
  console.log(level)

  const letters: Array<string> = level.words.map((w:any) => w.word)
    .join("") // make words into 1 string
    .split("") // split into letters
    .sort(() => 0.5-Math.random()) // sort them randomly

  return (
    <div className={ styles.container }>
      <Board className={ styles.child } tiles={ letters }/>
      <Table className={ styles.child } racks={ level.defs }/>
    </div>
  )
  
  
}

export default GameScreen