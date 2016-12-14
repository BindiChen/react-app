import React from 'react';

class App extends React.Component {
  render() {
    let text = this.props.text;
    return (
        <h1>{text}</h1>
      );
  }
}


App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}


export default App;