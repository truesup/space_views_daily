import { ChevronDown } from 'lucide-react'
import { LayoutGroup, motion } from 'framer-motion'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useGlobalStore } from '@/zustand/store'
import { validateDate } from '@/lib/validateDate'
import DateInput from '@/components/ui/DateInput'
import ChevronButton from '@/components/ui/ChevronButton'

export default function DateForm() {
    const goToNextScreen = useGlobalStore(store => store.goToNext)

    const [date, setDate] = useState({ day: '', month: '', year: '' })
    const [isValid, setIsValid] = useState<boolean | null>(null)
    const [isContentShown, setIsContentShown] = useState<boolean>(false)

    const formRef = useRef<HTMLFormElement>(null)
    const dayRef = useRef<HTMLInputElement>(null)
    const monthRef = useRef<HTMLInputElement>(null)
    const yearRef = useRef<HTMLInputElement>(null)

    const handleChange = (field: 'day' | 'month' | 'year', value: string) => {
        const numericValue = value.replace(/\D/g, '')
        setDate(prev => ({ ...prev, [field]: numericValue }))
    }

    const handleDateSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('дата:', `${date.day}/${date.month}/${date.year}`)
        // goToNextScreen()
    }

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

            if (!valid) {
                setDate({ day: '', month: '', year: '' })
                setTimeout(() => dayRef.current?.focus(), 400)
            }
        }
    }, [date])

    useEffect(() => {
        if (isValid) setIsContentShown(true)
    }, [isValid])

    return (
        <LayoutGroup>
            <motion.form
                ref={formRef}
                onSubmit={handleDateSubmit}
                onAnimationEnd={() => setIsValid(null)}
                className="flex flex-col items-center justify-center gap-20"
            >
                <motion.div
                    layout
                    className={`font-raleway text-white text-[30px] border-b border-white flex items-center justify-center ${
                        isValid === false ? 'animate-shake' : ''
                    }`}
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
                </motion.div>

                {isContentShown && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <ChevronButton
                            type="submit"
                            icon={ChevronDown}
                            className="mt-9 1920:mt-8 1600:mt-4 1440:mt-2"
                        />
                    </motion.div>
                )}
            </motion.form>
        </LayoutGroup>
    )
}
