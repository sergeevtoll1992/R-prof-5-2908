
        import './style.css';
        import React, { Component, Fragment } from 'react';

        import Message from '../Message/Message.jsx';

        export default class MessageField extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    text: '',
                    messages: [
                        {
                            sender: 'Vasya',
                            text: 'Ciao!',
                        },
                        {
                            sender: 'Petr',
                            text: 'Hello!',
                        },
                        {
                            sender: null,
                            text: 'Privet!',
                        },
                        {
                            sender: 'Vasya',
                            text: 'Guten tag!',
                        }
                    ]
                }
            }

            handleChange = event => {
                this.setState({ text: event.target.value });
            }

            sendMessage = () => {
                this.setState({
                    text: '',
                    messages: [...this.state.messages, {
                            sender: this.props.name,
                            text: this.state.text
                        }
                    ]
                })
            }

            componentDidUpdate() {
                if (this.state.messages[this.state.messages.length-1].sender !== 'Bot') {
                    this.setState({
                        text: '',
                        messages: [...this.state.messages, {
                                sender: 'Bot',
                                text: 'What you want from me?'
                            }
                        ]
                    })
                }
            }
        
            render() {
                let { messages } = this.state;
                            let contentArray = messages.map((msg, index) => {
                                let { sender, text } = msg;
                                return <Message text = { text } sender = { sender } key = { index }/>
                            });
        
                return (
                    <div className="d-flex flex-column">
                        <div>
                            { contentArray }
                        </div>
                        <div className="controls d-flex">
                            <input 
                                className="inputText" type="text" 
                                value = {this.state.text } 
                                onChange={ this.handleChange }
                            />
                            <button onClick = { this.sendMessage }>Send</button>
                        </div>
                    </div>
                    
                )
            }
        }
    