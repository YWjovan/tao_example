class FeatureList extends React.Component{
    constructor(props){
        super(props);
        this.state = {mm: [{"yw": "123"}, {"eric": "234"}, {"oliver": "345"}]};
    }

    render() {
        return (
            <div>
                {this.state.mm.map((item) => {
                    return <p>item.key</p>
                })}
                {/*{this.state.mm.map(function (item, index) {*/}
                {/*    return (<FeatureItem  name={item.key} tag={item.value} />)*/}
                {/*})}*/}
                {/*<FeatureItem name="yw" tag={this.state.}/>*/}
                {/*<FeatureItem name="eric" />*/}
                {/*<FeatureItem name="oliver" />*/}
            </div>
        );
    }
}