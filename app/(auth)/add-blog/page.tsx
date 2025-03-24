'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
    CalendarIcon,
    CirclePlus,
    Eye,
    FileText,
    Link,
    Send,
    X,
} from 'lucide-react'
import Image from 'next/image'
import 'react-quill/dist/quill.snow.css'
import TextEditor from '@/components/custom/text-editor'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format, set } from 'date-fns'
import { useState } from 'react'

const AddBlog = () => {
    const [date, setDate] = useState<Date>()
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    const handleImageChange = (event: any) => {
        const image = event.target.files[0]

        setSelectedImage(image)
    }
    const handleRemoveImage = () => {
        setSelectedImage(null)
    }

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]
        setSelectedFile(file)
    }
    const handleRemoveFile = () => {
        setSelectedFile(null)
    }
    return (
        <div className="space-y-4">
            <PageHeading heading={'Add new Blog'} />

            <div className="mx-auto flex min-h-[calc(100vh_-_160px)] w-full max-w-[948px] flex-col items-start gap-4 font-medium md:flex-row">
                <Card className="w-full grow md:w-auto">
                    <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black">
                        Description
                    </CardHeader>
                    <CardContent className="space-y-5 p-4">
                        <div className="w-full max-w-[348px] space-y-5">
                            <div className="space-y-2.5">
                                <label className="leading-tight text-black">
                                    Your display name
                                </label>
                                <Input
                                    type="text"
                                    placeholder="Your display name"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <label className="leading-tight text-black">
                                    Choose a name for your blog
                                </label>
                                <p className="text-xs/tight text-gray-700">
                                    This is the title that will be displayed at
                                    the top of your Blog.
                                </p>
                                <Input placeholder="Type your blog title" />
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <label className="leading-tight text-black">
                                Blog descriptions
                            </label>
                            <TextEditor
                                placeholder="Add your product description here"
                                className="blog-editor"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="leading-tight text-black">
                                Attach a file or URL
                            </label>
                            <div className="flex items-center rounded-lg">
                                <span className="grid place-content-center rounded-l-lg border-r border-gray-300 bg-gray-200 p-[11px] shadow-3xl">
                                    <Link className="size-4 text-black" />
                                </span>
                                <div className="w-full">
                                    <Input
                                        type="text"
                                        placeholder="Type your blog title"
                                        className="rounded-l-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2.5">
                                <div className="relative inline-block cursor-pointer rounded-lg border border-dashed border-gray-300 bg-gray-200 px-5 py-4 transition hover:bg-gray-400">
                                    <input
                                        type="file"
                                        className="absolute inset-0 cursor-pointer p-0 text-[0] leading-none opacity-0"
                                        onChange={handleFileChange}
                                        autoComplete="off"
                                        accept="text/html, application/zip, application/x-zip-compressed, multipart/x-zip, application/pdf, .pdf, .php, text/php"
                                    />
                                    <div className="flex items-center justify-center gap-1.5 text-xs/tight text-black">
                                        <CirclePlus className="size-4" />
                                        Add file
                                    </div>
                                </div>
                                {selectedFile && (
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center gap-0.5">
                                            <FileText className="mr-1 size-4" />
                                            <div className="max-w-40 truncate">
                                                {/* @ts-ignore */}
                                                {selectedFile?.name || ''}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="hover:opacity-80"
                                            onClick={handleRemoveFile}
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <label className="leading-tight text-black">
                                Add Blog image
                            </label>
                            <div className="flex flex-col items-start gap-2.5 xl:flex-row">
                                <div className="relative w-36 shrink-0 rounded-lg border border-dashed border-gray-300 bg-gray-200 py-8 hover:bg-gray-400 md:w-[200px] md:py-[62px]">
                                    <input
                                        type="file"
                                        className="absolute inset-0 cursor-pointer p-0 text-[0] leading-none opacity-0"
                                        onChange={handleImageChange}
                                        accept=".jpg, .png, .jpeg .webp"
                                    />
                                    <div className="flex items-center justify-center gap-1.5 text-xs/tight text-black">
                                        <CirclePlus className="size-4" />
                                        Add image
                                    </div>
                                </div>

                                {selectedImage && (
                                    <div className="relative">
                                        <div className="h-[140px] w-[200px] overflow-hidden rounded-lg">
                                            <Image
                                                src={URL.createObjectURL(
                                                    selectedImage,
                                                )}
                                                alt="Selected Image"
                                                width={200}
                                                height={140}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="absolute -right-1.5 -top-1.5 grid size-4 place-content-center rounded-full bg-danger text-white hover:bg-danger/80"
                                            onClick={handleRemoveImage}
                                        >
                                            <X className="size-2" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full shrink-0 sm:w-[332px]">
                    <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black">
                        Post setting
                    </CardHeader>
                    <CardContent className="divide-y divide-gray-300">
                        <div className="space-y-2.5 px-4 py-5">
                            <label className="block font-semibold leading-tight text-black">
                                Labels
                            </label>
                            <Input
                                type="text"
                                placeholder="Separate labels by commas"
                            />
                        </div>
                        <div className="space-y-2.5 px-4 py-5">
                            <label className="block font-semibold leading-tight text-black">
                                Published on
                            </label>
                            <RadioGroup defaultValue="date-time">
                                <div className="flex flex-wrap items-center justify-start gap-4">
                                    <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5">
                                        <RadioGroupItem value="Automatic" />
                                        <h3 className="text-xs/tight font-semibold text-black">
                                            Automatic
                                        </h3>
                                    </label>
                                    <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5">
                                        <RadioGroupItem value="date-time" />
                                        <h3 className="text-xs/tight font-semibold text-black">
                                            Set date and time
                                        </h3>
                                    </label>
                                </div>
                            </RadioGroup>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                        className="w-full justify-between py-[9px] shadow-3xl ring-0"
                                        size={'large'}
                                    >
                                        {date ? (
                                            format(date, 'PPP')
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="!size-[18px]" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="!w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <div className="relative">
                                <Input
                                    placeholder="05:15 AM"
                                    type="time"
                                    className="py-2 pr-2.5 leading-snug [&>svg]:size-4"
                                />
                            </div>
                        </div>
                        <div className="space-y-2.5 px-4 py-5">
                            <label className="block font-semibold leading-tight text-black">
                                Locations
                            </label>
                            <Input
                                type="text"
                                placeholder="Separate labels by commas"
                            />
                        </div>
                        <div className="flex items-start gap-2.5 p-4 pt-5">
                            <Button
                                type="button"
                                size={'large'}
                                variant={'outline-general'}
                            >
                                <Eye />
                                Preview
                            </Button>
                            <Button type="button" size={'large'}>
                                <Send />
                                Publish
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default AddBlog
