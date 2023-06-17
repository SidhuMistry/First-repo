import { Component, PureComponent } from "react";
import { store } from "../Redux/Store/store";

class ClassCom extends Component{
    constructor(){
        super();

        this.state = {
            count : 1
        }
        
        // this.changeValue = this.changeValue.bind(this)
        // console.log('constructor')
    }

    // componentDidMount(){
    //     console.log(store.getState())
    // }
    
    // changeValue(){
    //     this.setState({count : this.state.count + 5});
    // }
    
    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps')
    //     console.log(props, state)

    //     return true;
    // }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate')
    //     return true
    // }

    // componentDidMount(){
    //     console.log('componentDidMount')
    // }
    
    // getSnapshotBeforeUpdate(props, state){
    //     console.log('getSnapshotBeforeUpdate')
    //     console.log(props, state)
    //     return true
    // }

    // componentDidUpdate(){
    //     console.log('componentDidUpdate')
    // }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount')
    // }

    render(){
        console.log('render')
        // console.log(this.state.count)
        return (  
            <>
                <h1>{this.state.count}</h1>
                {/* <button onClick={this.changeValue}>Click</button> */}
                {/* <h1>{this.props.num}</h1> */}
                {/* <button onClick={this.props.updateNumber}>Change</button> */}

                <button onClick={() => this.setState({count : this.state.count+1})}>Click</button>
            </>
        )
    }
}

export default ClassCom