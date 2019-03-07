import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSlide } from '../data/actions/slideshowActions'
import { Redirect } from 'react-router-dom'
import FileUploader from 'react-firebase-file-uploader'
import firebase from 'firebase'
import Navbar from '../components/navbar'
import M from 'materialize-css'

class AddSlider extends Component {
  state = {
    title: '',
    description: '',
    hasBtn: false,
    btnText: '',
    image: '',
    imageURL: '',
    progress: 0
  }

  componentDidMount() {
    M.AutoInit()
  }

  handleUploadStart = () => {
    this.setState({
      progress: 0
    })
  }
  handleUploadSuccess = filename => {
    this.setState({
      image: filename,
      progress: 100
    })
    firebase.storage().ref('slideshow').child(filename).getDownloadURL()
      .then(url => this.setState({
        imageURL: url
      }))
  }
  handleProgress = progress => {
    this.setState({
      progress: progress
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleOptions = (e) => {
    const cat = e.target.value
    this.setState({ [e.target.id]: [...this.state.catagory, cat] })
  }
  handleTags = (e) => {
    const tag = e.target.value
    this.setState({ [e.target.id]: [...this.state.tags, tag] })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createSlide(this.state)
    this.setState({
      title: '',
      description: '',
      hasBtn: false,
      btnText: '',
      image: '',
      imageURL: '',
      progress: 0
    })
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    const progressStyle = {
      width: this.state.progress + '%'
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add New Slider</h5>
            <div className="input-field">
              <label htmlFor="title">Project Title</label>
              <input type="text" id="title" onChange={this.handleChange} value={this.state.project} />
            </div>
            <div className="input-field">
              <label htmlFor="description">Description</label>
              <textarea id="description" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange} value={this.state.description}></textarea>
            </div>
            <label className="btn grey">
              Upload Image
							<FileUploader
                hidden
                accept="image/*"
                name="image"
                storageRef={firebase.storage().ref('slideshow')}
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                className="input-field file-field"
              // as={fileUploaderComponent}
              />
            </label>
            <div>
              <div className="progress grey lighten-1">
                <div className="determinate" style={progressStyle}></div>
              </div>
            </div>
            {this.state.image && <React.Fragment><label> Preview </label><img className="responsive-img" src={this.state.imageURL} alt={this.state.title} /></React.Fragment>}
            <br />
            <br />
            <br />
            <div className="input-field">
              <button className="btn btn-large teal lighten-1">
                Publish
								<i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSlide: (slideshow) => dispatch(createSlide(slideshow))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSlider)

