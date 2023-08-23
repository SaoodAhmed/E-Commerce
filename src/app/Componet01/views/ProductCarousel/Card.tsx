import { FC } from "react";
import { oneProductType } from "../../utils/ProductsDataArrayAndType";
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../../../../sanity/lib/client";
import Image from "next/image";
import { Product } from "../../../../../sanity/Product";
import PortableText from "react-portable-text";
import Link from "next/link";

const builder = imageUrlBuilder(client)

function urlFor(source:any){
    return builder.image(source)
}

const Card:FC<{singleProductData:oneProductType}> = ({singleProductData})=>{

    return (
           <div className="max-w-sm min-w-[24rem] select-none space-y-3 py-8 px-2 md:px-4">
                <div className="w-86 "> 
                    <Image className=" object-cover" height={1000} width={1000}  src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt}/>
                </div>
                <div className="font-semibold text-slate-600 space-y-1 text-lg">
                <Link href={`/Catlog/${singleProductData.slug.current}`}> 
                    <h6>{singleProductData.productName}</h6>
                    {/* <p><PortableText className="text-sm" content = {singleProductData.description}/></p> */}
                    <h6 className="text-gray-500">${singleProductData.price}</h6>
                </Link>
                </div>
            </div>
        
    )

}

export default Card;