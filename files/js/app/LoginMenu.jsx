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
        //console.log(this.state.list);
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

    isMatch(password, passwordHash) {
        return true;
    }

    componentDidUpdate() {
        var me = this;
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

    onClick(event) {
        var me = this;
        var url = 'http://yw.dev.shusiou.win/api/testLogin.api?user=' + me.state.user;
        ReactDOM.TAO.dataEngine({
            type: 'POST',
            url: url,
            data: {},
            dataType: 'JSON',
            timeout: (6 * 1000),
            success: function(resultData){
                var list = resultData.data;
                var passwordHash = '';
                if(list.length === 1) {
                    passwordHash = list[0].passWordHash;
                    if(this.isMatch(me.state.password, passwordHash)) {
                        var token = '123456';
                        me.setState({token: token}, () => {
                            console.log(me.state.token);
                        });
                        window.reactCookie.save('token', me.state.token, {path: '/'});
                    }else {
                        var token = '654321';
                        me.setState({token: token}, () => {
                            console.log(me.state.token);
                        });
                        window.reactCookie.save('token', me.state.token, {path: '/'});
                    }
                }
                // me.setState({list : resultData.data}, () => {
                //
                // });
            },
            error : function(err) {
                console.log('err: ' + err.message);
            },
            spinner : me
        });

            // if(me.state.list.length === 1){
            //     console.log(this.state.list);
            //     console.log('passwordHash is ' + this.state.list[0].passWordHash);
            //     if(this.isMatch(this.state.password, this.state.list[0].passWordHash)){
            //         var token = '123456';
            //         me.setState({token: token});
            //         window.reactCookie.save('token', me.state.token, {path: '/'});
            //     }else {
            //         var token = '654321';
            //         me.setState({token: token});
            //         window.reactCookie.save('token', me.state.token, {path: '/'});
            //     }
            //     console.log('cookie of token is ' + window.reactCookie.load('token'));
            // }
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
                <input type='text' name='password' placeholder='Password' value={this.state.password} onChange={this.onPasswordChange.bind(this)}/><br/>
                <input type='checkbox' value='remember'/> remember me
                <span><a>forgot password?</a></span><br/>
                <button onClick={this.onClick.bind(this)}>Login</button><br/>
                <span>Not register?</span><span><a>Sign up</a></span><span>for free membership</span>
            </div>
        )
    }
}