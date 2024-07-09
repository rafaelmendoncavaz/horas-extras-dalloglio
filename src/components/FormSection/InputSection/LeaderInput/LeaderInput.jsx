export function LeaderInput({ leaderName }) {

    return(
        <div className="inputContent">
            <h4 className="title4 yellow">Líder</h4>
            <input className="input md text2 black" type="text" name="" id="leaderInput" value={leaderName} disabled />
        </div>
    )
}