import React, { Component } from 'react';

const styles = {
    video : {
        visibility : 'visible',
        width: '100%'
    }
}


class Slide extends Component{

    render(){

        const {children} = this.props;

        return (

            <div id="slide_one" className="swiper-slide">
                
                {children}

                <video className="slider-video" width="100%" preload="auto" loop autoPlay style={styles.video} poster="//dl.dropbox.com/s/pjopy0mu4klisat/working-with-espresso.jpg">
                    <source src="//dl.dropbox.com/s/931244iox7i0fpk/working-with-espresso.mp4" type="video/mp4" />
                    <source src="//dl.dropbox.com/s/g3mo3w34pb8pp2l/working-with-espresso.webm" type="video/webm" />
                    <source src="//dl.dropbox.com/s/p37f0avio0x6bs8/working-with-espresso.ogv" type="video/ogg" />
                </video>
            </div>

        )

    }

}

export default Slide;