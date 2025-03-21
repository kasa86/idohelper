'use client'
import Chatmenu from '@/components/custom/Chatmenu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { InputSearch } from '@/components/ui/input-search'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import {
    ArrowLeft,
    EllipsisVertical,
    Images,
    Mic,
    Paperclip,
    Phone,
    SendHorizontal,
    Smile,
    Video,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const contactList = [
    {
        userId: 1,
        name: 'Theresa Webb',
        path: '/images/avatar.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 15,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 15,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: true,
    },
    {
        userId: 2,
        name: 'Dianne Russell',
        path: '/images/avatar-two.svg',
        active: false,
        messages: [
            {
                fromUserId: 2,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 15,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 15,
                text: 'I am all well',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 2,
                text: 'Ravi?',
                time: '2:09 PM',
                status: 0,
            },
        ],
    },
    {
        userId: 3,
        name: 'Jacob Jones',
        path: '/images/avatar-three.svg',
        active: true,
        messages: [],
    },
    {
        userId: 4,
        name: 'Wade Warren',
        path: '/images/avatar-four.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: true,
        messages: [],
    },
    {
        userId: 5,
        name: 'Brooklyn Simmons',
        path: '/images/avatar-two.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: false,
        messages: [],
    },
    {
        userId: 6,
        name: 'Kathryn Murphy',
        path: '/images/avatar-six.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: true,
        messages: [],
    },
    {
        userId: 7,
        name: 'Nia Hillyer',
        path: '/images/avatar-seven.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: false,
        messages: [],
    },
    {
        userId: 8,
        name: 'Nia Hillyer',
        path: '/images/avatar-eight.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: true,
        messages: [],
    },
    {
        userId: 9,
        name: 'Student Hub',
        path: '/images/com-img.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 3,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: false,
        type: 'group',
    },
    {
        userId: 10,
        name: 'Society Meeting',
        path: '/images/chat-avatar-5.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 3,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: false,
        type: 'group',
    },
    {
        userId: 11,
        name: 'College Campus',
        path: '/images/chat-avatar-5.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 3,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: false,
        type: 'group',
    },
]

const loginUser = {
    id: 15,
    name: 'Alon Smith',
    path: '/images/chat-avatar.svg',
    designation: 'Software Developer',
}

const Chat = () => {
    const [searchUser, setSearchUser] = useState('')
    const [filteredItems, setFilteredItems] = useState<any>(contactList)
    const [selectedUser, setSelectedUser] = useState<any>(contactList[0])
    const [textMessage, setTextMessage] = useState('')

    const scrollToBottom = () => {
        setTimeout(() => {
            const element: any = document.querySelector(
                '.chat-conversation-box',
            )
            element.behavior = 'smooth'
            element.scrollTop = element.scrollHeight
        })
    }

    const sendMessage = () => {
        if (textMessage.trim()) {
            let list = filteredItems
            let user: any = list.find(
                (d: any) => d.userId === selectedUser.userId,
            )
            const newMessage = {
                fromUserId: loginUser.id,
                text: textMessage,
                time: 'Just now',
                status: 1,
            }
            setSelectedUser({
                ...selectedUser,
                messages: [...selectedUser?.messages, newMessage],
            })
            user.messages.push(newMessage)
            setFilteredItems(list)
            setTextMessage('')
            scrollToBottom()
        }
    }
    const sendMessageHandle = (event: any) => {
        if (event.key === 'Enter') {
            sendMessage()
        }
    }

    const setUserSelection = (user: any) => {
        const messages =
            user?.messages?.map((message: any) => ({
                ...message,
                status: 1,
            })) || []
        setSelectedUser(() => ({
            ...user,
            messages: messages,
        }))

        let list = filteredItems
        let userObj: any = list.find((d: any) => d.userId === user.userId)
        userObj.messages = messages

        setFilteredItems([...list])
        scrollToBottom()
        setTextMessage('')
    }

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((d) => {
                return d.name.toLowerCase().includes(searchUser.toLowerCase())
            })
        })
    }, [searchUser])

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white px-5 py-3.5 shadow-sm">
                <h2 className="text-base font-semibold text-black">Chat</h2>
                <InputSearch
                    placeholder="Search"
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                />
            </div>

            <div className="flex min-h-[calc(100vh_-_172px)] w-full flex-col gap-4 md:flex-row">
                <Card
                    key={selectedUser?.userId}
                    className="flex grow flex-col border border-gray-300 shadow-sm"
                >
                    <CardHeader className="flex shrink-0 items-center justify-between gap-4 rounded-t-lg border-b border-gray-300 bg-gray-200 p-3 sm:p-4">
                        <div className="relative inline-flex items-center gap-2.5">
                            <Link
                                href="#"
                                className="absolute inset-0 z-[1] size-full"
                            ></Link>
                            <div className="z-[2] block md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <button type="button">
                                            <ArrowLeft className="size-4" />
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side={'left'}
                                        className="left-0 top-0 h-auto w-auto rounded-none [&>div]:h-[calc(100vh_-_32px)]"
                                    >
                                        <Chatmenu
                                            contactList={contactList}
                                            setSelectedUser={setSelectedUser}
                                            selectedUser={selectedUser}
                                            loginUser={loginUser}
                                        />
                                    </SheetContent>
                                </Sheet>
                            </div>
                            <div className="relative size-10 rounded-full">
                                <Image
                                    src={selectedUser?.path}
                                    alt="chat-avatar"
                                    height={40}
                                    width={40}
                                    className="h-full w-full shrink-0 object-cover"
                                ></Image>
                                <span className="absolute bottom-0.5 right-0.5 size-1.5 rounded-full bg-success ring-[3px] ring-white"></span>
                            </div>
                            <div className="space-y-1.5 font-medium leading-tight text-black">
                                <p className="line-clamp-1">
                                    {selectedUser?.name}
                                </p>
                                <p className="text-xs/tight text-success">
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 sm:gap-3">
                            <button
                                type="button"
                                className="grid size-8 place-content-center rounded-full bg-gray-400 text-black hover:opacity-80"
                            >
                                <Phone className="size-[18px] shrink-0" />
                            </button>
                            <button
                                type="button"
                                className="grid size-8 place-content-center rounded-full bg-gray-400 text-black hover:opacity-80"
                            >
                                <Video className="size-[18px] shrink-0" />
                            </button>
                            <div className="hidden md:block">
                                <Popover>
                                    <PopoverTrigger>
                                        <span className="grid size-8 place-content-center rounded-full bg-gray-400 text-black hover:opacity-80">
                                            <EllipsisVertical className="size-[18px] shrink-0 text-black" />
                                        </span>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-32 space-y-1.5 p-2"
                                        align="end"
                                    >
                                        <Link
                                            href="#"
                                            className="block rounded-lg px-2.5 py-1.5 text-xs/tight hover:bg-light-theme hover:text-black"
                                        >
                                            Block
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block rounded-lg px-2.5 py-1.5 text-xs/tight hover:bg-light-theme hover:text-black"
                                        >
                                            About
                                        </Link>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex w-full grow flex-col rounded-b-lg bg-[url('/images/chat-bg.png')] p-3 md:p-4">
                        <div className="chat-conversation-box grid h-[calc(100vh_-_376px)] overflow-y-auto pb-0.5">
                            <div className="flex flex-col justify-between gap-5">
                                <div className="flex items-center justify-center text-center">
                                    <span className="h-px w-full bg-gradient-to-r from-gray-500/0 to-gray-500/40"></span>
                                    <Badge
                                        variant={'outline'}
                                        className="inline-block shrink-0 rounded-full border border-gray-300 text-center text-black shadow-none"
                                    >
                                        March 23, 2024
                                    </Badge>
                                    <span className="h-px w-full bg-gradient-to-l from-gray-500/0 to-gray-500/40"></span>
                                </div>
                                <div
                                    key={selectedUser?.messages?.length}
                                    className="flex flex-col justify-end gap-5 pt-5 md:pt-0"
                                >
                                    {selectedUser?.messages.map(
                                        (message: any, index: number) => {
                                            const sender = contactList?.find(
                                                (d: any) =>
                                                    d.userId ===
                                                    message?.fromUserId,
                                            )

                                            return (
                                                <div
                                                    key={index}
                                                    className="space-y-3"
                                                >
                                                    {(index === 0 ||
                                                        (index > 0 &&
                                                            selectedUser
                                                                .messages[
                                                                index - 1
                                                            ]?.fromUserId !==
                                                                message.fromUserId)) && (
                                                        <div
                                                            className={`flex items-center gap-3 ${loginUser?.id === message.fromUserId ? 'flex-row-reverse' : ''}`}
                                                        >
                                                            <div className="relative">
                                                                <Image
                                                                    src={
                                                                        (loginUser?.id ===
                                                                        message?.fromUserId
                                                                            ? loginUser?.path
                                                                            : sender?.path) ||
                                                                        ''
                                                                    }
                                                                    alt="chat-avatar"
                                                                    height={40}
                                                                    width={40}
                                                                    className="shrink-0 rounded-full"
                                                                ></Image>
                                                                <span className="absolute bottom-0.5 right-0.5 size-1.5 rounded-full bg-success ring-[3px] ring-white"></span>
                                                            </div>
                                                            <h4 className="font-medium leading-tight text-black">
                                                                {loginUser?.id ===
                                                                message?.fromUserId
                                                                    ? loginUser?.name
                                                                    : sender?.name}
                                                            </h4>
                                                            <span className="size-1 rounded-full bg-primary"></span>
                                                            <span className="text-xs/tight font-medium">
                                                                {message?.time}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div
                                                        className={cn(
                                                            'flex flex-col space-y-3 font-medium leading-tight text-black',
                                                            loginUser?.id ===
                                                                message.fromUserId
                                                                ? 'ml-1 mr-8 items-end md:mr-11'
                                                                : 'ml-8 mr-1 items-start md:ml-11',
                                                        )}
                                                    >
                                                        <p className="rounded-lg bg-white p-2.5 shadow-3xl">
                                                            {message?.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        },
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-4 mt-11 bg-white">
                            <div className="relative">
                                <Input
                                    placeholder="Let's meet or leave!"
                                    className="relative rounded-full border border-gray-300 py-4 pl-14 pr-32 shadow-none placeholder:text-black sm:pr-48"
                                    value={textMessage}
                                    onChange={(e: any) =>
                                        setTextMessage(e.target.value)
                                    }
                                    onKeyUp={sendMessageHandle}
                                ></Input>
                                <button
                                    type="button"
                                    className="absolute left-3 top-2.5 grid size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80"
                                >
                                    <Paperclip className="size-[18px] shrink-0" />
                                </button>
                                <p className="font-medium text-black"></p>
                                <div className="absolute right-3 top-2.5 inline-flex items-center gap-1.5 sm:gap-3">
                                    <button
                                        type="button"
                                        className="grid size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80"
                                    >
                                        <Smile className="size-[18px] shrink-0" />
                                    </button>
                                    <button
                                        type="button"
                                        className="hidden size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80 sm:grid"
                                    >
                                        <Images className="size-[18px] shrink-0" />
                                    </button>
                                    <button
                                        type="button"
                                        className="grid size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80"
                                    >
                                        <Mic className="size-[18px] shrink-0" />
                                    </button>
                                    <Button
                                        className="size-8 rounded-full border-2 border-white shadow-[0_0_14px_0_rgba(41,60,137,0.18)]"
                                        onClick={() => sendMessage()}
                                    >
                                        <SendHorizontal />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="hidden md:block">
                    <Chatmenu
                        contactList={filteredItems}
                        setSelectedUser={(user) => setUserSelection(user)}
                        selectedUser={selectedUser}
                        loginUser={loginUser}
                    />
                </div>
            </div>
        </div>
    )
}
export default Chat
