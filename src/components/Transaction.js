import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Transaction extends Component {


    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.data._id)
    }

    render() {
        return (
            <div>
            {this.props.data.vendor} {this.props.data.amount}  {this.props.data.category}
            <button onClick={this.deleteTransaction}>Delete</button>
            </div>
        )
    }
}

export default Transaction;