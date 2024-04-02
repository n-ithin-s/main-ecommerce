import Footer from "../components/Footer"
import Header from "../components/Header"

function Contact(){
    return(
        <>
        <Header/>
  {/* contactUs main sec */}
  <div className="mt-5">
    <div className="container text-white ">
      <div className="d-flex flex-column align-items-center ">
        <h1 className="display-1 text-black fw-bold py-5">Contact Us</h1>
      </div>
      <div className="text-center  contact_us_img">
        <img
          className="contact_us_img"
          src="/IMAGES/contactus_pic7.jpg"
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="h3 fw-bold text-decoration-underline text-center">
          Connect with Us
        </div>
        <p className="pt-3 text-center lead fw-bold">
          Fill out the form bellow and we will contact you as soon as possible !
        </p>
        <form action="" className="">
          <div className="row">
            <div className="col-md-6">
              <div className="py-5 px-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-0 border-bottom border-2 border-dark form-control rounded-0 px-0"
                />
              </div>
              <div className="py-5 px-5 ">
                <select
                  placeholder="Your Email"
                  className="border-0  border-bottom border-2 border-dark form-select  rounded-0 px-0"
                >
                  <option value="">Choose Topic</option>
                  <option value="">About shopping</option>
                  <option value="">About Services</option>
                  <option value="">About pricing</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="py-5 px-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-0 border-bottom border-2 border-dark form-control rounded-0 px-0"
                />
              </div>
              <div className="py-5 px-5">
                <input
                  type="email"
                  placeholder="Message"
                  className="border-0 border-bottom border-2 border-dark form-control rounded-0 px-0"
                />
              </div>
              <div className="px-5 py-3 d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-dark text-dark  bg-primary fw-bold   py-2 px-5 rounded-pill "
                >
                  SEND
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* featured products */}
  <div className="container">
    <h1 className="py-5 text-center text-white ">Featured Products</h1>
    <div className="row ">
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/neymar_braz.webp"
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
              <a href="#" className="add_cart d-flex justify-content-center ">
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto">
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
              <a href="#" className="add_cart d-flex justify-content-center ">
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/messi_arg_3.webp"
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
              <a href="#" className="add_cart d-flex justify-content-center ">
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto "></div>
      <div className="col-lg-auto">
        <div className="product_featured border-2  ">
          <div className="messi_jersey ">
            <a href="#">
              {" "}
              <img
                className="messi_jersey_img"
                src="/IMAGES/rono_port_1.webp"
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
              <a href="#" className="add_cart d-flex justify-content-center ">
                <small>Add to cart</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* costomer reviews */}
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
export default Contact