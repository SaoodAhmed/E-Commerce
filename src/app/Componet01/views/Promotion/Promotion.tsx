import Image from "next/image";
import ImgProm1  from "/public/images/Promotions/ImgProm1.webp";
import ImgProm2  from "/public/images/Promotions/ImgProm2.webp";
import ImgProm3  from "/public/images/Promotions/ImgProm3.webp";
import { Badge } from "@/components/ui/badge";


const Promotion = ()=>{
    return (
        // <div className="my-16 px-4">
        //         <div  className="text-center" >
        //             <p className="text-blue-800 font-medium">PROMOTIONS</p>
        //             <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Our Promotions Events</h3>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        //             <div className="  bg-promoCard1 col-span-2 px-8 flex flex-col md:flex-row justify-between items-center h-[218px]">
        //                 <div>
        //                     <h3 className="scroll-m-20 text-3xl tracking-tight font-bold text-slate-900">GET UP TO <span className="scroll-m-20 font-semibold text-slate-900 border-b pb-2 text-4xl  tracking-tight transition-colors first:mt-0">60%</span> </h3>
        //                     <p className="text-xl mt-1">For the summer season</p>
        //                 </div>
        //                 <div className="w-72">
        //                     <Image className="object-cover" src={ImgProm1} alt="promotions Image1"/>
        //                 </div>
                        
        //             </div>
        //             <div className="w-full  bg-promoCard3 row-span-2">
        //                 <div className="px-4 py-6">
        //                     <p className="text-md font-medium">Flex Sweatshirt</p>
        //                     <p className="text-lg"><del>$100.00</del> &nbsp; <span className="font-medium text-lg">$75.00</span></p>
        //                 </div>
        //                 <div className="flex justify-center  items-center">
        //                     <Image className=" object-cover" src={ImgProm2} alt="Promotion Image2"/>
        //                 </div>
                        
        //             </div>
        //             <div className="w-full h-full bg-promoCard4 row-span-2">
        //                 <div className="px-4 py-6">
        //                     <p className="text-md font-medium">Flex Sweatshirt</p>
        //                     <p className="text-lg"><del>$200.00</del> &nbsp; <span className="font-medium text-lg">$190.00</span></p>
        //                 </div>
        //                 <div className="flex justify-center  items-center">
        //                     <Image className="object-cover"  src={ImgProm3} alt="Promotion Image2"/>
        //                 </div>
        //             </div>
        //             <div className="w-full bg-promoCard2 col-span-2 h-[218px] flex justify-center items-center">
        //                 <div className="flex flex-col justify-center items-center">
        //                     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-50">
        //                         GET 30% Off
        //                     </h1>
        //                     <p className="text-base text-slate-50 mt-4">USE PROMO CODE</p>
        //                     <Badge className="text-slate-50 bg-promoBadgeColor px-24 leading-relaxed text-xl font-light rounded-lg mt-1">DINEWEEKENDSALE</Badge>
        //                 </div>
        //             </div>

        //         </div>


        // </div>


        <section className="mt-32 pb-10">
            <div className="flex flex-col items-center">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-800 text-sm">
                        PROMOTIONS
                </p>
                <h2 className="scroll-m-20 mb-10 text-3xl text-gray-800 font-bold tracking-tight transition-colors first:mt-0">
                    Our Promotions Events
                </h2>
            </div>
            <div className="grid lg:grid-cols-2 mb-10 gap-x-10 gap-y-4">
                <div className="space-y-4">
                    <div className=" bg-promoCard1 flex-1 flex flex-col gap-y-2 md:flex-row justify-between items-center">
                        <div className="ml-10">
                            <h2 className="scroll-m-20  pb-1 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                                GET UP TO 60%
                            </h2>
                            <p className="leading-7 [&:not(:first-child)]: text-slate-700 font-semibold">
                                For the summer season
                            </p>

                        </div>
                        <div className="">
                            <Image height={200} width={260} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"} alt="Promotion"/>
                        </div>
                    </div>
                    <div className=" bg-promoCard2 flex-1">
                        <div className="ml-10 flex flex-col items-center py-[55px]">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  text-slate-200 mb-4">
                            GET 30% Off
                        </h1>
                            <p className="leading-7 [&:not(:first-child)]: text-slate-100  mb-1">
                                USE PROMO CODE
                            </p>
                            <Badge className="text-lg rounded-lg bg-promoBadgeColor text-slate-50 px-24 py-1">DINEWEEKENDSALE</Badge>
                        </div>    
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 md:flex-row gap-x-6">
                    <div className=" bg-promoCard3 flex flex-col justify-center flex-1">
                        <p className="leading-7 [&:not(:first-child)]: text-slate-800 text-lg  mb-1 p-6">
                            Flex Sweatshirt <br/>
                            <span className="text-xl"><del>$100.00</del></span> <span className="font-bold text-xl">$75.00</span>
                        </p>
                        <div className=" flex justify-center mt-2">
                            <Image height={340} width={280} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"} alt="Promotion"/>
                        </div>
                    </div>
                    <div className=" bg-promoCard4 flex-1">
                        <p className="leading-7 [&:not(:first-child)]: text-slate-800 text-lg  mb-1 p-6">
                        Flex Push Button Bomber<br/>
                            <span className="text-xl"><del>$225.00</del></span> <span className="font-bold text-xl">$190.00</span>
                        </p>
                        <div className="flex justify-center mt-2" >
                            <Image height={340} width={280} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"} alt="Promotion"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Promotion;