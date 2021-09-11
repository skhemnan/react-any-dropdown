import React from 'react'


const CaretUp = props => {
	return (
		<svg 
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
		>
		<path 
			d="M13.4205 10.7652L8.28929 4.81523C8.14241 4.64492 7.8596 4.64492 7.71116 4.81523L2.57991 10.7652C2.38929 10.9871 2.56116 11.3121 2.86897 11.3121H13.1315C13.4393 11.3121 13.6112 10.9871 13.4205 10.7652Z" 
			fill={props.fill || "#8C8C8C"}
		/>
		</svg>
	) 
}

export default CaretUp