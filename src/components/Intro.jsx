const Intro=({setGameState})=>{
    const start=()=>{
         setGameState(true);
    }
    return (
        <>
        <div className="intro">
            <img src="../public/images/dices.png" alt="dice" />
            <div className="start-btn-container">
                <p className="heading">DICE GAME</p>
                <input type="button" value="Play Game" class="start-btn" onClick={()=>start()}/>
            </div>
        </div>
        </>
    )
}

export default Intro