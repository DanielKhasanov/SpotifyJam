//React | Redux
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Components 
import SplashCard from './SplashCard';

//Video
import Cover from 'react-video-cover';

//Selectors
import {selectReAuthStatus} from '../../redux/selectors';

//Redirect
import {
    redirectToLobby
} from '../../redux/API/historyFunctions';

class Splash extends Component {

    componentWillMount(){
        if (this.props.reAuthStatus === 'finished'){
            this.props.redirectToLobby();
        }
    }

    render() {
        const videoOptions = {
            src: 'https://d3fka592uu6tyf.cloudfront.net/converted_videos/s3_0dc7d315-a2e9-44a4-9b85-bd519b8c362a/desktop.mp4',
            autoPlay: true,
            loop: true,
            muted: true
          };
        return (
            <div>
                <Cover id = "videoCover" videoOptions={videoOptions} remeasureOnWindowResize />
                <SplashCard/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reAuthStatus: selectReAuthStatus(state)
    };
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
    redirectToLobby
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Splash);