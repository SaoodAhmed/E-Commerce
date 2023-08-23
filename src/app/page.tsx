
import HeroSection from './Componet01/views/Hero/HeroSection';
import Promotion from './Componet01/views/Promotion/Promotion';
import BASE_PATH_FOR_API from './Componet01/shared/BasePath';
import { responseType } from './Componet01/utils/ProductsDataArrayAndType';
import ProductCarousel from './Componet01/views/ProductCarousel/ProudctCarousel';
import Jwellery from './Componet01/views/Jwellry/Jwellery';
import Subscription from './Componet01/views/Subscription/Subscription';
import AllProductComponent from './Componet01/views/AllProduct';


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-17/data/query/production?query=*[_type == "product"]`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();

  
  return (
    <div>
      <HeroSection/>
      <Promotion/>
      <ProductCarousel ProductData={result}/>
      <Jwellery/>
      <Subscription/>
    </div>
  )
}
