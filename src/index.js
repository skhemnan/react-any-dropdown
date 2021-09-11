import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Icons
import CaretDown from './icons/CaretDown'
import CaretUp from './icons/CaretUp'

const Dropdown = props => {
	
const [isCollapsed, setIsCollapsed] = useState(true)
const [selected, setSelected] = useState('')
const [multiSelection, setMultiSelection] = useState([])
const [multiSelected, setMultiSelected] = useState('')

useEffect(() => {
	setMultiSelected(multiSelection.join(','))
},[multiSelection])


const styles = {
	container: {
		display: 'flex', 
		flexDirection: 'column', 
		alignSelf: 'center', 
		maxWidth: props.contentWidth || 300,
	},
	dropdown: {
		button: {
			width: props.buttonWidth || 150, 
			height: 25, 
			'border': `solid ${props.borderWidth || 1}px ${props.borderColor || '#d9d9d9'}`, 
			borderRadius: 4, 
			display: 'flex', 
			justifyContent: 'space-between', 
			alignItems: 'center', 
			paddingLeft: 10, 
			paddingRight: 10, 
			cursor: 'pointer',
			backgroundColor: props.buttonColor || 'white'
		},
	},
	collapsible: { 
		width: props.contentWidth || 170, 
		marginTop: 'max(1.7%, 30px)', 
		marginLeft: 1, 
		boxShadow: `0.5px 2px 10px #d1d1d1`, 
		backgroundColor:'white', 
		position: 'absolute', 
		zIndex: 1,
		container: { 
			maxWidth: props.contentWidth || 300, 
			backgroundColor:props.contentBackgroundColor || 'white', 
			'overflow': 'scroll', 
			'overflow-x':'hidden', 
			transition: 'all 0.2s ease-out',
			height: isCollapsed ? 0 : props.maxContentHeight || 100
		}
	},
	placeholder: { fontSize: 12, color: '#d9d9d9', fontFamily: 'sans-serif'},
	selection: { fontSize: 12, color: props.selectedTextColor || '#454545', fontFamily: 'sans-serif'},
	background: {height: '100vh', width: '100vw', backgroundColor: 'rgba(52, 52, 52, 0.0)', position: 'fixed', left: 0, top: 0, cursor: 'default', zIndex: 0},
	nothing: {height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(52, 52, 52, 0.0)'},
	item: {
		width: '100%', 
		height: (props.maxContentHeight/props.options?.length+1) || 100/props.options?.length || 0,
		paddingLeft: 5, 
		paddingRight: 5, 
		display: 'flex', 
		alignItems: 'center',
		cursor: 'pointer',
		selected: {backgroundColor: props.selectedBackgroundColor || 'lightblue'},
		text: {fontSize: 12, color: props.optionTextColor || '#454545', fontFamily: 'sans-serif'}
	}
}

return (
			<div style={styles.container}>
					<div style={styles.dropdown.button} onClick={() => {
						if(props.onClick){props.onClick()}
						setIsCollapsed(!isCollapsed)
					}}>
						{props.multiselect ? 
							<p style={multiSelection.length === 0 ? styles.placeholder : styles.selection}>{multiSelected || props.placeholder || 'Select an item'}</p>
							:
							<p style={selected === "" ? styles.placeholder : styles.selection}>{selected || props.placeholder || 'Select an item'}</p>
						}
						{isCollapsed ? <CaretDown fill={props.downArrowColor || '#8c8c8c'}/> : <CaretUp fill={props.upArrowColor || '#8c8c8c'}/>}
					</div>
					{!isCollapsed && <div style={styles.background} onClick={() => {setIsCollapsed(true)}}></div>}
					<div style={styles.collapsible}>
						<div style={styles.collapsible.container}>
							{props.options ? 
								<>
								{props.options.map(item => {
									return (
										<>
										 {props.multiselect ? 
											<div 
												style={multiSelection.indexOf(item) !== -1 ? {...styles.item, ...styles.item.selected} : styles.item} 
												onClick={() => {
													if(multiSelection.indexOf(item) === -1){
														if(props.onSelect){props.onSelect()}
														let selects = [...multiSelection, item]
														setMultiSelection(selects)
													} else {
														if(props.onUnSelect){props.onUnSelect()}
														let selects = multiSelection.filter(x => x !== item)
														setMultiSelection(selects)
													}
												}}>
												<p style={styles.item.text}>{item}</p>
											</div>
											:
											<div 
												style={selected === item ? {...styles.item, ...styles.item.selected} : styles.item} 
												onClick={() => {
													if(selected !== item){
														if(props.onSelect){props.onSelect()}
														setSelected(item)
														setIsCollapsed(true)
													} else {
														if(props.onUnSelect){props.onUnSelect()}
														setSelected("")
														setIsCollapsed(true)
													}
												}}>
												<p style={styles.item.text}>{item}</p>
										  </div>	
											}	
										</>
									)
								})}
								</> 
								: 
								<div style={styles.nothing}>
									<p style={styles.placeholder}>Nothing to select</p>
								</div>	
							}
						</div>
					</div>
			</div>
) 

}

/* 
	FULL LIST OF PROPS
	- borderWidth
	- borderColor
	- buttonColor
	- contentBackgroundColor
	- maxContentHeight
	- contentWidth
	- downArrowColor
	- upArrowColor
	- selectedBackgroundColor
	- selectedTextColor
	- options
	- optionTextColor
	- onSelect
	- onUnSelect
	- multiselect
	- placeholder
	- buttonWidth
*/

Dropdown.propTypes = {
	borderWidth: PropTypes.number,
	borderColor: PropTypes.string,
	buttonColor: PropTypes.string,
	contentBackgroundColor: PropTypes.string,
	maxContentHeight: PropTypes.number,
	contentWidth: PropTypes.number, 
	downArrowColor: PropTypes.string,
	upArrowColor: PropTypes.string,
	selectedBackgroundColor: PropTypes.string,
	selectedTextColor: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	optionTextColor: PropTypes.string,
	onSelect: PropTypes.func,
	onUnSelect: PropTypes.func,
	multiselect: PropTypes.bool,
	placeholder: PropTypes.string,
	buttonWidth: PropTypes.number
}


export default Dropdown
