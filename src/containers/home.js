import React, { Component } from 'react'
import { connect } from 'react-redux'
import WelcomeMsg from '../components/welcomeMsg';
import Navbar from '../components/navbar'
import StaticSlider from '../components/staticSlider'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Footer from '../components/footer'

class Home extends Component {
  componentDidMount() {
    const $ = window.$

    $(document).ready(function () {
      $('.carousel').carousel({ fullWidth: true, indicators: true })
    })

    setInterval(() => {
      $('.carousel').carousel('next')
    }, 5000)

  }

  componentWillUnmount() {
    clearInterval()
  }

  render() {
    const { auth, profile, slideshow } = this.props
    console.log(slideshow)
    const msg = auth.uid ? <WelcomeMsg profile={profile} /> : <p>Login first!</p>
    // const sld = slideshow ? <div className="carousel carousel-slider"><SliderList slideshow={slideshow} /></div> : <p>Loading...</p>
    return (
      <React.Fragment>
        <Navbar />
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
