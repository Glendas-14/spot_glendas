import { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";
import Product from "./ProduitDetail";



interface Product {
    title : string ;
    price : number;
    id: number;
    images: string;
    properties : string;
}

const ProductsList : React.FC = () => {
    const[products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string| null >(null);

useEffect(() =>{
    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('http://http://localhost:3000/products');
            setProducts(response.data);  
        } catch (err : any) {
            setError(err.message);
        }
    };
    fetchProducts();
}, [])

if(error){
    return <div>erreur: (error)</div>;
}
return(
    <>
    <div>
        <div>
            {products.map((product) => (
                <a href="" key={product.id}>
                    <img src={product.images} alt="" />
                    <h2>{product.title} </h2>
                    <div>{product.price} </div>
                </a>                                      
            ))}
        </div>
    </div>
</>
)
  
};
export default ProductsList

