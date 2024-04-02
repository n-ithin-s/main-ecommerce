import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { useContext } from 'react';
import '../style/Shop.css';
import { SearchContext } from '../components/Header'; // Import the SearchContext

function Shop(){


  const [products, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Make a GET request to fetch product details from the API
        const response = await axios.get('http://127.0.0.1:8000/api/product/');
        // Assuming the API returns the product details in response.data
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        // Handle any errors that occur during the request
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct(); // Call the fetchProduct function when the component mounts

    // Clean-up function to cancel any pending requests if the component unmounts
    return () => {
      // Cancel any pending axios requests here if needed
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render




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

    return(
        <>
        <Header products={products} addToCart={addToCart} />
  <div className="box border-0 border-dark ">
    <div className="row">
      <div className="col-lg-12 col-sm-12  d-flex justify-content-center ">
        <div className="mt-5 display-5  fw-bold text-white">
          GET YOUR SPORTS GEAR NOW{" "}
        </div>
      </div>
    </div>
    <div className="row ">
      <div className="col-lg-12 col-sm-12  d-flex justify-content-center ">
        <div className=" mt-4 d-flex justify-content-center">
          <a className="shop_now fs-5 fw-bold " href="../SHOP/ALLPRODUCTS.HTML">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="space ">
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col d-flex align-items-center ">
       
      </div>
    </div>
  </div>
  {/*NEXT ROW*/}
  <div className="space">
    <div className="row " id="slide_first">
      <div className="col-lg-1"></div>

      <div className="wrapp">
      {products && products.map((product)=>(
        <div className="col-lg-auto col-sm-12 mt-4 ms-5" key={product.id}>
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
            {isAuthenticated?( <button className="add_cart d-flex justify-content-center" onClick={() => addToCart(product)}>
                <small className="cartcss">Add to cart</small>
               </button>):
           (<p>Please <Link to="/LOGIN"><span className='text-danger'>login</span></Link> to add items to  cart.</p>)}
            </div>
          </div>
        </div>
      </div>

      ))}
      </div>


      </div>
      </div>

      
  {/*NEXT ROW*/}
  <div className="space">
    <div className="row">
      <div className="col-lg-12 col-sm-12  d-flex justify-content-center display-5 fw-bold text-white ">
        SOCIAL MEDIA POSTS
      </div>
    </div>
  </div>
  <div className="mt-5 ">
    <div className="row mt-5">
      <div className="col-lg-1"></div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="../../IMAGES/messi_worldcup.jpg"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="../../IMAGES/virat_social.avif"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="../../IMAGES/de bruyne.jpg"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="../../IMAGES/Dhoni_post_.jpg"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="../../IMAGES/rono_real.webp"
          />
        </div>
      </div>
    </div>
  </div>
  {/*next row(last)*/}
  <div className="space text-white  ">
    <div className="row ">
      <div className="col-lg-auto  "></div>
      <div className="col-lg-4 col-sm-12 d-flex flex-column  align-items-center gap-2  ">
        <div className="display-4 fw-bold mt-5">Customer</div>
        <div className="display-4 fw-bold ">Reviews</div>
      </div>
      <div className="col-lg-3 col-sm-12">
        <div className="">
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
        </div>
        <div className="toalign ">
          “I recently purchased a pair of running shoes from N-SPORTS online
          store and I couldn’t be happier with my purchase. The website was easy
          to navigate and the checkout process was quick and seamless. The shoes
          arrived within a week and were exactly what I was looking for. I would
          definitely recommend N-SPORTS online store to anyone looking for
          quality athletic gear.”
        </div>
        <div className="mt-1 fw-bold ">Sreeram kk, Palakkad</div>
      </div>
      <div className="col-lg-auto  "></div>
      <div className="col-lg-auto  "></div>
      <div className="col-lg-3 col-sm-12">
        <div className="">
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
          <i className="fa-solid fa-star " style={{ color: "#a48104" }} />
        </div>
        <div className="toalign  ">
          “I recently purchased a pair of running shoes from N-SPORTS online
          store and I couldn’t be happier with my purchase. The website was easy
          to navigate and the checkout process was quick and seamless. The shoes
          arrived within a week and were exactly what I was looking for. I would
          definitely recommend N-SPORTS online store to anyone looking for
          quality athletic gear.”
        </div>
        <div className="mt-1 fw-bold ">Sreeram kk, Palakkad</div>
      </div>
      <div className="col-lg-1 col-sm-12"></div>
    </div>
  </div>
  <Footer/>
</>

    )
}
export default Shop;