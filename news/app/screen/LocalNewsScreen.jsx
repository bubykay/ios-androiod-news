import React, { useEffect, useState } from 'react';
import {FlatList, Text, Button} from 'react-native'



import LocalNewsList from '../components/template/LocalNewsList';
import allNewsApi from '../apicall/newsApi'
import routes from '../routes'
import Loader from '../components/template/Loader';
import Screen from '../components/template/Screen'


const LocalNewsScreen = ({navigation}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)



    useEffect(()=>{
        loadAllNews()
    },[])

    const loadAllNews = async() => {

        setLoading(true)
        const response = await allNewsApi()
        setLoading(false)

       if(!response.ok){
          return setError(true)
       }

       setNews(response.data.results)
       setError(false) 
       
    }
    

    const RenderItem = ({item})=>(
           <LocalNewsList 
            title={item.title} 
            createdAt ={item.createdAt}
            content = {item.content}
            image={item.image}
            onPress={()=>navigation.navigate(routes.LOCAL_NEWS_DETAIL, item)}
        />
        )

    if(loading){
        return(
            <Loader />
        )
    }
    
    return (
        
        <Screen>
            {error && (
               <>
                <Text>There was an error</Text>
                <Button title="reload" onPress={loadAllNews} />
               </>
            )}
            <FlatList 
                data={news}
                // ItemSeparatorComponent={ItemSeparator}
                renderItem={({item})=><RenderItem item={item} />}  
                keyExtractor={item => item.id.toString()}
                refreshing={false}
                onRefresh={()=>console.log('you refreshed me')}
                
    />
        </Screen>
    );
};

export default LocalNewsScreen;