import React from 'react';

export default function StatelessComponent2(props) {
    return (
        <div>
            <h3>Smoothie Ingredients</h3>
                <ul>
                    {
                        props.items.map(item => <li>{ item }</li>)
                    }
                </ul>
        </div>
    )
}