import React from "react";
import "./Navbar.css";

const Navbar = props => (
<div className="title">{props.children}
<h1>Don't click the same team twice!</h1>
<div className="totalscore">
Total Score: {props.score}
<br/>
 Highscore: {props.highscore}
</div>
</div>
);

export default Navbar;