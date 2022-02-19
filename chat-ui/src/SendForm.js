import React from 'react';

class SendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: this.state.value
        };

        fetch('http://localhost:8100/send', requestOptions)
            .then(response => console.log("got response", response));

        this.setState({ value: '' });
        event.preventDefault();
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleKeyPress(event) {
        console.log("event", event);
        if(event.code === 'Enter') {
            this.handleSubmit(event);
        }
    }

    render() {
        return (
            <div className='sendForm'>
                <form onSubmit={this.handleSubmit}>
                    <div className='combo'>
                        <textarea value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                        <input type="submit" value="Send" />
                    </div>

                </form>
            </div>

        );
    }
}

export default SendForm;
