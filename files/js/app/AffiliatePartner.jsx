class People extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.peopleList.people.map((item, index) => {
                return (
                    <div>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </div>
                )
            })
        );
    }
}


class AffiliatePartner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            peopleList: {}
        };
    }

    componentDidMount() {
        const me = this;
        fetch('http://yw.dev.shusiou.win/data.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: "cors",
            cache: "default"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({peopleList: data, isLoaded: true}, function () {
                    console.log(this.state.peopleList);
                })
            });
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <People peopleList={this.state.peopleList} />
            );
        }else {
            return (
                <div>loading...</div>
            );
        }
    }
}