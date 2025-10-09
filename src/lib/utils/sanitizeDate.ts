interface DateObject {
    day: string
    month: string
    year: string
}

export function sanitizeDate(dateObject: DateObject): string {
    const paddedDay = dateObject.day.padStart(2, '0')
    const paddedMonth = dateObject.month.padStart(2, '0')

    return `${dateObject.year}-${paddedMonth}-${paddedDay}`
}
