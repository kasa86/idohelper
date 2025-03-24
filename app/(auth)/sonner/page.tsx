'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { ToastDescription } from '@radix-ui/react-toast'
import Image from 'next/image'
import { toast } from 'sonner'

export default function Sonner() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Sonner'} />

            <div className="flex items-center py-5">
                <Button
                    variant="outline-general"
                    size={'large'}
                    onClick={() =>
                        toast('', {
                            description: (
                                <ToastDescription>
                                    <div className="-mt-0.5 border-b border-gray-300 bg-primary/5 px-4 py-3">
                                        <Image
                                            src="/images/logo.svg"
                                            width={106}
                                            height={24}
                                            alt="Logo"
                                            className="h-6 w-[106px]"
                                        />
                                    </div>
                                    <div className="p-4 font-medium leading-tight text-black">
                                        Hello, world! This is a toast message.
                                    </div>
                                </ToastDescription>
                            ),
                        })
                    }
                >
                    Show Toast
                </Button>
            </div>
        </div>
    )
}
