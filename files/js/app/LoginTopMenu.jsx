class LoginTopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {list:[], tag: ["logo", "solution", "sign", "language"]};
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
        if(item === "logo") {
            //this.props.history.push('/app/TAOindex');
            alert(item);
        }
        //alert("hi " + (item));
    }

    render(){
        var me = this;
        return(
            <div className="border border-success alert-success rounded  m-0 mt-3 mb-2 p-2">
                {this.state.tag.map(item =>(
                    <span className = "mr-3"><a href = "javascript:void(0);" onClick={() => {this.handleClick(item)}}>{item}</a></span>))}
            </div>);
    }
}