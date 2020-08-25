import React from 'react';

export default function StatelessComponent2(props) {
    return (
        <div>
            <h1>Smoothie Ingredients</h1>
                <ul>
                    {
                        props.items.map(item => <li>{ item }</li>)
                    }
                </ul>
        </div>
    )
}