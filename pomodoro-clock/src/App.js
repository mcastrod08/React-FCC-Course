import React from 'react';
import './App.css';

class App extends React.Component {

  initialState = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    isPlaying: false,
    currentTimer: "Session"
  }

  constructor(props) {
    super(props);
    this.loop = undefined;

    this.state = {
      ...this.initialState
    };
  };


  componentWillUnmount() {
    clearInterval(this.loop);
  }

  handlePlayPauseChange = () => {
    if (this.state.isPlaying) {
      clearInterval(this.loop);
      this.setState({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });
      this.loop = setInterval(() => {
        const { clockCount, breakCount, sessionCount, currentTimer } = this.state;

        if (clockCount === 0) {
          this.setState({
            currentTimer: (currentTimer === 'Session') ? 'Break' : 'Session',
            clockCount: (currentTimer === 'Session') ? (breakCount * 60) : (sessionCount * 60)
          });

        } else {
          this.setState({
            clockCount: clockCount - 1
          });
        }

      }, 1000);
    }
  }

  handleReset = () => {
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false
    });

    clearInterval(this.loop);

  }


  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${minutes}:${seconds}`;
  };

  handleBreakDecrease = () => {
    const { breakCount, isPlaying, currentTimer } = this.state;
    if (breakCount > 1) {
      if (!isPlaying && currentTimer === 'Break') {
        this.setState({
          breakCount: breakCount - 1,
          clockCount: (breakCount - 1) * 60
        });
      } else {
        this.setState({
          breakCount: breakCount - 1
        });
      }
    }
  }

  handleBreakIncrease = () => {
    const { breakCount, isPlaying, currentTimer } = this.state;
    if (breakCount < 60) {
      if (!isPlaying && currentTimer === 'Break') {
        this.setState({
          breakCount: breakCount + 1,
          clockCount: (breakCount + 1) * 60
        });
      } else {
        this.setState({
          breakCount: breakCount + 1
        });
      }
    }
  }

  handleSessionDecrease = () => {
    const { sessionCount, isPlaying, currentTimer } = this.state;

    if (sessionCount > 1) {
      if (!isPlaying && currentTimer === 'Session') {
        this.setState({
          sessionCount: sessionCount - 1,
          clockCount: (sessionCount - 1) * 60
        });
      } else {
        this.setState({
          sessionCount: sessionCount - 1
        });
      }
    }
  }

  handleSessionIncrease = () => {
    const { sessionCount, isPlaying, currentTimer } = this.state;

    if (sessionCount < 60) {
      if (!isPlaying && currentTimer === 'Session') {
        this.setState({
          sessionCount: sessionCount + 1,
          clockCount: (sessionCount + 1) * 60
        });
      } else {
        this.setState({
          sessionCount: sessionCount + 1
        });
      }
    }

  }


  render() {

    const breakProps = {
      title: 'Break',
      count: this.state.breakCount,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease
    }

    const sessionProps = {
      title: 'Session',
      count: this.state.sessionCount,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease
    }

    return (
      <div className="container">
        <h1> Pomodoro Clock</h1>
        <div>
          <div className="clock-container">
            <h2 id="timer-label">{this.state.currentTimer}</h2>
            <span id="time-left"><b>{this.convertToTime(this.state.clockCount)}</b></span>
            <div className="flex">
              <button id="start_stop" onClick={this.handlePlayPauseChange}>
                <i className={`fas fa-${this.state.isPlaying ? 'pause': 'play'}`}/>
              </button>
              <button  id="reset" onClick={this.handleReset}>
                <i className="fas fa-sync"/>
              </button>
            </div>  
          </div>
        </div>
        <div className="flex">
          <SetTimer {...breakProps}/>
          <SetTimer {...sessionProps}/>
        </div>
      </div>
    )
  }
};

const SetTimer = (props) => {
  const id = props.title.toLowerCase();

  return (
    <div className="timer-container">
      <h3 id={`${id}-label`}>{props.title} Length</h3>
      <div className="flex action-wrapper">
        <button id={`${id}-decrement`}  onClick={props.handleDecrease}>
          <i className="fas fa-minus"/>
        </button>
        <span id={`${id}-length`}><b>{props.count}</b></span>
        <button id={`${id}-increment`} onClick={props.handleIncrease}>
          <i className="fas fa-plus"/>
        </button>
      </div>  
    </div>
  )
}

export default App;