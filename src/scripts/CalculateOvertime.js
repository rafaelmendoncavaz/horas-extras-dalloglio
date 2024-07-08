export function CalculateOvertime(hrs, mins, salary, additional) {

    const oneMin = 0.016667
    const perHour = salary / 220
    const totalHrs = hrs + (oneMin * mins)

    return (perHour * additional * totalHrs).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
}