import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FeaturedCards from "./FeaturedCards";

const FeaturedJobs = () => {
    return (
        <View>
            <View flexDirection='row'>
                <Text style={styles.Categories}>Featured Jobs</Text>
                <Text style={styles.seeall}>See all</Text>
                </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardsSection}>
                <FeaturedCards imageSource={require('./assets/fcbook.png')}  JobTitle={'Software Engineer'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} backgroundColor={'#5386e4'} />
                <FeaturedCards imageSource={require('./assets/googlelogo.png')}  JobTitle={'Frontend Developer'} salary={'$90,000/y'} employer={'Google'} location={'LA, USA'} backgroundColor={'#04284a'}/>
                <FeaturedCards imageSource={require('./assets/amazonlogo.png')}  JobTitle={'Data Analyst'} salary={'$110,000/y'} employer={'Amazon'} location={'Remote'} backgroundColor={'#f4a53e'} />
                <FeaturedCards imageSource={require('./assets/activisionlogo.png')}  JobTitle={'HUD Designer'} salary={'$100,000/y'} employer={'Activision'} location={'Remote'} backgroundColor={'#000000'} />
                <FeaturedCards imageSource={require('./assets/bgking.png')}  JobTitle={'System Administrator'} salary={'$100,000/y'} employer={'Burger King'} location={'Accra, Ghana'} backgroundColor={'#faaf18'} />
                <FeaturedCards imageSource={require('./assets/beatz.png')}  JobTitle={'Sound Engineer'} salary={'$100,000/y'} employer={'Beats'} location={'Accra, Ghana'} backgroundColor={'#ed1c24'}/>
                <FeaturedCards imageSource={require('./assets/googlelogo.png')}  JobTitle={'Backend Developer'} salary={'$100,000/y'} employer={'Google'} location={'Accra, Ghana'} backgroundColor={'#04284a'}  />
                <FeaturedCards imageSource={require('./assets/amazonlogo.png')}  JobTitle={'Delivery Driver'} salary={'$100,000/y'} employer={'Amazon'} location={'Accra, Ghana'} backgroundColor={'#f4a53e'}  />
            </ScrollView>
        
        </View>

    );

}

export default FeaturedJobs;

const styles = StyleSheet.create({

    Categories: {

        fontWeight: 'bold',
        fontSize: 17,
        margin: 20,
        marginLeft: 20,
    },
    seeall: {
        margin: 20,
        marginLeft: 140,
        justifyContent: 'space-between',
        color: '#95969D',
    },
  
  });