import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Hero from "/public/images/hero/hero.webp"
import Link from "next/link";

const HeroSection:any = ()=>{
    return (
        <section className="flex flex-col lg:flex-row gap-y-10 ">
            <div className="mt-32 flex-1">
                <Badge className=" bg-blue-100 text-blue-700 text-md rounded-md px-6 py-3 ">Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl mt-6 mb-2 max-w-[30rem]">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-[26rem]">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Link href={"/products"}>
                    <Button className="rounded-none px-10 mb-10 py-7 bg-slate-800 text-md font-bold mt-6 ">
                        <ShoppingCart className="mr-2"/>
                        Start Shopping
                    </Button>
                </Link>
                <div className="flex gap-4">
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt="bazaar" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"} alt="baztel" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"} alt="versase" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"} alt="in style" />
                    </div>
                </div>
                
            </div>

            <div className="flex-1 relative  hidden md:flex">
                <div className=" h-[550px] w-[550px] absolute left-10  bg-orange-100 shrink-0 rounded-full -z-10 top-8 "></div>
                <Image src={Hero} alt="Hero" className="flex shrink-0"/>
            </div>
        </section>
    )
}
export default HeroSection;
            // <div className="flex-1 relative ">
            //     <div className=" h-[550px] w-[550px] absolute left-10  bg-orange-100 shrink-0 rounded-full -z-10 top-8 "></div>
            //     <Image src={Hero} alt="Hero" className="flex shrink-0"/>
            // </div>