import React from 'react';


const TextBox = ( {imgSrc, title , time, content} ) => {
	const image = require(`../../assets/img/Experience/${imgSrc}.jpg`)
	return (
        <div className = "work blacky fl w-100 ph0 relative ">
            <div className = "parallax h-100 ma0 br4 absolute left-0-ns top-0-ns" style = {{background: `url(${image}) no-repeat 0 0 / 100% 100% #000`}} ></div>
            <div className = "work-meta fl w-100 relative pv4 z-4">
                <h3 className = 'white tc ttu'> {title} </h3>
                <h4 className = 'pt2 pb3 relative  tc'><span > {time} </span></h4>
                <div className = 'tj ph5 pl2-s'>
                	<ul className = 'list items-center '>
                		{
                			content.map( (item, index) => {
                				return <li key = {index}  style = {{textIndent: '-1.75em'}}><i className = "far fa-hand-point-right lh-solid"></i> {item} </li>
                			})
                		}
                			                		
                	</ul>
                </div>
            </div>
        </div>  
	)
}

export default TextBox;