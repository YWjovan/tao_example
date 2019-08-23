class FeatureList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <FeatureItem name="yw" />
                <FeatureItem name="eric" />
                <FeatureItem name="oliver" />
            </div>
        );
    }
}