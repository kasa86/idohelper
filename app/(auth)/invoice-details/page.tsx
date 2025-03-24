import { Button } from '@/components/ui/button'
import { Plus, Printer, AlertCircle, X } from 'lucide-react'

export default function InvoiceDetails() {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white px-5 py-3.5 shadow-sm">
                <h2 className="text-base font-semibold text-black">
                    Invoice Details
                </h2>
                <div className="flex items-center gap-2.5">
                    <Button type="button" variant={'outline-general'}>
                        <Printer className="size-3.5" />
                        Print
                    </Button>
                    <Button type="button" variant={'black'}>
                        <Plus className="size-3.5" />
                        Download
                    </Button>
                </div>
            </div>

            <div className="min-h-[calc(100vh_-_172px)] w-full overflow-hidden rounded-lg bg-white">
                <div className="space-y-3 border-b border-gray-300 bg-gray-100 px-5 py-[15px]">
                    <h2 className="text-base/6 font-semibold text-black">
                        Invoice{' '}
                        <span className="text-primary">#27346733-022</span>
                    </h2>
                    <p className="text-base/5 font-semibold">
                        Titania Infotech
                    </p>
                </div>
                <div className="grid w-full max-w-[852px] gap-4 px-5 py-[15px] sm:grid-cols-2 sm:gap-3">
                    <div className="space-y-3 font-medium leading-tight">
                        <h3>Bill From:</h3>
                        <h4 className="text-base/5 font-semibold text-black">
                            Din Djarin
                        </h4>
                        <p>WendyRFrazier@teleworm.us</p>
                        <p>(+254) 724-453-233</p>
                        <p>4458 Dennison Street, Stockton, CA 95204</p>
                    </div>
                    <div className="space-y-3 font-medium leading-tight">
                        <h3>Bill To:</h3>
                        <h4 className="text-base/5 font-semibold text-black">
                            Starfleet Alliance
                        </h4>
                        <p>OliviaDKaiser@teleworm.us</p>
                        <p>(+254) 243-124-392</p>
                        <p>4548 Pinnickinnick Street, Piscataway, NJ 08854</p>
                    </div>
                </div>
                <div className="grid w-full max-w-[852px] grid-cols-2 gap-3 px-5 py-[15px]">
                    <div className="space-y-3 font-medium leading-tight">
                        <p>Invoice Date</p>
                        <h5 className="text-base/5 font-semibold text-black">
                            6 March, 2023
                        </h5>
                    </div>
                    <div className="space-y-3 font-medium leading-tight">
                        <p>Due Date</p>
                        <h5 className="text-base/5 font-semibold text-black">
                            7 March, 2023
                        </h5>
                    </div>
                </div>
                <div className="border-t border-gray-300 p-5 text-base/5 font-medium text-black">
                    Invoice Detail
                </div>
                <div className="overflow-auto rounded-b-lg bg-white">
                    <table className="w-full">
                        <thead className="border-y border-gray-300 bg-gray-100">
                            <tr>
                                <th className="min-w-72 px-5 py-4 text-left text-sm/tight font-medium">
                                    Description
                                </th>
                                <th className="w-0 min-w-28 px-5 py-4 text-left text-sm/tight font-medium">
                                    Price
                                </th>
                                <th className="w-0 min-w-28 px-5 py-4 text-left text-sm/tight font-medium">
                                    Qty
                                </th>
                                <th className="w-0 min-w-36 whitespace-nowrap px-5 py-4 text-right text-sm/tight font-medium">
                                    Total Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    Secret Stadium Sauce
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    $8.99
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    50
                                </td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium text-black">
                                    $23,482.45
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    Quaker Instant Oatmeal
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    $5.22
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    15
                                </td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium text-black">
                                    $1,000.00
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    Nutella
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    $6.48
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    16
                                </td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium text-black">
                                    $42.42
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    Magnetic Paper Clip
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    $11.70
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    22
                                </td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium text-black">
                                    $12,345.67
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    Easy Cheese
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    $17.84
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    10
                                </td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium text-black">
                                    $4,254.01
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    White pepper
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    $14.81
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black">
                                    12
                                </td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium text-black">
                                    $49,999.99
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Subtotal
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium">
                                    $95,000
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Total excluding tax
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium">
                                    $95,000
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Discount (2%)
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium">
                                    $1,900
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Total
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-right text-sm/tight font-medium">
                                    $93,100
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="px-5 py-4 text-base/5 font-bold text-black">
                                    Amount Due
                                </td>
                                <td></td>
                                <td></td>
                                <td className="px-5 py-4 text-right text-base/5 font-bold text-black">
                                    $93,100
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-wrap-reverse items-center justify-between gap-2.5 border-t border-gray-300 px-4 py-3.5 font-medium leading-tight sm:px-5">
                    <Button variant={'outline-general'} size={'large'}>
                        Cancel
                    </Button>
                    <div className="flex items-center gap-2.5">
                        <Button
                            type="button"
                            variant={'outline-general'}
                            size={'large'}
                        >
                            Save to Draft
                        </Button>
                        <Button type="submit" variant={'black'} size={'large'}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mx-auto !mt-5 flex w-full max-w-[653px] items-center gap-2.5 rounded-lg bg-danger-light px-5 py-3.5">
                <AlertCircle className="size-5 shrink-0 text-danger" />
                <p className="font-semibold leading-tight text-black">
                    Client will get notify to make payment with any credit,
                    debit card, or bank transfer
                </p>
                <button type="button" className="ml-auto">
                    <X className="ml-auto size-[18px] shrink-0 text-black hover:text-gray" />
                </button>
            </div>
        </div>
    )
}
