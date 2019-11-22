import React, { Component } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import './ComplaintForm.css'

class ComplaintForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      showDialogue: false,
      submitSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // console.log('submit clicked', this.state)
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => {
        if (response.status === 404) {
          this.setState({ submitSuccess: false })
        }
        else { this.setState({ submitSuccess: true }) }

        console.log('response', this.state);
        return response.json()
      })
      .then(json => {
        console.log('response', json);
        this.setState({ name: '', email: '', message: '', showDialogue: false });
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  handleDialogue() {
    this.setState({ showDialogue: false })
  }

 render() {
    const form = 
     <div className="form-content">
     <h2><strong>Make a complaint</strong></h2>
     <form id='myform' onSubmit={this.handleSubmit}>
       <FormField type="text" name="name" label="Your Name" value={this.state.name} onChange={this.handleChange}/>
       <FormField type="text" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
       <FormField type="textarea" name="message" label="Complaint" value={this.state.message} onChange={this.handleChange}/>
       <Button>Submit</Button>
     </form>
     </div>
   


    const successMessage = 
    <div>
    <p>We’ve received your complaint, unfortunately we have no control of the weather we merely report on it. As such your complaint has been sent straight to our junk mail folder along with the weekly Wish and ASOS newsletters that we receive.</p>
    <p>Does anyone know how to unsubscribe from those? Seriously, you hit unsubscribe and they just keep on coming!</p>
    </div>
    const failureMessage = <p>Form has not been submitted, try again.</p>

    const dialogue = <div className="success">
      <h2><strong>Thanks for you submitting!</strong></h2>
      {this.state.submitSuccess === true ? successMessage : failureMessage}
      <button onClick={() => this.handleDialogue()}>Ok</button>
    </div>

    return (
      <div>
        {this.state.showDialogue === false ? form : dialogue}
      </div>
    );
  }
};

export default ComplaintForm;
