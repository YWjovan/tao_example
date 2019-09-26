class LoginMenu extends React.Component{
    constructor(props){
        super(props);
        // cookie.save('token', '123', {path: '/'});
        this.state = {
            user: "",
            password: "",
            token: ""
        };
    }

    componentDidMount() {
        var me = this;
    }

    componentDidUpdate() {
        var me = this;
    }

    onClick(event) {
        var me = this;
        var url = 'http://yw.dev.shusiou.win/api/testLogin.api';
        // var url = 'http://yw.dev.shusiou.win/api/testLogin.api?user=' + me.state.user;
        ReactDOM.TAO.dataEngine({
            type: 'POST',
            url: url,
            data: {user: me.state.user, pass: me.state.password},
            dataType: 'JSON',
            // contentType: 'application/x-www-form-urlencoded',
            timeout: (6 * 1000),
            success: function(resultData){
                //console.log(resultData.token);
                var tk = resultData.token;
                this.setState({token: tk});
                window.reactCookie.save('token', tk, {path: '/'});
                // console.log(list[0]);
                // if(list.length === 1) {
                //     passwordHash = list[0].passWordHash;
                //     if(this.isMatch(me.state.password, passwordHash)) {
                //         var token = '123456';
                //         me.setState({token: token}, () => {
                //             console.log(me.state.token);
                //         });
                //         window.reactCookie.save('token', me.state.token, {path: '/'});
                //     }else {
                //         var token = '654321';
                //         me.setState({token: token}, () => {
                //             console.log(me.state.token);
                //         });
                //         window.reactCookie.save('token', me.state.token, {path: '/'});
                //     }
                // }
                // me.setState({list : resultData.data}, () => {
                //
                // });
            },
            error : function(err) {
                console.log('err: ' + err.message);
            },
            spinner : me
        });
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
                <input type='text' name='user' placeholder='Email' value={this.state.user} onChange={this.onUserTextChange.bind(this)}/><br/>
                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onPasswordChange.bind(this)}/><br/>
                <input type='checkbox' value='remember'/> remember me
                <span><a>forgot password?</a></span><br/>
                <button onClick={this.onClick.bind(this)}>Login</button><br/>
                <span>Not register?</span><span><a>Sign up</a></span><span>for free membership</span>
            </div>
        )
    }
}