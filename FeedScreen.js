import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { AsyncStorage } from '@react-native-community/async-storage'
import Config from './config'
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen'

class FeedScreen extends Component {

    static navigationOptions = {
        title: 'Feed'
    }

    constructor (props) {
        super(props)
        this.state = {
            width: Math.round(Dimensions.get('window').width),
            listings: [{
                _id: 0,
                img: "https://dhuh3lqp0wlh3.cloudfront.net/7c/95ceb08b9511e7a0adfd737ef850d9/sitter-miranda-flerx-lexington-f4014404.jpg",
                username: "melissa999",
                name: "Melissa",
                distance: 0.5,
                bio: "I have been babysitting for 4 years and have a number of returning clients. I am very good with all ages of children from 3 - 10.",
                cpr: true,
                price: 15
            },
            {
                _id: 1,
                img: "https://dhuh3lqp0wlh3.cloudfront.net/7c/95ceb08b9511e7a0adfd737ef850d9/sitter-miranda-flerx-lexington-f4014404.jpg",
                username: "melissa999",
                name: "Melissa",
                distance: 0.5,
                bio: "I have been babysitting for 4 years and have a number of returning clients. I am very good with all ages of children from 3 - 10.",
                cpr: false,
                price: 15
            },
            {
                _id: 2,
                img: "https://dhuh3lqp0wlh3.cloudfront.net/7c/95ceb08b9511e7a0adfd737ef850d9/sitter-miranda-flerx-lexington-f4014404.jpg",
                username: "melissa999",
                name: "Melissa",
                distance: 0.5,
                bio: "I have been babysitting for 4 years and have a number of returning clients. I am very good with all ages of children from 3 - 10.",
                cpr: true,
                price: 15
            },
            {
                _id: 3,
                img: "https://dhuh3lqp0wlh3.cloudfront.net/7c/95ceb08b9511e7a0adfd737ef850d9/sitter-miranda-flerx-lexington-f4014404.jpg",
                username: "melissa999",
                name: "Melissa",
                distance: 0.5,
                bio: "I have been babysitting for 4 years and have a number of returning clients. I am very good with all ages of children from 3 - 10.",
                cpr: true,
                price: 15
            },
            {
                _id: 4,
                img: "https://dhuh3lqp0wlh3.cloudfront.net/7c/95ceb08b9511e7a0adfd737ef850d9/sitter-miranda-flerx-lexington-f4014404.jpg",
                username: "melissa999",
                name: "Melissa",
                distance: 0.5,
                bio: "I have been babysitting for 4 years and have a number of returning clients. I am very good with all ages of children from 3 - 10.",
                cpr: true,
                price: 15
            }]
        }
    }

    render() {
        let width = this.state.width
        let listings = []
        let l = this.state.listings
        for (i in this.state.listings) {
            var cpr
            if (l[i].cpr) {
                cpr = 'CPR'
            } 
            listings.push(
            <TouchableOpacity activeOpacity={0.7} key={l[i]._id}>
                <View style={{padding: 10, flex: 1, flexDirection: "row", alignItems: 'stretch', justifyContent: 'space-between', borderBottomColor: '#495867', borderBottomWidth: StyleSheet.hairlineWidth}}>
                    <Image 
                        source={{uri: l[i].img}} 
                        style={{width: width*0.3, height: width*0.3, borderRadius: width*0.3*0.5, marginRight: 5}}
                    />
                    <View style={{flex: 2, flexDirection: "column", marginLeft: 5, marginRight: 5, alignSelf: 'stretch'}}>
                        <Text style={{fontSize: 25, color: '#fe5f55'}}>{l[i].username}</Text>
                        <Text style={{fontSize: 20, color: '#495867'}}>{l[i].name}</Text>
                        <Text style={{fontSize: 15, color: '#495867'}}>{l[i].distance} mi</Text>
                        <Text style={{fontSize: 15, color: '#495867'}}>{l[i].bio}</Text>
                        
                    </View>
                    <View style={{flex: 0.85, alignItems: 'center', marginLeft: 5}}>
                        <Text style={{fontSize: 60, color: '#fe5f55'}}>${l[i].price}</Text> 
                        <Text style={{fontSize: 25, color: '#fe5f55'}}>per hour</Text>
                        <View style={{height: 10}}></View>
                        <Text style={{fontSize: 25, color: '#fe5f55'}}>{cpr}</Text>
                    </View>
                </View>
            </TouchableOpacity>);
        }
        return (
            <ScrollView>
                {listings}
                
            </ScrollView>
        )
    }
}


const feed = createStackNavigator({ FeedScreen }, { defaultNavigationOptions: Config.navBarStyles })
const profile = createStackNavigator({
    Profile: ProfileScreen,
    Edit: EditProfileScreen
}, { defaultNavigationOptions: Config.navBarStyles })

const TabNavigator = createBottomTabNavigator(
    {
        Feed: feed,
        Profile: profile
    },
    {
        tabBarOptions: {
            activeTintColor: "#fe5f55"
        }
    }
)

TabNavigator.navigationOptions = ({ navigation }) => {
    const { routes, index } = navigation.state
    const navigationOptions = {}

    if (routes[index].routeName === "Feed") {
        navigationOptions.title = "Feed"
    }

    return navigationOptions
}

export default createAppContainer(TabNavigator)