import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import '../styles/category.css'

class Category extends Component {
    constructor() {
        super()
        this.state = {

        }


    }
    findCategory = () => {
        let transactions = this.props.transactions
        let categories = []
        for (let i = 0; i < transactions.length; i++) {
            if (!categories.includes(transactions[i].category)) {
                categories.push(transactions[i].category)
            }
        }
        return categories
    }

    sortByCategory = () => {
        let categories = this.findCategory()
        let transactions = this.props.transactions
        let result = []
        for (let i = 0; i < categories.length; i++) {
            let arr = transactions.filter(c => c.category === categories[i]).map(c => c)
            result.push(arr)
        }
        return result
    }



    render() {
        let category = this.sortByCategory()
        return (

            
                <div className="category-container">
                    {category.map((m, i) => <div key={i}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="category-head">
                                <Typography>  <h3> {m[0].category.charAt(0).toUpperCase() + m[0].category.slice(1)} </h3> </Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <div key={i} >
                            <ExpansionPanelDetails>
                            <Typography>
                                {m.map((m, i) =>
                                    <div className="expense" key={i}>
                                        <div>
                                            {m.vendor}
                                        </div><div className={m.amount > 0 ? "green" : "red"}>
                                            {m.amount}
                                        </div><div>
                                            {m.date.substring(0, 10)}
                                        </div>
                                    </div>
                                )}
                               </Typography>
                            </ExpansionPanelDetails>
                             </div>
                             </ExpansionPanel>  </div>
                    )}

                </div>
            
        )
    }
}

export default Category;