import React from 'react';
import StatelessComponent from './components/stateless-components';
import StatelessComponent2 from './components/stateless-component2';
import StatefulComponent from './components/stateful-component';

function App() {
  return (
    <div>
      <h1>Stateless Components</h1>
        <StatelessComponent 
          props_1="This is prop 1"
          props_2={30 + 2}
          props_3={false.toString()}
          props_4={
            { key: "this is the key", value: "this is the value" }
          }
        />
        <StatelessComponent2
          items={[
            "oranges", 'kiwi', 'bananas', 'mango'
          ]}
        />
      <h1>Stateful Components</h1>
          <StatefulComponent 
          items={[
            "spinach", "green apple", "carrot", "kale"
          ]}
          />
    </div>
  );
}

export default App;
