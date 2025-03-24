import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Heart, Play } from 'lucide-react'

export default function Hovercard() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Hover Card'} />

            <div className="flex items-center py-5">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button
                            type="button"
                            variant="outline-general"
                            size={'large'}
                        >
                            Hover me
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent align='start'>
                        <div className="flex items-center gap-2.5 font-semibold leading-tight text-black">
                            <Heart className="size-[18px] shrink-0 hover:fill-danger hover:text-danger" />
                            Welcome to ASL
                        </div>
                        <p className="mt-2 text-xs/normal font-medium text-gray-700">
                            Bring your next big idea to life in no time using
                            our expensive and customizable Design System
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                            <Button variant="outline-general" size={'large'}>
                                <Play className="size-4" />
                                Watch tutorials
                            </Button>
                            <Button variant="black" size={'large'}>
                                Get started
                            </Button>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}
