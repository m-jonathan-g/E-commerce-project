import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
    subCategory: string;
    productionDate: string;
    images: { path: string}[];
}


export const ProductByCategory: React.FC = () => {
  
    const { category, subCategory } = useParams<{category:string; subCategory?:string}>()
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await axios.get(`http://localhost:2000/api/products`, {
                    params: { category: category, subCategory: subCategory}
                })

                setProducts(response.data.products)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, [category, subCategory])
  
    return (
    <div>
        <Navbar/>
        <h1>BLUE FARM'S {category?.toUpperCase()} MENU</h1>
        <h3>  {subCategory? ` ${subCategory.toUpperCase()}` : ''} SELECTION</h3>
        <div className="product-list">
        {products.map(product => (
            <div key={product.name} className="product-item">
                <h2>{product.name}</h2>
                {product.images.length > 0 && (
                    <img src={`http://localhost:2000/${product.images[0].path}`} alt={product.name} />
                )}
                <p>{product.description}</p>
                <p>Price(Kshs): {product.price}</p>
               
            </div>     
        ))}
        </div>
        <Link to={'/menu'} >Back to Main Menu</Link>
    </div>
  )
}
