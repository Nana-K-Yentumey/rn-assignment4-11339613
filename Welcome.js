import React from "react";
import { StyleSheet, Text, View } from "react-native"; 

const Welcome = () => {

    return (
        <View>
        <View style={styles.helloSection}>
          <Text style={styles.jobizz}>Jobizz</Text>
          <Text style={styles.welcome}>Welcome Back 👋</Text>
          <Text style={styles.subText}>Let’s log in. Apply to jobs!</Text>
        </View>
        </View>

    )

};

export default Welcome;

const styles = StyleSheet.create({
    
      helloSection: {
        marginTop: 100,
        //marginLeft: 20,
    
    },
    
      jobizz: {
        fontSize: 22,
        color: '#356899',
        marginBottom: 20,
      },
    
      welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },

      subText: {
        fontSize: 14,
        color: '#c2c2c2',
        fontWeight: 'light',
      },
    
    

});