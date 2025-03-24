import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTrigger,
} from '@/components/ui/dialog'

export default function Modal() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Modal'} />

            <div className="flex w-full items-center py-5">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline-general" size={'large'}>
                            Open modal
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-[368px] bg-transparent p-0 shadow-none">
                        <Card className=''>
                            <CardHeader className="overflow-x-auto rounded-t-lg border-b border-gray-300 bg-gray-100">
                                <div className="flex items-center justify-between gap-2.5 px-5 py-[15px] text-base/5 font-semibold text-black">
                                    <h2>Notification Settings</h2>
                                </div>
                            </CardHeader>
                            <CardContent className="p-5">
                                <RadioGroup defaultValue="Stress Detection">
                                    <label className="flex items-center gap-2.5">
                                        <RadioGroupItem value="Night Mode" />
                                        <div className="space-y-1.5">
                                            <h3 className="font-semibold leading-tight text-black">
                                                Night Mode Enhancement
                                            </h3>
                                            <p className="leading-tight">
                                                Switches to a dark, warm theme
                                                in low light.
                                            </p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-2.5">
                                        <RadioGroupItem value="Stress Detection" />
                                        <div className="space-y-1.5">
                                            <h3 className="font-semibold leading-tight text-black">
                                                Stress Detection
                                            </h3>
                                            <p className="leading-tight">
                                                Calming blue theme for rapid
                                                taps.
                                            </p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-2.5">
                                        <RadioGroupItem value="Morning Boost" />
                                        <div className="space-y-1.5">
                                            <h3 className="font-semibold leading-tight text-black">
                                                Morning Boost
                                            </h3>
                                            <p className="leading-tight">
                                                Vibrant theme in bright light.
                                            </p>
                                        </div>
                                    </label>
                                </RadioGroup>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center justify-end gap-2 border-t border-gray-300 px-5 py-3.5">
                                    <DialogClose asChild>
                                        <Button
                                            type="button"
                                            variant={'outline-general'}
                                        >
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit" variant={'black'}>
                                        Save
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
