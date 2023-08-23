import { oneProductType, responseType } from '@/app/Componet01/utils/ProductsDataArrayAndType';
import Card from '@/app/Componet01/views/ProductCarousel/Card';
import React from 'react';


const fetchAllProductData = async ()=>{
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-17/data/query/production?query=*%5B_type%3D%3D%22product%22+%26%26+category%5B0%5D%3D%3D%22Male%22%5D+`,{
        next:{
            revalidate:60
        }
    });

    if(!res.ok){
        throw new Error("Failed to fetch")
    }

    return res.json();
}

const male = async ({params}:{params:{mtype:string}}) => {
    let res:responseType = await fetchAllProductData();
    if(params.mtype !=="Male"){
        let OriginalSortedData = res.result.filter((items:any)=>items.category[1] === params.mtype )
        res = {result:OriginalSortedData}
    }
  return (

        <div  className='flex flex-wrap justify-center md:justify-start ml-4 py-10'>

            {
            res.result.map((items:oneProductType, index:number)=>(
                    <Card key={index} singleProductData={items}/>
            ))
            }
        </div>
  )
}

export default male