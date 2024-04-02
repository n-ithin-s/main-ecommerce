<>
<Header />
<div className="space">
    <div className="row text-white">
        <div className="col-lg-auto"></div>
        <div className="col-lg-auto"></div>
        <div className="col-lg-auto"></div>
        <div className="col-lg-6">
            <div className="cart bg-secondary border rounded-3 bg-white text-dark">
                <div className="row pt-4 fw-bold">
                    <div className="col-lg-auto"></div>
                    <div className="col"></div>
                    <div className="col">PRODUCT</div>
                    <div className="col">PRICE</div>
                    <div className="col">QUANTITY</div>
                    <div className="col">SUBTOTAL</div>
                </div>
                {cartItems && cartItems.map(item => (
                    <div className="row mt-5" key={item.id}>
                        <div className="col-lg-auto"></div>
                        <div className="col">
                            <img className="small_img" src={item.image} alt={item.name} />
                        </div>
                        <div className="col mt-4">{item.name}</div>
                        <div className="col mt-4">${item.price.toFixed(2)}</div>
                        <div className="col mt-4">{item.quantity}</div>
                        <div className="col mt-4">${calculateSubtotal(item).toFixed(2)}</div>
                        <div className="col mt-4">
                            <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-auto"></div>
                    <div className="col">
                        <div>
                            <a className="subscribe fs-5 fw-bold text-dark" href="#">
                                <small>Update Cart</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Remaining content */}
<div className="row mt-5 pb-5">
    <div className="col-lg-auto" />
    <div className="col-lg-7">
        <div className="">
            <input
                className="coupon"
                type="text"
                placeholder="Apply Coupon Code"
                id="cou"
            />
        </div>
    </div>
    <div className="col">
        <div className="mt-3 mt-lg-0">
            <a className="subscribe fs-5 fw-bold text-dark" href="#">
                <small>Apply Coupon Code</small>
            </a>
        </div>
    </div>
</div>
<div className="col-lg-1"></div>
{/*cart_side*/}
<div className="col-lg-3">
    <div className="cart_side text-white border-2 rounded-2 text-dark p-2">
        <div className="row">
            <div className="col fs-3 fw-bold">CART TOTAL</div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-11 border-bottom ms-2 border-white mt-1"></div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-9">SUB TOTAL</div>
            <div className="col">${calculateTotal().toFixed(2)}</div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-11 border-bottom ms-2 border-white mt-1"></div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-9">GRAND TOTAL</div>
            <div className="col">${calculateTotal().toFixed(2)}</div>
        </div>
        <div className="row mt-5">
            <div className="col">
                <div>
                    <Link className="subscribe fs-5 fw-bold text-dark" to="/checkout">
                        <small>Proceed to checkout</small>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="col-lg-auto"></div>
{/*cart_down*/}
<div className="space text-white">
    <div className="row">
        <div className="col-lg-auto"></div>
        <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center gap-2">
            <div className="display-4 fw-bold mt-5">Customer</div>
            <div className="display-4 fw-bold">Reviews</div>
        </div>
        <div className="col-lg-3 col-sm-12">
            <div className="">
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
            </div>
            <div className="toalign">
                “I recently purchased a pair of running shoes from N-SPORTS online
                store and I couldn’t be happier with my purchase. The website was easy
                to navigate and the checkout process was quick and seamless. The shoes
                arrived within a week and were exactly what I was looking for. I would
                definitely recommend N-SPORTS online store to anyone looking for
                quality athletic gear.”
            </div>
            <div className="mt-1 fw-bold">Sreeram kk, Palakkad</div>
        </div>
        <div className="col-lg-auto"></div>
        <div className="col-lg-auto"></div>
        <div className="col-lg-3 col-sm-12">
            <div className="">
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
                <i className="fa-solid fa-star" style={{ color: "#a48104" }} />
            </div>
            <div className="toalign">
                “I recently purchased a pair of running shoes from N-SPORTS online
                store and I couldn’t be happier with my purchase. The website was easy
                to navigate and the checkout process was quick and seamless. The shoes
                arrived within a week and were exactly what I was looking for. I would
                definitely recommend N-SPORTS online store to anyone looking for
                quality athletic gear.”
            </div>
            <div className="mt-1 fw-bold">Sreeram kk, Palakkad</div>
        </div>
        <div className="col-lg-1 col-sm-12"></div>
    </div>
</div>
<Footer />
</>