class LoginMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <p>Logo</p>
                <p>connect with</p>
                <MediaLogin />
                <p>or</p>
                <input type='text' name='user' defaultValue='Email' /><br/>
                <input type='text' name='password' defaultValue='Password' /><br/>
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