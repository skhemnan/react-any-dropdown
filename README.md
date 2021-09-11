# React Any Dropdown
## Customizable dropdown with the option to multi-select!

#### Install
```npm i -s react-any-dropdown```

#### Usage
Being customizable, the dropdown will accept a number of props to change the look and function of your dropdown

| Prop | Type | Description | Default |
| ---- | ---- | -----------------------------| --------|
| borderWidth | number | The width of the border for the dropdown | 1px
| borderColor | string (color) | The color of the border for the dropdown | #D9D9D9 
| buttonColor | string (color) | background color of the button of the dropdown | white
| contentBackgroundColor | string (color) | background color of the collapsed view (content) of the dropdown | white 
| maxContentHeight | number | maximum height of the collapsed view (content) of the dropdown | 100px
| contentWidth | number | width of the collapsed view (content) of the dropdown | 300px
| downArrowColor | string (color) | color of the arrow inside the dropdown button when collapsed (pointing downward) | #8C8C8C
| upArrowColor | string (color) | color of the arrow inside the dropdown button when expanded (pointing upward) | #8C8C8C
| selectedBackgroundColor | string (color) | color of the selected item or option in the dropdown | lightblue
| selectedTextColor | string (color) | color of the text of the selected item or option in the dropdown as it shows in the dropdown button | #454545
| onSelect | function | any function you'd like the dropdown to do to the selected item once it is selected
| onUnSelect | function | (for multiselect) any function you'd like the dropdown to do to the selected item once it is unselected
| multiselect | boolean | if true, dropdown will be multiselected. Selected items will be joined with "," and can be passed on to other functions | false
| placeholder | string | any placeholder that will display when no item is selected | "Select an item"
| buttonWidth | number | width of the overall button for the dropdown | 150px

##### Example
```
import React from 'react'
import Dropdown from 'react-any-dropdown'
import styles from './style'

const App = () => {
 return (
		<div style={styles.container}>
			<Dropdown options={['test1', 'test2', 'test3']}/>
		</div>
 )
}

export default App
```