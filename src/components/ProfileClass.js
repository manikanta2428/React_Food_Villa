import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
    }
    componentDidMount(){
        //It will call after Initial  render mostly will use for api calls.
    }
    componentDidUpdate(){
        //It will  call after every render, to update something in DOM  
    }
    componentWillUnmount(){
        //It wi;; call when leaving this component mostly used for cleaning up logics will present here.
        //Ex : set Interval will clear here.
    }
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            <h2>{this.state.count}</h2>
            <button onClick={() => {this.setState({count : 2})}}>setCount</button>
            </>

        )
    }
}

export default ProfileClass;