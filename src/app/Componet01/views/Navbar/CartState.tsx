
"use client"
import { ContextCart } from "@/global/context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const CartState = () => {
  let { cartArray,quantity } = useContext(ContextCart);

  return (
    <Link href="/cart">
        <div  className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center relative  shrink-0 hover:scale-110 duration-200 cursor-pointer  ">

            <ShoppingCart className="h-5 w-5 "/>
            <div className="bg-red-500 h-[17px] w-[17px] absolute top-[1px] left-[17px] shrink-0 rounded-full flex justify-center items-center text-xs text-white">{quantity}</div>
        </div>
    </Link>
  )
}

export default CartState