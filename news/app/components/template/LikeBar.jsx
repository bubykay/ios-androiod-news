import React from 'react';
import {withBadge, Icon} from 'react-native-elements'
import {Button, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native'

const LikeBar = ({facebook, handleLike, handleFacebookShare, handleTwitterShare, handleUnlike,  like, unlike,  twitter }) => {
    const Like =  withBadge(like)(Icon)
    const Unlike = withBadge(unlike)(Icon)
    const Facebook = withBadge(facebook)(Icon)
    const Twitter = withBadge(twitter)(Icon)
    return (
            <View style={styles.flex}>
                    
                        <TouchableWithoutFeedback onPress={handleLike}>
                            <View style={styles.icon}>
                                <Like name="like2" type="antdesign"  />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={handleUnlike}>
                            <View style={styles.icon}>
                                <Unlike name="dislike2" type="antdesign" />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={handleFacebookShare}>
                            <View style={styles.icon}>
                                <Facebook  name="logo-facebook" type="ionicon" color="#3b5998" />
                            </View>
                        </TouchableWithoutFeedback>
                        
                        <TouchableWithoutFeedback onPress={handleTwitterShare}>
                            <View style={styles.icon}>
                            <Twitter name="logo-twitter" type="ionicon" color="#08a0e9" />
                            </View>
                        </TouchableWithoutFeedback>
        
            
              </View>
    );
};

export default LikeBar;


const styles = StyleSheet.create({
    flex: {
        display:'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        // paddingBottom:10,
        // paddingTop: 10,
        backgroundColor: '#D6D6D6'
    },
    icon: {
        padding: 10
    }
})