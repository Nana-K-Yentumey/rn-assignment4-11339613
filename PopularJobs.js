import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PopularCards from './PopularCards';

const PopularJobs = () => {
    return (
            
  <View style={styles.container}>
    <Text style={styles.title}>Popular Jobs</Text>
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/fcbook.png')}  JobTitle={'Product Manager'} salary={'$84,000/y'} employer={'Facebook'} location={'Florida, US'} />
  <PopularCards  imageSource={require('./assets/beatz.png')}  JobTitle={'Product Manager'} salary={'$86,000/y'} employer={'Beats'} location={'Florida, US'} />
  <PopularCards  imageSource={require('./assets/googlelogo.png')}  JobTitle={'Data Analyst'} salary={'$100,000/y'} employer={'Google'} location={'New York, US'} />
  <PopularCards  imageSource={require('./assets/amazonlogo.png')}  JobTitle={'Delivery Driver'} salary={'$56,000/y'} employer={'Amazon'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/activisionlogo.png')}  JobTitle={'Jr Developer'} salary={'$96,000/y'} employer={'Activision'} location={'Los Santos, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Customer Service'} salary={'$36,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/fcbook.png')}  JobTitle={'Jr Developer'} salary={'$76,000/y'} employer={'Facebook'} location={'Las Vegas, US'} />
  <PopularCards  imageSource={require('./assets/googlelogo.png')}  JobTitle={'AI Specialist'} salary={'$196,000/y'} employer={'Google'} location={'Vice City, US'} />

</View>




)
};

export default PopularJobs;


const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 20,
        marginLeft: 20,
    },



 
});