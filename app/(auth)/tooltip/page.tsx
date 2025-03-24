import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { CircleDashed } from 'lucide-react'

export default function ToolTip() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Tooltip'} />

            <div className="flex gap-4 w-full items-center py-5 flex-wrap"> 
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">Tooltip on top</Button>
                        </TooltipTrigger>
                        <TooltipContent side={'top'} > 
                            <CircleDashed className="size-4 text-white" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">Tooltip on left</Button>
                        </TooltipTrigger>
                        <TooltipContent side={'left'} className='before:-right-2.5 before:top-1/2 before:-translate-y-1/2 before:left-auto before:bottom-auto before:-rotate-45'>
                            <CircleDashed className="size-4 text-white" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">Tooltip on bottom</Button>
                        </TooltipTrigger>
                        <TooltipContent side={'bottom'} className='before:left-1/2 before:-translate-x-1/2 before:-top-[3px] before:bottom-auto before:-rotate-45'>  
                            <CircleDashed className="size-4 text-white" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">Tooltip on right</Button>
                        </TooltipTrigger>
                        <TooltipContent side={'right'} className='before:left-[3px] before:top-1/2 before:-translate-y-1/2 before:bottom-auto before:rotate-45'>
                            <CircleDashed className="size-4 text-white" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}
