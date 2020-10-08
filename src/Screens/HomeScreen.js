import React from 'react' ;
import {Text,StyleSheet, View, Button,Image } from "react-native" ;

const HomeScreen = (props)=> {
  console.log(props);
return (<View>
  <Text style={styles.textStyle}> HomeScreen </Text>
  <Button
  title='Go to list screen'
  onPress={
       function(){
         props.navigation.navigate("List");
       }
  }
  />
  <Image
  
  source= {{
    height : "300",
    width:"200",
    uri:"https://picsum.photos/200/300"}}
  />
  </View>
  );
};


const styles = StyleSheet.create({ 
     textStyle:{
          fontSize: 30 ,
          color: 'blue',
         
     },
  }); 



export default HomeScreen;