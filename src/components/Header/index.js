import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
//import Icon from 'react-native-vector-icons/Feather'
//import { Container, Title, ButtonMenu } from "./styles";

export default function Header({ title }){

    return(
        <View>
            <TouchableOpacity onPress={ ()=> navigation.openDrawer() }>
                {/*<Icon name="menu" size={35} color='#121212' />*/}
            </TouchableOpacity>
            
                    <Text>{title}</Text>
            
        </View>
    )
}