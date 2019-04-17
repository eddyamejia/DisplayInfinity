import React from 'react';
import * as ReactNative from 'react-native';
import * as RNSVG from 'react-native-svg';

const CLOCKWISE = 'CW';
const COUNTER_CLOCKWISE = 'CCW';

class CircleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.polarToCartesian = (angle) => {
      const r = this.props.sliderRadius;
      // const hC = this.props.sliderRadius + this.props.btnRadius;
      const hC = this.props.sliderWidth / 2 + this.props.sliderRadius;
      const a = ((angle - 90) * Math.PI) / 180.0;
      const x = hC + r * Math.cos(a);
      const y = hC + r * Math.sin(a);
      return { x, y };
    };
    this.cartesianToPolar = (x, y) => {
      // const hC = this.props.sliderRadius + this.props.btnRadius;
      const hC = this.props.sliderWidth / 2 + this.props.sliderRadius;
      if (x === 0) {
        return y > hC ? 0 : 180;
      }
      if (y === 0) {
        return x > hC ? 90 : 270;
      }
      const part1 = (Math.atan((y - hC) / (x - hC)) * 180) / Math.PI;
      const part2 = x > hC ? 90 : 270;
      return Math.round(part1 + part2);
    };
    this.handleMeasure = (ox, oy, width, height, px, py) => {
      // return;
      console.log(`Width for SVG Layout: ${width}, height: ${height}, px: ${px}, py: ${py}`);
      const center = (this.props.sliderWidth + this.props.sliderRadius * 2) / 2;
      this.setState(
        {
          xCenter: px + (this.props.sliderRadius + this.props.btnRadius),
          yCenter: py + (this.props.sliderRadius + this.props.btnRadius),
          measuredBox: this.getBoxBounds(),
          circleCenter: { x: center, y: center },
        },
        () => {
          if (this.props.onValueChange) {
            this.props.onValueChange(this.props.startDegree ? this.props.startDegree : 0);
          }
        },
      );
    };
    this.measureLocation = () => {
      // @ts-ignore
      this.circleslider.measure(this.handleMeasure);
    };
    this.getOnPressAngle = (x, y) => {
      const xOrigin = this.state.xCenter - (this.props.sliderRadius + this.props.btnRadius);
      const yOrigin = this.state.yCenter - (this.props.sliderRadius + this.props.btnRadius);
      const a = this.cartesianToPolar(x - xOrigin, y - yOrigin);
      const relativeAngle = this.getRelativeAngle(a);
      const width = this.props.sliderWidth + this.props.sliderRadius * 2;
      this.setState({ origin: { x: xOrigin, y: yOrigin } });
      return { angle: a, relativeAngle };
    };
    this.getRelativeAngle = (angle) => {
      const start = this.props.startDegree !== undefined ? this.props.startDegree : 0;
      if (angle < start) {
        return this.props.arcDirection === CLOCKWISE
          ? (Math.abs(360 - start) + angle) % 360
          : start - angle;
      }
      return this.props.arcDirection === CLOCKWISE ? angle - start : (start + (360 - angle)) % 360;
    };
    this.relativeToAbsoluteAngle = (relativeAngle) => {
      const start = this.props.startDegree !== undefined ? this.props.startDegree : 0;
      const relative = (this.props.arcDirection === CLOCKWISE ? 1 : -1) * relativeAngle;
      return start + (relative % 360);
    };
    this.getCurrentValue = () =>
      parseFloat(
        ((this.state.relativeAngle / 360) * this.props.maxValue).toFixed(this.props.decimalPlaces),
      );
    this.setValue = (value) => {
      const rel = ((value * 360) / this.props.maxValue) % 360;
      const a = this.relativeToAbsoluteAngle(rel) % 360;
      // console.log(`Setting new angle: ${a}, relativeAngle: ${rel}`);
      this.setState({ angle: a, relativeAngle: rel });
    };
    this.onValueChanged = (value) => {
      if (this.props.onValueChange !== undefined) {
        this.props.onValueChange(value);
      }
    };
    this.innerCirclePressed = (value) => {
      if (this.props.onPressInnerCircle !== undefined) {
        this.props.onPressInnerCircle(value);
      }
    };
    this.outerCirclePressed = (value) => {
      if (this.props.onPressOuterCircle !== undefined) {
        this.props.onPressOuterCircle(value);
      }
    };
    this.getBoxBounds = () => {
      let degree = 45;
      if (this.props.startDegree) {
        degree += this.props.startDegree;
      }
      const arr = [];
      for (let i = 0; i < 2; i++) {
        arr.push((degree + 90 * i) % 360);
      }
      const pointArray = [];
      const px = this.state.xCenter - (this.props.sliderRadius + this.props.btnRadius);
      const py = this.state.yCenter - (this.props.sliderRadius + this.props.btnRadius);
      arr.forEach((angle) => {
        const x =
          (this.props.sliderRadius - this.props.sliderWidth / 2) *
            Math.cos(this.degreeToRadian(angle)) +
          this.state.circleCenter.x;
        const y =
          (this.props.sliderRadius - this.props.sliderWidth / 2) *
            Math.sin(this.degreeToRadian(angle)) +
          this.state.circleCenter.y;
        const newPoint = {
          angle: this.relativeToAbsoluteAngle(angle),
          x,
          y,
        };
        pointArray.push(newPoint);
      });
      return pointArray;
    };
    this.degreeToRadian = (angle) => angle * 0.0174533;
    this.radianToDegree = (radian) => radian * 57.2958;
    this.state = {
      angle: this.relativeToAbsoluteAngle(
        ((this.props.value !== undefined ? this.props.value : 0) * 360) / this.props.maxValue,
      ),
      relativeAngle:
        ((this.props.value !== undefined ? this.props.value : 0) * 360) / this.props.maxValue,
      xCenter: Number.NEGATIVE_INFINITY,
      yCenter: Number.NEGATIVE_INFINITY,
      origin: { x: 0, y: 0 },
      circleCenter: { x: 0, y: 0 },
      measuredBox: null,
    };
    if (props.arcDirection !== CLOCKWISE && props.arcDirection !== COUNTER_CLOCKWISE) {
      throw new Error(
        "Prop 'arcDirection' only supports 'CW' or 'CCW', for Clockwise or Counterclockwise",
      );
    }
    this.panResponder = ReactNative.PanResponder.create({
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        const angles = this.getOnPressAngle(gs.moveX, gs.moveY);
        /*
                if (this.state.relativeAngle <= 0) {
                    if (this.props.startDegree ? this.props.startDegree : 0 < angles.angle) {   // TODO: Fix: Value can't go below 0 or higher than max value
                        return;
                    }
                }
                */
        this.setState({ angle: angles.angle, relativeAngle: angles.relativeAngle }, () => {
          this.onValueChanged(this.getCurrentValue());
        });
      },
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => false,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      // @ts-ignore
      console.log(`New props value: ${nextProps.value}`);
      this.setValue(nextProps.value !== undefined ? nextProps.value : 0);
    }
  }

  render() {
    const width = this.props.sliderWidth + this.props.sliderRadius * 2; // (this.props.sliderRadius + this.props.btnRadius) * 2;
    const bR = this.props.btnRadius;
    const dR = this.props.sliderRadius;
    // const startCoord = this.polarToCartesian(
    //   this.props.startDegree !== undefined ? this.props.startDegree : 0,
    // );
    const endCoord = this.polarToCartesian(this.state.angle);
    // const radiusX = dR;
    // const radiusY = dR;
    // const xAxisRotation = 0; // The x-axis-rotation does not have an effect on a circle, 0 is a good choice.
    // const largeArc = this.state.relativeAngle >= 180 ? 1 : 0;
    // const sweepFlag = this.props.arcDirection === CLOCKWISE ? 1 : 0;
    return (
      <ReactNative.View style={{ flex: this.props.flex ? this.props.flex : 1 }}>
        <RNSVG.Svg
          onLayout={this.measureLocation}
          ref={(node) => {
            if (node) {
              this.circleslider = node;
            }
          }}
          width={width}
          height={width}
          flex={1}
        >
          {/* <RNSVG.Defs>
            <RNSVG.LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <RNSVG.Stop offset="0%" stopColor={this.props.startGradient} />
              <RNSVG.Stop offset="100%" stopColor={this.props.endGradient} />
            </RNSVG.LinearGradient>
          </RNSVG.Defs> */}

          <RNSVG.Circle
            r={dR}
            cx={width / 2}
            cy={width / 2}
            stroke={this.props.backgroundColor}
            strokeWidth={this.props.sliderWidth}
            fill="none"
          />

          {/* <RNSVG.Path
            stroke="url(#gradient1)"
            strokeWidth={this.props.sliderWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={`M${startCoord.x} ${
              startCoord.y
            } A ${radiusX} ${radiusY} ${xAxisRotation} ${largeArc} ${sweepFlag} ${endCoord.x} ${
              endCoord.y
            }`}
            onPressIn={(e) => {
              const p = e.nativeEvent;
              const angles = this.getOnPressAngle(p.locationX, p.locationY);
              this.setState({ angle: angles.angle, relativeAngle: angles.relativeAngle }, () => {
                const currentValue = this.getCurrentValue();
                this.outerCirclePressed(currentValue);
                this.onValueChanged(currentValue);
              });
            }}
          /> */}

          <RNSVG.Circle
            r={dR + (dR * 25) / 100}
            cx={width / 2}
            cy={width / 2}
            stroke="none"
            fill="none"
            onPressIn={(e) => {
              const p = e.nativeEvent;
              const angles = this.getOnPressAngle(p.pageX, p.pageY);
              this.setState({ angle: angles.angle, relativeAngle: angles.relativeAngle }, () => {
                const currentValue = this.getCurrentValue();
                this.outerCirclePressed(currentValue);
                this.onValueChanged(currentValue);
              });
            }}
          />

          <RNSVG.G x={endCoord.x - bR} y={endCoord.y - bR}>
            <RNSVG.Circle
              r={bR}
              cx={bR}
              cy={bR}
              fill={this.props.btnColor}
              {...this.panResponder.panHandlers}
            />
          </RNSVG.G>

          {this.state.measuredBox &&
          this.state.measuredBox.length > 2 &&
          this.state.measuredBox[2].y ? (
            <ReactNative.View
              overflow="visible"
              position="absolute"
              top={this.state.measuredBox[2].y}
              left={this.state.measuredBox[2].x}
              width={this.state.measuredBox[0].x - this.state.measuredBox[2].x}
              height={this.state.measuredBox[1].y - this.state.measuredBox[2].y}
            >
              {this.props.component}
            </ReactNative.View>
          ) : null}
        </RNSVG.Svg>
      </ReactNative.View>
    );
  }
}

CircleSlider.defaultProps = {
  arcDirection: CLOCKWISE,
  backgroundColor: 'white',
  btnColor: 'yellow',
  btnRadius: 13,
  component: undefined,
  decimalPlaces: 0,
  endGradient: '#A6FFCB',
  flex: 1,
  maxValue: 360,
  onPressInnerCircle: (value) => value,
  onPressOuterCircle: (value) => value,
  onValueChange: (value) => value,
  showValue: true,
  sliderRadius: 130,
  sliderWidth: 25,
  startDegree: 0,
  startGradient: '#12D8FA',
  textColor: 'white',
  textSize: 50,
  value: 0,
};

export default CircleSlider;
