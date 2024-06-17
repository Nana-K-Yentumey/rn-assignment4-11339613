import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button } from "react-native";
import PopularCards from './PopularCards';

const PopularJobs = () => {
    return (
            
  <View style={styles.container}>
    <Text style={styles.title}>Popular Jobs</Text>
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/fcbook.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/beatz.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <PopularCards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />

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