import React, { Component } from 'react'

export default class Clock extends Component {


    state = {
        time:''
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        },1000)
    }
    render() {
        return (
            <div>
              <h1>
              Current Time is:{this.state.time} 
              <br/>
              {new Date().toLocaleTimeString()}
              </h1>
            </div>
        )
    }
}
