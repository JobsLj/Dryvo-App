import React from "react"
import { View, StyleSheet } from "react-native"
import { MAIN_PADDING } from "../consts"

export default class ShadowRect extends React.Component {
	render() {
		return (
			<View
				testID={this.props.testID}
				style={{ ...styles.container, ...this.props.style }}
			>
				{this.props.children}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.09,
		shadowRadius: 20,
		elevation: 6,
		borderRadius: 4,
		marginBottom: 20, // for android
		paddingHorizontal: 20,
		paddingVertical: 12,
		alignItems: "flex-start",
		width: "100%"
	}
})
