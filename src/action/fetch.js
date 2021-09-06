import {_getUsers , _getQuestions }from "../_DATA"
import {questions } from "./questions"
import {user } from "./user"
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function fetch(){
    return (dispatch)=>{
        dispatch(showLoading())
        _getQuestions()
        .then((a)=>{
            dispatch(user(a))
        })

        return _getUsers()
        .then((x)=>{
            dispatch(questions(x))
            dispatch(hideLoading())
        })
    }

}