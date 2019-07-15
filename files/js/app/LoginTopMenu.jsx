class LoginTopMenu extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        alert("hi " + (this.props.name));
    }

    render(){
        var me = this;
        return(
            <div>
                <span name = "Logo"><a href = "javascript:void(0)" onClick = {this.handleClick(me)}>Logo</a></span>
                <span name = "Solution"><a href = "javascript:void(0)" onClick = {this.handleClick(me)}>Tao Solution</a></span>
                <span name = "Sign"><a href = "javascript:void(0)" onClick = {this.handleClick(me)}>Sign Up</a></span>
            </div>);
    }
}