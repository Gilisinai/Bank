import React, { Component } from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../styles/transaction.css'
class Transaction extends Component {


    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.data._id)
    }

    render() {
        return (
            <div className="transaction">
                <div>
                    {this.props.data.vendor}
                </div>
                <div>
                    {this.props.data.amount}
                </div>
                <div>
                {this.props.data.category}
                </div>
                <div>
                 <Moment format="DD.MM.YY">{this.props.data.date}</Moment>
                 </div>
                 <div>
                <FontAwesomeIcon onClick={this.deleteTransaction} icon={faTrash} />
                </div>
            </div>
        )
    }
}

export default Transaction;