import bitbox from 'bitbox'

export default function(s) {
	return {
		main: {
			font: '16px Helvetica Neue',
			display: 'inline-block',
			padding: '0',
			margin: '8px',
			borderRadius: '2px',
			background: bitbox.color('black', 0.2),
			color: bitbox.color('black', 0.9),
			textAlign: 'center'
		},
		h1: {
			fontSize: '62px',
			margin: '0',
			opacity: '0.9',
			padding: '24px'
		},
		buttons: {
			borderTop: '1px solid ' + bitbox.color('black', 0.5)
		},
		button: {
			margin: '8px'
		}
	}
}
