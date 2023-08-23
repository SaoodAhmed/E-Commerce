import { NavBarType } from "../../utils/NavBarItemTypes";
import { FC } from "react"
import { NavabarItems } from "../../utils/NavBarMock";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown} from "react-icons/md"
import { GiFamilyHouse } from "react-icons/gi";
import CartState from "./CartState";


const Expand:FC<{item:NavBarType}> = ({item})=>{
    const [isExpend, setIsExpend] = useState(false)
    const [isTimeOut, setTimeOut] = useState(false)
    
    function handleExpend(){
        setIsExpend(!isExpend)
        setTimeout(()=>{
            setTimeOut(!isExpend);
        },100)
         
    }


    return (

        <>
              <li className={`${isExpend? " h-52":"h-12 "} duration-300 list-none`} >
                       
                    <div onClick={handleExpend}  className="flex justify-between hover:bg-fuchsia-500 duration-300 rounded py-2 px-3">
                        <Link href={item.href} className="text-slate-700">{item.label}</Link>
                        {item.isDropDown? <MdKeyboardArrowDown className="mt-1 -rotate-90 group-hover:rotate-0 duration-300"/>:""}
                    </div>
                    <div className="flex flex-col mt-1">
                        
                        { isTimeOut && (
                            item.dropDownData?.map((subItem:NavBarType, index:number)=>(
                                <Link key={index} className="hover:bg-gray-50 rounded-md py-1  px-5 duration-300 " href={subItem.href}>
                                    {subItem.label}
                                </Link>
                            )))
                        }
                    </div>
                    
                </li>
        </>

        
    )
}

export default Expand