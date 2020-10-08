import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const profile = () => {
	let name = "Mahir Ashraf Emad", ID= 170042025, Room = "99N", Email = "mahirashraf25@iut-dhaka.edu";
	return(
		<View style = {{backgroundColor:"#white", height:660}}>
			<View style = {styles.infoBody}>
				<Text style = {styles.infotext}>Name: {name}</Text>
				<Text style = {styles.infotext}>Student ID: {ID}</Text>
				<Text style = {styles.infotext}>Room no: {Room}</Text>
				<Text style = {styles.infotext}>E-mail: {Email}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create(
	{
		ImageBody: {
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: "cadetblue"
		},
		infotext: {
			fontSize:16,
			marginBottom:6,
			marginLeft:20
		},
		infoBody: {
			justifyContent: 'center',
			backgroundColor: "ivory",
			margin:10,
			width: 340,
			height: 150,
			borderWidth: 1,
			borderColor: "black",
			borderRadius: 8
		}
	}
);

export default profile;