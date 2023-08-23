
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";




const Jwellery = ()=>{
    return (
        <div className="">

            <div className="flex justify-start md:justify-end text-4xl  md:text-5xl">
                <h3 className="  max-w-[30rem] font-bold">Unique and Authentic Vintage Designer Jewellery</h3>
            </div>

            <div className="flex -z-50 flex-col md:flex-row justify-center items-center mt-2 py-4 gap-y-8 relative gap-x-8 bg-slate-50">
                <div className="absolute top-[3rem] md:top-[4.5rem] right-0 left-0 md:left-24 text-gray-200 -z-40">
                    <h1 className=" text-[4.8rem] md:text-[7.3rem] leading-[5.9rem] font-bold max-w-xs">Different from others</h1>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 basis-5/12 gap-x-8 gap-y-6">
                    <div className="max-w-[13rem] space-y-2">
                        <h4 className="text-xl font-semibold">Using Good Quality Materials</h4>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h4 className="text-xl font-semibold">Modern Fashion Design</h4>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h4 className="text-xl font-semibold">100% Handmade Products</h4>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h4 className="text-xl font-semibold ">Discount for Bulk Orders</h4>
                        <p className="text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row basis-6/12 gap-x-8 justify-center items-center  space-y-8 p-4">
                    <Image height={350} width={300} src={`https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75`} alt="jwellery"/>
                    <div className="space-y-8">
                        <p className="text-justify max-w-xs text-base pb-6" style={{wordSpacing:"0.7rem"}}>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href={'/products'}>
                            <Button className="text-bold h-11 px-10 rounded-none text-slate-50 ">See All Product</Button>
                        </Link>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Jwellery;