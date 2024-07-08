export function OvertimeInput({ title, hrs, mins, setHr, setMin }) {

    return(
        <>
        <h1>
            {title}
        </h1>
            <div>
                <input type="number" name="" id="hours65" className="hours" placeholder="Horas" onChange={(e) => setHr(e.target.value)} value={hrs} />
                <input type="number" name="" id="minutes65" className="minutes" placeholder="Minutos" onChange={(e) => setMin(e.target.value)} value={mins} min={1} max={59} />
            </div>
        </>
    )
}