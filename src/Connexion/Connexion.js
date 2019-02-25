import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true})
    }

    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
            <Fragment>
               <div className='container connexionBox'>
                    <form 
                        className='form-row align-items-center connexion' 
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            value={this.state.pseudo}
                            onChange={this.handleChange}
                            placeholder='Pseudo'
                            type='text'
                            className="form-control mb-2"
                            required />
                        <button 
                            type='submit'
                            className="btn btn-primary"
                        >
                            Se connecter
                        </button>
                    </form>
                </div> 
            </Fragment>
            
        )
    }
}

export default Connexion;