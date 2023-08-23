import BASE_PATH_FOR_API from "../Componet01/shared/BasePath";
import AllProductComponent from "../Componet01/views/AllProduct";

async function fetchAllProductData(){
    const res = await fetch(`${BASE_PATH_FOR_API}/api/products?start=0&end=10`, {
        next: {
            revalidate: 120
        }
    });
    if(!res.ok){
        throw new Error("Failed to fetch")
    }

    return res.json()
}

const Products = async ()=>{
    const ProductData = await fetchAllProductData();
    return(
        <>
            <AllProductComponent ProductData = {ProductData}/>
        </>
    )
}
export default Products;