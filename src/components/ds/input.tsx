import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputMask } from '@react-input/mask'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	prefix?: string
	suffix?: string
	errorMessage?: string
	hint?: string
	mask?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, prefix, suffix, errorMessage, hint, mask, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-1">
				<div
					className={cn(
						'flex overflow-hidden h-9 w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
						className,
						errorMessage && 'border-destructive text-destructive',
					)}
				>
					{prefix && (
						<div className="bg-muted text-muted-foreground py-1 px-3 border-r flex items-center">{prefix}</div>
					)}
					<InputMask {...props} mask={mask} className="py-1 px-3 w-full outline-none" type={type} ref={ref} />
					{suffix && (
						<div className="ml-auto bg-muted text-muted-foreground py-1 px-3 border-l flex items-center">{suffix}</div>
					)}
				</div>
				{errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
				{!errorMessage && <p className="text-sm text-muted-foreground">{hint}</p>}
			</div>
		)
	},
)
Input.displayName = 'Input'

export { Input }
