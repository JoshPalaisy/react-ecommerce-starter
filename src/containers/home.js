import React, { Component } from 'react'
import { connect } from 'react-redux'
import WelcomeMsg from '../components/welcomeMsg';
import Nav from '../components/navbar'
import StaticSlider from '../components/staticSlider'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Footer from '../components/footer'
import M from 'materialize-css'

class Home extends Component {
  componentDidMount() {
    let selects = document.querySelectorAll('.carousel')

    let options = {
      fullWidth: true,
      indicators: true
    }
    
    M.Carousel.init(selects, options)
  }

  render() {
    const { auth, profile, slideshow } = this.props
    const msg = auth.uid ? <WelcomeMsg profile={profile} /> : <p>Login first!</p>
    // const sld = slideshow ? <div className="carousel carousel-slider"><SliderList slideshow={slideshow} /></div> : <p>Loading...</p>
    return (
      <React.Fragment>
        <Nav />
        <StaticSlider />
        <div className="container center">
          { msg }
        </div>
        <div className="container center">
          {msg}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    slideshow: state.firestore.ordered.slideshow
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'slideshow' }
  ])
)(Home)
