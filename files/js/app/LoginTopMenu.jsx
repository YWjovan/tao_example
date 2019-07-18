class LoginTopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {list: []};
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

    logoClick = () => {

    }

    taoSolutionClick = () => {

    }

    signUpClick = () => {

    }

    translateToEnglish = () => {

    }

    translateToChinese = () => {

    }

    render(){
        var me = this;
        return (
            <div className="border border-success alert-success rounded  m-0 mt-3 mb-2 p-2">
                Hi!
                {/*/!*<img onClick={this.logoClick} value = "logo"/>*!/*/}
                {/*<span><a href = "javascript:void(0);" onClick={this.taoSolutionClick}>Tao Solution</a></span>*/}
                {/*/!*<img value = "icon" />*!/*/}
                {/*<span><a href = "javascript:void(0);" onClick={this.signUpClick}>Sign Up</a></span>*/}
                {/*<select>*/}
                {/*    <option onClick={this.translateToEnglish}>English</option>*/}
                {/*    <option onClick={this.translateToChinese}>Chinese</option>*/}
                {/*</select>*/}
            </div>
        );
    }
}