import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'This is state text',
            cat: 0
        };
    }

    update(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div>
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <h1>{this.state.text} - {this.state.cat}</h1>
            </div>    
        );
    }
}

const Widget = (props) => 
    <input type="text" onChange={props.update} />


export default App;