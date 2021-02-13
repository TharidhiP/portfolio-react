import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B(Eng) Software Engineering" where="Informatics Institute of Technology" from="September 2019" to="Present"/>
<Widecard title="Primary to High School Education" where="Lyceum International School - Nugegoda" from="2007" to="2019"/>
</div>
)
}
}
export default Education