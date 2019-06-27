import React from 'react';
// import Tilt from 'react-tilt';

import './Skills.css'

const mySkills = ['HTML5', 'CSS3', 'Express' , 'Javascript', 'React', 'Redux', 'npms','Gits', 'Node', 'Bootstrap4', 'PostgresSQL', 'SQL']
const Skills = () => {
	return (		
		<div className = 'w-100 bg-black' id = 'skills-me' data-id = 'skills' style = {{maxHeight: '100%'}} >
			<div className = 'w-100 pt3 pb5 ph3 pv4'>
				<h5 className="text-on-back tc" > Skills</h5>
				<div className = 'grid'>
					{
						mySkills.map((skill, index) => {
							const image = require(`../../assets/img/Skills/${skill}.png`)
							return (
								<div className = 'item' key = {index}  > 
									<div className = 'box '> 
										<div className = 'diamond '> 
											<span > 
												<img src = {image} style = {{ height: '8vh', transform: 'rotateZ(0deg)'}} alt = {skill} className="db br2 w-100 center"  />   
											</span> 
										</div> 
									</div>
								</div>
							)
						})
					}	
				</div>
			</div>
		</div>
	)

}

export default Skills;