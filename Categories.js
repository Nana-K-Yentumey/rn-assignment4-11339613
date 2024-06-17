import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FeaturedCards from "./FeaturedCards";

/*
<View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 40 }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/facebooklogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>Frontend Developer</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Facebook</Text>
                    </View>
                    </View>
                
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$100,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Accra, Ghana</Text>
                    </View>    
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 40 }} >
                    <Image style={{width: 50, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/googlelogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>SEO Engineer</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Google</Text>
                    </View>
                    </View>
                
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$120,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>New York, USA</Text>
                    </View>    
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/amazonlogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>Systems Analyst</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Amazon</Text>
                    </View>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$80,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Remote</Text>
                    </View>    
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/nvidialogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>Electrical Engineer</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Nvidia</Text>
                    </View>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$150,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Phoenix, USA</Text>
                    </View>    
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/facebooklogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>Project Manager</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Facebook</Text>
                    </View>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$100,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Accra, Ghana</Text>
                    </View>    
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/googlelogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}> Cyber Security Specialist</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Google</Text>
                    </View>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$100,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Remote</Text>
                    </View>    
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/amazonlogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>Data Analyst</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Amazon</Text>
                    </View>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$100,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Accra, Ghana</Text>
                    </View> 
                       
                </View>
                <View style={styles.facebookCard}>
                    <View style={{flex: 1, flexDirection: 'row', }} >
                    <Image style={{width: 47, height: 47, marginLeft: 10, marginTop: 25}} source={require('./assets/activisionlogo.png')} />
                    <View style={{margin: 10}}>
                    <Text style={{color: '#858585', fontWeight: 'bold', fontSize: 18, margin: 10, marginTop: 16 }}>Game Developer</Text>
                    <Text style={{color: '#858585', fontSize: 14, margin: 10, marginTop: 1,  }}>Activision</Text>
                    </View>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <Text style={{marginLeft: 10, color: '#858585', fontSize: 15}} >$100,000</Text>
                        <Text style={{marginLeft: 85, color: '#858585', fontSize: 15}}>Miami, USA</Text>
                    </View> 
                       
                </View>
*/

const Categories = () => {
    return (
        <View>
            
            <Text style={styles.Categories}>Featured Jobs</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardsSection}>
                <FeaturedCards imageSource={require('./assets/fcbook.png')}  JobTitle={'Software Engineer'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} />
                <FeaturedCards imageSource={require('./assets/googlelogo.png')}  JobTitle={'Frontend Developer'} salary={'$90,000/y'} employer={'Google'} location={'LA, USA'} />
                <FeaturedCards imageSource={require('./assets/amazonlogo.png')}  JobTitle={'Data Analyst'} salary={'$110,000/y'} employer={'Amazon'} location={'Remote'} />
                <FeaturedCards imageSource={require('./assets/activisionlogo.png')}  JobTitle={'Frontend Developer'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} />
                <FeaturedCards imageSource={require('./assets/bgking.png')}  JobTitle={'System Administrator'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} />
                <FeaturedCards imageSource={require('./assets/beatz.png')}  JobTitle={'Sound Engineer'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} />
                <FeaturedCards imageSource={require('./assets/googlelogo.png')}  JobTitle={'Backend Developer'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} />
                <FeaturedCards imageSource={require('./assets/amazonlogo.png')}  JobTitle={'Delivery Driver'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} />
            </ScrollView>
        
        </View>

    );

}

export default Categories;

const styles = StyleSheet.create({

    Categories: {

        fontWeight: 'bold',
        fontSize: 17,
        margin: 20,
        marginLeft: 20,

    },


    facebookCard: {
        backgroundColor: '#ebebeb',
        marginRight: 15,
        marginLeft: 20,
        borderRadius: 20,
        padding: 10,

        
    },

    cardIcon: {
        width: 131,
        height: 52,
        margin: 20,
        padding: 90,
    },

    cardLabel: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 10,
    },

    taskNo: {
        marginLeft: 10,
    },


  
  });