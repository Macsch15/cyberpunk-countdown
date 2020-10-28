import React, { Component } from 'react'
import Countdown from 'react-countdown'
import GlitchClip from 'react-glitch-effect/core/Clip'

class App extends Component {
  render () {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return 'Cyberpunk 2077 is out!';
      } else {
        return (
          <span>
            <div>IT'S ONLY</div>
            <div>
              <GlitchClip>
                <span className={'clock'}>{days}</span> days<br />
                <span className={'clock'}>{hours}</span> hours<br />
                <span className={'clock'}>{minutes}</span> minutes and <span className={'clock'}>{seconds}</span> seconds
              </GlitchClip>
            </div>
            <div>UNTIL CYBERPUNK 2077 IS OUT!</div>
          </span>
        );
      }
    };

    return (
      <div className={'ml-5 countdown'}>
        <Countdown date={'2077-12-10T00:00:00+00:00'} renderer={renderer} />
        <div className={'mt-4 cyberpunk-link'}>
          <a href={'https://twitter.com/CyberpunkGame'} rel={'nofollow noopener'}>@CyberpunkGame</a>
        </div>
      </div>
    )
  }
}

export default App;
