import { Add_ID, ADD_VTOE, REMOV_ID, UserDate ,ADD_LG } from "./type";


export function user(date){
    return{
        type:UserDate,
        date
    }

}

export function addId (id) {
    return {
        type :Add_ID,
        id
    }
}
export function removeId(id){
    return {
        type:REMOV_ID,
        id,
    }
}


export function Voteqid (qid){
    return {
        type:ADD_VTOE,
        qid
    }
}


export function loginA(){
    return {
        type:ADD_LG
    }
}