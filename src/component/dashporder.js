import React,{Component} from "react"
import {NavLink, withRouter} from  "react-router-dom"
import { connect } from "react-redux"
import "../appCss/dashporder.css"

class Dashporder extends Component {

    userQ=(e)=>{
        e.preventDefault()
        this.props.history.push(`/dashporder/unanswers`)
    }

    userAnser=(e)=>{
        e.preventDefault()
        this.props.history.push(`/dashporder/questionAnsers`)
    }

    render (){
        let{id ,user ,questions}=this.props
        console.log(user[id].questions.length,Object.keys(user[id].answers).length)

        return(
            <div>
            
                <div className="container">
                    <ul className="menue">
                        <NavLink to="eldeeb" className="">
                            <li onClick={this.userQ} className="menue-li">
                                unanswer question
                            </li>
                        </NavLink>
                        <span className="item">{Object.keys(questions).length - Object.keys(user[id].answers).length}</span>
                        <NavLink to="add-question" className="">
                            <li onClick={this.userAnser} className="menue-li">
                                qustion answer
                            </li>
                        </NavLink>
                        <span className="item">{Object.keys(user[id].answers).length}</span>
                    </ul>
                </div>
           

            </div>
        )
        
    }
}

function mapStateToProps(state){
    return {
        id:state.rootId.id,
        user:state.User,
        questions:state.questions,
    }
}

export default withRouter(connect(mapStateToProps,null)(Dashporder))