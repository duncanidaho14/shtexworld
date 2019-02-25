import React, { Component, Fragment } from 'react';

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
      }
    
    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        
        // Reset
        this.setState({ message: '', length })
    }  
    
    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
      }
    
      handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
      }
    
      handleKeyUp = event => {
        if (event.key === 'Enter') {
          this.createMessage()
        }
      }

    render() {
        return (
            <Fragment>
            <div className="container" 
            />
                <h1 align="center">Tchat</h1>
                <form   className="form-row align-items-center"
                        onSubmit={this.handleSubmit}
                >
                    <textarea 
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                        maxLength={this.props.length}
                        type="text" 
                        placeholder="laisser un message"
                        onKeyUp={this.handleKeyUp}
                        className="form-control mb-2"
                        
                    />
                    <div className="alert alert-info" role="alert">
                        { this.state.length }
                    </div>
                    
                    <button 
                        type='submit'
                        className="btn btn-primary"
                        align="center"
                    >
                        Envoyer
                    </button>
                </form>
                <div className="list-group">
                    
                </div>
                <div 
                    />
 
            
            </Fragment>
        )
    }
}

export default Formulaire;