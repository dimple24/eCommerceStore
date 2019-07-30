import React ,{ Component} from 'react';

export default class Default extends Component {

    render(){
        console.log(this.props)
    return (
        <div className="container"> 
        <div className="row">
        <div className="col-10 mx-auto text-center text-title test-uppercase pt-5">
        <div> error</div>
        <div> page not found  404</div>
        <div>The requested url not found
            <div className="text-danger"> {this.props.location.pathname}</div></div> 
        </div>
        </div>
        </div>

    )
    }
}