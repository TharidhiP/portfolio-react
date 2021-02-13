import React, { Component } from 'react';

import ReactTypingEffect from 'react-typing-effect';

//importing the picture as "profilepic".
import profilepic from '../img/defaultImg.jpg';

import Social from '../components/Social'

class XYZ extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic" alt="myFace"></img>
<ReactTypingEffect className="typingeffect" text={['I am Tharidhi Perera.','I am a Web Developer','I am a Programming Enthusiast','I am a Creative Thinker','I am a Great Communicator']} speed={100} eraseDelay={700}/>

<Social/>
</div>
)
}
}

export default XYZ