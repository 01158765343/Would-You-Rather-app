import React, { Component } from "react"
import { connect } from "react-redux"


class QuestionAnswer extends Component {

    state={
        start:false,
    }

    render(){
        const {user}=this.props
        

        return (
            <div>
                <ul>
                    {  Object.keys(user.answers).map((x)=>(
                        <li key={x} className="anser-vote">
                            <div className="option1">
                                <div>{this.props.questions[x].optionOne.text}</div>
                                {user.answers[x] ==="optionOne" ? <div className="reght"></div> : (
                                    <div className="red"></div> 
                                )}
                            </div>
                            <div className="option1">
                                <div>{this.props.questions[x].optionTwo.text}</div>
                                {user.answers[x] ==="optionTwo" ?  <div className="reght"></div> :(
                                    <div className="red"></div> 
                                )}
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
    const a = id
    return{
        questions:questions,
        user: User[a]
    }
}

export default connect(mapStateToProps)(QuestionAnswer)