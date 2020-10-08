import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import profile from "./src/Screens/Profile";
import semesters from "./src/Screens/semesters";
import Faculties from "./src/Screens/Facultylist"
import coursesem3 from "./src/Screens/Courselist1"



const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "Semesters" component={semesters}/>
                <Stack.Screen name = "Faculties" component={Faculties}/>
                <Stack.Screen name = "Profile" component={profile}/>
                <Stack.Screen name = "Semester 3" component={coursesem3}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;