import { FC } from "react";
import { NavBarType } from "../../utils/NavBarItemTypes";
import Link from "next/link";


const DropDown: FC<{items:NavBarType}> = ({items})=>{
    
    return (
        <>    
            {
                items.dropDownData?.map((item:NavBarType, index:number)=>{
                    return (
                        <ul key={index}>
                            <li className="hover:ml-2 duration-300 -translate-y-7 group-hover:translate-y-0">
                               <Link href={item.href}>{item.label}</Link> 
                            </li>
                        </ul>
                    )
                })
            }
        </>
    )
}
export default DropDown;