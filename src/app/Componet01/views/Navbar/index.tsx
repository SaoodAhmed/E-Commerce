"use client"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose} from "react-icons/gr";
import { NavabarItems } from "../../utils/NavBarMock";
import Logo from "/public/images/logo/Logo.webp"
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FiSearch} from "react-icons/fi"
import { MdKeyboardArrowDown} from "react-icons/md"
import {useRouter} from "next/navigation";

import DropDown from "./DropDown";
import MobileNavBar from "./MobileNavBar";
import ContextWrapper from "@/global/context";
import CartState from "./CartState";


const Navbar = ()=>{
    const [cartItemNumber, setCartItemNumber] = useState(0)
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [searchQuery,setSearchQuery] = useState("")
    

    function handleSearch(e:any){
        console.log(e.key, e.keyCode)
        if(e.key === "Enter" && e.keyCode === 13){
            router.push(`/search/${searchQuery}`)
        }
    }



    function handleOnClick(){
        setIsNavOpen(!isNavOpen)
    }

    return (
        <ContextWrapper>
        <div className=" sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20 px-3 ">
            <div className="flex justify-between items-center py-6 ">
                

                <Link href={"/"} className="flex shrink-0"> 
                    <Image src={Logo} alt="Dine Market"/>
                </Link>
                <div className="hidden  lg:flex gap-x-8 pl-4 text-normal font-medium ">
                    {
                        NavabarItems.map((item:any, index:number)=>{
                            return (
                                <ul key={index} className="flex justify-center items-center  relative group ">
                                    <Link href={item.href}><li>{item.label}</li></Link>
                                    {item.isDropDown? <MdKeyboardArrowDown className="mt-1 ml-1 duration  group-hover:rotate-0 "/>:""}
                                    {item.isDropDown && (<div className="invisible group-hover:visible  group-hover:duration-200 absolute top-10 left-0 max-w-[12rem] rounded bg-gray-200 opacity-70  py-4 px-8 ">
                                        <DropDown items={item}/>
                                    </div>)
                                    }
                                </ul>
                            )
                        })
                    }
                    <div className="flex justify-center items-center  border rounded pr-8 pl-3 border-slate-300 ml-7 mr-20">
                        <Link href={`/search/${searchQuery}`} ><FiSearch size={17}/></Link>
                        <Input onKeyDown={handleSearch}  onChange={e => setSearchQuery(e.target.value)} className="pr-20 pl-4 border-none outline-none bg-white backdrop-blur-lg bg-opacity-10"  placeholder="Search in Our Store . . ."/>
                    </div>

                    {/* <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center relative  shrink-0 hover:scale-110 duration-200 cursor-pointer">

                        <ShoppingCart className="h-5 w-5 "/>
                            <div className="bg-red-500 h-[17px] w-[17px] absolute top-[1px] left-[17px] shrink-0 rounded-full flex justify-center items-center text-xs text-white">{cartItemNumber}</div>
                    </div> */}
                    <CartState/>
                    
                </div>

                <div onClick={handleOnClick} className="flex flex-col lg:hidden">
                    {
                        isNavOpen ? <GrClose size={20} className="flex shrink-0"/>:<GiHamburgerMenu size={25}/>
                    }
                    
                </div>
            
            </div>

                {isNavOpen && 
                    (<MobileNavBar/>)
                }
        </div>
        </ContextWrapper>

    )
}

export default Navbar;