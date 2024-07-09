import { useEffect } from "react"
import { BranchInput } from "./InputSection/BranchInput/BranchInput"
import { EmployeeInput } from "./InputSection/EmployeeInput/EmployeeInput"
import { OccupationInput } from "./InputSection/OccupationInput/OccupationInput"
import { LeaderInput } from "./InputSection/LeaderInput/LeaderInput"
import { SalaryInput } from "./InputSection/SalaryInput/SalaryInput"
import { OvertimeInput } from "./InputSection/OvertimeInput/OvertimeInput"
import { JustificationInput } from "./InputSection/JustificationInput/JustificationInput"

export function FormSection({ 

    // ===== PROPS RECEIVED FROM USESTATE =====

    handleClick,
    EmployeeList,
    branch, setBranch, 
    filteredEmployees, setFilteredEmployees, 
    employee, setEmployee, 
    occupation, setOccupation,
    leader,setLeader,
    salary, setSalary,
    otHours65, setOtHours65, otMin65, setOtMin65,
    otHours85, setOtHours85, otMin85, setOtMin85,
    otHours100, setOtHours100, otMin100, setOtMin100,
    nightShiftHours, setNightShiftHours, nightShiftMin, setNightShiftMin,
    justification, setJustification
    
}) {

    // ===== HANDLES EMPLOYEELIST WITHOUT RE-RENDERING =====

    useEffect(() => {

        if (branch === "") {

            setFilteredEmployees(EmployeeList)

        } else {

            const filtered = EmployeeList.filter(employee => employee.branch === branch)
            setFilteredEmployees(filtered)

        }

    }, [branch])

    // ===== HANDLES OCCUPATION AUTO-FILL WITHOUT RE-RENDERING =====

    useEffect(() => {

        if (employee === "") {

            setOccupation("")

        } else {

            const filtered = filteredEmployees.find(emp => emp.name === employee)

            if (filtered) {

                setOccupation(filtered.occupation)

            } else {

                setOccupation("")

            }
        }

    }, [employee, filteredEmployees])

    // ===== HANDLES LEADER AUTO-FILL WITHOUT RE-RENDERING =====
    
    useEffect(() => {

        if (employee === "") {

            setLeader("")

        } else {

            const filtered = filteredEmployees.find(emp => emp.name === employee)

            if (filtered) {

                setLeader(filtered.leader)

            } else {

                setLeader("")

            }
        }
    })

    // ===== JSX =====

    return(
        <section>
            <form className="container form flex-col around">
                <div className="grid">
                    <div className="inputBox flex-col between">
                        <BranchInput setBranch={setBranch} branch={branch} />
                        <EmployeeInput EmployeeList={filteredEmployees} setEmployee={setEmployee} />
                    </div>
                    <div className="inputBox flex-col between">
                        <OccupationInput occupation={occupation} />
                        <LeaderInput leaderName={leader} />
                    </div>
                    <div className="inputBox flex-col between">
                        <SalaryInput salary={salary} setSalary={setSalary} />
                        <OvertimeInput title="Hora Extra a 65%" hrs={otHours65} mins={otMin65} setHr={setOtHours65} setMin={setOtMin65} />
                    </div>
                    <div className="inputBox flex-col between">
                        <OvertimeInput title="Hora Extra a 85%" hrs={otHours85} mins={otMin85} setHr={setOtHours85} setMin={setOtMin85} />
                        <OvertimeInput title="Hora Extra a 100%" hrs={otHours100} mins={otMin100} setHr={setOtHours100} setMin={setOtMin100} />
                    </div>
                    <div className="inputBox flex-col between">
                        <OvertimeInput title="Adicional Noturno" hrs={nightShiftHours} mins={nightShiftMin} setHr={setNightShiftHours} setMin={setNightShiftMin} />
                        <JustificationInput justification={justification} setJustification={setJustification} />
                    </div>
                </div>
                <button className="btn formbtn text1" onClick={handleClick}>
                    Calcular
                </button>
            </form>
        </section>
    )
}