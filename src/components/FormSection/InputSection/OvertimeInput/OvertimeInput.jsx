export function OvertimeInput({ title, hrs, mins, setHr, setMin }) {

    return(
        <div className="inputContent">
            <h4 className="title4 yellow">
                {title}
            </h4>
            <div className="flex-row between">
                <input type="number" name="" id="hours65" className="input sm text2 black" placeholder="Horas" onChange={(e) => setHr(e.target.value)} value={hrs} />
                <input type="number" name="" id="minutes65" className="input sm text2 black" placeholder="Minutos" onChange={(e) => setMin(e.target.value)} value={mins} min={0} max={59} />
            </div>
        </div>
    )
}