import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon
} from 'react-share'

class SocialButtons extends Component {
  render() {
    return (
      <div className="share-container">

        <div className="share-button">
         <TwitterShareButton
           url={this.props.resource.url}
           title={this.props.resource.title}
           via="tPhilosophia & https://philosophybank.herokuapp.com"
           >
           <TwitterIcon
             size={24}
             round />
         </TwitterShareButton>
       </div>

       <div className="share-button">
        <FacebookShareButton
          url={this.props.resource.url}
          quote={this.props.resource.description}
          >
          <FacebookIcon
            size={24}
            round />
        </FacebookShareButton>
      </div>

      <div className="share-button">
        <WhatsappShareButton
          url={this.props.resource.url}
          title={this.props.resource.title}
          separator=":: "
          >
          <WhatsappIcon size={24} round />
        </WhatsappShareButton>
      </div>

      <div className="share-button">
        <LinkedinShareButton
          url={this.props.resource.url}
          title={this.props.resource.title}
          windowWidth={750}
          windowHeight={600}
          >
          <LinkedinIcon
            size={24}
            round />
        </LinkedinShareButton>
      </div>

      <div className="share-button">
        <PinterestShareButton
          url={String(window.location)}
          media={`${String(window.location)}/${this.props.resource.media}`}
          windowWidth={1000}
          windowHeight={730}
          >
          <PinterestIcon size={24} round />
        </PinterestShareButton>
      </div>

      <div className="share-button">
        <RedditShareButton
          url={this.props.resource.url}
          title={this.props.resource.title}
          windowWidth={660}
          windowHeight={460}
          >
          <RedditIcon
            size={24}
            round />
        </RedditShareButton>
      </div>

      <div className="share-button">
        <EmailShareButton
          url={this.props.resource.url}
          subject={this.props.resource.title}
          body={this.props.resource.description + ': ' + this.props.resource.url}
          >
          <EmailIcon
            size={24}
            round />
        </EmailShareButton>
      </div>
    </div>
    )
  }
}

export default SocialButtons
