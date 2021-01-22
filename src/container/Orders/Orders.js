import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../Axios/axios-orders'
import './Orders.css';


class Orders extends Component {

  state = {
    orders: [],
    isLoading: true
  }


  render() {
    console.log(this.state.orders)
    return (
      <div>
        {
          this.state.orders.map(order =>
            <Order
              ingredients={order.ingredients}
              price={+order.price}
              key={order.id}
            />
          )
        }
      </div>
    )
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        console.log(response.data)
        const fetchedOrders = []
        for (let key in response.data) {
          fetchedOrders.push(
            { // Adding an 'id' property to this object 
              ...response.data[key],
              id: key
            }
          )
        }
        this.setState({ isLoading: false, orders: fetchedOrders })
      })
      .catch(error => {
        this.setState({ isLoading: false })
      })
  }

}


export default Orders;