import '../style/Footer.css';
function Footer(){
    return(
        <>
  {/*footer*/}
  <div className="space">
  <div className="newsletter  bg-secondary ">
    <div className="row pt-5 ">
      <div className="col-lg-1 col-sm-12"></div>
      <div className="col fs-1  ">
        <div className="mt-5 ">JOIN OUR NEWSLETTER</div>
      </div>
    </div>
    <div className="row mt-5 ">
      <div className="col-lg-1 "></div>
      <div className="col-lg-6 col-sm-12">
        <div className="">
          <input
            className="email bg-secondary "
            type="email"
            placeholder="YOUR EMAIL"
          />
        </div>
      </div>
      <div className="col ">
        <div className="mt-2 mt-lg-0">
          <a className="subscribe fs-5 fw-bold text-dark " href="">
            <small>Subscribe</small>
          </a>
        </div>
      </div>
    </div>
    <div className="row mt-3 ">
      <div className="col-lg-1 "></div>
      <div className="col d-flex ">
        <div className="me-4 ">
          <i
            className="fa-brands fa-facebook fa-lg"
            style={{ color: "#000205" }}
          />
        </div>
        <div className="me-4 ">
          <i
            className="fa-brands fa-square-instagram fa-lg"
            style={{ color: "#01060e" }}
          />
        </div>
        <div className="me-4 ">
          <i
            className="fa-brands fa-twitter fa-lg"
            style={{ color: "#000000" }}
          />
        </div>
      </div>
    </div>
  </div>

  <div className="footer mt-4 pb-4 ">
    <div className="row  text-white ">
      <div className="col-lg-1"></div>
      <div className="col text-white ">
        <small>
          {" "}
          <i className="fa-solid fa-copyright" style={{ color: "#f7f7f8" }} />
          2023 All Rights Reserved
        </small>
      </div>
      <div className="col-lg-6"></div>
      <div className="col-lg-auto col-sm-12">
        <a href="#" className="text-decoration-none text-white ">
          {" "}
          Help&amp;Info
        </a>
      </div>
      <div className="col-lg-auto col-sm-12">
        <a href="#" className="text-decoration-none text-white ">
          {" "}
          Terms&amp;Privacy
        </a>
      </div>
      <div className="col-lg-auto "></div>
    </div>
  </div>
  </div>
</>

    )
}

export default Footer;