import React, { Component } from "react";
import _ from "lodash";
import { SliderProps } from "./Slider.types";
import "./slider.scss";

let sliderRef = null;
let slideTimer = null;

interface SliderState {
  sliding: boolean;
  timer: NodeJS.Timeout;
  data: SliderProps["data"];
}

export class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props) {
    super(props);

    sliderRef = React.createRef();

    this.state = {
      sliding: false,
      timer: null,
      data: props.data,
    };
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.slide("right");
      }, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    clearTimeout(slideTimer);
  }

  onTransitionEnd = (direction) => {
    const { current: slider } = sliderRef;
    if (!slider) {
      return;
    }
    if (direction === "right") {
      slider.appendChild(slider.firstElementChild);
    } else if (direction === "left") {
      slider.prepend(slider.lastElementChild);
    }
    slider.style.transition = "none";
    slider.classList.remove("translate--left");
    slider.classList.remove("translate--right");
    slideTimer = setTimeout(() => {
      slider.style.transition = "all 0.5s";
      this.setState({ sliding: false });
    }, 100);
  };

  slide = (direction) => {
    const { current: slider } = sliderRef;
    if (this.state.sliding === true) {
      return;
    }
    if (!slider) {
      return;
    }

    this.setState({ sliding: true });
    if (direction === "right") {
      slider.classList.add("translate--right");
      slideTimer = setTimeout(() => this.onTransitionEnd(direction), 600);
    } else if (direction === "left") {
      slider.style.transition = "none";
      slider.classList.add("translate--right");
      slider.prepend(slider.lastElementChild);
      // Clean Up
      slideTimer = setTimeout(() => {
        slider.style.transition = "all 0.5s";
        slider.classList.remove("translate--right");
        slideTimer = setTimeout(() => {
          this.setState({ sliding: false });
        }, 600);
      });
    }
  };

  onHover = () => {
    clearInterval(this.state.timer);
  };

  onLeave = () => {
    this.setState({
      timer: setInterval(() => {
        this.slide("right");
      }, 5000),
    });
  };

  render() {
    return (
      <div className="slider">
        <div className="slider__main row" ref={sliderRef}>
          {_.map(this.state.data, (element, idx) => {
            return (
              <div
                key={element.heading + idx}
                className="slider__single"
                onMouseOver={this.onHover}
                onMouseOut={this.onLeave}
              >
                <div className="slider__img">{element.img}</div>
                <div className="slider__heading">{element.heading}</div>
                <div className="slider__desc">{element.desc}</div>
              </div>
            );
          })}
        </div>
        <div className="slider__buttons">
          <div
            className="slider__left"
            onClick={(e) => this.slide("left")}
            onMouseOver={this.onHover}
            onMouseOut={this.onLeave}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
          <div
            className="slider__right"
            onClick={(e) => this.slide("right")}
            onMouseOver={this.onHover}
            onMouseOut={this.onLeave}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
