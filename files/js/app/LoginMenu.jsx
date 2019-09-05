class LoginMenu extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        fetch('http://yw.dev.shusiou.win/api/testLogin.js', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: "cors",
            cache: "default"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <p>Logo</p>
                <p>connect with</p>
                <Medias />
                <p>or</p>
                <input type='text' name='user' placeholder='Email' /><br/>
                <input type='text' name='password' placeholder='Password' /><br/>
                <input type='checkbox' value='remember'/> remember me
                <span><a>forgot password?</a></span><br/>
                <button>Login</button><br/>
                <span>Not register?</span><span><a>Sign up</a></span><span>for free membership</span>
            </div>
        )
    }
}