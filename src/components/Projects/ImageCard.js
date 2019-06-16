import React from 'react';


const ImageCard = ( {imgSrc, title, website, description, skills, onClick,  isMoving} ) => {

	return (
		<div className = 'mh4 mh2-m ml4-m'>
			<div className="br2 ba dark-gray b--black-10 mw7 mb5-m">
				<a  target="_blank" onClick = {onClick} href= {website}> 
					<img src = {require(`../Projects/images/${imgSrc}.jpg`)}  style = {{ height: '200px', border: '2px solid var(--success)'}} className="db br2 w-100 center" alt="Photo Project" />
				</a>
				<div className=" ph0-ns pt3-ns">
					<div className="dt w-100 mt1 ">
						<div className="dtc">
						    <h1 className="f5 f5-ns mv0 w-100 fw9 center tc mv3" style = {{ color: 'var(--success)', wordSpacing: '2px', letterSpacing: '1px'}}> {title} </h1>
						</div>
						{/*<div className="dtc tr">
							<h2 className="f5 mv0">$1,000</h2>
						</div>*/}
					</div>
				    <p className="f6 lh-copy measure mt2 mid-gray tj mb6-m vh-25-m" style = {{ wordSpacing: '2px', letterSpacing: '1px', textJustify: 'inter-character', height: '22vh' }}>
				    	{description}
				    </p>
				    <hr className = 'ml-auto mr-auto ' style = {{width: '10vw', borderBottom: '2px groove var(--success)', zIndex: 1 }} />
				    <p className="f6 lh-copy measure mt2 mid-gray tc" style = {{ wordSpacing: '2px', letterSpacing: '1px', textJustify: 'inter-character', height: '10vh' }} >
				    	{skills}		    	
				    </p>
				</div>
			</div>
		</div>
	);
}

export default ImageCard;
