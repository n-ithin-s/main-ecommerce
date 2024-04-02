import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { useContext } from 'react';

function Product() {
    const [products, setProducts] = useState([]);
    const { CategoryName } = useParams();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/product/');
                console.log('Response data:', response.data); // Log response data for debugging
                const filteredProducts = response.data.filter(product => product.category_name === CategoryName);
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    }, [CategoryName]);
    
    // Function to handle adding a product to the cart
    const addToCart = (product) => {
        // Retrieve existing cart items from localStorage or initialize an empty array
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the product already exists in the cart
        const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If the product already exists, update its quantity
            existingCartItems[existingProductIndex].quantity++;
        } else {
            // If the product doesn't exist, add it to the cart with a quantity of 1
            existingCartItems.push({ ...product, quantity: 1 });
        }

        // Save the updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

        // Redirect to the cart page
        window.location.href = '/CART';
    };
 
    return (
        <>
            <Header />
            <div className='space'>
            <div className='d-flex justify-content-around text-white flex-wrap ms-5 me-5 '>
                {products.map(product => (
                    <div className="col-lg-auto col-sm-12 mt-5" key={product.id}>
                    <div className="product_featured border-2  ">
                      <div className="messi_jersey ">
                        <a href="../../HTML/SINGLE PRODUCT/SINGLEPRODUCT.HTML">
                          {" "}
                          <img
                            className="messi_jersey_img"
                            src={product.image}
                          />
                        </a>
                      </div>
                      <div className="product_footer">
                        <div className=" fw-bold text">{product.name}</div>
                        <div className="">{product.description}</div>
                        <span>{product.price}</span>
                        <span className="over ms-3 text-secondary ">799</span>
                        <span className="text-success ms-1 ">56% off</span>
                        <div className="bg-primary mt-2">
                         {/* Add an onClick event handler to call addToCart function */}
                         {isAuthenticated?( <button className="add_cart d-flex justify-content-center" onClick={() => addToCart(product)}>
                                    <small>Add to cart</small>
                                </button>):
                                (<p>Please <Link to="/LOGIN"><span className='text-danger'>login</span></Link> to add items to  cart.</p>)}
                            </div>
                        </div>
                      </div>
                    </div>
               
            
                ))}
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;


