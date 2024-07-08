export function BranchInput({ setBranch, branch }) {

    const handleBranchChange = (e) => {
        setBranch(e.target.value)
    }

    return (
        <select name="" id="branchInput" value={branch} onChange={handleBranchChange}>
            <option value="">Selecione uma Filial...</option>
            <option value="Matriz">Matriz</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="8">8</option>
        </select>
    )
}