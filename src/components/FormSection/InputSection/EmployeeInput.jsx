export function EmployeeInput({ EmployeeList, setEmployee }) {

    const handleEmployeeValue = (e) => {
        setEmployee(e.target.value)
    }

    return(
        <select name="" id="employeeInput" onChange={handleEmployeeValue}>
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
    )
}