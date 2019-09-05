class LoginMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = { list: []};
    }

    componentDidMount() {
        var me = this;
        ReactDOM.TAO.dataEngine({
            type: 'POST',
            url: 'http://yw.dev.shusiou.win/api/testLogin',
            data: {},
            dataType: 'JSON',
            timeout: (6 * 1000),
            success: function(resultData){
                console.log(resultData);
                me.setState({list : resultData.data, _TM : new Date().getTime()});
            },
            error : function(err) {
                console.log('err');
            },
            spinner : me
        });

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