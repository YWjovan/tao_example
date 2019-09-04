class People extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>{this.props.id}</div>
                <div>{this.props.name}</div>
            </div>
        )
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
                //console.log(data);
                this.setState({isLoaded: true, peopleList: data}, function () {
                    console.log(this.state.peopleList)
                })
            });
    }

    render() {
        console.log(this.state.isLoaded);
        if(this.state.isLoaded) {
            return (
                this.props.peopleList.people.map((item, index) => {
                    return (
                        <People id={item.id} name={item.name}/>
                    )
                })
            )
        }else {
            return (
                <div>loading...</div>
            )
        }
    }
}