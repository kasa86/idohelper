import Filter from '@/components/custom/filter'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Heart, Settings2, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard() {
    return (
        <div className="space-y-4">
            <div className="relative">
                <PageHeading heading={'eCommerce Product Card'} />

                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant={'black'}
                                className="absolute right-3 top-2"
                            >
                                <Settings2 />
                                Filter
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side={'right'}
                            className="right-0 top-0 h-screen w-[302px] rounded-lg"
                        >
                            <Filter />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="min-h-[calc(100vh_-_160px)] md:flex md:flex-row md:gap-4">
                <div className="hidden md:block">
                    <Filter />
                </div>

                <div className="grow">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded"
                                    >
                                        <Image
                                            src="/images/t-shirt.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:rotate-3 hover:scale-105"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item absolute right-1 top-1 z-[2] grid size-5 place-content-center rounded-full bg-white sm:right-3 sm:top-3 sm:size-7"
                                    >
                                        <Heart className="size-3 duration-300 group-hover/item:fill-danger group-hover/item:text-danger sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs/tight font-medium text-black">
                                        4.8
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black">
                                        15.2k
                                    </p>
                                </Card>
                                <div className="!mt-3 space-y-1.5 text-xs font-bold text-black sm:text-sm/tight">
                                    <Link
                                        href="/product-details"
                                        className="transition hover:text-primary"
                                    >
                                        Escape Dri-FIT Legend T-Shirt
                                    </Link>
                                    <p className="line-clamp-2 text-[10px] font-medium text-gray sm:text-xs/normal">
                                        Moisture-wicking comfort for intense
                                        workouts.
                                    </p>
                                    <p>$199.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded"
                                    >
                                        <Image
                                            src="/images/goggles.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:rotate-3 hover:scale-105"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item absolute right-1 top-1 z-[2] grid size-5 place-content-center rounded-full bg-white sm:right-3 sm:top-3 sm:size-7"
                                    >
                                        <Heart className="size-3 duration-300 group-hover/item:fill-danger group-hover/item:text-danger sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs/tight font-medium text-black">
                                        4.5
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="!mt-3 space-y-1.5 text-xs font-bold text-black sm:text-sm/tight">
                                    <Link
                                        href="/product-details"
                                        className="transition hover:text-primary"
                                    >
                                        Oakley Holbrook Polarized
                                    </Link>
                                    <p className="line-clamp-2 text-[10px] font-medium text-gray sm:text-xs/normal">
                                        Iconic design with advanced, polarized
                                        optics.
                                    </p>
                                    <p>$151.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded"
                                    >
                                        <Image
                                            src="/images/purse.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:rotate-3 hover:scale-105"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item absolute right-1 top-1 z-[2] grid size-5 place-content-center rounded-full bg-white sm:right-3 sm:top-3 sm:size-7"
                                    >
                                        <Heart className="size-3 duration-300 group-hover/item:fill-danger group-hover/item:text-danger sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs/tight font-medium text-black">
                                        4.5
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="!mt-3 space-y-1.5 text-xs font-bold text-black sm:text-sm/tight">
                                    <Link
                                        href="/product-details"
                                        className="transition hover:text-primary"
                                    >
                                        Balenciaga Classic City Bag
                                    </Link>
                                    <p className="line-clamp-2 text-[10px] font-medium text-gray sm:text-xs/normal">
                                        Elegant design with versatile, premium
                                        leather.
                                    </p>
                                    <p>$549.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded"
                                    >
                                        <Image
                                            src="/images/t-shirt.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:rotate-3 hover:scale-105"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item absolute right-1 top-1 z-[2] grid size-5 place-content-center rounded-full bg-white sm:right-3 sm:top-3 sm:size-7"
                                    >
                                        <Heart className="size-3 duration-300 group-hover/item:fill-danger group-hover/item:text-danger sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs/tight font-medium text-black">
                                        4.8
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black">
                                        15.2k
                                    </p>
                                </Card>
                                <div className="!mt-3 space-y-1.5 text-xs font-bold text-black sm:text-sm/tight">
                                    <Link
                                        href="/product-details"
                                        className="transition hover:text-primary"
                                    >
                                        Escape Dri-FIT Legend T-Shirt
                                    </Link>
                                    <p className="line-clamp-2 text-[10px] font-medium text-gray sm:text-xs/normal">
                                        Moisture-wicking comfort for intense
                                        workouts.
                                    </p>
                                    <p>$199.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded"
                                    >
                                        <Image
                                            src="/images/goggles.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:rotate-3 hover:scale-105"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item absolute right-1 top-1 z-[2] grid size-5 place-content-center rounded-full bg-white sm:right-3 sm:top-3 sm:size-7"
                                    >
                                        <Heart className="size-3 duration-300 group-hover/item:fill-danger group-hover/item:text-danger sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs/tight font-medium text-black">
                                        4.5
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="!mt-3 space-y-1.5 text-xs font-bold text-black sm:text-sm/tight">
                                    <Link
                                        href="/product-details"
                                        className="transition hover:text-primary"
                                    >
                                        Oakley Holbrook Polarized
                                    </Link>
                                    <p className="line-clamp-2 text-[10px] font-medium text-gray sm:text-xs/normal">
                                        Iconic design with advanced, polarized
                                        optics.
                                    </p>
                                    <p>$151.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded"
                                    >
                                        <Image
                                            src="/images/purse.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:rotate-3 hover:scale-105"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item absolute right-1 top-1 z-[2] grid size-5 place-content-center rounded-full bg-white sm:right-3 sm:top-3 sm:size-7"
                                    >
                                        <Heart className="size-3 duration-300 group-hover/item:fill-danger group-hover/item:text-danger sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs/tight font-medium text-black">
                                        4.5
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="!mt-3 space-y-1.5 text-xs font-bold text-black sm:text-sm/tight">
                                    <Link
                                        href="/product-details"
                                        className="transition hover:text-primary"
                                    >
                                        Balenciaga Classic City Bag
                                    </Link>
                                    <p className="line-clamp-2 text-[10px] font-medium text-gray sm:text-xs/normal">
                                        Elegant design with versatile, premium
                                        leather.
                                    </p>
                                    <p>$549.00</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
