import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component{
    render() {
        const onSuccess = (payment) => {
<<<<<<< HEAD
            console.log("The payment success", payment);  
            this.props.clearCart();
            this.props.history.push('/');                  
=======
            console.log("The payment success", payment);                     
>>>>>>> bf89d32a7d43480b70db544b0029b7f6182ae0ee
        }
        const onCancel = (data) => {
            console.log("canceled", data);            
        }
        const onError = err => {
            console.log("error!", err);            
        }
        let env = "sandbox";
        let currency = "USD";
<<<<<<< HEAD
        //let total = 1;
=======
        let total = 1;
>>>>>>> bf89d32a7d43480b70db544b0029b7f6182ae0ee
        const client = {
            sandbox: "process.env.REACT_APP_ID",
            production: "sb-43vb7j661938@business.example.com"
        }
        return (
<<<<<<< HEAD
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
=======
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
>>>>>>> bf89d32a7d43480b70db544b0029b7f6182ae0ee
        )
    }
}
