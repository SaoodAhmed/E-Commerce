import ContextWrapper from "@/global/context";
import CartComp from "../Componet01/views/CartParent/CartChild";





async function fetchAllProductData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'product']`, {
     cache:'no-store',
  })
  return res.json()
}

console.log(fetchAllProductData())


const cart = async () => {
  let allProducts = await fetchAllProductData();
  return (
    
    <ContextWrapper>
      <CartComp allProducts={allProducts.result}/>
    </ContextWrapper>
    
    
  )
}

export default cart;
