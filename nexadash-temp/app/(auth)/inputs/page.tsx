import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AtSign, TriangleAlert, User } from 'lucide-react'
import Link from 'next/link'

export default function Inputs() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Input'} />

            <div className="flex min-h-[calc(100vh_-_160px)] w-full items-center justify-center">
                <Card className="w-full max-w-[400px] rounded-lg p-4 shadow-sm">
                    <CardContent>
                        <form className="space-y-[30px]">
                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black">
                                    Username
                                </label>
                                <Input
                                    type="text"
                                    variant={'input-form'}
                                    placeholder="Victoria Gillham"
                                    iconRight={<User className="size-[18px]" />}
                                />
                            </div>
                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black">
                                    Email address
                                </label>
                                <Input
                                    type="email"
                                    variant={'input-form'}
                                    placeholder="username@domain.com"
                                    iconRight={
                                        <AtSign className="size-[18px]" />
                                    }
                                />
                            </div>
                            <div className="!mt-2.5 flex items-center gap-2">
                                <TriangleAlert className="size-[18px] shrink-0 text-danger" />
                                <p className="text-xs/tight font-medium text-danger">
                                    Please enter an email address in the format{' '}
                                    <span className="font-bold">
                                        username@gmail.com
                                    </span>
                                </p>
                            </div>
                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black">
                                    Password
                                </label>
                                <Input
                                    type="password"
                                    variant={'input-form'}
                                    placeholder="Abc*********"
                                />
                            </div>
                            <Link
                                href="#"
                                className="!mt-4 block text-right text-xs/4 font-semibold text-black underline underline-offset-[3px] hover:text-[#3C3C3D]"
                            >
                                Forgot password?
                            </Link>
                            <Button
                                type="submit"
                                variant={'black'}
                                size={'large'}
                                className="w-full"
                            >
                                Login
                            </Button>
                            <div className="text-center text-xs/4 font-semibold text-black">
                                Already have an account?
                                <Link
                                    href="#"
                                    className="pl-1.5 text-sm/tight underline underline-offset-[3px] hover:text-[#3C3C3D]"
                                >
                                    Register
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
