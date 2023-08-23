import { oneProductType } from "@/app/Componet01/utils/ProductsDataArrayAndType";
import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server";


interface typeOfData{
    name:string,
    price:string,
    quantity:number
}


let originalData:Array<typeOfData> = [

    {
        name:"Flex Push Button Bomber",
        price:'price_1NgmPiJt5WG7NysC6tExZR4i',
        quantity:1,
    },
    {
        name:"Raglan Sweatshirt",
        price:'price_1NgmSvJt5WG7NysCydW3SfTG',
        quantity:1,
    },
    {
        name:"Nice Fur Coat",
        price:'price_1NgmVVJt5WG7NysCogt4taPk',
        quantity:1,
    },
    {
        name:'Brushed Raglan Sweatshirt',
        price:"price_1NgmXwJt5WG7NysCDtLnSRXr",
        quantity:1,
    },
    {
        name:"Children tradition Frida K.",
        price:'price_1NgmdqJt5WG7NysC0RPWMvwA',
        quantity:1,
    },
    {
        name:"Flex Sweatpants",
        price:'price_1Ngmf8Jt5WG7NysCMGb6QR4j',
        quantity:1,
    },
    {
        name:"Flex Sweatshirt",
        price:'price_1NgmgDJt5WG7NysC5hV8F2fh',
        quantity:1,
    },
    {
        name:"Cameryn Sash Tie Dress",
        price:'price_1NgmhsJt5WG7NysCpcsDGarp',
        quantity:1,
    },
]

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY);

export async function POST(req: NextRequest) {
    let cartItemsArray = await req.json();

    try {
        let line_item = originalData.filter((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return true
                }
            }
        })
        let line_itemToSend: any = line_item.map((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return {
                        price: item.price,
                        quantity: element.quantity
                    }
                }
            }
        })

        let session = await stripe.checkout.sessions.create({
            line_items: line_itemToSend,
            mode: "payment",
            success_url: `${req.nextUrl.origin}/?success=true`,
            cancel_url: `${req.nextUrl.origin}/?success=false`
        })
        return NextResponse.json({ link: session.url });
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }

}