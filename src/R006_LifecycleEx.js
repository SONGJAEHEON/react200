import React, { Component } from 'react'

class R006_LifecycleEx extends Component{
    static getDerivedStateFromProps(porps, state){
        console.log('2. getDerivedStateFromProps Call :' + porps.prop_value);
        return {};
    }
    
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R006_LifecycleEx;