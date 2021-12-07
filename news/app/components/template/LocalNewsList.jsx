import React from 'react';
import { Card, withBadge , Icon} from 'react-native-elements'
import {ActivityIndicator, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'


import customStyle from '../../constants/styles'
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
      content: {marginBottom: 10, padding:10, lineHeight:20},
      title: {
        fontSize:16, 
        color: customStyle.textColor.white, 
        lineHeight:25
      },
      container: {
        paddingRight:0,
        paddingLeft:0, 
        marginTop:0, 
        paddingBottom: 0,
        marginBottom:10, 
        marginLeft:0, 
        marginRight:0,
        backgroundColor: customStyle.background.primary
    },
    bodyContainer:{
        backgroundColor: 'white'
    }
})