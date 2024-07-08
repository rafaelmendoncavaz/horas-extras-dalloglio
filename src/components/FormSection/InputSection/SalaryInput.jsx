export function SalaryInput({ salary, setSalary }) {

    return(
        <>
            <label htmlFor="salaryInput">{`Salário (R$)`}</label>
            <input type="text" name="" id="salaryInput" placeholder="Digite o salário..." value={salary} onChange={(e) => setSalary(e.target.value)} />
        </>
    )
}