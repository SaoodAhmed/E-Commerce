import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo/Logo.webp";
import {AiOutlineTwitter} from "react-icons/ai";
import {BiLogoFacebook} from "react-icons/bi"
import {LiaLinkedinIn} from "react-icons/lia"


Image
const Footer = ()=>{
    return(
        <>
        
            <div className="flex justify-center mb-4">
                <div  className="grid grid-cols-1 lg:grid-cols-[30%,20%,20%,20%] gap-x-24 gap-y-6 md:gap-y-8">
                    <div className="space-y-12">
                        <Link href={"/"}>
                            <div className="">
                                <Image src={Logo} alt="Logo"/>
                            </div>
                        </Link>
                        <div>
                            <p className=" text-zinc-600 text-sm">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        </div>
                        <div className="flex gap-x-4 max-w-sm">
                            <div className="bg-gray-200 rounded-lg p-3 flex justify-center items-center"><AiOutlineTwitter size={20}/></div>
                            <div className="bg-gray-200 rounded-lg p-3 flex justify-center items-center"><BiLogoFacebook size={20}/></div>
                            <div className="bg-gray-200 rounded-lg p-3 flex justify-center items-center"><LiaLinkedinIn size={20}/></div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-bold text-zinc-600">Company</h4>
                        </div>
                        <div className="text-zinc-700 space-y-2 text-md">
                            <p>About</p>
                            <p>Terms of Use</p>
                            <p>Privacy Policy</p>
                            <p>How it Works</p>
                            <p>Contact Us</p>
                        </div>  
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-bold text-zinc-600">Support</h4>
                        </div>
                        <div className="text-zinc-700 space-y-2 text-md">
                            <p>Support Carrer</p>
                            <p>24h Service</p>
                            <p>Quick Chat</p>
                        </div> 
                    </div>
                    <div className="space-y-2">
                        <div>
                            <h4 className="text-xl font-bold text-zinc-600">Contact</h4>
                        </div>
                        <div className="text-zinc-700 space-y-2 text-md">
                            <p>Whatsapp</p>
                            <p>Support 24h</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-32">
                <div className=" border-b border-zinc-600"></div>
                <div className="text-zinc-600 flex flex-col md:flex-row gap-y-4 justify-evenly text-lg py-6">
                    <p className="">Copyright © 2022 Dine Market</p>
                    <p>Design by. <span className="font-bold text-zinc-800">Weird Design Studio</span></p>
                    <p>Code by. <span className="font-bold text-zinc-800">shabrina12 on github</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer;