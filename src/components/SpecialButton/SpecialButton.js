import React from 'react';
import stylesWrapper from '../../hoc/stylesWrapper'

const SpecialButton = (props) => {

	return (
		<button style={props.styles}>Button1</button>
	)
}

export default stylesWrapper(SpecialButton)