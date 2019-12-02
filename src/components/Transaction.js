import React, { Component } from 'react';

class Transaction extends Component {


    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.id)
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