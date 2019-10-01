import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'


/**
 * Created by Doa on 6-8-2019.
 */
class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack()

    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    };

    render() {
        let summary = <Redirect to="/"/>
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/orders"/> : null;

            summary = (
                <div>
                    {purchasedRedirect}
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}/>
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        purchased={this.props.purchased}/>
                </div>
            );
        }
        return summary
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);