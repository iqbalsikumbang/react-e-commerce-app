import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component{
    render() {
        const onSuccess = (payment) => {
            console.log("The payment success", payment);  
            this.props.clearCart();
            this.props.history.push('/');                  
        }
        const onCancel = (data) => {
            console.log("canceled", data);            
        }
        const onError = err => {
            console.log("error!", err);            
        }
        let env = "sandbox";
        let currency = "USD";
        //let total = 1;
        const client = {
            sandbox: "process.env.REACT_APP_ID",
            production: "sb-43vb7j661938@business.example.com"
        }
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        )
    }
}