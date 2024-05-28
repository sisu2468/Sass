import query from '../../../utils/query'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../../features/common/headerSlice'
import { Button, Dropdown, message, Space, Tooltip} from 'antd'
import TitleCard from "../../../components/Cards/TitleCard"

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../../../features/Payment/Stripe/CheckOutForm'

const stripePromise = loadStripe("pk_test_51NnacALwUcVk9eB5S9la7yylhGWheK8OBqq0JXH0asDanZMCFabjwjjMCChLlcJ9rcFUc51D80IK8X98pVGhenMf00ujmYorAy");
const StripePaymentPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "payment" }))
    }, []);

    const { user } = useSelector(state => state.user);
    const { t } = useTranslation();
    console.log(user);
    const [client_secret, setClientSecret] = useState(null)

    useEffect(() => {
        query.post(
            '/payment/stripe',
            { amount: process.env.REACT_APP_PAY_AMOUNT },
            (res) => {
                setClientSecret(res.client_secret)
            }
        );
    }, [])

    const lang = localStorage.getItem('lang');
    const theme = localStorage.getItem('theme');

    const[paymenttype, setPaymentType] = useState('Stripe')
    const handleMenuClick = (e) => {
        message.info(`Selected ${e['key']}`);
        setPaymentType(e['key']);
    };
    const items = [
        {
          label: 'Stripe',
          key: 'Stripe',
        },
        {
          label: 'PayPal',
          key: 'PayPal',
        },
      ];
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <div className='flex justify-center'>
            <div className='w-[640px]'>
                <Dropdown.Button className='w-full' menu={menuProps}>
                    {paymenttype}
                </Dropdown.Button>
                {paymenttype === 'Stripe' ? (
                    <TitleCard title='Stripe'>
                        {
                            client_secret && (
                                <Elements stripe={stripePromise} options={
                                    {
                                        clientSecret: client_secret,
                                        locale: 'en',
                                        appearance: {
                                            theme: theme == 'dark' ? 'night' : 'stripe'
                                        }
                                    }
                                }>
                                    <CheckoutForm />
                                </Elements>
                            )
                        }
                    </TitleCard>
                ) :(
                    <TitleCard title='Paypal'>
                        
                        
                    </TitleCard>
                )}
            </div>
        </div>
    )
}

export default StripePaymentPage