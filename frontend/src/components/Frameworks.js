import React, { Component } from 'react'

export class Frameworks extends Component {
    state = {
        frameworks: []
    }

    componentDidMount(){
        fetch('/api/frameworks')
        .then(res => res.json())
        .then(frameworks => this.setState({frameworks}, () => console.log(frameworks)))
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.frameworks.map(framework =>
                        <li key={framework.id}>{framework.name}</li>    
                    )}
                </ul>
            </div>
        )
    }
}

export default Frameworks
