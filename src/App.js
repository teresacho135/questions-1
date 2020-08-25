import React from 'react';
import StatelessComponent from './components/stateless-components';

function App() {
  return (
    <div>
      <StatelessComponent 
        props_1="This is prop 1"
        props_2={30 + 2}
        props_3={false.toString()}
        props_4={
          { key: "this is the key", value: "this is the value" }
        }
      />
    </div>
  );
}

export default App;
