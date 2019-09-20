class LoginMenu extends React.Component{
    constructor(props){
        super(props);
        // cookie.save('token', '123', {path: '/'});
        this.state = {
            list: [],
            user: "",
            password: "",
            token: ""
        };
    }

    componentDidMount() {
        var me = this;

        ReactDOM.TAO.dataEngine({
            type: 'POST',
            url: 'http://yw.dev.shusiou.win/api/testLogin.api?user=' + this.state.user + '&pass=' + this.state.password,
            data: {},
            dataType: 'JSON',
            timeout: (6 * 1000),
            success: function(resultData){
                me.setState({list : resultData});
                console.log(this.state.list);
            },
            error : function(err) {
                console.log('err');
            },
            spinner : me
        });
        if(this.state.list.length == 1){
            this.setState({token: 'token'});
            window.reactCookie.save('token', this.state.token);
        }
        // fetch('http://yw.dev.shusiou.win/api/testLogin.js', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     },
        //     mode: "cors",
        //     cache: "default"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
    }

    onClick() {

    }

    onUserTextChange(event) {
        this.setState({user: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <p>Logo</p>
                <p>connect with</p>
                <Medias />
                <p>or</p>
                <input type='text' name='user' placeholder='Email' value={this.state.user} onChange={this.onUserTextChange}/><br/>
                <input type='text' name='password' placeholder='Password' value={this.state.password} onChange={this.onPasswordChange}/><br/>
                <input type='checkbox' value='remember'/> remember me
                <span><a>forgot password?</a></span><br/>
                <button>Login</button><br/>
                <span>Not register?</span><span><a>Sign up</a></span><span>for free membership</span>
            </div>
        )
    }
}