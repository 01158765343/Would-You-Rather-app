import {UserDate ,questionsDate ,REMOV_ID,Add_ID , ADD_LG ,ADD_VTOE} from "../action/type"
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'



function User(state={}, action ){


    switch(action.type ){
        case questionsDate  :
            let stat =action.date
            console.log(stat)
            return stat

        default :
            return state
    }

}



function questions(state={}, action ){


    switch(action.type){
        case UserDate :
            let a= action.date
            return a

        default :
            return state
    }

}
const intion ={
    loggedIn:false,
    id:""
}
function rootId (state=intion,action){
    switch(action.type){
        case Add_ID :
            let a ={...state}
            a.id=action.id
            return a
        case ADD_LG:
            let s = {...state}
            s.loggedIn=true
            return s

        case REMOV_ID :
            let r = {...state}
            r.loggedIn=false
            r.id=action.id
            return r
        case ADD_VTOE :
            let d={...state}
            d.qid=action.qid
            return d
        default :
            return state
    }
}

let rootReducer= combineReducers(
    {
        User,
        questions,
        rootId,
        loadingBar: loadingBarReducer,
    }
)


// let rootReducer =Date()
export default rootReducer