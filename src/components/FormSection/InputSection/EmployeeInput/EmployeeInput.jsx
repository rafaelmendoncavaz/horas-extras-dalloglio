export function EmployeeInput({ EmployeeList, setEmployee }) {

    const handleEmployeeValue = (e) => {
        setEmployee(e.target.value)
    }

    return(
        <div className="inputContent">
            <h4 className="title4 yellow">Funcionário</h4>
            <select className="input md text2 black" name="" id="employeeInput" onChange={handleEmployeeValue}>
                <option value="">Selecione um funcionário...</option>
                {
                    EmployeeList.map(employee => {
                        return (
                            <option 
                            value={employee.name} 
                            key={employee.id}>
                                {employee.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}