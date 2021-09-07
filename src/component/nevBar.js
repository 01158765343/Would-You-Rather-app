import React, {Component} from "react"
import { Fragment } from "react"
import { connect } from "react-redux"
import {Link ,NavLink, withRouter } from "react-router-dom"
import {removeId} from "../action/user"

import "../appCss/nevBar.css"

class NevBar extends Component {

    logaute=()=>{
        this.props.removeId(null)
    }
    render (){
        let { loggedIn,id,user}=this.props
        return (
                <div className="nev">
                    <ul>
                        
                        <NavLink to="/dashporder" className="navbar-brand">
                        <li className="nevbar">home</li>
                        </NavLink>
                    
                    
                        <Link to="/add" className="navbar-brand">
                        <li className="nevbar">add question</li>
                        </Link>
                    
                    
                        <Link to="/leaderboard" className="navbar-brand">
                        <li className="nevbar" >user</li>
                        </Link>

                        { loggedIn === true  &&
                            <>
                            <li className="name nevbar " >{user[id].name}</li>                    
                            <Link to="/login" className="navbar-brand">
                                <li onClick={this.logaute} className="nevbar logout">
                                    <button > x</button>
                                </li>
                            </Link> 
                            </>}
                    </ul>
                </div>
            
        )
    }
}

function mapStateToProps ({User ,rootId}){
    
        
    return{
        loggedIn:rootId.loggedIn,
        id:rootId.id,
        user:User
    }
}
export default withRouter(connect(mapStateToProps,{removeId})(NevBar))