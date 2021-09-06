import React, {Component} from "react"
import { connect } from "react-redux"
import {Link ,NavLink } from "react-router-dom"
import {removeId} from "../action/user"

import "../appCss/nevBar.css"
class NevBar extends Component {

    logaute=()=>{
        this.props.removeId(null)
    }
    render (){
        return (
                <div className="nev">
                    <ul>
                        
                        <NavLink to="/dashporder" className="navbar-brand">
                        <li className="nevbar">home</li>
                        </NavLink>
                    
                    
                        <Link to="/add" className="navbar-brand">
                        <li className="nevbar">add question</li>
                        </Link>
                    
                    
                        <Link to="/user" className="navbar-brand">
                        <li className="nevbar" >user</li>
                        </Link>
                    
                    
                        <Link to="/login" className="navbar-brand">
                            <li className="nevbar logout">
                                <button onClick={this.logaute}> x</button>
                            </li>
                        </Link>
                        
                    </ul>
                </div>
            
        )
    }
}
export default connect(null,{removeId})(NevBar)