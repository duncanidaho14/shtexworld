import React, { Component, Fragment } from 'react';
import marked from 'marked';
import { sampleText } from './../sampleText';

class TodoList extends Component {
    
    constructor() {
        super();
        this.state = {
            text: sampleText,
            userInput: '',
            items: []
        };
    }
    
    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // add item to deleteTodo.bind(this, item)
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="alert alert-primary" role="alert" key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>    
            );
        });
    }
    renderText = userInput => {
        const __html = marked(userInput, { sanitize: true })
        return { __html }
    }
    componentDiMount () {
        const userInput = localStorage.getItem('userInput')
        
        if (userInput) {
            this.setState({ userInput })
        } else {
            this.setState({ userInput: userInput })
        }
    }

    componentDidUpdate () {
        const { userInput } = this.state
        localStorage.setItem('userInput', userInput)
    }

    render() {
        return(
            <Fragment>
                <div className="container" />
                    <h1 align="center">Ma Todo list</h1>
                    <form className="form-row align-items-center">
                        <input 
                            value={this.state.userInput} 
                            type="text" 
                            placeholder="Renseigner un item"
                            onChange={this.onChange.bind(this)}
                            className="form-control mb-2"
                            
                        />
                        
                        <button 
                            onClick={this.addTodo.bind(this)} 
                            className="btn btn-primary"
                            align="center"
                        >
                            Ajouter
                        </button>
                    </form>
                    <div className="list-group">
                        {this.renderTodos()}
                    </div>
                <div dangerouslySetInnerHTML={{ __html: this.renderText(this.state.userInput) }}/>
            </Fragment>
        );
    }
}

export default TodoList;