import React, { Component } from "react"
import { connect } from "react-redux"
import  {_saveQuestionAnswer ,_getQuestions ,_getUsers} from '../_DATA'
import {questions } from "../action/questions"
import {user } from "../action/user"
import { withRouter } from "react-router-dom"


class Vote extends Component {

    state={
        option:""
    }
    chang=(e)=>{
        this.setState({option:e})
    }
    vote=(e)=>{
        e.preventDefault()
        if(this.state.option===""){
            alert("plesae select option")
        }else {
            console.log("option",this.state.option)
            let a = {}
            a.authedUser=this.props.author
            a.qid=this.props.id
            a.answer=this.state.option
            _saveQuestionAnswer(a)
            _getQuestions()
            .then((x)=>{
                this.props.user(x)
            })
            _getUsers()
            .then((x)=>{
                this.props.questions(x)
            })
            this.props.history.push(`/dashporder/questionAnsers`)
        }
    }
    render (){
        const {question , id}=this.props
        console.log(question,"asd")
        return (
            <div>
                <h1>what do you rether ?</h1>
                {this.props.id&&<form className="form" onChange={(e)=>{this.chang(e.target.value)}}  onSubmit={this.vote}>
                    <div>
                    <label htmlFor="pO" >  {question[id].optionOne.text}</label>
                    <input type="radio"  name="option" id="pO" value="optionOne" />
                    </div>
                    <div>
                    <label htmlFor="pW" >{question[id].optionTwo.text}</label>

                    <input id="pW"  type="radio" name="option" value="optionTwo" />
                    </div>
                    <input type="submit" className="x" value="vote" />
                    
                </form>}
            </div>
        )
    }
}


function mapStateToProps({questions,rootId},{id}){
    
    return {
        question:questions,
        id,
        author:rootId.id
    }
}

export default withRouter(connect(mapStateToProps ,{questions,user})(Vote))