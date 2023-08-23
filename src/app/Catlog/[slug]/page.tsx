import BASE_PATH_FOR_API from '@/app/Componet01/shared/BasePath'
import { oneProductType, responseType } from '@/app/Componet01/utils/ProductsDataArrayAndType'
import ProductDetail from '@/app/Componet01/views/ProductDetailPage'
import ContextWrapper from '@/global/context'
import React, { FC } from 'react'



// metadata genrator
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const product = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-17/data/query/production?query=*[_type=="product"]`).then((res:any)=>res.json())

  const titleToSet: oneProductType = product.result.find((item: oneProductType) => item.slug.current == slug);

  return {
      title: titleToSet.productName,
      description: titleToSet.description,
  };
}


// fetch particular data of product using slug
async function fetchPreviewData(slug: string) {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-17/data/query/production?query=*%5B_type%3D%3D%22product%22+%26%26+slug.current%3D%3D%22${slug}%22%5D+`)
  return res.json();
};



// will make static pages of every product
export async function generateStaticParams() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'product']`, {
    next: {
          revalidate: 60
      }
  }).then((res: any) => res.json())
  return res.result.map((item: oneProductType) => { slug: item.slug });
};






const Catlog:FC<{params:{slug:string}}> = async  ({params}) => {
  const res:responseType = await fetchPreviewData(params.slug)
  return (
    <ContextWrapper>
        <ProductDetail item={res.result[0]}/>
    </ContextWrapper>
  )
}

export default Catlog;