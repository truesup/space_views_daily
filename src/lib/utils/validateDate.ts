export function validateDate(
    day: string,
    month: string,
    year: string
): boolean {
    const d = Number(day)
    const m = Number(month)
    const y = Number(year)

    if (isNaN(d) || isNaN(m) || isNaN(y)) return false

    const date = new Date(y, m - 1, d)
    if (
        date.getFullYear() !== y ||
        date.getMonth() !== m - 1 ||
        date.getDate() !== d
    )
        return false

    const minDate = new Date(1995, 5, 16)
    const today = new Date()

    if (date < minDate || date > today) return false

    return true
}
