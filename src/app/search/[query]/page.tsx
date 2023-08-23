import React from 'react'
import { client } from '../../../../sanity/lib/client'
import { oneProductType } from '@/app/Componet01/utils/ProductsDataArrayAndType';
import Card from '@/app/Componet01/views/ProductCarousel/Card';



const fetchSearchedData = async ()=>{

  let response = await client.fetch(`*[_type == "product"]`);
  return response
}

const SearchQuery = async ({params}:{params:{query:string}}) => {
  let slug = (params.query).toLowerCase()
  let Data = await fetchSearchedData();
  let dataToMap = await Data.filter((item: oneProductType) => {
    if ((item.productName).toLowerCase().indexOf(slug) >= 0) {
        return true
    }
    return false
});
  return (
    <div
            className="flex flex-wrap justify-center md:justify-start ml-4 py-10"
        >
            {dataToMap && dataToMap.map((items: oneProductType, index: number) => (
                <Card key={index} singleProductData={items} />
            ))}
        </div>
  )
}

export default SearchQuery;