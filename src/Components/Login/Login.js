import React, { Component } from 'react'
import { Navigate } from 'react-router'

const user = [
    {
        username:'hak',
        password:'123456'
    }
]


class Login extends Component {

    constructor(props){
        super(props)
        this.state = { username: '',password:'', isAuthorized : false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState( prevState => ({...prevState, [event.target.name]:event.target.value}) )
    }

    handleSubmit(event) {
        event.preventDefault()

        if(this.state.username === '') {
            alert('renseigner le username')
        }

        let value = user.find( obj => obj.username === this.state.username && obj.password === this.state.password )

        if( value !== undefined) {
            this.setState(prevState => ({...prevState,isAuthorized:true}))
        } else {
            alert('Pas autorisé')
        }

    }
    
    render() {
        return (
            
            this.state.isAuthorized ?

                <Navigate to='/Courses'/>

            :

            <div>
               
                <section onSubmit={this.handleSubmit} >

                
            <div class="modal-login">
            <h2>
                <img src="https://fontmeme.com/permalink/211107/e032de7d4cc6e8f05f3f3d531f9a414f.png" alt="police-my-hero-academia" border="0"/>
            </h2>
            <form id="login-form">
                <h3><img src="https://fontmeme.com/permalink/211125/f1c65bfddcdbce11219e54a8d5108373.png" alt="police-my-hero-academia" border="0"/></h3><input type='text' name="username" id="username" placeholder="Entrez votre nom d'utilisateur"value={this.state.username} onChange={this.handleChange} />
                <br/>
                <h3><img src="https://fontmeme.com/permalink/211125/6d3000c4b71574fbffde27330b94073b.png" alt="police-my-hero-academia" border="0"/></h3><input type='password' name="password" id="password" placeholder="Entrez votre mot de passe" value={this.state.password} onChange={this.handleChange} />
                <br/>
                <br/>
                <button type="submit" > <a href="https://fontmeme.com/fr/police-my-hero-academia/"><img src="https://fontmeme.com/permalink/211126/c0dd3f1d9eb35ae649b3183fb240e84a.png" alt="police-my-hero-academia" border="0"/></a></button>
            </form>
                </div>
                     
                </section>

            </div>

        )
    }

    

}

export default Login