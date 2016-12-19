import React from 'react';

class App extends React.Component {
    render() {
        return (
            <Button>
                <Heart />
                React
            </Button>
        );
    }
}

// Access nested elements with React props.children
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render() {
        return (<span>&hearts;</span>)
    }
}

export default App;