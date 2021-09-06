import React, { Component } from "react"
import { connect } from "react-redux"
import { _saveQuestion ,_getQuestions ,_getUsers }from "../_DATA"
import {questions } from "../action/questions"
import {user } from "../action/user"
import { withRouter } from "react-router-dom"
class Add extends Component {

    state={
        optionOne:"",
        optionTwo:""
    }

    changinput=()=>{
        this.setState({optionOne:""})
    }
    handelForm=(e)=>{
        e.preventDefault()
        if(this.state.optionOne === "" || this.state.optionTwo === ""){
            alert("please type option one and two")
        }else {
            console.log(this.state)
            let a={}
            a.optionOneText=this.state.optionOne
            a.optionTwoText=this.state.optionTwo
            a.author=this.props.author
            console.log(a)
            _saveQuestion(a)
            _getQuestions()
            .then((x)=>{
                this.props.user(x)
            })
            _getUsers()
            .then((x)=>{
                this.props.questions(x)
            })
            this.props.history.push(`/dashporder/unanswers`)
        }
    }
    render (){
        let {allUser,author}=this.props
        return (
            <div>
                <h1> create a new question </h1>
                <div>
                    <h1>would you rether ?</h1>
                    <img className="img im" alt="name" src={allUser[author].avatarURL} />
                    <form onSubmit={this.handelForm}>
                        <label htmlFor="optionOne" className="x">option one</label>
                        <input type="teaxt" id="optionOne" onChange={(e)=>{this.setState({optionOne:e.target.value})}} placeholder="rether 1" />
                        <label htmlFor="optionTwo" className="x">option two</label>
                        <input type="teaxt" id="optionTwo" onChange={(e)=>{this.setState({optionTwo:e.target.value})}} placeholder="rether 2" />
                        <input type="submit" className="x" value="add question" />
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        author:state.rootId.id,
        allUser:state.User
    }
}
export default withRouter(connect(mapStateToProps,{questions,user})(Add)) 