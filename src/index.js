import React from "react";
import ReactDom from "react-dom";

const Banner = ({user, onSignOut})=>{
  return (
    <div>
      <h1>WELCOME!</h1>
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class Login extends React.Component {
  
 
  handleSignIn(e) {
    e.preventDefault()
    let uname = this.refs.uname.value
    let pass = this.refs.pass.value
    this.props.onSignIn(uname, pass)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <input type="text" ref="uname" placeholder="Enter Username" />
        <input type="password" ref="pass" placeholder="Enter Password" />
        <input type="submit" value="Login" />
      </form>
    )
  }

}

class Form extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
 
  signIn(uname, pass) {
    this.setState({
      user:{
        uname,
        pass,
      }
    })
  }
  
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        { 
          (this.state.user) ? 
            <Banner 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <Login
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}

ReactDom.render(<Form />, 
document.getElementById("file"))