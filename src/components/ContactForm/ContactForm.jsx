import React from "react";
import PropTypes from 'prop-types';
import { Label, Input, Button } from './ContactForm.styled';

class ContactForm extends React.Component {
    static propTypes = {
     onSubmit: PropTypes.func.isRequired,
    };
    
    state = {
     name: '',
     number: '',
    }
    

    handleChangeInput = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
        // console.log(value);
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChangeInput}
                    />
                </Label>
                        
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChangeInput}
                    />
                </Label>

                <Button type="submit">Add contact</Button>
            </form>
        );
    }
}


export default ContactForm;;