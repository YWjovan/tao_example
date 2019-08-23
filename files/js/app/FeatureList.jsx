class FeatureList extends React.Component{
    constructor(props){
        super(props);
        var items= [];
        items.push({
            name: "yw",
            tag: "123"
        });
        this.state = {items};
    }

    render() {
        return (
            <div>
                {this.state.items.map((item, index) => {
                    return (<FeatureItem name={item.name} tag={item.tag}/>)
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