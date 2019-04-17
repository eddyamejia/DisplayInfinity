import React, { Component, Fragment } from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { TouchNative } from 'rn-hgl/components';
import Carousel from 'react-native-snap-carousel';
import dimensions from 'rn-hgl/dimensions';

import gradientCircle from 'assets/gradientCircle.png';

import { colors } from 'configs';

import CircleSlider from 'components/CircleSlider';

import styles, { BOX_SIZE } from './styles';
import { slides } from './map';

class CarouselContent extends Component {
  state = { activeSlide: 0 };

  render() {
    const { activeSlide } = this.state;
    const { children } = this.props;
    // return null;
    return (
      <Fragment>
        <Carousel
          data={slides}
          slideStyle={styles.carousel}
          itemWidth={dimensions.width}
          sliderWidth={dimensions.width}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          renderItem={({ index }) =>
            index ? (
              children
            ) : (
              <View style={styles.circleNode0}>
                <View style={styles.circleNode1}>
                  <View noFeedback style={styles.circleNode2}>
                    <ImageBackground
                      width={BOX_SIZE}
                      resizeMode="cover"
                      source={gradientCircle}
                      style={styles.circleGradient}
                    >
                      <CircleSlider
                        btnRadius={12}
                        sliderWidth={20}
                        arcDirection="CW"
                        sliderRadius={BOX_SIZE}
                        endGradient={colors.alpha}
                        startGradient={colors.alpha}
                        backgroundColor={colors.alpha}
                        btnColor={colors.white.string()}
                      />
                    </ImageBackground>
                  </View>
                </View>
              </View>
            )
          }
        />
        <TouchNative style={styles.slidesHolder}>
          {slides.map((slide, index) => {
            const isSlideActive = index === activeSlide;
            return (
              <TouchNative
                rippleEffect
                key={slide.key}
                style={[styles.slide, isSlideActive ? styles.slideActive : {}]}
                onPress={() => (!isSlideActive ? this.setState({ activeSlide: slide.key }) : null)}
              >
                <View />
              </TouchNative>
            );
          })}
        </TouchNative>
      </Fragment>
    );
  }
}

CarouselContent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CarouselContent;
