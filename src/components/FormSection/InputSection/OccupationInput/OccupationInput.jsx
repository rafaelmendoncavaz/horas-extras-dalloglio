export function OccupationInput({ occupation }) {

    return(
        <div className="inputContent">
            <h4 className="title4 yellow">Função</h4>
            <input className="input md text2 black" type="text" name="" id="occupationInput" value={occupation} disabled />
        </div>
    )
}