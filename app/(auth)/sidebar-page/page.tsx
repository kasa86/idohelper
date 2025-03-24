import IconMail from '@/components/icons/icon-mail'
import PageHeading from '@/components/layout/page-heading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { AppWindow, CircleUser, Compass, File, FileText, Fingerprint, Home, Layers3, LayoutPanelTop, Lock, MessageSquareText, Settings, Users, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function SidebarPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Drawer'} />

            <div className="flex min-h-[calc(100vh_-_160px)] w-full items-start justify-center pt-11">
                <Card className="min-w-[312px] rounded-lg bg-white">
                    <CardContent className="px-3 py-5">
                        <h2 className="mb-3 pl-3 text-xs/none font-semibold uppercase text-gray-700">
                            Main Menu
                        </h2>
                        <ul className="mb-2.5 space-y-1.5">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg bg-gray-400 px-3 py-2.5 font-medium leading-snug text-black"
                                >
                                    <Home className="size-[18px] shrink-0 text-black" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <MessageSquareText className="size-[18px] shrink-0 text-black" />
                                    Chat
                                </Link>
                            </li>
                            <li>
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="item-1"
                                        className="p-0 shadow-none"
                                    >
                                        <AccordionTrigger className="flex items-center !gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400">
                                            <Layers3 className="size-[18px] shrink-0" />
                                            <span>Application</span>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pl-9 pr-5">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <CircleUser className="size-[18px] shrink-0 text-black" />
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <FileText className="size-[18px] shrink-0 text-black" />
                                    Docs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <File className="size-[18px] shrink-0 text-black" />
                                    Files
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <Compass className="size-[18px] shrink-0 text-black" />
                                    Discover
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <Settings className="size-[18px] shrink-0 text-black" />
                                    Settings
                                </Link>
                            </li>
                        </ul>
                        <DropdownMenuSeparator />
                        <h2 className="mb-3 mt-4 pl-3 text-xs/none font-semibold uppercase text-gray-700">
                            Projects
                        </h2>
                        <ul className="mb-2.5 space-y-1.5">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black hover:bg-gray-400"
                                >
                                    <Users className="size-[18px] shrink-0 text-black" />
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <IconMail className="size-[18px] shrink-0 text-black" />
                                    Email
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <AppWindow className="size-[18px] shrink-0 text-black" />
                                    Website
                                </Link>
                            </li>
                        </ul>
                        <DropdownMenuSeparator />
                        <h2 className="mb-3 mt-4 pl-3 text-xs/none font-semibold uppercase text-gray-700">
                            Configure
                        </h2>
                        <ul className="space-y-1.5">
                            <li>
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="item-1"
                                        className="p-0 shadow-none"
                                    >
                                        <AccordionTrigger className="flex items-center !gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400">
                                            <Fingerprint className="size-[18px] shrink-0" />
                                            <span>Authentication</span>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pl-9 pr-5">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <Lock className="size-[18px] shrink-0 text-black" />
                                    Sessions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <LayoutPanelTop className="size-[18px] shrink-0 text-black" />
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400"
                                >
                                    <Workflow className="size-[18px] shrink-0 text-black" />
                                    Integration
                                </Link>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
