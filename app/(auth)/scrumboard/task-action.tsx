'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Ellipsis } from 'lucide-react'
import EditTask from '@/components/custom/edit-task'
import { useState } from 'react'

const TaskAction = ({
    taskColumn,
    updatedTaskName,
    deleteTask,
    clearTasks,
}: any) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Ellipsis className="size-[18px] text-black transition hover:text-gray" />
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto space-y-1.5 p-1.5">
                <EditTask
                    updatedTaskName={updatedTaskName}
                    id={taskColumn?.id}
                    value={taskColumn.name?.replace('_', ' ')}
                    onClose={() => setOpen(false)}
                />

                <button
                    type="button"
                    className="block w-full rounded-lg px-2.5 py-1.5 text-left text-xs/tight font-medium text-black outline-none hover:bg-light-theme"
                    onClick={() => {
                        deleteTask(taskColumn.id)
                        setOpen(false)
                    }}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="block w-full rounded-lg px-2.5 py-1.5 text-left text-xs/tight font-medium text-black outline-none hover:bg-light-theme"
                    onClick={() => {
                        clearTasks(taskColumn.id)
                        setOpen(false)
                    }}
                >
                    Clear All
                </button>
            </PopoverContent>
        </Popover>
    )
}

export default TaskAction
