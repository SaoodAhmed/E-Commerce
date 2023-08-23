import { NavabarItems } from "../../utils/NavBarMock";

import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown} from "react-icons/md"
import Expand from "./Expand";
import { Slice } from "lucide-react";
import CartState from "./CartState";


const MobileNavBar = ()=>{

    return (            
        <div className="w-full p-4 bg-slate-100 flex flex-col lg:hidden">
           <div className="flex justify-center items-center my-4">
              <CartState/>
          </div>
            {
            NavabarItems.map((item:any, index:number)=>(
              <div key={index}>

                <div>
                    <Expand item={item}/>
                </div>
              </div>
            ))
        }

            
        </div>
    )

}

export default MobileNavBar;