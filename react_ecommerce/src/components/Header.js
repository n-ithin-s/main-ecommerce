import '../style/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext} from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { useState } from 'react';



function Header({ products,  addToCart }) {

  function fun(){
    document.getElementById('hide').style.display="block";
    document.getElementById("bar").style.display="none";
    document.getElementById("close").style.display="block";
  }
  function fun2(){
    document.getElementById('hide').style.display="none";
    document.getElementById("close").style.display="none";
    document.getElementById("bar").style.display="block";
    
  }
  const navigate = useNavigate();
  const { isAuthenticated, userName, logout,userId } = useContext(AuthContext);



  const handleLogout = () => {
    axios.get(`http://localhost:8000/api/user/logout/${userId}`)
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phone');
  
    logout();
    navigate('/');
  };

  function handleCart() {
    isAuthenticated ? navigate('/CART') : promptLogin();
  }
  
  function promptLogin() {
    alert("PLEASE LOG IN TO VIEW CART");
    navigate('/LOGIN');
  }




  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      const filteredProducts = products.filter(product =>
          product.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(filteredProducts);
  };




 
  return (
    <>
      <div className="nav_black shadow d-none d-lg-block w-100 top-0">
        <div className="row mt-3">
          <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
            <img className="logo" src="/IMAGES/sports-logo3-removebg-preview.png" />
          </div>
          <div className="col-lg-4 col-sm-12">


          <div className="search mt-2">
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }} />
                        <input
                            className="ms-2"
                            type="text"
                            placeholder="Search for products, brands and more"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>


          </div>
          <div className="col-lg-auto "></div>
          <div className="col-lg-auto "></div>
          <div className="col-lg-auto col-sm-12">
            <div className="mt-2">
              <Link className="nav small  text-decoration-none  " to="/">
                HOME
              </Link>{" "}
            </div>
          </div>
          <div className="col-lg-auto col-sm-12">
            <div className="mt-2">
              <Link className="nav small  text-decoration-none " to="/SHOP">
                SHOP
              </Link>{" "}
            </div>
          </div>
          <div className="col-lg-auto col-sm-12">
            <div className="mt-2">
              <a className="nav small  text-decoration-none  " href="#">
                SALES
              </a>{" "}
            </div>
          </div>
          <div className="col-lg-auto col-sm-12">
            <div className="mt-2">
              <Link className="nav  small  text-decoration-none " to="/ABOUT">
                ABOUT US
              </Link>{" "}
            </div>
          </div>
          <div className="col-lg-auto col-sm-12">
            <div className="mt-2">
              <Link className="nav small  text-decoration-none " to="/CONTACT">
                CONTACT
              </Link>{" "}
            </div>
          </div>


          {isAuthenticated ? (
            <>
              <div className="col-lg-auto col-sm-12" onMouseOver={(e) => e.currentTarget.querySelector('.dropdown-menu').style.display = 'block'} onMouseLeave={(e) => e.currentTarget.querySelector('.dropdown-menu').style.display = 'none'}>
                <div className="mt-2 text-warning " style={{ cursor: 'pointer' }}>
                  Welcome, {userName}!
                  <div className="dropdown-menu" style={{ display: 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', zIndex: 1 }}>
                    <Link className="dropdown-item" to="/PROFILE" style={{ padding: '10px 20px', color: '#333', textDecoration: 'none' }}>Profile</Link>
                    <Link className="dropdown-item" to="/MYORDER" style={{ padding: '10px 20px', color: '#333', textDecoration: 'none' }}>My Orders</Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={handleLogout} style={{ padding: '10px 20px', color: '#333', cursor: 'pointer' }}>Logout</a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-auto col-sm-12">
                <div className="mt-2">
                  <Link className="nav small  text-decoration-none " to="/REGISTER">
                    REGISTER
                  </Link>{" "}
                </div>
              </div>

              <div className="col-lg-auto col-sm-12">
                <div className="mt-2">
                  <Link className="nav  small  text-decoration-none " to="/LOGIN">
                    LOGIN
                  </Link>{" "}
                </div>
              </div>
            </>
          )}

          

          <div className="col-lg-auto col-sm-12">
            <div className="mt-1">
              <a >
                <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "#a3a3a3" }} onClick={handleCart} />
              </a>
            </div>
          </div>
        </div>


        <div className="row">
                {searchResults.map(product => (
                    <div className="col-lg-auto col-sm-12 mt-4 ms-5" key={product.id}>
                        <div className="product_featured border-2">
                            <div className="messi_jersey">
                                <a href="../../HTML/SINGLE PRODUCT/SINGLEPRODUCT.HTML">
                                    <img
                                        className="messi_jersey_img"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </a>
                            </div>
                            <div className="product_footer">
                                <div className="fw-bold text">{product.name}</div>
                                <div>{product.description}</div>
                                <span>{product.price}</span>
                                <span className="over ms-3 text-secondary">799</span>
                                <span className="text-success ms-1">56% off</span>
                                <div className="bg-primary mt-2">
                                    {isAuthenticated ? (
                                        <button className="add_cart d-flex justify-content-center" onClick={() => addToCart(product)}>
                                            <small className="cartcss">Add to cart</small>
                                        </button>
                                    ) : (
                                        <p>Please <Link to="/LOGIN"><span className='text-danger'>login</span></Link> to add items to cart.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




      </div>


      {/*next nav*/}
      <div className="nav_black shadow d-block d-lg-none w-100 top-0">
        <div className="row mt-3">
          <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-between">
            <img className="logo" src="../IMAGES/sports-logo3-removebg-preview.png" />
            <i
              className=" fa-solid fa-bars fa-lg  me-4 me-lg-0"
              style={{ color: "#f1f2f4" }}
              id="bar"
              onClick={fun}
            />
            <i className="fa-solid fa-x  me-4 me-lg-0" style={{ color: "#ffffff" }} id="close" onClick={fun2} />
          </div>
          <div className="" id="hide">
            <div className="col-lg-4 col-sm-12">
              <div className="search  mt-2  ">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }} />
                <input className="ms-2 " type="text" placeholder="Search for products, brands and more" />
              </div>
            </div>
            <div className="col-lg-2 "></div>
            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <Link className="nav small  text-decoration-none  " to="/">
                  HOME
                </Link>{" "}
              </div>
            </div>
            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <Link className="nav small  text-decoration-none " to="/SHOP">
                  SHOP
                </Link>{" "}
              </div>
            </div>
            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <a className="nav small  text-decoration-none  " href="#">
                  SALES
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <Link className="nav  small  text-decoration-none " to="/ABOUT">
                  ABOUT US
                </Link>{" "}
              </div>
            </div>
            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <Link className="nav small  text-decoration-none " to="/CONTACT">
                  CONTACT
                </Link>{" "}
              </div>
            </div>

            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <Link className="nav small  text-decoration-none " to="/REGISTER">
                  REGISTER
                </Link>{" "}
              </div>
            </div>

            <div className="col-lg-auto col-sm-12">
              <div className="mt-2">
                <Link className="nav  small  text-decoration-none " to="/LOGIN">
                  LOGIN
                </Link>{" "}
              </div>
            </div>

            <div className="col-lg-auto col-sm-12">
              <div className="mt-1">
                <Link to="/CART">
                  <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "#a3a3a3" }} />
                </Link>
              </div>
            </div>
          </div>{" "}
          {/*for hide*/}

              

          


        </div>
      </div>
    </>
  );
}

export default Header;
