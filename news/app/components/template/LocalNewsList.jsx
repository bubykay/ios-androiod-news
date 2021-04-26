import React from 'react';
import { Card, withBadge , Icon} from 'react-native-elements'
import {ActivityIndicator, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'

import style from '../../constants/'
const LocalNewsList = ({title, content, image, onPress}) => {
    const Comment = withBadge(1)(Icon)
    const See = withBadge(3)(Icon)
    const Likes = withBadge(200)(Icon)
    const Share = withBadge(2)(Icon)


    return (
        <TouchableWithoutFeedback onPress={onPress}>
          <Card containerStyle={styles.container}>

          <Card.Title style={styles.title}>{title}</Card.Title>
          <Card.Image source={{uri: image}} PlaceholderContent={<ActivityIndicator />} style={styles.image}>
          </Card.Image>
          <View style={styles.bodyContainer}>
              <Text style={styles.content} numberOfLines={3}>
              {content}
            </Text>
          </View>

</Card>
        </TouchableWithoutFeedback>
    )
};

export default LocalNewsList;


const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
      },
      flex: {
          display:'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          paddingRight:20,
          paddingLeft:20,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#4A4A4A'
      },
      centerProp: {},
    //   image : {backgroundColor:"rgba(17, 17, 17,0.3)",},
      content: {marginBottom: 10, padding:10, lineHeight:20},
      title: {fontSize:16, color:'#5A5A5A', lineHeight:25},
      container: {
        paddingRight:0,
        paddingLeft:0, 
        marginTop:0, 
        paddingBottom: 0,
        marginBottom:10, 
        marginLeft:0, 
        marginRight:0,
        backgroundColor: '#D6D6D6'
    },
    separatorGrey: {paddingTop:2, backgroundColor:'grey'},
    bodyContainer:{
        backgroundColor: 'white'
    }
})