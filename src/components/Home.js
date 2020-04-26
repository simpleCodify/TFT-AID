import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tester: ""
        }
    }

    render() {
        return (
            <div className="text-center">
                <h1>Testing Landing page</h1>
            </div>
        )
    }
}

export default Home;