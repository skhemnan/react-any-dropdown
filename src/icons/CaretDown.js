import React from 'react'


const CaretDown = props => {
	return (
		<svg 
			width="11" 
			height="7" 
			viewBox="0 0 11 7" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
		>
		<path 
			d="M0.0794635 0.547266L5.21071 6.49727C5.35759 6.66758 5.6404 6.66758 5.78884 6.49727L10.9201 0.547267C11.1107 0.325392 10.9388 0.000391955 10.631 0.000391928L0.368526 0.000391031C0.0607134 0.000391004 -0.111162 0.325391 0.0794635 0.547266Z" 
			fill={props.fill || "#8C8C8C"}
		/>
		</svg>
	) 
}

export default CaretDown