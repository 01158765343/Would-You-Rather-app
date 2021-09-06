import React ,{Component} from "react"
import { connect } from "react-redux"
import {addId} from "../action/user"

class signin extends Component{

    state ={
        id:""
    }
    login=(e)=>{
        e.preventDefault()
        if (this.state.id ===""){
            alert("plesa selact usar")
            
        }else {
        this.props.addId(this.state.id)
        }
    }
    changid=(e)=>{
        this.setState({id:e.target.value})
        console.log("kosm ss",this.state.id)
        this.props.addId(this.state.id)

    }
    render (){
        console.log(this.state.id)
        const {user }=this.props
        return (
            <div className="conteniner">
                <h1 className="signin">sign in </h1>
                <form className=" cont" onSubmit={this.props.login}>
                    
                    <select className="select"  onChange={(e)=>this.props.onupdeat(e)}  >
                    <option  ></option>
                        {Object.keys(user).map((x)=>(
                                <option value={user[x].id}
                                 key={user[x].id}>{user[x].name}</option>
                            ))}
                    </select>
                    <input className="btn" htmlFor="selct" type="submit" value="login"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps=({User},props)=>{

    return {
        user:User,
        login:props.login,
        onupdeat:props.onupdeat
    }
}
export default connect(mapStateToProps,{addId})(signin)