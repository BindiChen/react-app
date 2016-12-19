import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {a: ''};
    }
    update(e) {
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        })
    }
    render() {
        return (
            <div>
                <input type="text"
                    ref="a"
                    onChange={this.update.bind(this)}/> 
                {this.state.a}
                <input type="text"
                    ref="b"
                    onChange={this.update.bind(this)}/> 
                {this.state.b}
            </div>
        );
    }
}


const Title = (props) => <h1>Title: {props.text}</h1>

// Custom propType validation
Title.propTypes = {
    text(props, propName, component) {
        if(!(propName in props)) {
            return new Error(`mising ${propName}`);
        }
        if(props[propName].length < 6) {
            return new Error(`${propName} was too short`);
        }
    }
};

export default App;