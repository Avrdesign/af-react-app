import React, { Component}  from 'react';

class Intro extends Component {

    constructor(props) {
        super(props);
        this.slides =[];
        this.state = {showSlide: 0};
        this.showSlides = this.showSlides.bind(this);
    }

    showSlides() {
        this.slides[0] = document.getElementById('slider1');
        this.slides[1] = document.getElementById('slider2');
        this.slides[this.state.showSlide].style.display = 'none';
    if (this.state.showSlide < this.slides.length - 1) {
         this.state.showSlide++;
    } else {
        this.state.showSlide = 0;
        }

        this.slides[this.state.showSlide].style.display = 'block';
}

    render() {

        setInterval(this.showSlides, 5000);

        return (
            <section className="main__section">
            <div className="container">
                <div className="slider" id="slider1">
                    <div className={this.props.intro[0].picture + " fade"}></div>
                    <div className="main__text fade">{this.props.intro[0].title.toUpperCase()}</div>
                </div>
                <div className="slider"  id="slider2" style={{'display': 'none'}}>
                    <div className={this.props.intro[1].picture + " fade"}></div>
                    <div className="main__text fade">{this.props.intro[1].title.toUpperCase()}</div>
                </div>
            </div>
        </section>
        )
    }
}

export default Intro