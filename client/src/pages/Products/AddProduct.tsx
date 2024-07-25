import React, { useState } from 'react'
import axios from 'axios';
import './AddProduct.css'
import { Link } from 'react-router-dom';


interface ProductType {
  name:string;
  description: string;
  price: number;
  category: string;
  subCategory: string;
  productionDate: Date;
  images: File[];
}

export const AddProduct: React.FC = () => {

  const [product, setProduct] = useState<ProductType>({
    name: '',
    description: '',
    price: 0,
    category: '',
    subCategory: '',
    productionDate: new Date(),
    images: [],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'price') {
      setProduct({ ...product, [name]: parseInt(value, 10) })
    } else {
      setProduct({ ...product, [name]: value });
    }
   
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setProduct({ ...product, images: Array.from(files)});
    }
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('category', product.category);
    formData.append('subCategory', product.subCategory);
    formData.append('productionDate', product.productionDate.toISOString());
    product.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('http://localhost:2000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }) 
      console.log(response.data)
      
      setProduct({
        name: '',
        description: '',
        price: 0,
        category: '',
        subCategory: '',
        productionDate: new Date(),
        images: [],
      })

    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='add-product body'>
      <div>
        <div className='addproduct-logo'>
          <img src="/bluefarm logo.png" alt="" className='img' />
        </div>
      <h1 className='h1'>Add New Product</h1>
      <form className='product-form'  onSubmit={handleSubmit}>
        <label>
          Name:
          <input
             type='text'
             name='name'
             value={product.name}
             onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
             type='text'
             name='description'
             value={product.description}
             onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price($):
          <input
             type='number'
             name='price'
             value={product.price}
             onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
             type='text'
             name='category'
             value={product.category}
             onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sub-category:
          <input
             type='text'
             name='subCategory'
             value={product.subCategory}
             onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Production Date:
          <input
             type='date'
             name='productionDate'
             value={product.productionDate.toISOString().split( 'T') [0]}
             onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
             type='file'
             name='images'
             onChange={handleFileChange}
             multiple
          />
        </label>
        <br />
        <button type='submit'>Create Product</button>
        <p><Link to={'/home'} className='link'>Back to Home</Link></p>
      </form>
      
      </div>
    </div>
  )
}

