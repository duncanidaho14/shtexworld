import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Connexion.scss';
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
                <div className='container connexionBoxParent'>
                    <div className='row connexionBox'>
                    <div className="col alert alert-success" role="alert">
                        <form 
                            className='form-row align-items-center connexion' 
                            onSubmit={this.handleSubmit}
                        >
                            <label>Ton pseudo :</label>
                            <input
                                value={this.state.pseudo}
                                onChange={this.handleChange}
                                placeholder='Pseudo'
                                type='text'
                                className="form-control xl-20 connexionInput"
                                required />
                            <button 
                                type='submit'
                                className="btn btn-primary col-md-12 connexionButton"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>
                        
                    </div> 
                </div>
               
            </Fragment>
            
        )
    }
}

export default Connexion;