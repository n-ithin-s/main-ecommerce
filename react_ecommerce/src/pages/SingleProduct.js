import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/SingleProduct.css';
function SingleProduct(){
    
function funhover1(){

    document.getElementById('single_product').style.background="url('/IMAGES/argentina-messi-jersey.webp')";
    document.getElementById('single_product').style.backgroundSize='100%'; 
    document.getElementById('single_product').style.backgroundRepeat='no-repeat'; 
}

function funhover2(){

    document.getElementById('single_product').style.background="url('/IMAGES/pic_argentina_new_lightblue.webp')";
    document.getElementById('single_product').style.backgroundSize='100%'; 
    document.getElementById('single_product').style.backgroundRepeat='no-repeat'; 

 
}

function funhover3(){

    document.getElementById('single_product').style.background="url('/IMAGES/pic_argentina_blue_new.jpg')";
    document.getElementById('single_product').style.backgroundSize='100%'; 
    document.getElementById('single_product').style.backgroundRepeat='no-repeat'; 
    document.getElementById('img1').src="/IMAGES/pic_argentina_blue_new.jpg"
document.getElementById('img2').src="/IMAGES/pic_argentina_blue_new2.jpg"


}

function funhover4(){
    document.getElementById('single_product').style.background="url('/IMAGES/pic_argentina_darkblue.webp')";
    document.getElementById('single_product').style.backgroundSize='100%'; 
    document.getElementById('single_product').style.backgroundRepeat='no-repeat'; 
    document.getElementById('img1').src="/IMAGES/pic_argentina_darkblue.webp"
document.getElementById('img2').src="/IMAGES/pic_argentina_darkblue2.webp"


}

function funhover5(){
    document.getElementById('single_product').style.background="url('/IMAGES/argentina-messi-jersey.webp')";
    document.getElementById('single_product').style.backgroundSize='100%'; 
    document.getElementById('single_product').style.backgroundRepeat='no-repeat'; 
    document.getElementById('img1').src="/IMAGES/argentina-messi-jersey.webp"
document.getElementById('img2').src="/IMAGES/pic_argentina_new_lightblue.webp "


}


    return(
      <>
      <Header/>
  <div className="space">
    <div className="row">
      <div className="col-lg-1" />
 

      <div className="col-lg-5">
        <div className="single_product bg-white  shadow " id="single_product">
          <div className="row">
            <div className="col-lg-auto ">
              <div
                className="position_div ms-2 mt-3"
                onMouseOver={funhover1}
                id="hover_div1"
              >
                <img
                  id="img1"
                  className="position_img"
                  src="/IMAGES/argentina-messi-jersey.webp"
                />
              </div>
              <div
                className="position_div mt-3 ms-2 "
                onMouseOver={funhover2}
                id="hover_div2"
              >
                <img
                  id="img2"
                  className="position_img"
                  src="/IMAGES/pic_argentina_new_lightblue.webp"
                />
              </div>
            </div>
            <div className="col-lg-5 ms-5 ">
              <a
                href="../CART/cart.html"
                className="cart_product d-flex justify-content-center "
              >
                <i
                  className="fa-solid fa-cart-shopping mt-1 me-1 "
                  style={{ color: "#fcfcfd" }}
                />
                ADD TO CART
              </a>
            </div>
            <div className="col-lg-5">
              <a
                href="../CHECKOUT/CHECKOUT.HTML"
                className="buy_product d-flex justify-content-center "
              >
                <i
                  className="fa-solid fa-bolt-lightning mt-1 me-1 "
                  style={{ color: "#f4f5f6" }}
                />
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>


      

     

      <div className="col-lg-5 ms-5 ">
        <div className="d-flex flex-column text-white  ">
          <div className="text-primary  fs-5 ">NIKE</div>
          <div className="fs-5 mt-2 ">
            Men Typography Polyester T Shirt (Multicolor, Pack of 1)
          </div>
          <div className="text-success mt-1 ">special price</div>
          <div className="d-flex mt-2 ">
            <span className="fs-3">$286</span>
            <span className="over ms-3 text-secondary mt-2 ">799</span>
            <span className="text-success ms-1 mt-2 ">56% off</span>
          </div>
          <div className="d-flex ">
            <a
              href=""
              className="rating text-success d-flex justify-content-center mt-2 "
            >
              <span className="text-white text-decoration-none ">
                4.8
                <i
                  className="fa-solid fa-star fa-xs ms-1 "
                  style={{ color: "#ffffff" }}
                />
              </span>
            </a>
            <span className="ms-2 mt-2 text-secondary ">
              2400 ratings and 500 reviews
            </span>
          </div>
          <div className="mt-5 d-flex ">
            <div className="fw-bold ">color</div>
            <div
              className="position_div ms-5 "
              onMouseOver={funhover3}
              id="hover_div3"
            >
              <img
                id="img3"
                className="position_img"
                src="/IMAGES/pic_argentina_blue_new.jpg"
              />
            </div>
            <div
              className="position_div ms-2"
              onMouseOver={funhover4}
              id="hover_div4"
            >
              <img
                id="img4"
                className="position_img"
                src="/IMAGES/pic_argentina_darkblue.webp"
              />
            </div>
            <div
              className="position_div ms-2"
              onMouseOver={funhover5}
              id="hover_div5"
            >
              <img
                id="img5"
                className="position_img"
                src="/IMAGES/argentina-messi-jersey.webp"
              />
            </div>
          </div>
          <div className="mt-5 d-flex ">
            <div className="fw-bold ">Size: </div>
            <div className=" ms-5 border p-1 border-secondary  ">
              {" "}
              <i className="fa-solid fa-m " style={{ color: "#fafcff" }} />
            </div>
            <div className=" ms-3 border p-1 border-secondary ">
              <i className="fa-solid fa-s" style={{ color: "#ffffff" }} />
            </div>
            <div className="ms-3 border p-1 border-secondary ">
              <i className="fa-solid fa-l" style={{ color: "#ffffff" }} />
            </div>
            <div className="ms-3 border p-1 border-secondary ">
              <i className="fa-solid fa-x" style={{ color: "#ffffff" }} />
              <i className="fa-solid fa-l" style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className="mt-4 fw-bold ">Available Offers</div>
          <div className="mt-3 ">
            <i className="fa-solid fa-tag" style={{ color: "#37c304" }} />
            Bank Offer10% Instant Discount on SBI Credit Card Txns, up to ₹1500,
            on orders of ₹5,000 and aboveT&amp;C
          </div>
          <div className="mt-3 ">
            <i className="fa-solid fa-tag" style={{ color: "#37c304" }} />
            Bank Offer10% Instant Discount on SBI Credit Card Txns, up to ₹1500,
            on orders of ₹5,000 and aboveT&amp;C
          </div>
          <div className="mt-3 ">
            <i className="fa-solid fa-tag" style={{ color: "#37c304" }} />
            Bank Offer10% Instant Discount on SBI Credit Card Txns, up to ₹1500,
            on orders of ₹5,000 and aboveT&amp;C
          </div>
          <div className="mt-3 ">
            <i className="fa-solid fa-tag" style={{ color: "#37c304" }} />
            Special PriceGet at flat ₹279T&amp;C
          </div>
          <div className="ms-3 text-primary">+5 more offers</div>
       
    </div>
  </div>
  </div>
  </div>



  <div className="mt-5 ">
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center display-4 fw-bold text-white  ">
        RELATED PRODUCTS
      </div>
    </div>
  </div>


  <div className="space">
    <div className="row " id="slide_first">
      <div className="col-lg-1"></div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/arg_polo_neck_nike.webp"
              />
            </a>
          </div>
          <div className="product_footer">
            <div className=" fw-bold text">Nike</div>
            <div className="">Men Topography Polo Neck....</div>
            <span>$286</span>
            <span className="over ms-3 text-secondary ">799</span>
            <span className="text-success ms-1 ">56% off</span>
            <div className="bg-primary mt-2">
              <a
                href="../../HTML/CART/cart.html"
                className="add_cart d-flex justify-content-center "
              >
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/barca_jerser_pedri.webp"
              />
            </a>
          </div>
          <div className="product_footer">
            <div className=" fw-bold text">Nike</div>
            <div className="">Men Topography Polo Neck....</div>
            <span>$286</span>
            <span className="over ms-3 text-secondary ">799</span>
            <span className="text-success ms-1 ">56% off</span>
            <div className="bg-primary mt-2">
              <a
                href="../../HTML/CART/cart.html"
                className="add_cart d-flex justify-content-center "
              >
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/manu_rono.webp"
              />
            </a>
          </div>
          <div className="product_footer">
            <div className=" fw-bold text">Nike</div>
            <div className="">Men Topography Polo Neck....</div>
            <span>$286</span>
            <span className="over ms-3 text-secondary ">799</span>
            <span className="text-success ms-1 ">56% off</span>
            <div className="bg-primary mt-2">
              <a
                href="../../HTML/CART/cart.html"
                className="add_cart d-flex justify-content-center "
              >
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/realmadrid_jersey.webp"
              />
            </a>
          </div>
          <div className="product_footer">
            <div className=" fw-bold text">Nike</div>
            <div className="">Men Topography Polo Neck....</div>
            <span>$286</span>
            <span className="over ms-3 text-secondary ">799</span>
            <span className="text-success ms-1 ">56% off</span>
            <div className="bg-primary mt-2">
              <a
                href="../../HTML/CART/cart.html"
                className="add_cart d-flex justify-content-center "
              >
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/mancity_jersey.webp"
              />
            </a>
          </div>
          <div className="product_footer">
            <div className=" fw-bold text">Nike</div>
            <div className="">Men Topography Polo Neck....</div>
            <span>$286</span>
            <span className="over ms-3 text-secondary ">799</span>
            <span className="text-success ms-1 ">56% off</span>
            <div className="bg-primary mt-2">
              <a
                href="../../HTML/CART/cart.html"
                className="add_cart d-flex justify-content-center "
              >
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




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
export default SingleProduct;
    
