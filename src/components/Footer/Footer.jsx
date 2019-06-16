import React from 'react';


import { Row, Col } from "reactstrap";


const Footer = () => {
	return (
		<div className = 'section z-2 mw-100' style = {{ height: '5vh', borderTop: '2px solid var(--success)' }}>
			<div className = 'w-100 pv1 bg-dark  content-around mb0' style = {{}}>
				<div className = 'w-100 pa3'>
					<Row >
						<Col lg = '12'>	
				        {/*<FollowButtons/>*/}
							<div className = 'tc box h1 v-btm pt4 ' >
								{/*LinkedIn*/}
								<div className = 'tc br-100 mh3' style = {{backgroundColor: 'var(--success)', opacity: '0.9', height: '2.5rem', width: '2.3rem' }}>
									<a className="  " href="https://www.linkedin.com/in/karin-povolozki-rabichev-690456187/" target="_blank" title="LinkedIn">
									<i class="fab fa-linkedin" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}}></i>
							    	{/*<span className="f6 db"></span>*/}
							  		</a>
							  	</div>
								{/*GitHub*/}
								<div className = 'tc br-100 mh3' style = {{backgroundColor: 'var(--success)', opacity: '0.9', height: '2.5rem', width: '2.3rem' }}>		
									<a className="" href="https://github.com/KarinPR" target="_blank" title="GitHub">
									<i class="fab fa-github" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}}></i>							    
									</a>
								</div>
								{/*E-mail*/}
								<div className = 'tc br-100 mh3' style = {{backgroundColor: 'var(--success)', opacity: '0.9', height: '2.5rem', width: '2.3rem' }}>
									<a className="" href="mailto:vk4ursrvs@gmail.com" target="_blank" title="Gmail">
										<i class="fas fa-envelope-square" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}}></i>
									</a>
								</div>
							</div>
						</Col>
						<Col lg = '12'>
							<div className = 'tc white o-80 tracked'>
							&copy; 2019, Designed and Coded by <span style = {{color: 'var(--success)'}}> Karin Povolozki - Rabichev </span>
							<br/>
							Credit to <a className = 'white' href="https://www.creative-tim.com/" title="Creative Tim" target="_blank" rel="noopener noreferrer" > Creative Tim</a>
							</div>		
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Footer;