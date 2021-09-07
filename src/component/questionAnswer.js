import React, { Component } from "react"
import { connect } from "react-redux"


class QuestionAnswer extends Component {

    state={
        start:false,
    }
    countVote=(x)=>{
        
        
        let a =this.props.questions[x].optionOne.votes.length /
        (this.props.questions[x].optionOne.votes.length +
        this.props.questions[x].optionTwo.votes.length ) * 100
        return a
            
        
    }
    countVote2=(x)=>{
        // if (this.props.user.answers[x] ==="optionOne"){
        
        // let a =this.props.questions[x].optionOne.votes.length /
        // (this.props.questions[x].optionOne.votes.length +
        // this.props.questions[x].optionTwo.votes.length ) * 100
        // console.log(a)
        // return a
            
        // }else if (this.props.user.answers[x] ==="optionTwo"){
            
            let c =(this.props.questions[x].optionTwo.votes.length /
            (this.props.questions[x].optionOne.votes.length +
            this.props.questions[x].optionTwo.votes.length ) )* 100
            return c
            
        // }
    }
    render(){
        const {user ,myAnswers}=this.props
        return (
            <div>
                <ul>
                    {  myAnswers.map((x)=>(
                        <li key={x} className="anser-vote">
                            <div className="option1">
                                <div>{this.props.questions[x].optionOne.text}
                                {user.answers[x] ==="optionOne" ?  <span style={{float: "right"}} className="red">me</span> :(
                                    null
                                )}
                                </div>
                                <div className="votetotel">
                                
                                {  
                                    <div style={{width:`${this.countVote(x)}%`}} className="red">{this.countVote(x)}%</div> 
                                }
                                </div>
                            </div>
                            <div className="option1">
                                <div>{this.props.questions[x].optionTwo.text}
                                {user.answers[x] ==="optionTwo" ?  <span style={{float: "right"}} className="red">me</span> :(
                                    null
                                )}
                                </div>
                                <div className="votetotel">
                                {  
                                    <div style={{width:`${this.countVote2(x)}%`}} className="red">{this.countVote2(x)}%</div> 
                                }
                                </div>
                            </div>
                        </li>
                      ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({questions ,User},{id}){
    let user=User[id]
    return{
        questions:questions,
        user ,
        myAnswers:user ?
            Object.keys(user.answers).sort((a,b)=> questions[b].timestamp - questions[a].timestamp) 
            : null ,

    }
}

export default connect(mapStateToProps)(QuestionAnswer)