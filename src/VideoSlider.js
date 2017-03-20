import React, { Component } from 'react';


const styles = {
  video: {
    height: 600
  }
}

class VideoSlider extends Component {

    componentDidMount() {

        this.swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0,
            autoplay: 30000,
            autoplayDisableOnInteraction: false
        });

    }

    render() {

        const { children } = this.props;

        return (


            <div className="swiper-container" style={styles.video}>

                <div className="swiper-wrapper">
                    {children}
                </div>

                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>

            </div>


        )

    }
}

export default VideoSlider;