import React from 'react';
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage() {
        this.setState({ message: 'thank you for subscriber' });
    }
    render() {
        return (
            <div>
                <h1>{this.state.message + "  Name  " + this.props.name}</h1>
                <button onClick={() =>
                    this.changeMessage()
                }>Subscribe</button>
            </div>);
    }
}

export default Message;