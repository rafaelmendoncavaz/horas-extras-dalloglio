import { useState } from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"
import { FormSection } from "../../components/FormSection/FormSection"
import { RenderSection } from "../../components/RenderSection/RenderSection"
import { EmployeeList } from "../../data/Employees"
import { CalculateOvertime } from "../../scripts/CalculateOvertime"

export function Home() {

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

    return(
        <DefaultTemplate>
            <FormSection 
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
            employee={employee}
            occupation={occupation}
            branch={branch}
            leader={leader}
            salary={salary}
            justification={justification}
            CalculateOvertime={CalculateOvertime}
             />
        </DefaultTemplate>
    )
}