class OurMission extends React.Component{
    constructor(props){
        super(props);
        //var pstyle = {test-align: 'left'};
        // var hstyle = {
        //     font-family: 'Roboto Slab, serif',
        //     font-size: '3em',
        //     padding-top:'120px',
        //     padding-bottom: '30px'
        // }
        // this.state = {
        //     pstyle: pstyle,
        //     hstyle: hstyle
        // };
        this.state = { token: 'hello our_mission'};
    }

    render() {
        return (
            <div>
                {/*<h3 style={this.state.hstyle}>Our Mission！</h3>*/}
                <h3>Our Mission</h3>
                <p>Our mission is to create an online ecosystem to help entrepreneurs and SMBs grow and go international. Entrepreneurs have very good ideas, but often lack the resources, talent and support necessary to build them. Every successful business need the right business partners, services, and resources. TaoBase aims to help you facilitate easy and meaningful connections between entrepreneurs, services and resources. TaoBase integrates international directory, online & offline high-quality product and service resources in order to create a lifeline that benefits early stage startups and SMBs, connects established businesses to qualified providers, and empowers all entrepreneurs and businesses to grow.</p>
            </div>
        );
    }
}

//
// <div className="row_1">
//     <div id="missionTitle" className="title">
//         <h3 className="textShadow"
//             style="font-family: 'Roboto Slab', serif;font-size: 3em; padding-top:120px; padding-bottom: 30px;"
//             translate="OUR_MISSION">Our Mission</h3>
//         <p style="text-align: left;" translate="OUR_MISSION1">
//             Our mission is to create an online ecosystem to help entrepreneurs and business grow. Entrepreneurs have
//             very good ideas, but often lack the resources, talent and support necessary to build them. Every successful
//             business needs right business partners and TaoBase aims to help you find right business partners by
//             facilitating meaningful connections between entrepreneurs and potential partners. We seek to create a
//             lifeline that benefits early stage startups and SMBs, connects established businesses to qualified
//             providers, and empowers all entrepreneurs and businesses to grow.</p>
//         <br>
//             <br>
//
//     </div>
// </div>