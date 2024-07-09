export function BranchInput({ setBranch, branch }) {

    const handleBranchChange = (e) => {
        setBranch(e.target.value)
    }

    return (
        <div className="inputContent">
            <h4 className="title4 yellow">Filial</h4>
            <select className="input md text2 black" name="" id="branchInput" value={branch} onChange={handleBranchChange} required >
                <option className="text2" value="">Selecione uma Filial...</option>
                <option className="text2" value="Matriz">Matriz</option>
                <option className="text2" value="4">4</option>
                <option className="text2" value="5">5</option>
                <option className="text2" value="8">8</option>
            </select>
        </div>
    )
}