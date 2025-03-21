'use client'

import IconAlert from '@/components/icons/icon-alert'
import IconCloseCircle from '@/components/icons/icon-close-circle'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import {
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastIcon,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import {
    BadgeAlert,
    BadgeCheck,
    CreditCard,
    MessageSquareX,
} from 'lucide-react'
import Image from 'next/image'

export default function Toasts() {
    const { toast } = useToast()

    return (
        <div className="space-y-4">
            <PageHeading heading={'Toasts'} />

            <div className="min-h-[calc(100vh_-_160px)] w-full">
                <div className="inline-flex flex-wrap items-start justify-start gap-5 py-5">
                    <Button
                        variant="outline-general"
                        onClick={() => {
                            toast({
                                actionClassName: 'pr-6',
                                icon: (
                                    <ToastIcon>
                                        <MessageSquareX className="mt-0.5 size-5 text-danger" />
                                    </ToastIcon>
                                ),
                                title: 'No internet connection',
                                description: (
                                    <ToastDescription className="font-medium">
                                        Please ensure that your Wi-Fi settings
                                        are properly configured for optimal
                                        connectivity.
                                    </ToastDescription>
                                ),
                                close: (
                                    <ToastClose className="rounded-full bg-gray-400 !p-0.5" />
                                ),
                            })
                        }}
                    >
                        No Connection
                    </Button>

                    <Button
                        variant="black"
                        onClick={() => {
                            toast({
                                variant: 'black',
                                actionClassName: 'pr-6',
                                icon: (
                                    <ToastIcon>
                                        <CreditCard className="!mt-0.5 size-5 shrink-0 text-warning" />
                                    </ToastIcon>
                                ),
                                title: 'Your storage is 75% full',
                                description: (
                                    <ToastDescription className="text-gray-500">
                                        Unlock more storage capacity and
                                        enhanced features by upgrading to our
                                        Pro Plan today!
                                    </ToastDescription>
                                ),
                                action: (
                                    <ToastAction altText="upgrade">
                                        <button
                                            type="button"
                                            className="text-xs/tight font-bold text-light-orange underline underline-offset-4 hover:text-warning"
                                        >
                                            Upgrade
                                        </button>
                                    </ToastAction>
                                ),
                                close: (
                                    <ToastClose className="rounded-full bg-white/10 !p-0.5" />
                                ),
                            })
                        }}
                    >
                        Storage full
                    </Button>

                    <Button
                        variant="outline-general"
                        onClick={() => {
                            toast({
                                image: (
                                    <Image
                                        src="/images/blog-details.png"
                                        alt="Toast Image"
                                        width={460}
                                        height={40}
                                        className="h-10 w-full object-cover"
                                    />
                                ),
                                title: 'Something’s wrong!',
                                description: (
                                    <ToastDescription className="font-medium">
                                        Form submission failed. Maybe check your
                                        internet connection or try again later?
                                    </ToastDescription>
                                ),
                                action: (
                                    <ToastAction
                                        altText="retry"
                                        className="mt-1"
                                    >
                                        <Button variant={'black'}>Retry</Button>
                                    </ToastAction>
                                ),
                            })
                        }}
                    >
                        Something’s wrong
                    </Button>

                    <Button
                        variant="outline-general"
                        onClick={() => {
                            toast({
                                actionClassName: 'flex-row',
                                title: 'Submission unsuccessful. Please check your internet connection.',
                                action: (
                                    <ToastAction
                                        altText="retry"
                                        className="mt-1"
                                    >
                                        <Button variant={'black'}>Retry</Button>
                                    </ToastAction>
                                ),
                            })
                        }}
                    >
                        Submission unsuccessful
                    </Button>

                    <Button
                        variant="black"
                        className="bg-danger"
                        onClick={() => {
                            toast({
                                variant: 'destructive',
                                icon: (
                                    <ToastIcon>
                                        <BadgeAlert className="mt-0.5 size-5 rotate-180 fill-danger text-white" />
                                    </ToastIcon>
                                ),
                                title: 'Error Toast Alarm',
                                description: (
                                    <ToastDescription className="font-medium">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </ToastDescription>
                                ),
                            })
                        }}
                    >
                        Error
                    </Button>

                    <Button
                        variant="black"
                        onClick={() => {
                            toast({
                                variant: 'black',
                                className: 'ml-auto max-w-[300px] py-[13px]',
                                icon: (
                                    <ToastIcon>
                                        <span className="grid size-[22px] place-content-center rounded-full bg-success/30">
                                            <BadgeCheck className="size-5 fill-success text-black" />
                                        </span>
                                    </ToastIcon>
                                ),
                                title: 'Saved Successfully',
                                close: <ToastClose className="p-0" />,
                            })
                        }}
                    >
                        Saved
                    </Button>

                    <Button
                        variant="outline-general"
                        onClick={() => {
                            toast({
                                className: 'ml-auto max-w-[300px] py-[13px]',
                                icon: (
                                    <ToastIcon>
                                        <IconAlert />
                                    </ToastIcon>
                                ),
                                title: 'Action Required',
                                close: <ToastClose className="p-0" />,
                            })
                        }}
                    >
                        Action
                    </Button>

                    <Button
                        variant="black"
                        onClick={() => {
                            toast({
                                variant: 'black',
                                className: 'ml-auto !max-w-[300px] py-[13px]',
                                icon: (
                                    <ToastIcon>
                                        <IconCloseCircle />
                                    </ToastIcon>
                                ),
                                title: 'Error Occurred',
                                close: <ToastClose className="p-0" />,
                            })
                        }}
                    >
                        Error Occurred
                    </Button>
                </div>
            </div>
        </div>
    )
}
