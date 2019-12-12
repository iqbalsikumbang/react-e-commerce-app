import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component{
    render() {
        const onSuccess = (payment) => {
            console.log("The payment success", payment);                     
        }
        const onCancel = (data) => {
            console.log("canceled", data);            
        }
        const onError = err => {
            console.log("error!", err);            
        }
        let env = "sandbox";
        let currency = "USD";
        let total = 1;
        const client = {
            sandbox: "Ab0JuVk8dUtLowwi0ZkGx4OkSn2CGZs4_SY8E9wXD4ERXOAc9S2eBxsYAsaW3gsSDgZM97PlCrD_9SlB",
            production: "PRODUCTION-APP-ID"
        }
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        )
    }
}
