"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {RiDeleteBinLine} from "react-icons/ri"
import { useEffect, useState} from "react"
import { oneProductType } from "@/app/Componet01/utils/ProductsDataArrayAndType";
import { client } from "../../../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ContextCart } from "@/global/context";
import { useContext } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation"
import BASE_PATH_FOR_API from "@/app/Componet01/shared/BasePath";
import LoadingComp from "@/app/Componet01/shared/LoadingComp";

let builder: any = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source)
}

const notification = (title: string) => {
  toast(title, {
      position: "top-right"
  })
};


const CartComp = ({allProducts}:{allProducts:Array<oneProductType>}) => {
  console.log(allProducts)
  const [allProductForCart,setAllProductForCart] = useState<any>();
  let { cartArray,dispatch,userData, loading, setLoading } = useContext(ContextCart);
  const [totalPrice,setTotalPrice] = useState(0)
  let router = useRouter()

  function PriceSubTotal(){
    let originalToSend:number=0;

    allProductForCart && allProductForCart.forEach((element:oneProductType) => {
      let subTotalPrice =  element.quantity*element.price
      originalToSend = originalToSend+subTotalPrice
      
    });
    if(originalToSend!==0){
      setTotalPrice(originalToSend)
      router.refresh()
    }
  }

  useEffect(()=>{
    PriceSubTotal()
  },[allProductForCart])
  

  const handleRemove = (product_id:string)=>{
    if(userData){
      let user_id = userData.uuid;
      dispatch("removeFromCart",{product_id,user_id})
    }
  }

   
  useEffect(() => {
    if (cartArray) {
        let data = allProducts.filter((item: oneProductType) => {
            for (let index = 0; index < cartArray.length; index++) {
                let element: any = cartArray[index];
                if (element.product_id === item._id && element.user_id === userData.uuid) {
                    return true
                };
            };
        });
        let updatedData = data.map((elem: oneProductType) => {
            for (let index = 0; index < cartArray.length; index++) {
                let element: any = cartArray[index];
                if (element.product_id === elem._id) {
                    return {
                        ...elem,
                        quantity: element.quantity,
                    }
                };
            };
        })
        setAllProductForCart(updatedData);
    }

}, [cartArray]);

  async function handleDecrement(product_id:string,price:any){
    let stableQuant:number=0;
    cartArray.forEach((elem:any)=>{
      if(elem.product_id==product_id){
        stableQuant = elem.quantity;
      }
    })
    if(stableQuant-1 == 0){
      notification("Not Accepted Lower than One")

    }else{
      await dispatch("updateCart",{
        quantity:stableQuant-1,
        product_id:product_id,
        user_id:userData.uuid,
        price:price
      })
      notification("Decrement by One")
    }

    
  }

  async function handleIncrement(product_id:string,price:any){
    let stableQuant:number=0;
    cartArray.forEach((elem:any)=>{
      if(elem.product_id==product_id){
        stableQuant = elem.quantity;
      }
    })


    let returnedVal = await dispatch("updateCart",{
      quantity:stableQuant+1,
      product_id:product_id,
      user_id:userData.uuid,
      price:price
    })

    notification("Increment by One")
  } 

  async function handleProcessCheckout(){
    setLoading(true)
    let linkOrg:any = await fetch(`/api/checkoutSession`,{
      method:'POST',
      body:JSON.stringify(allProductForCart)
    })
    let {link} = await linkOrg.json()
    setLoading(false)
    console.log(link)
    window.location.href = link
     
  }


  
    
  return (
    <div className=" py-10 px-4 md:px-10">
      <Toaster/>
      <div className="py-6">
        <h4 className="font-semibold text-2xl text-slate-900">Shopping Cart</h4>
      </div>
      <div className="flex gap-6 flex-col lg:flex-row">

      <div className=" basis-[72%] flex flex-col gap-2">

        {allProductForCart ? allProductForCart.map((item:oneProductType, index:number)=>(
        <div key={index} className="flex gap-6 flex-shrink-0">
          <div className="object-cover w-56">
            <Image className=" object-cover rounded-xl" height={1000} width={1000}  src={urlFor(item.image[0]).width(1000).height(1000).url()} alt={item.image[0].alt}/>
          </div>
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="md:text-2xl font-light text-gray-700">{item.productName}</h4>
              {loading? <LoadingComp size={"w-10"}/>:
              <div onClick={()=>handleRemove(item._id)} className=" hover:cursor-pointer hover:scale-110 duration-300">
                <RiDeleteBinLine size={28}/>  
              </div>}
            </div>
            <p className="text-gray-500 md:text-lg font-medium">{item.category[1]?item.category[1]:"All"}</p>
            <p className="font-semibold text-gray-900 md:text-lg">Delivery Estimation</p>
            <p className="md:text-lg text-yellow-400 font-medium ">5 Working Days</p>
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{"$"}{item.price}</p>
              <div className={`flex gap-2 items-center md:text-lg ${loading?"opacity-50":"opacity-100"}`}>
                <div onClick={() => handleDecrement(item._id,item.price)}  className="select-none cursor-pointer flex justify-center items-center w-7 h-7 rounded-full bg-slate-200">-</div>
                <p>{item.quantity}
                 {/* { cartArray.map((subItem:any,index:number)=>{
                      let match = subItem.product_id === item._id
                      if(match){
                        return match.quantity;
                      }else{
                        return ""

                      }
                    })
                  } */}
                </p>
                <button disabled={loading} onClick={()=>handleIncrement(item._id,item.price)} className="select-none cursor-pointer flex justify-center items-center w-7 h-7 rounded-full border-[0.5px] border-gray-800">+</button>
              </div>
            </div>
          </div>
        </div>)):"All"}

      </div>
        <div className="basis-3/12 space-x-4  space-y-6 ">
          <h2 className="text-xl font-semibold ">Order Summary</h2>
          <div className="flex justify-between">
            <p className="text-lg font-light">Quantity</p>
            <p className="text-lg font-light">{cartArray.length} Products</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-light">Sub Total</p>
            <p className="text-lg font-light">${totalPrice}</p>
          </div>
          <Button onClick={handleProcessCheckout}  className=' text-base w-full font-medium text-slate-50 rounded-none border border-slate-400'>
            {loading?"Loading...":
              "Process to Checkout"
            }
            </Button>
        </div>
      </div>
    </div>
  )
}

export default CartComp;
