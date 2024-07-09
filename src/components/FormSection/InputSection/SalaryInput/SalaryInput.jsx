export function SalaryInput({ salary, setSalary }) {

    return(
        <div className="inputContent">
            <h4 className="title4 yellow">{`Salário (R$)`}</h4>
            <input className="input md text2 black" type="text" name="" id="salaryInput" placeholder="Ex: 2000.00" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
    )
}