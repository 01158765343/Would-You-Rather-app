import { ADD_VTOE } from "../action/type";

export function AddVote (state={},action){

    switch(action.type){
        case ADD_VTOE:
            let a ={...state}
            a.qid=action.qid
            return a

        default :
            return state
    }
}