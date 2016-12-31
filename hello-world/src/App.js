import React from 'react';
class App extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>
            </Parent>
        );
    }
}

class Parent extends React.Component {
    render() {
        console.log(this.props.children)
        // let items = this.props.children.map(child => child);
        // let items = React.Children.map(this.props.children, child => child)
        let items = React.Children.only(this.props.children)
        console.log(items);
        return null;
    }
}

export default App;