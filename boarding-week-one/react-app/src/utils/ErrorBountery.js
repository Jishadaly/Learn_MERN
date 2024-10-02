import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    state = { hasError : false }

     static getDerivedStateFromError() {
        return {hasError : true}
    }

    componentDidCatch(error , info){
        console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrr",error , info);
        
    }

    render() {
        if (this.state.hasError ) {
            return <h1 > Error occured </h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;