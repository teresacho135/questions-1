import React from 'react';

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            ...props
        }
        this.addNewItemToState = this.addNewItemToState.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            newItem: e.target.value
        })
    }

    addNewItemToState() {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem: '',
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <h3>Healthy Green Smoothie Ingredients</h3>
                        {this.state.items.map(item => <li>{ item }</li>)}
                </ul>
                <input 
                    type="text" 
                    placeholder="Add an Ingredient Here"
                    value={this.state.newItem}
                    onChange={this.handleChange} 
                />
                <button
                    onClick={this.addNewItemToState}
                >Add Item to List</button>
            </div>
        )
    }
}

export default StatefulComponent;