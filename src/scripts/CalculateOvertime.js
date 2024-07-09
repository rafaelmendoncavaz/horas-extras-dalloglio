export function CalculateOvertime(hrs, mins, salary, additional) {

    // CONVERTS EACH MINUTE INTO THE PROPORTIONAL AMMOUNT OF HOURS
    const oneMin = 0.016667

    // GATHERS NUMBER OF MINUTES AND HOURS AS TOTAL HOURS
    const totalHrs = Number(hrs) + (oneMin * Number(mins))

    // CALCULATE THE OVERTIME AMMOUNT DUE BASED ON A 220HRS JOURNEY/MONTH
    const dueOvertime = (((Number(salary)/220) * additional) + (Number(salary)/220)) * totalHrs

    return dueOvertime
}