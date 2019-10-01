import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './OrderDetails.module.css';
import * as actions from '../../../store/actions';

import Button from "../../../components/UI/Button/Button";
import Burger from "../../../components/Burger/Burger";
import Spinner from '../../../components/UI/Spinner/Spinner';

/**
 * Created by Doa on 2-9-2019.
 */
class OrderDetails extends Component {

    render() {
        const order = this.props.orders.find((order) => order.id === this.props.match.params.id);
        let deleted = (this.props.deleted) ? <Redirect to='/orders'/> : null;
        let ingredientSummary = Object.keys(order.ingredients)
            .map(igKey => {
                return <li className={classes.Ing} key={igKey}>
                    <span style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                    }}>{igKey}</span>: {order.ingredients[igKey]}
                </li>
            });
        const orderData = Object.keys(order.orderData)
            .map(igKey => {
                return <tr key={igKey}>
                    <td style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold'
                    }}>{igKey}</td>
                    <td style={{textAlign: 'left'}}>{order.orderData[igKey]}</td>
                </tr>
            });
        if (this.props.loading) {
            ingredientSummary = <Spinner/>
        }

        console.log(order);

        return (
            <div className={classes.OrderDetails}>
                {deleted}
                <h2>Order: {this.props.match.params.id}</h2>
                {ingredientSummary}
                <Burger ingredients={order.ingredients}/>
                <h3>Shipping Details</h3>
                <table className={classes.Details}>
                    <tbody>{orderData}</tbody>
                </table>
                <Button
                    btnType="Danger"
                    clicked={() => this.props.onDeleteOrder(this.props.token, this.props.match.params.id)}
                >DELETE</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.history.goBack}
                >BACK TO LIST</Button>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        deleted: state.order.deleted,
        token: state.auth.idToken
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteOrder: (token, orderId) => dispatch(actions.deleteOrder(token, orderId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
