import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import classes from './Orders.module.css'

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

/**
 * Created by Doa on 7-8-2019.
 */
class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner/>;
        if (!this.props.loading) {
            orders = this.props.orders.map(order =>
                <div className={classes.Orders} key={order.id} >
                <Link
                    to={this.props.match.url + '/' + order.id}
                    style={{textDecoration: 'none', color: 'inherit'}}>
                    <Order
                        ingredients={order.ingredients}
                        price={order.price}/>
                </Link>
                </div>

            )
        }
        return orders;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.idToken,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));