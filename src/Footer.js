import React from "react";
import linkedIn from "./images/linkedin.png";
import gitHub from "./images/github.png";

function Footer() {
	return (
		<div>
			<div>
				<a
					rel="noreferrer"
					href="https://www.linkedin.com/in/mohammed-alabdulhamid-445455209/"
					target="_blank"
				>
					<img className="footer-icons" src={linkedIn} alt={linkedIn} />
				</a>
				<a
					rel="noreferrer"
					href="https://github.com/Mohammedal-abdulhamid"
					target="_blank"
				>
					<img className="footer-icons" src={gitHub} alt={gitHub} />
				</a>
			</div>
		</div>
	);
}

export default Footer;
