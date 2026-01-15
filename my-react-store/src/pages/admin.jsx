import { useState } from 'react'
import './admin.css'
function Admin(){
    // Product State
    const [productTitle, setProductTitle] =useState("")
    const [productCategory, setProductCategory] =useState("")
    const [url, setUrl] =useState("")
    const [price, setPrice] =useState(0)
    const [products, setProducts] =useState([])

    function saveProduct(){
        console.log(productTitle)
        console.log(productCategory)
        console.log(url)
        console.log(price)

        const newProduct = {
            title: productTitle,
            category: productCategory,
            url: url,
            price: price
        }

        setProducts([...products, newProduct])
    }

    //Coupon State
    const [couponCode, setCouponCode] = useState("")
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [coupons, setCoupons] = useState([])

    function saveCoupon(){
        console.log(couponCode)
        console.log(couponDiscount)

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon])

        
    }
    return (
        <div>
            <h1>Store administration</h1>
            <div className='d-flex gap-4'>

            
                <section className='w-50'>
                    <h3>Add Products</h3>
                    <div className='border bg-white p-4'>
                        <div className='mb-4'>
                            <label className='form-label'>Title</label>
                            <input
                                type='text'
                                className='form-control'
                                value={productTitle}
                                onChange={(e) => setProductTitle(e.target.value)}
                                ></input>
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Category</label>
                            <input
                                type="text"
                                className='form-control'
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                                />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Url</label>
                            <input
                                type="text"
                                placeholder='https://th.bing.com/th/id/OPHS.KYmMkIKmEtG6iQ474C474?w=150&h=124&o=5&dpr=1.3&pid=21.1'
                                className='form-control'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                />

                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Price</label>
                            <input
                            type="number"
                            className='form-control'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-dark' onClick={saveProduct}>Save Product</button>


                    </div>
                    <div>
                        <h5>Products list</h5>
                        {
                            products.length == 0
                            ? <p>There is no products</p>
                            : products.map(product => (
                                <div className="card" styleName="width: 18rem">
                                    <img src={product.url} className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Product:</h5>
                                        <p className="card-text">{product.title}</p>
                                        <p className='card-text'>{product.category}</p>
                                        <p className='card-text'>{product.price}</p>
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className='w-50'>
                    <h3>Add Coupons</h3>
                    <div className='border bg-white p-4'>
                        <div className='mb-4'>

                            <label className='form-label'>Code</label>
                            <input 
                                type='text' 
                                className='form-control'
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}       
                                >
                                </input>

                        </div>
                        <div className='mb-4'>

                            <label className='form-label'>Discount</label>
                            <input 
                                type="number" 
                                className='form-control'
                                value={couponDiscount}
                                onChange={(e) => setCouponDiscount(e.target.value)} 
                            />

                        </div>
                        <button className='btn btn-dark' onClick={saveCoupon}>Save Coupon</button>
                    </div>

                    <div>
                        <h5>Coupons List</h5>

                        {
                            coupons.length == 0
                            ? <p>There is no coupons</p>
                            :
                            coupons.map(coupon => (
                                <li>{coupon.code} - {coupon.discount}</li>
                            ))
                        }
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Admin