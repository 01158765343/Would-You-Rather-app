import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Voteqid } from "../action/user"
class UnAnswers extends Component {
    state={
        id:""
    }
    vote=(e,id)=>{
        e.preventDefault()
        console.log(id)
        this.setState({id})
        this.props.Voteqid(id)
        this.props.history.push(`/questions/:${id}`)
    }
    time =()=>{
        const {questions,myid}=this.props
        // myid.map((x)=>{
            let m =  myid.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
            console.log(m)
        // })
        
    }
    render (){
        console.log("ssss",this.props.a)
        const {questions ,questionUnAnswers}=this.props
        return (
            <div>
                <ul>
                    {
                        questionUnAnswers.map((x)=>(
                            <li key={x}>
                                <div onClick={this.time}>{questions[x].optionOne.text}</div>
                                <div>{questions[x].optionTwo.text}</div>
                                <button onClick={(e)=>this.vote(e,x)}>vote</button>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        )
    }
}

function mapStateToProps ({questions, User} , props){
    const {id}=props
    let idAnswer =[];
    let idqustion=[];
    let myid =[]
    Object.keys(User[id].answers).map((x)=>{
        idAnswer.push(x)
    })
    Object.keys(questions).map((x)=>{
        idqustion.push(x)
    })
    idqustion.filter((x)=>{
        if(idAnswer.indexOf(x)===-1 ){
            myid.push(x)
        }
    })
    
    return {
        questions,
        User,
        myid,
        questionUnAnswers :myid.length > 0 ? myid.sort((a,b) => questions[b].timestamp - questions[a].timestamp) :myid
        
    }
}

export default withRouter(connect (mapStateToProps,{Voteqid})(UnAnswers))