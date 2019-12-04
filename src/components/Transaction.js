import React, { Component } from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Transaction extends Component {


    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.data._id)
    }

    render() {
        return (
            <div>
            {this.props.data.vendor} {this.props.data.amount}  {this.props.data.category} <Moment format="DD.MM.YY">{this.props.data.date}</Moment>
            <button onClick={this.deleteTransaction}><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        )
    }
}

export default Transaction;