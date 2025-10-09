export interface DateObject {
    day: string
    month: string
    year: string
}

const NASA_APOD_START_DATE = new Date(1995, 5, 16)

export function validateDate(dateObj: DateObject): boolean {
    const day = Number(dateObj.day)
    const month = Number(dateObj.month)
    const year = Number(dateObj.year)

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false
    }

    const date = new Date(year, month - 1, day)

    const isRealDate =
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day

    if (!isRealDate) {
        return false
    }

    const endOfToday = new Date()
    endOfToday.setHours(23, 59, 59, 999)

    return date >= NASA_APOD_START_DATE && date <= endOfToday
}

export function sanitizeDate(dateObj: DateObject): string {
    const paddedDay = dateObj.day.padStart(2, '0')
    const paddedMonth = dateObj.month.padStart(2, '0')

    return `${dateObj.year}-${paddedMonth}-${paddedDay}`
}
