import React from 'react'



class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            today: new Date()
        }
        this.tick = this.tick.bind(this);
    }
    tick() {
        this.setState({
            today:new Date()
        })
    }
    render() {
    let today = this.state.today;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let prepand = '';
    let delta = this.props.timezone;
    let hourdelta;
    let minutedelta;
    if (delta[2] != ':') {
        hourdelta = delta[0] + delta[1] + delta[2];
        minutedelta = delta[0] + delta[4] + delta[5];
    } else {
        hourdelta = delta[0] + delta[1];
        minutedelta = delta[0] + delta[3] + delta[4];
    }
    hourdelta = Number(hourdelta);
    minutedelta = Number(minutedelta);
    hour = hour + hourdelta - 3;
    minute = minute + minutedelta;
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (hour > 24) {
        hour = hour - 24;
    }  
    if (this.props.format == '12') {
        prepand = (hour > 12) ? " PM ":" AM ";
        hour = (hour > 12) ? hour - 12: hour;
    } 
    setInterval(this.tick, 1000)

      return (
        <h1>{hour}:{minute}:{second}{prepand}</h1>
      );
    }
  }

export default Clock;