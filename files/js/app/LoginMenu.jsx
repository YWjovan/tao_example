import cookie from 'react-cookie';
class LoginMenu extends React.Component{
    constructor(props){
        super(props);
        cookie.save('token', '123');
        this.state = { list: [], token: cookie.load('token')};
    }

    componentDidMount() {
        var me = this;

        // ReactDOM.TAO.dataEngine({
        //     type: 'POST',
        //     url: 'http://yw.dev.shusiou.win/api/testLogin.api',
        //     data: {},
        //     dataType: 'JSON',
        //     timeout: (6 * 1000),
        //     success: function(resultData){
        //         me.setState({list : resultData});
        //         console.log(this.state.list);
        //     },
        //     error : function(err) {
        //         console.log('err');
        //     },
        //     spinner : me
        // });

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