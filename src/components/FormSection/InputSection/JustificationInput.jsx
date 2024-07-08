export function JustificationInput({ justification, setJustification }) {

    return(
        <>
            <h1>
                Justificativa (se houver)
            </h1>
            <input type="text" name="" id="justificationInput" placeholder="Justificativa..." onChange={(e) => setJustification(e.target.value)} value={justification} />
        </>
    )
}