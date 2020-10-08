import React from 'react' ;
import {Text,StyleSheet} from "react-native" ;
import { FlatList } from 'react-native-gesture-handler';


const ListScreen = () =>{
    const uni =[{name: "BUET" , key:'1'},{name: "IUT" ,key:'2'},{name: "DU" ,key:'3'},{name: "RUET" ,key:'4'},{name: "KUET" ,key:'5'},
    {name: "CUET" ,key:'6'},{name: "SUST" ,key:'7'},{name: "RU" ,key:'8'},{name: "AUST" ,key:'9'},{name: "BRAC" ,key:'10'},];

    return(
        <View Style={styles.viewStyle}> 
            <FlatList
            showsVerticalScrollIndicator={false} //scroll thakbena
            data={uni}
            renderItem = {function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;

            }}
            />
        </View>

    );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color: "blue",
            marginVertical: 30,
        },

        viewStyle:{
            
            borderColor: 'red', //color er C boro hater dewa hoise
            borderWidth: 5,
        }
    });


export default ListScreen;