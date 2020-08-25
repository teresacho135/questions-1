import React from 'react';

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            ...props
        }
    }
    render() {
        return (
            <ul>
                <h3>Healthy Green Smoothie Ingredients</h3>
                    {this.state.items.map(item => <li>{ item }</li>)}
            </ul>
        )
    }
}

export default StatefulComponent;