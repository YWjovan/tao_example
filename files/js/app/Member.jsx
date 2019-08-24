class Member extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.number}</h3>
            </div>
        );
    }
}