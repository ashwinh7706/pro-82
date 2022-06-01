import React from 'react'
import {StyleSheet} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {RFValue} from 'react-native-responsive-fontsize'
import Feed from '../screens/Feed'
import CreateStory from '../screens/CreateStory'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const Tab = createMaterialBottomTabNavigator()
const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator
        labeled = {false}
        barStyles = {styles.bottomTabStyle}
        screenOptions = {({route})=>({
            tabBarIcon: ({focused: color, size})=>{
                let iconName;
                 if (route.name === 'Feed') { 
                     iconName = focused ? 'home' : 'home-outline'; } 
                     else if (route.name === 'CreateStory') { iconName = focused ? 'add-circle' : 'add-circle-outline'; } 
                     return( <Ionicons name={iconName} size={RFValue(25)} color={color}style = {styles.icons} />);
            }
        })}
        activeColor = {'#EE8249'}
        inactiveColor = {"gray"}>
        
            <Tab.Screen name = "Feed" Component = {Feed}options = {{headerShown: false}}/>
            <Tab.Screen name = "CreateStory" Component = {CreateStory}options = {{headerShown: false}}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: '#2F345D',
        height: '8%',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        overflow: 'hidden',
        position: 'absolute',
        },
        icons: {
            width:RFValue(30),
            height:RFValue(30),
        }
})
export default BottomTabNavigator