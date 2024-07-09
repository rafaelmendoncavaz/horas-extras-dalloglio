export function JustificationInput({ justification, setJustification }) {

    return(
        <div className="inputContent">
            <h4 className="title4 yellow">
                Justificativa
            </h4>
            <input className="input md text2 black" type="text" name="" id="justificationInput" placeholder="Justificativa..." onChange={(e) => setJustification(e.target.value)} value={justification} />
        </div>
    )
}