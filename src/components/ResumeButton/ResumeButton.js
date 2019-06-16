import React from "react";
import { Button } from "reactstrap";

const ResumeButton = () => {
	return (
		<div className = 'flex w-100 justify-center '>
		    <Button
		      className="btn btn-success "
		      color="success"
		      href=""
		      role="button"
		      size="lg"
		    >
		    <i className="far fa-arrow-alt-circle-down display-none"> </i>
		      <a href="resume.pdf" className = 'white fw9 ' id = 'resume'> Download My Resume </a>
		    </Button>
	    </div>   
	);
}

export default ResumeButton;