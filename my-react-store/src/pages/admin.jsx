import { useState } from 'react'
import './admin.css'
function Admin(){
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
                    <div className='border'>


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