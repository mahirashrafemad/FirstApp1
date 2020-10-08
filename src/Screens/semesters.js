import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const semesters = (props) => {

	return(
		<View style = {styles.viewStyle}>
			<Text style = {styles.s_container}> List of Semesters</Text>
			<View style = {{margin:5}}>
				<Button title= "3rd semester" color= "maroon"
				onPress = {
					function (){
						props.navigation.navigate("Semester 3");
					}
				}/>
			</View>
			<View style = {{margin:5}}>
				<Button title= "4th semester" color= "maroon"
				onPress = {
					function (){
						props.navigation.navigate("Semester 4");
					}
				}/>
			</View>

			<View style = {{margin:5}}>
				<Button title= "5th semester" color= "maroon"
				onPress = {
					function (){
						props.navigation.navigate("Semester 5");
					}
				}/>
			</View>
			<View style = {{margin:5}}>
				<Button title= "6th semester" color= "maroon"
				onPress = {
					function (){
						props.navigation.navigate("Semester 6");
					}
				}/>
			</View>
		</View>

	)
}

const styles = StyleSheet.create(
	{
		s_container: {
			fontSize: 30,
			color: "black",
			marginBottom: 25
		},
		viewStyle: {
			height: 660,
			borderWidth: 20,
			borderColor: "#efeeee",
			backgroundColor: "#efeeee",
			alignItems: 'center',

		}
	}
);

export default semesters;