import React, { Component } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
class ComplaintForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     name: ``,
     email: ``,
     message: ``,
     alert:`false`
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(event) {
   const target = event.target;
   const value = target.value;
   const name = target.name;
   this.setState({
     [name]:value
   });
 }
 handleSubmit(event) {
   event.preventDefault();
   this.setState({alert:true})
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
     .then(response => response.json())
     .then(json => {
       console.log(json);
       this.setState({ name: '', email: '', message: ''});
     })
     .catch(err => {
       console.log(err);
     });
 }
 render() {
   return (
     <div className="form-content">
     <h2><strong>Make a complaint</strong></h2>
     <form id='myform' onSubmit={this.handleSubmit}>
       <FormField type="text" name="name" label="Your Name" value={this.state.name} onChange={this.handleChange}/>
       <FormField type="text" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
       <FormField type="textarea" name="message" label="Complaint" value={this.state.message} onChange={this.handleChange}/>
       <Button>Submit</Button>
     </form>
     </div>
   );
 }
}
export default ComplaintForm;