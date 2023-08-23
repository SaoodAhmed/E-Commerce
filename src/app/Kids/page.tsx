import { NextResponse } from "next/server";
import { oneProductType, responseType } from "../Componet01/utils/ProductsDataArrayAndType";
import Card from "../Componet01/views/ProductCarousel/Card";


const fetchAllProductsData = async ()=>{
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-17/data/query/production?query=*%5B_type%3D%3D%22product%22+%26%26+category%5B0%5D%3D%3D%22Kids%22%5D+`,{
    next:{
        revalidate:60    }
   })

   if(!res.ok){
    throw new Error("Failed to fetch")
   }
   return res.json();

}


const Kid = async ({params}:{params:{Kids:string}})=>{
    const res:responseType = await fetchAllProductsData()

    return (
        <div className="flex flex-wrap justify-center md:justify-start ml-4 py-10">
            {
                res.result.map((items:oneProductType, index:number)=>{
                    return(
                        <Card key={index} singleProductData={items} />
                    )
                })
            }
        </div>
    )

}
export default Kid;