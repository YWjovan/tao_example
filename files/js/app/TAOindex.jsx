$(document).ready(function() {
	// id, Tag, elementId
	ReactDOM.TAO.load('topMenu', <LoginTopMenu param={{}} />, document.getElementById('topMenu'));
	// ReactDOM.TAO.load('topMenu', <TopMenu param={{}} />, document.getElementById('topMenu'));
	//ReactDOM.TAO.load('leftBox', <LeftBox param={{}} />, document.getElementById('leftBox'));
	//ReactDOM.TAO.load('rightBox', <TaoContent param={{}} />, document.getElementById('rightBox'));
	ReactDOM.TAO.load('loginMenu', <LoginMenu param={{}} />, document.getElementById('loginMenu'));
	ReactDOM.TAO.load('ourMission', <OurMission param={{}} />, document.getElementById('ourMission'));
	ReactDOM.TAO.load('footer', <Footer param={{}} />, document.getElementById('footer'));
});

