class FeatureItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                {/*<p>{this.props.content}</p>*/}
            </div>
        );
    }
}