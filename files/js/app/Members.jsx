class Members extends React.Component{
    constructor(props){
        super(props);

        this.state = {numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]};
    }

    render() {
        return (
            <div>
                <button>left</button>
                {this.state.numbers.map((item, index) => {
                    return (<Member number={item}/>);
                })}
                <button>right</button>
            </div>
        );
    }
}