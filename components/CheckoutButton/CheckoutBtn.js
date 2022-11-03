import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useRouter } from 'next/router'

const CheckoutBtn = ({
    handleCheckout, name, price, disabled
}) => {
    const router = useRouter()
    const stripeTotal = Number((price * 100).toFixed(2));
    // console.log(stripeTotal)

    const paySuccess = () => {
        router.push('/success')
    }

    return (
        <>
            <StripeCheckout
                name={name}
                amount={stripeTotal}
                currency="USD"
                stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
                token={handleCheckout}
                triggerEvent="onClick"
                closed={paySuccess}
            >
                <button className="default-btn" disabled={disabled}>
                    Place Order
                </button>
            </StripeCheckout>
        </>
    )
}

export default CheckoutBtn