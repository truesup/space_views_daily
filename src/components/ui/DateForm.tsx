import { useEffect, useRef, useState } from 'react'
import { validateDate } from '@/lib/validateDate'
import DateInput from '@/components/ui/DateInput'

export default function DateForm() {
    const [date, setDate] = useState({ day: '', month: '', year: '' })
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const formRef = useRef<HTMLFormElement>(null)
    const dayRef = useRef<HTMLInputElement>(null)
    const monthRef = useRef<HTMLInputElement>(null)
    const yearRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const timeout = setTimeout(() => dayRef.current?.focus(), 1200)
        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        const isComplete =
            date.day.length === 2 &&
            date.month.length === 2 &&
            date.year.length === 4

        if (isComplete) {
            const valid = validateDate(date.day, date.month, date.year)
            setIsValid(valid)
            ;(document.activeElement as HTMLElement)?.blur()

            if (valid) {
                console.log(
                    '✅ Корректная дата:',
                    `${date.day}/${date.month}/${date.year}`
                )
            } else {
                console.warn('❌ Некорректная дата')
                setDate({ day: '', month: '', year: '' })
                setTimeout(() => dayRef.current?.focus(), 400)
            }
        }
    }, [date])

    const handleChange = (field: 'day' | 'month' | 'year', value: string) => {
        const numericValue = value.replace(/\D/g, '')
        setDate(prev => ({ ...prev, [field]: numericValue }))
    }

    return (
        <form
            ref={formRef}
            className={`font-raleway text-white text-[30px] border-b border-white flex items-center justify-center gap-2 ${
                isValid === false ? 'animate-shake' : ''
            }`}
            onAnimationEnd={() => setIsValid(null)}
        >
            <DateInput
                purpose="day"
                ref={dayRef}
                value={date.day}
                onChange={e => handleChange('day', e.target.value)}
                onFilled={() => monthRef.current?.focus()}
            />
            <span>/</span>
            <DateInput
                purpose="month"
                ref={monthRef}
                value={date.month}
                onChange={e => handleChange('month', e.target.value)}
                onFilled={() => yearRef.current?.focus()}
            />
            <span>/</span>
            <DateInput
                purpose="year"
                ref={yearRef}
                value={date.year}
                onChange={e => handleChange('year', e.target.value)}
            />
        </form>
    )
}
