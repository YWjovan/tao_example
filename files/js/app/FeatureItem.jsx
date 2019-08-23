class FeatureItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.name}</h4>
                <p>{this.tag}</p>
            </div>
        );
    }
}