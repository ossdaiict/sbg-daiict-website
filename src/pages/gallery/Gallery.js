import React from "react";
import { PageHeader } from "react-bootstrap";
import { FaCameraRetro } from "react-icons/fa";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

import galleryImages from "../../data/gallery/galleryImages";

class DAGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentView: 0, lightboxIsOpen: false };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentView: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentView: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentView: this.state.currentView - 1
    });
  }

  gotoNext() {
    this.setState({
      currentView: this.state.currentView + 1
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaCameraRetro />
              DA-IICT Gallery
            </PageHeader>
          </div>
        </div>
        <div>
          <Gallery photos={galleryImages} onClick={this.openLightbox} />
          <ModalGateway>
            {this.state.lightboxIsOpen ? (
              <Modal onClose={this.closeLightbox}>
                <Carousel
                  views={galleryImages}
                  currentIndex={this.state.currentView}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default DAGallery;
