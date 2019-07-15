class LoginTopMenu extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        var me = this;

        ReactDOM.TAO.dataEngine({
            type: 'POST',
            url: '/api/Tao/API_PG.api?code=PGdatabases',
            data: {},
            dataType: 'JSON',
            timeout: (6 * 1000),
            success: function(resultData){
                me.setState({list : resultData.data, _TM : new Date().getTime()});
            },
            error : function(err) {
                console.log('err');
            },
            spinner : me
        });
    }

    componentDidUpdate(prevProps, prevState) {
        var me = this;
    }

    handleClick(item){
        alert("hi " + (item.name));
    }

    render(){
        var me = this;
        return(
            <div>
                <span name = "Logo"><a href = "javascript:void(0)">Logo</a></span>
                <span name = "Solution"><a href = "javascript:void(0)">Tao Solution</a></span>
                <span name = "Sign"><a href = "javascript:void(0)">Sign Up</a></span>
            </div>);
    }
}