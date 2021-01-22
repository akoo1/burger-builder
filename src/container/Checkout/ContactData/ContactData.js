import React, { Component } from 'react';
import { Alert } from 'reactstrap';

import axios from '../../../Axios/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css'

class ContactData extends Component {

  state = {
    contactData: {
      name: '',
      email: '',
      street: '',
      zipCode: '',
      deliveryMethod: ''
    },
    isLoading: false,
    showAlert: false,
    alertMessage: ''
  }

  inputChangedHandler = (event, inputName) => {
    let form = this.state.contactData

    if (inputName === 'name') {
      form.name = event.target.value
    }
    else if (inputName === 'email') {
      form.email = event.target.value
    }
    else if (inputName === 'street') {
      form.street = event.target.value
    }
    else if (inputName === 'zipCode') {
      form.zipCode = event.target.value
    }
    else if (inputName === 'deliveryMethod') {
      form.deliveryMethod = event.target.value
    }

    this.setState({ contactData: form })
  }


  // Storing data to our database
  formSubmitHandler = event => {
    event.preventDefault()
    this.inputValidation()
    
    if (this.state.alertMessage === '') {
      this.setState({ showAlert: true })
    }
    else {
      this.setState({ isLoading: true })
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.totalPrice,
        contactData: this.state.contactData
      }

      axios.post('/orders.json', order)
        .then(response => {
          console.log(response)
          this.setState({ isLoading: false })
          this.props.history.push('/')
        })
        .catch(error => {
          console.log(error)
          this.setState({ isLoading: false })
          this.props.history.push('/')
        })
    }
  }

  inputValidation = () => {
    let contactData = this.state.contactData
    let alertMessage = this.state.alertMessage
    
    if (contactData.name.trim() === '') {
      alertMessage = alertMessage.concat('Name required. ')
    }
    if (contactData.email === '') {
      alertMessage = alertMessage.concat('Email required. ')
    }
    if (contactData.street === '') {
      alertMessage = alertMessage.concat('Street required. ')
    }
    if (contactData.zipCode === '') {
      alertMessage = alertMessage.concat('Zip code required. ')
    }
    if (contactData.deliveryMethod === '') {
      alertMessage = alertMessage.concat('Delivery method required. ')
    }

    this.setState({ alertMessage })
  }


  render() {

    if (this.state.isLoading) {
      contactForm = <Spinner />
    }

    let contactForm = (
      <form onSubmit={this.formSubmitHandler}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={this.state.contactData.name}
          onChange={event => this.inputChangedHandler(event, 'name')}
        />
        <input
          type='text'
          name='email'
          placeholder='Your Email'
          value={this.state.contactData.email}
          onChange={event => this.inputChangedHandler(event, 'email')}
        />
        <input
          type='text'
          name='street'
          placeholder='Street'
          value={this.state.contactData.street}
          onChange={event => this.inputChangedHandler(event, 'street')}
        />
        <input
          type='text'
          name='zipCode'
          placeholder='Zip Code'
          value={this.state.contactData.zipCode}
          onChange={event => this.inputChangedHandler(event, 'zipCode')}
        />
        <select
          name='deliveryMethod'
          value={this.state.contactData.deliveryMethod}
          onChange={event => this.inputChangedHandler(event, 'deliveryMethod')}
        >
          <option>Choose Delivery Method</option>
          <option value='fastest'>Fastest</option>
          <option value='cheapest'>Cheapest</option>
        </select>
        <button
          type='submit'
          className='my-btn'
        >
          Order
        </button>
      </form>
    )

    let inputFeedback = null
    if (this.state.showAlert) {
      inputFeedback = (
        <Alert
          className='input-alert'
          color="danger"
          isOpen={this.state.showAlert}
          // toggle={() => this.setState({ showAlert: false })}
        >
          {this.state.alertMessage}
        </Alert>
      )
    }


    return (
      <div className='contact-data-container'>
        <h4>Enter your contact information</h4>
        {inputFeedback}
        {contactForm}
      </div>
    )


  }


}


export default ContactData;

