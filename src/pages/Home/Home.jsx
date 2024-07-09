import { useState } from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"
import { FormSection } from "../../components/FormSection/FormSection"
import { RenderSection } from "../../components/RenderSection/RenderSection"
import { EmployeeList } from "../../data/Employees"
import { CalculateOvertime } from "../../scripts/CalculateOvertime"

export function Home() {

    // ===== INPUT STATES =====

    const [branch, setBranch] = useState("")
    const [filteredEmployees, setFilteredEmployees] = useState(EmployeeList)
    const [employee, setEmployee] = useState("")
    const [occupation, setOccupation] = useState("")
    const [leader, setLeader] = useState("")
    const [salary, setSalary] = useState("")
    const [otHours65, setOtHours65] = useState("")
    const [otMin65, setOtMin65] = useState("")
    const [otHours85, setOtHours85] = useState("")
    const [otMin85, setOtMin85] = useState("")
    const [otHours100, setOtHours100] = useState("")
    const [otMin100, setOtMin100] = useState("")
    const [nightShiftHours, setNightShiftHours] = useState("")
    const [nightShiftMin, setNightShiftMin] = useState("")
    const [justification, setJustification] = useState("")

    const [tableArray, setTableArray] = useState([])

    // ===== HANDLING CLICK EVENT (FORM) =====

    const handleClick = (e) => {

        e.preventDefault()

        // ===== CALCULATE TOTAL DUE OVERTIME =====

        const ot65 = CalculateOvertime(Number(otHours65), Number(otMin65), Number(salary), 0.65)
        const ot85 = CalculateOvertime(Number(otHours85), Number(otMin85), Number(salary), 0.85)
        const ot100 = CalculateOvertime(Number(otHours100), Number(otMin100), Number(salary), 1)
        const totalDue = (ot65 + ot85 + ot100).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

        // ===== DATA SENT TO RENDERSECTION =====

        const data = {
            branch,
            employee,
            occupation,
            leader,
            salary,
            otHours65,
            otMin65,
            otHours85,
            otMin85,
            otHours100,
            otMin100,
            nightShiftHours,
            nightShiftMin,
            justification,
            date: Date.now(),
            overtimeDue: totalDue
        }

        setTableArray([data, ...tableArray])

        // ===== REST INPUTS =====

        setBranch("")
        setFilteredEmployees(EmployeeList)
        setEmployee("")
        setOccupation("")
        setLeader("")
        setSalary("")
        setOtHours65("")
        setOtMin65("")
        setOtHours85("")
        setOtMin85("")
        setOtHours100("")
        setOtMin100("")
        setNightShiftHours("")
        setNightShiftMin("")
        setJustification("")

    }

    // ===== JSX =====

    return(
        <DefaultTemplate>
            <FormSection
            handleClick={handleClick} 
            EmployeeList={EmployeeList}
            branch={branch} 
            setBranch={setBranch}
            filteredEmployees={filteredEmployees}
            setFilteredEmployees={setFilteredEmployees}
            employee={employee}
            setEmployee={setEmployee}
            occupation={occupation}
            setOccupation={setOccupation}
            leader={leader}
            setLeader={setLeader}
            salary={salary}
            setSalary={setSalary}
            otHours65={otHours65}
            setOtHours65={setOtHours65}
            otMin65={otMin65}
            setOtMin65={setOtMin65}
            otHours85={otHours85}
            setOtHours85={setOtHours85}
            otMin85={otMin85}
            setOtMin85={setOtMin85}
            otHours100={otHours100}
            setOtHours100={setOtHours100}
            otMin100={otMin100}
            setOtMin100={setOtMin100}
            nightShiftHours={nightShiftHours}
            setNightShiftHours={setNightShiftHours}
            nightShiftMin={nightShiftMin}
            setNightShiftMin={setNightShiftMin}
            justification={justification}
            setJustification={setJustification}
             />
            <RenderSection
            CalculateOvertime={CalculateOvertime}
            tableArray={tableArray}
             />
        </DefaultTemplate>
    )
}