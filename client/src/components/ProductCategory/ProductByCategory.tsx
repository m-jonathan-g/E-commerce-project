import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useCart } from "../../context/CartContext";
import './ProdbyCat.css'
import { useAuth } from "../../context/AuthContext";


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
    const { addToCart } = useCart()
    const {isLoggedIn} = useAuth()
    const navigate = useNavigate()

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

    const handleAddToCart = (product: Product) =>{
        if (isLoggedIn) {
            addToCart(product)
        } else {
            alert('Log in to add items to your cart')
            navigate('/login')
        }
    }
  
    return (
    <div>
        <Navbar/>
        <div className="product-container">
        <h1>BLUE FARM'S {category?.toUpperCase()} MENU</h1>
        <h3>  {subCategory? ` ${subCategory.toUpperCase()}` : ''} SELECTION</h3>
        <div className="product-grid">
        {products.map(product => (
            <div key={product.name} className="product-item">
                <h2 className="pdct-name">{product.name}</h2>
                {product.images.length > 0 && (
                    <img src={`http://localhost:2000/${product.images[0].path}`} alt={product.name} className="product-image"/>
                )}
                <p className="description">{product.description}</p>
                <p className="price">Price(Kshs): {product.price}</p>
                <button onClick={()=> handleAddToCart(product)}>Add to cart</button>
            </div>     
        ))}
        </div>
       
        </div>
        <Link to={'/menu'} className="link"><span className="link-span">Back to Main Menu</span></Link>
        </div>
    
  )
}
