import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const Faculties = () => {
	const F_list = [
		{name: "Prof.Mahbub Alam", key: '1'},
		{name: "Abdul Hakim", key: '2'},
		{name: "Md. Sohel Ahmed", key: '3'},
		{name: "Mohayeminul Islam", key: '4'},
		{name: "Bakhtiar Hasan", key: '5'},
		{name: "Tajkia Rahman Toma", key: '6'},
		{name: "Ridwan Kabir", key: '7'},
		{name: "Talha Ibn Aziz", key: '8'}
	];
	return(
		<View style = {styles.viewStyle}>
			<Text style = {{fontSize:25,marginBottom:15,}}>List of Faculties</Text>
			<FlatList
				data = {F_list}
				renderItem = {function ({ item }){
					return (<Text style = {styles.textStyle}>{item.key}. {item.name} </Text>)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create(
	{
		viewStyle: {
			backgroundColor: "#efeeee",
			borderWidth: 20,
			borderColor: "#efeeee",
			height: 660
		},
		textStyle: {
			fontSize:18,
			marginBottom:10,
			marginLeft:10,
			color: "#344e5c"
		}
	}
);

export default Faculties;
