import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'
import Dots from './indicator-dots'
import Buttons from './buttons'

import Styled from 'styled-components';

const CarouselItem = Styled.div`
    text-align: center;
    margin-top:0;
    #firstColumn {
      color: var(--success);
      font-size: 1rem;
      margin-bottom: 1.5vh;
      font-weight: 700;
      word-spacing: 2px;
     letter-spacing: 1px;
    }
    .textWhat {
      text-align: center;
      // line-height: 30px;
      font-size: .9rem;
      font-weight: 400;
      word-spacing: 2px;
      letter-spacing: 1px;
    }
`;


// Main App
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      axis: 'x'
    }
    this.setAxis = axis => {
      return () => this.setState({'axis': axis})
    }
  }
  render () {
    
    return (
      <div className = 'flex justify-around w-100 ' style={{height: '200px'}}>
        <Carousel loop auto axis={this.state.axis} widgets={[Dots, Buttons]} className="custom-class">
          <CarouselItem style={{height: '100%', width: '100%', maxWidth:'100%'}}>
            <p id = 'firstColumn'> Problem Solving </p>
            <p className = 'textWhat' colSpan="4"> I can take vague problems and requirments and break them down into steps and solutions. </p>       
          </CarouselItem>
          <CarouselItem style={{height: '100%', width: '100%'}}>
            <p id = 'firstColumn'> Fast Learner </p>
            <p className = 'textWhat' colSpan="4"> I can take any new subject and learn it quickly. I did so in my previous jobs when I entered new feilds.  </p>
          </CarouselItem>
          <CarouselItem style={{height: '100%', width: '100%'}}>
            <p id = 'firstColumn'> Communicating </p>
            <p className = 'textWhat' colSpan="4"> I can explain things clearly, communicate problems quickly and write accurately and concisely. </p>       
          </CarouselItem>
          <CarouselItem style={{height: '100%', width: '100%'}}>
            <p id = 'firstColumn'> Organising </p>
            <p className = 'textWhat' colSpan="4"> I can self-manage , work to deadlines, organise projects and present well-structured and complete product. </p>       
          </CarouselItem>
          <CarouselItem style={{height: '100%', width: '100%'}}>
            <p id = 'firstColumn'> System Thinking </p>
            <p className = 'textWhat' colSpan="4"> I'm good at thinking abstractly and putting together systems with many dynamic peices. </p>       
          </CarouselItem>
        </Carousel>
      </div>
    )
  }
}

export default App;
