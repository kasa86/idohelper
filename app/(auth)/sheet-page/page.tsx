import PageHeading from '@/components/layout/page-heading'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function SheetPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Sheet'} />

            <div className="flex w-full items-start py-5">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline-general'} size={'large'}>
                            Open sheet
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <h2>Add port forward</h2>
                        </SheetHeader>
                        <SheetDescription>
                            <div className="space-y-3">
                                <label className="text-sm/tight font-semibold text-black">
                                    Select the device for this port forward.
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Stans-Pc" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            PC 1
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            PC 2
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            PC 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="!mt-2.5 block text-xs/[18px] font-medium">
                                    Choose from common applications to use a
                                    recommended configuration, or set up
                                    manually.
                                </span>
                            </div>
                            <div className="space-y-3">
                                <label className="font-semibold leading-none text-black">
                                    Choose a preset or manual setup
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Manual Setup" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            Automatic
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            Custom
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="!mt-2.5 block text-xs/[18px] font-medium">
                                    these are recommended configurations for
                                    Manual set up.
                                </span>
                            </div>
                        </SheetDescription>
                        <div className="flex items-center justify-end gap-4 p-4">
                            <SheetClose asChild>
                                <Button variant={'outline-general'}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit" variant={'black'}>
                                Apply changes
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
