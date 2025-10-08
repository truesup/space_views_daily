import { forwardRef, ComponentPropsWithRef } from 'react'

interface DateInputProps extends ComponentPropsWithRef<'input'> {
    purpose: 'day' | 'month' | 'year'
    onFilled?: () => void
}

const config = {
    day: {
        placeholder: 'dd',
        maxLength: 2,
        inputMode: 'numeric',
        pattern: '[0-9]*',
        'aria-label': 'Day',
    },
    month: {
        placeholder: 'mm',
        maxLength: 2,
        inputMode: 'numeric',
        pattern: '[0-9]*',
        'aria-label': 'Month',
    },
    year: {
        placeholder: 'yyyy',
        maxLength: 4,
        inputMode: 'numeric',
        pattern: '[0-9]*',
        'aria-label': 'Year',
    },
} as const

function DateInputBase(
    {
        purpose,
        className = '',
        onChange,
        onFilled,
        ...nativeProps
    }: DateInputProps,
    ref: React.Ref<HTMLInputElement>
) {
    const conf = config[purpose]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange?.(e)
        if (value.length === conf.maxLength && onFilled) {
            onFilled()
        }
    }

    return (
        <input
            ref={ref}
            type="text"
            {...conf}
            {...nativeProps}
            onChange={handleChange}
            className={`${className} text-inherit text-center focus:outline-0`}
        />
    )
}

export default forwardRef<HTMLInputElement, DateInputProps>(DateInputBase)
