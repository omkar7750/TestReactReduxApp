import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            description : props.expense?props.expense.description: '',
            note : props.expense?props.expense.note: '', 
            amount : props.expense?(props.expense.amount/100).toString():  0,
            createdAt: props.expense?moment(props.expense.createdAt): moment(),
            createdAtFocused: false,
            error: null
        }

    }
    
    

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState({error: "description or amount is empty"})
        }
        else {
            console.log('submitted.')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render = () => {
        return (
            <div>
                {this.state.error && <p >{this.state.error}</p>}
                <form onSubmit = {this.onSubmit}>
                <input type = "text"
                    placeholder = "Description"
                    autoFocus
                    value = {this.state.description}
                    onChange = {(e) => {
                        this.setState({description: e.target.value})
                    }}
                /><br/>
                

                <input type = "number"
                    placeholder = "Amount"
                    value = {this.state.amount}
                    onChange = {(e) => {
                        this.setState({amount: e.target.value})
                    }}
                /><br/>

                <textarea 
                    placeholder = "Add a note for your expense (optional)"
                    value = {this.state.note}
                    onChange = {(e) => {
                        this.setState({note: e.target.value})
                    }}
                />
                <br/>

                <DatePicker
                    selected={this.state.createdAt}
                    onChange={(createdAt) => {
                        this.setState({createdAt})
                    }}
                />
                <input type='submit' />
                </form>
            </div>
        )
    }
}