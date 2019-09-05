class LoginMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <p>Logo</p>
                <p>connect with</p>
                <Medias />
                <p>or</p>
                <input type='text' name='user' value='Email' /><br/>
                <input type='text' name='password' value='Password' /><br/>
                <select>
                    <option>remember me</option>
                </select>
                <span><a>forgot password?</a></span>
                <button>Login</button>
                <span>Not register?</span><span><a>Sign up</a></span><span>for free membership</span>
            </div>
        );
    }
}