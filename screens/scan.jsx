import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView} from "react-native";

function Scan(props) {
    return (
        
        <View style={styles.container} >
            <View style={{alignItems:"center",marginTop:'20%'}}>
                <Image source={require('../assets/imgs/download.png')} style={{width:'60%',height:'50%'}}/>
                <Text style={styles.imgTextStyle}>Hi, I'm Jaac!</Text>
                <Text style={styles.imgTextStyle}>Your E-Waiter</Text>
                <TouchableOpacity style={styles.button}>
                   <Image source={require('../assets/imgs/navigation_qr_icon_active-01.png')} style={{width:25,height:20}}/>
                    <Text style={styles.buttonText}>Scan QR Code</Text>   
                </TouchableOpacity>
                <Text style={styles.secText}>Click the Scan QR Code button to turn on your phone’s camera and scan the QR code on your table!</Text>
                <Text style={[styles.secText,{fontWeight:'bold',fontSize:15}]}>I'll show you this restaurant's menu and take your orders. With me, you can call a waiter and ask for the bill with one click.</Text>
            </View>
             
        </View>
    )
}

export default Scan
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbe9e8',
    },
    imgTextStyle:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#f15953'
    },
    button:{
        margin:30,
        height:'7%',
        width:'60%',
        backgroundColor:'#f15953',
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'space-around',

    },
    buttonText:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
    },
    secText:{
        width:'30%',
        textAlign:'center'
    }
  });