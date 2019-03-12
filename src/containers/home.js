import React, { Component } from 'react'
import { connect } from 'react-redux'
import WelcomeMsg from '../components/welcomeMsg';
import Nav from '../components/navbar'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Footer from '../components/footer'
import Slider from '../components/slider'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Home extends Component {

  render() {
    const { auth, profile, slideshow } = this.props
    const msg = auth.uid ? <WelcomeMsg profile={profile} /> : <p>Login first!</p>
    const sld = slideshow ? <Slider slideshow={slideshow} /> : <p>Loading...</p>
    return (
      <React.Fragment>
        <Nav />
        <div>
          {sld}
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
