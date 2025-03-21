import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import Image from 'next/image'

export default function CarouselPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Carousel'} />

            <div className="flex min-h-[calc(100vh_-_160px)] items-center justify-center overflow-hidden">
                <Carousel
                    opts={{
                        align: 'center',
                        loop: true,
                    }}
                >
                    <CarouselContent className="mx-auto w-full max-w-80 sm:max-w-2xl lg:max-w-[1056px]">
                        <CarouselItem>
                            <Card className="p-6">
                                <Image
                                    src="/images/blogcard-one.svg"
                                    alt="blog-img"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                ></Image>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="p-6">
                                <Image
                                    src="/images/blogcard-two.svg"
                                    alt="blog-img"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                ></Image>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="p-6">
                                <Image
                                    src="/images/blogcard-three.svg"
                                    alt="blog-img"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                ></Image>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="p-6">
                                <Image
                                    src="/images/blogcard-four.svg"
                                    alt="blog-img"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                ></Image>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="p-6">
                                <Image
                                    src="/images/blogcard-five.svg"
                                    alt="blog-img"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                ></Image>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="p-6">
                                <Image
                                    src="/images/blogcard-six.svg"
                                    alt="blog-img"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                ></Image>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
