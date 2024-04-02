import React, { useEffect, useState } from 'react';
import '../style/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link,  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Home() {
  // const baseURL="http://127.0.0.1:8000/api/category/";
  const [get,setGet]=useState();
  const navigate= useNavigate()
  const token1 = sessionStorage.getItem("token");
  console.log('token is',token1);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/category/');
        setGet(response.data);
        console.log(get);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
  }, []);

  const handlecategory=(CategoryName)=>{
    navigate(`/PRODUCT/${CategoryName}`)
  }
  
  const [slideClasses, setSlideClasses] = useState({
    slide: '',
    slide_new: '',
    slide_third: ''
  });

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 250) {
        setSlideClasses(prevState => ({
          ...prevState,
          slide: 'slideUp'
        }));
      } else {
        setSlideClasses(prevState => ({
          ...prevState,
          slide: ''
        }));
      }

      if (scrollTop > 450) {
        setSlideClasses(prevState => ({
          ...prevState,
          slide_new: 'slideUp'
        }));
      } else {
        setSlideClasses(prevState => ({
          ...prevState,
          slide_new: ''
        }));
      }

      if (scrollTop > 850) {
        setSlideClasses(prevState => ({
          ...prevState,
          slide_third: 'slideUp'
        }));
      } else {
        setSlideClasses(prevState => ({
          ...prevState,
          slide_third: ''
        }));
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



return(

        <>
        <Header />
  {/*next row*/}
  <div className="mt-5 " >
    <div className="box13 border-0 border-dark ">
      <div className="slide1 slide active " ></div>
      <div className="slide2 slide" ></div>
      <div className="slide3 slide" ></div>
      <div className="row ">
        <div className="col-lg-auto " />
        <div className="col-lg-auto " />
        <div className="col-lg-5 d-flex flex-column align-items-center  col-sm-12">
          <div className="shop display-5  fw-bolder text-primary ">
            “Shop the Best Sports Gear
          </div>
          <div className="shop_next display-5 fw-bolder text-primary ">
            for your active life style"
          </div>
          <div className="small mt-3 ms-2 me-2 text-secondary toalign">
            “Welcome to our online sports store! We offer a wide range of
            high-quality sports gear, apparel, and accessories to help you
            achieve your fitness goals. Our products are sourced from the top
            manufacturers in the world, such as Easton, Louisville Slugger,
            Wilson, Worth, Mizuno, Miken, Under Armour, Jugs, Adams, ATEC,
            Playmaker, TrueSports, and Bike. We specialize in sports equipment
            for baseball, softball, volleyball, basketball, cricket and
            football. We also offer custom screen printing of uniform names and
            numbers. Shop with us today and score big with our sports gear!”
          </div>
          <div className=" mt-4 d-flex justify-content-center">
            <a
              className="shop_now fs-5 fw-bold "
              href="../SHOP/ALLPRODUCTS.HTML"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*next row*/}

  <div className="space">
    <div className="row text-white ">
      <div className="col-lg-12 col-sm-12 d-flex justify-content-center ">
        <div className="why display-4 fw-bold mt-1 ">WHY SHOP WITH US</div>
      </div>
    </div>
{/*slide*/} 
     <div className={`row gap-3 gap-lg-0 text-white ${slideClasses.slide}`}>  
      <div className="col-lg-auto  "></div>
      <div className="col-lg-2 col-sm-12 text-white ">
        <div id="">
          <img className="product_range" src="/IMAGES/product_range.jpg" />
        </div>
        <div className="fs-5 mt-2  fw-bold ">Wide Range Of Products</div>
        <div className="toalign small mt-1 ">
          we offer a wide range of sports products,including equipment, apparel
          and accessories to cater all your sports needs.
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto  "></div>
      <div className="col-lg-2 col-sm-12">
        <div id="">
          <img
            className="product_range"
            src="/IMAGES/quality-product.jpg"
          />
        </div>
        <div className="fs-5 mt-2  fw-bold ">Quality Products</div>
        <div className="toalign small mt-1 ">
          All of our products are of high quality and are sourced from trusted
          brands,ensuring that you get best value for money.
        </div>
      </div>
      <div className="col-lg-auto col-sm-12"></div>
      <div className="col-lg-auto  "></div>
      <div className="col-lg-2 col-sm-12">
        <div className="">
          <img
            className="product_range"
            src="/IMAGES/Competitive_Pricing.webp"
          />
        </div>
        <div className="fs-5 mt-2  fw-bold ">Competitive Pricing</div>
        <div className="toalign small mt-1 ">
          we offer Competitive pricing on all our products, so you can be sure
          that you are getting the best deal.
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto  "></div>
      <div className="col-lg-2 col-sm-12">
        <div className="">
          <img
            className="product_range"
            src="/IMAGES/fast and reliable shipping2.png"
          />
        </div>
        <div className="fs-5 mt-2  fw-bold ">Fast And Reliable Shipping</div>
        <div className="toalign small mt-1 ">
          we offer fast and reliable shipping so you can get your products
          delivered to your door step in no time.
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto  "></div>
      <div className="col-lg-2 col-sm-12">
        <div className="">
          <img
            className="product_range"
            src="/IMAGES/customer_service.jpg"
          />
        </div>
        <div className="fs-5 mt-2  fw-bold ">Excellent Customer Service</div>
        <div className="toalign small mt-1 ">
          Our Customer Service team is always ready to assist you with any
          queries or concerns you may have.
        </div>
      </div>
    </div>
  </div>
  {/*slide*/}


  <div className={`row ${slideClasses.slide_new}`}>
    <div className="row  text-white mt-5">
      <div className="col-lg-1  "></div>
      <div className="col-lg-3 col-sm-12 gap-4  ">
        <div className="mt-3 fs-3 fw-bold mb-4 ">
          N-SPORTS- Your One-Stop Shop for Athletic Gear
        </div>
        <div className="n_sports">
          N-Sports offers a wide range of high-quality athletic gear for men and
          women. Our product portfolio includes everything from running shoes
          and workout clothes to sports equipment and accessories. 
        </div>
        <div className="mt-4 ms-lg-5 ms-0 mb-3 mb-lg-0 ">
          <Link className="shop_now fs-5 fw-bold " to='/SHOP'>
            Shop Now
          </Link>
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto  "></div>


    

      {get && get.map(item=>(
        <div key={item.id} className="col-lg-auto">
        <div className="product_featured border-3 rounded-3 ">
          <div className="messi_jersey ">
            <Link to={`/PRODUCT/${item.name}`} onClick={() => handlecategory(item.name)} >
              {" "}
              <img
                className="messi_jersey_img "
                src={item.image}
              />
            </Link>
          </div>
          <div className="product_footer">
            <div className=" fw-bold text">{item.name}</div>
            <div className="">{item.description}</div>
           
          </div>
        </div>
      </div>
      ))}
   
      
        </div>
      </div>
   




  {/*slider ends*/}
  {/*next row*/}
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
export default Home;