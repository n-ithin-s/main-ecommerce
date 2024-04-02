import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/About.css';
function About(){
    return(
        <>
        <Header/>
  <div className="space">
    <div className="row mt-5 ">
      <div className="col-lg-1 " />
      <div className="col-lg-5">
        <img className="RONO" src="/IMAGES/aboutus_pic2.jpg" />
      </div>
      <div className="col-lg-5 d-flex flex-column  justify-content-center align-items-center text-white ">
        <div className="fs-1 ">ABOUT US</div>
        <div className="small mt-3 ms-2 me-2 toalign">
          “Welcome to our online sports store! We offer a wide range of
          high-quality sports gear, apparel, and accessories to help you achieve
          your fitness goals. Our products are sourced from the top
          manufacturers in the world, such as Easton, Louisville Slugger,
          Wilson, Worth, Mizuno, Miken, Under Armour, Jugs, Adams, ATEC,
          Playmaker, TrueSports, and Bike. We specialize in sports equipment for
          baseball, softball, volleyball, basketball, cricket and football. We
          also offer custom screen printing of uniform names and numbers. Shop
          with us today and score big with our sports gear!”
        </div>
      </div>
    </div>
  </div>
  <div className="space">
    <div className="row mt-5 ">
      <div className="col-lg-1 " />
      <div className="col-lg-5 d-flex flex-column  justify-content-center align-items-center text-white ">
        <div className="fs-1 ">OUR VISION</div>
        <div className="small mt-3 ms-2 me-2 toalign">
          “Welcome to our online sports store! We offer a wide range of
          high-quality sports gear, apparel, and accessories to help you achieve
          your fitness goals. Our products are sourced from the top
          manufacturers in the world, such as Easton, Louisville Slugger,
          Wilson, Worth, Mizuno, Miken, Under Armour, Jugs, Adams, ATEC,
          Playmaker, TrueSports, and Bike. We specialize in sports equipment for
          baseball, softball, volleyball, basketball, cricket and football. We
          also offer custom screen printing of uniform names and numbers. Shop
          with us today and score big with our sports gear!”
        </div>
      </div>
      <div className="col-lg-5">
        <img className="RONO" src="/IMAGES/about_pic5.jpg" />
      </div>
    </div>
  </div>
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
            src="/IMAGES/messi_worldcup.jpg"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="/IMAGES/virat_social.avif"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="/IMAGES/de bruyne.jpg"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="/IMAGES/Dhoni_post_.jpg"
          />
        </div>
      </div>
      <div className="col-lg-auto col-sm-12 ">
        <div className="social_media border ">
          <img
            className="social_media_img border "
            src="/IMAGES/rono_real.webp"
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

export default About;