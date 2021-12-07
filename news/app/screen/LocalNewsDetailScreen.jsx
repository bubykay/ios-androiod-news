import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-elements'
import LikeBar from '../components/template/LikeBar';


import Screen from '../components/template/Screen'
import customStyle from '../constants/styles'
const LocalNewsDetailScreen = ({route}) => {
    const {title, content, image, createdAt} = route.params
    const [facebook, setFacebook] = useState(0)
    const [twitter, setTwitter] = useState(0)
    const [like, setLike] = useState(0)
    const [unlike, setUnlike] = useState(0)

    return (
        <Screen>
            <ScrollView>
            <View>
                <Text style={{
                    fontSize: customStyle.fontSize.header, 
                    fontWeight:"bold", 
                    textAlign:'center', 
                    paddingTop: 5,
                    backgroundColor: customStyle.background.primary,
                    color: 'white',
                    paddingBottom: 15
                }}
                >
                    {title}
                </Text>
                <Card.Image source={{uri:image}} style={{height:250, }} PlaceholderContent={<ActivityIndicator size="large"  color="white" />} />
                {/* <View style={styles.separator}></View> */}

                <LikeBar 
                    like={like} 
                    unlike={unlike}  
                    facebook={facebook}  
                    twitter={twitter}  
                    handleLike={()=>setLike(like + 1)}
                    handleFacebookShare = {()=>setFacebook(facebook + 1)}
                    handleTwitterShare  ={()=>setTwitter(twitter + 1)}
                    handleUnlike ={()=>setUnlike(unlike + 1)}
                    />
              
              {/* <View style={styles.separator}></View> */}

                <Text style={{marginTop:20, lineHeight:25, fontSize:18, padding:10}}>
                    {content.replaceAll('.', '\n')}
                </Text>
                
                
            </View>
            </ScrollView>    
        </Screen>
    );
};

export default LocalNewsDetailScreen;

const styles = StyleSheet.create({
    separator: {
        backgroundColor:'#ECECEC', 
        padding:1
    }
})