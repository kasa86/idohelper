'use client'
import IconMediaPodcasting from '@/components/icons/icon-media-podcasting'
import PageHeading from '@/components/layout/page-heading'
import {
    NavigationMenu as NavigationMenuPrimitive,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { BarChartBig, Construction, GraduationCap, MemoryStick, MessageSquareText, PieChart, Search, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavigationMenuTest() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Navigation Menu'} />

            <div className="flex min-h-[calc(100vh_-_160px)] w-full items-start justify-center pt-10 lg:pt-[185px]">
                <NavigationMenuPrimitive>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Use Cases
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="max-h-[400px] w-full max-w-xs overflow-y-auto p-5 md:max-w-2xl md:p-[30px] xl:max-w-[871px]">
                                    <div className="grid w-full md:grid-cols-2 xl:grid-cols-3">
                                        <div className="flex gap-2.5 border-b border-gray-300 pb-5 md:pr-5 xl:border-none">
                                            <BarChartBig className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Sales
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Boost your sales with our
                                                    proven strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pb-5 md:pl-5 md:pt-0 xl:border-x xl:border-b-0 xl:px-5">
                                            <Construction className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Engineering
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Designing solutions through
                                                    math and science.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-5 xl:pl-5 xl:pt-0">
                                            <Search className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Recruiting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Unearthing top talent to
                                                    drive innovation.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 xl:pl-0 xl:pr-5">
                                            <span className="absolute -left-5 -top-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <PieChart className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Marketing
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Crafting compelling
                                                    narratives that connect with
                                                    audiences.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border xl:p-5">
                                            <span className="absolute -right-5 -top-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -left-5 -top-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <span className="absolute -bottom-5 -right-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -bottom-5 -left-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <MessageSquareText className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Consulting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Providing strategic
                                                    expertise to solve complex
                                                    challenges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 ">
                                            <User className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Management
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Guiding and empowering teams
                                                    to achieve success.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-0 xl:pr-5 xl:pt-5">
                                            <GraduationCap className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Education
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Nurturing the minds of the
                                                    future and fostering
                                                    lifelong learning.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-x xl:border-b-0 xl:px-5 xl:pb-0 xl:pt-5">
                                            <span className="absolute -bottom-5 -left-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <IconMediaPodcasting className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Media & Podcasting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Podcasts, a popular form of
                                                    digital audio media.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-gray-300 pt-5 md:border-r md:pr-5 xl:border-none xl:pb-0 xl:pl-5 xl:pt-5">
                                            <MemoryStick className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Technology
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Harnessing the power of
                                                    innovation to create a
                                                    better future.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Features
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="max-h-[400px] w-full max-w-xs overflow-y-auto p-5 md:max-w-2xl md:p-[30px] xl:max-w-[871px]">
                                    <div className="grid w-full md:grid-cols-2 xl:grid-cols-3">
                                        <div className="flex gap-2.5 border-b border-gray-300 pb-5 md:pr-5 xl:border-none">
                                            <BarChartBig className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Sales
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Boost your sales with our
                                                    proven strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pb-5 md:pl-5 md:pt-0 xl:border-x xl:border-b-0 xl:px-5">
                                            <Construction className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Engineering
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Designing solutions through
                                                    math and science.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-5 xl:pl-5 xl:pt-0">
                                            <Search className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Recruiting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Unearthing top talent to
                                                    drive innovation.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 xl:pl-0 xl:pr-5">
                                            <span className="absolute -left-5 -top-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <PieChart className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Marketing
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Crafting compelling
                                                    narratives that connect with
                                                    audiences.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border xl:p-5">
                                            <span className="absolute -right-5 -top-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -left-5 -top-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <span className="absolute -bottom-5 -right-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -bottom-5 -left-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <MessageSquareText className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Consulting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Providing strategic
                                                    expertise to solve complex
                                                    challenges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 ">
                                            <User className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Management
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Guiding and empowering teams
                                                    to achieve success.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-0 xl:pr-5 xl:pt-5">
                                            <GraduationCap className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Education
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Nurturing the minds of the
                                                    future and fostering
                                                    lifelong learning.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-x xl:border-b-0 xl:px-5 xl:pb-0 xl:pt-5">
                                            <span className="absolute -bottom-5 -left-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <IconMediaPodcasting className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Media & Podcasting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Podcasts, a popular form of
                                                    digital audio media.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-gray-300 pt-5 md:border-r md:pr-5 xl:border-none xl:pb-0 xl:pl-5 xl:pt-5">
                                            <MemoryStick className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Technology
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Harnessing the power of
                                                    innovation to create a
                                                    better future.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="max-h-[400px] w-full max-w-xs overflow-y-auto p-5 md:max-w-2xl md:p-[30px] xl:max-w-[871px]">
                                    <div className="grid w-full md:grid-cols-2 xl:grid-cols-3">
                                        <div className="flex gap-2.5 border-b border-gray-300 pb-5 md:pr-5 xl:border-none">
                                            <BarChartBig className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Sales
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Boost your sales with our
                                                    proven strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pb-5 md:pl-5 md:pt-0 xl:border-x xl:border-b-0 xl:px-5">
                                            <Construction className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Engineering
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Designing solutions through
                                                    math and science.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-5 xl:pl-5 xl:pt-0">
                                            <Search className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Recruiting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Unearthing top talent to
                                                    drive innovation.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 xl:pl-0 xl:pr-5">
                                            <span className="absolute -left-5 -top-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <PieChart className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Marketing
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Crafting compelling
                                                    narratives that connect with
                                                    audiences.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border xl:p-5">
                                            <span className="absolute -right-5 -top-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -left-5 -top-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <span className="absolute -bottom-5 -right-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -bottom-5 -left-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <MessageSquareText className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Consulting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Providing strategic
                                                    expertise to solve complex
                                                    challenges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 ">
                                            <User className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Management
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Guiding and empowering teams
                                                    to achieve success.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-0 xl:pr-5 xl:pt-5">
                                            <GraduationCap className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Education
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Nurturing the minds of the
                                                    future and fostering
                                                    lifelong learning.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-x xl:border-b-0 xl:px-5 xl:pb-0 xl:pt-5">
                                            <span className="absolute -bottom-5 -left-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <IconMediaPodcasting className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Media & Podcasting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Podcasts, a popular form of
                                                    digital audio media.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-gray-300 pt-5 md:border-r md:pr-5 xl:border-none xl:pb-0 xl:pl-5 xl:pt-5">
                                            <MemoryStick className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Technology
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Harnessing the power of
                                                    innovation to create a
                                                    better future.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Pricing
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="max-h-[400px] w-full max-w-xs overflow-y-auto p-5 md:max-w-2xl md:p-[30px] xl:max-w-[871px]">
                                    <div className="grid w-full md:grid-cols-2 xl:grid-cols-3">
                                        <div className="flex gap-2.5 border-b border-gray-300 pb-5 md:pr-5 xl:border-none">
                                            <BarChartBig className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Sales
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Boost your sales with our
                                                    proven strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pb-5 md:pl-5 md:pt-0 xl:border-x xl:border-b-0 xl:px-5">
                                            <Construction className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Engineering
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Designing solutions through
                                                    math and science.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-5 xl:pl-5 xl:pt-0">
                                            <Search className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Recruiting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Unearthing top talent to
                                                    drive innovation.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 xl:pl-0 xl:pr-5">
                                            <span className="absolute -left-5 -top-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <PieChart className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Marketing
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Crafting compelling
                                                    narratives that connect with
                                                    audiences.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border xl:p-5">
                                            <span className="absolute -right-5 -top-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -left-5 -top-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <span className="absolute -bottom-5 -right-5 z-10 hidden size-10 rounded-full bg-white md:block"></span>
                                            <span className="absolute -bottom-5 -left-5 z-10 hidden size-10 rounded-full bg-white xl:block"></span>
                                            <MessageSquareText className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Consulting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Providing strategic
                                                    expertise to solve complex
                                                    challenges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-y xl:border-l-0 ">
                                            <User className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Management
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Guiding and empowering teams
                                                    to achieve success.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2.5 border-b border-gray-300 py-5 md:pr-5 xl:border-none xl:pb-0 xl:pr-5 xl:pt-5">
                                            <GraduationCap className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Education
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Nurturing the minds of the
                                                    future and fostering
                                                    lifelong learning.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-2.5 border-b border-gray-300 py-5 md:border-l md:pl-5 xl:border-x xl:border-b-0 xl:px-5 xl:pb-0 xl:pt-5">
                                            <span className="absolute -bottom-5 -left-5 hidden size-10 rounded-full bg-white md:block xl:hidden"></span>
                                            <IconMediaPodcasting className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Media & Podcasting
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Podcasts, a popular form of
                                                    digital audio media.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2.5 border-gray-300 pt-5 md:border-r md:pr-5 xl:border-none xl:pb-0 xl:pl-5 xl:pt-5">
                                            <MemoryStick className="mt-0.5 size-[18px] shrink-0 text-black" />
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="mb-1.5 inline-block font-semibold leading-[18px] text-black transition hover:opacity-80"
                                                >
                                                    Technology
                                                </Link>
                                                <p className="text-xs font-medium text-gray">
                                                    Harnessing the power of
                                                    innovation to create a
                                                    better future.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenuPrimitive>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'
