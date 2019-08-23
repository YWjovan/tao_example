class FeatureItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.props.content}</p>
            </div>
        );
    }
}