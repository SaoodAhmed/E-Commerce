"use client"
import React, { FC, useContext, useState } from 'react'
import { imagesType, oneProductType } from '../../utils/ProductsDataArrayAndType'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../../sanity/lib/client'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { ContextCart } from '@/global/context'
//import PortableText from "react-portable-text";
import toast, { Toaster, useToaster } from 'react-hot-toast';
import { Tick } from '../../../../../public'
import {PortableText} from '@portabletext/react'
const builder = imageUrlBuilder(client)
const forUrl = (source:any)=>{
    return builder.image(source)

}

const ProductDetail:FC<{item:oneProductType}> = ({item}) => {
    const {dispatch,userData,cartArray} = useContext(ContextCart)
    //console.log(state);
    // let data = useContext(ContextCart);
    // console.log(data)
    const [imageForPriewOfSelected,setImageForPreviewOfSelected] = useState(item.image[0]._key)
    const [quantity, setQuantity] = useState(1)
   // console.log("_key: ",imageForPriewOfSelected)
   function handleIncrement(){
    setQuantity(quantity+1)
   }

   function handleDecrement()
   {
    quantity === 1 ? setQuantity(1):setQuantity(quantity-1)
    // if(quantity === 1){
    //     return 1;  
    // }else{
    //     setQuantity(quantity-1)  
    // } 
   }

const notification = (title:any)=>toast(`${quantity} ${title}`,{
    duration: 4000,
    position: 'top-center',
    // postion:"top-right"
    // postion:"top-left"
    
  
    // Styling
    style: {},
    className: 'text-normal font-medium text-slate-800',
  
    // Custom Icon
    icon: <Image className='h-10 w-10' src={Tick} alt="tick"/>,
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })
const notificationError = (title:any)=>toast(title,{
    duration: 4000,
    position: 'top-right',
    // postion:"top-right"
    // postion:"top-left"
    
  
    // Styling
    style: {},
    className: 'text-normal font-medium text-slate-800',
  
    // Custom Icon
    icon: '🔑',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })





   function handleAddToCart(){
    let isExists = cartArray.some((element:any)=>element.product_id === item._id)
    console.log(isExists)
    if(userData){
        let dataToAddInCart={
            product_id:item._id,
            quantity:quantity,
            user_id:userData.uuid,
            price:item.price
        }
        if(!isExists){
            dispatch("addToCart", dataToAddInCart)
        }else{
            dispatch("updateCart",dataToAddInCart)
        }
        notification(item.productName)
    }else{  

        notificationError("please login first")
    }
}





    
  return (
    <>  
    <Toaster/>
        <div className='flex flex-col lg:flex-row items-center justify-center py-12 gap-x-8 gap-y-4 bg-gray-50'>
            <div className='flex gap-x-4 md:gap-x-8'>
                <div className='space-y-4 hover:cursor-pointer'>
                    {
                        item.image.map((subitem:imagesType, index:number)=>(
                            <div key={index} className=' w-14  md:w-28 ' onMouseOver={()=>setImageForPreviewOfSelected(subitem._key)}>
                                <Image height = {1000} width={1000} alt={subitem.alt} src={forUrl(subitem).width(1000).height(1000).url()}/>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[20rem] md:w-[40rem] flex flex-wrap-0'>
                    {
                        item.image.map((subitem:imagesType, index:number)=>{
                            if(subitem._key == imageForPriewOfSelected){
                                return(
                                    <div key={index}>
                                        <Image height={1000} width={1000} alt={subitem.alt} src={forUrl(subitem).width(1000).height(1000).url()}/>                                
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
            <div className="">
                <h2 className="scroll-m-20 pb-2 text-3xl tracking-tight transition-colors first:mt-0 text-slate-800">
                    {item.productName}
                </h2>
                <p className='text-xl font-[590px] text-gray-400'>{item.category[1]}</p>
                <div className=' mt-10' >
                    <p className=" font-semibold text-slate-900 text-normal mb-2 ">SELECT SIZE</p>
                    <div className='flex gap-x-3'>
                        
                        {
                            item.size.map((size:string,index)=>{
                                return(
                                    <div key={index} className='flex justify-center items-center w-10 h-10 hover:shadow-xl text-white rounded-full hover:cursor-pointer'>
                                        <p className='font-semibold text-slate-600 text-normal'>{size}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='mt-10 flex space-x-9 items-center'>
                    <div>
                        <p className='text-normal font-semibold  text-lg'>Quantity:</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-4'>
                        <div className='select-none flex text-lg  md:text-xl justify-center items-center h-9 w-9 bg-gray-100 rounded-full hover:cursor-pointer' onClick={handleDecrement}>-</div>
                        <p className='text-lg'>{quantity}</p>
                        <div className='select-none text-lg md:text-xxl flex justify-center border-[1px] border-black items-center h-9 w-9  rounded-full hover:cursor-pointer' onClick={handleIncrement}>+</div>
                    </div>
                </div>
                <div className='flex items-center gap-x-4 mt-8 '>
                    <Button onClick={handleAddToCart} className="rounded-none py-4 px-8  bg-slate-800 text-sm font-semibold ">
                        <ShoppingCart size={20} className="mr-2"/>
                        Add to Cart
                    </Button>
                    <h3 className='font-medium text-2xl'>
                        {"$"}{`${item.price}`}{".00"}
                    </h3>
                </div>
            </div>
        
        </div>
        <div>
        <div className="relative py-14 px-2 border-b border-gray-400">
          <h2 className="top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">Overview</h2>
          <p className="font-semibold text-xl">Product Information</p>
        </div>
        <div className="text-gray-600">
          <div className="flex px-2 py-4">
            <div className=" w-96">
              <h3 className="font-semibold">PRODUCT DETAILS</h3>
            </div>
                <p className='text-normal font-medium'>
                    <PortableText components={item.description} value={item.description}/>
                </p>
          </div>
          <div className="flex px-2 py-8">
            <div className="w-96">
              <h3 className="font-semibold">PRODUCT CARE</h3>
            </div>
            <ul className="pl-3 list-disc font-semibold text-gray-900">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16" />
    </>
  )
}

export default ProductDetail