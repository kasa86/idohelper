'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('rounded-lg bg-white p-1.5', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-1.5',
        caption: 'flex bg-gray-400 justify-center rounded-lg py-2.5 relative items-center',
        caption_label: 'text-sm/tight font-semibold text-black',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline-general' }),
          'size-[22px] bg-transparent p-0 rounded-full text-black hover:opacity-70 hover:bg-white bg-white shadow-none ring-0'
        ),
        nav_button_previous: 'absolute left-3',
        nav_button_next: 'absolute right-3',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex gap-3 px-3',
        head_cell: 'rounded-md w-7 py-1.5 font-semibold text-xs/tight',
        row: 'flex w-full mt-1.5 gap-3 px-3',
        cell: 'h-7 w-7 text-center rounded-lg text-sm px-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'outline-general' }),
          'h-7 w-7 p-0 font-medium ring-0 shadow-none aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected: 'bg-black text-primary-foreground hover:bg-black hover:text-white focus:bg-black focus:text-white',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30 pointer-events-none',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }