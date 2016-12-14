import React from 'react';

class App extends React.Component {
  render() {
    return (
        // <h1 className="hi">Hello world</h1>

        React.createElement('h1', null, 'Hello World')
      );
  }
}

const AppTwo = () => <h1>Hello World</h1>

export default AppTwo