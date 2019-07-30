import React from 'react';
import Cart from './Cart/Cart';

class Checkout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
    email:"",
    mobileno:"",
    address: ""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({dATA : event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div className="container mt-5 col-5">
              <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label><br/>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label><br />
          <label>
            Mobile no:
            <input type="text" value={this.state.mobileno} onChange={this.handleChange} />
          </label><br />
          <hr />
          <h3>Delivary address</h3>
          <label>
          Address:
          <textarea value={this.state.address} onChange={this.handleChange} />
        </label><br />
        <label>
            Pin code 
            <input type="number" value={this.state.pincode} onChange={this.handleChange} />
        </label><br />
        <label>
            state 
            <input type="number" value={this.state.stade} onChange={this.handleChange} />
        </label><br />
        <label>
            city 
            <input type="number" value={this.state.city} onChange={this.handleChange} />
        </label><br />
        <hr />
        <h5> Order summary</h5>
        <Cart />
          <input type="submit" value="Submit" />
        </form>
        
          </div>
        
      );
    }
  }

export default  Checkout;
    

        
       