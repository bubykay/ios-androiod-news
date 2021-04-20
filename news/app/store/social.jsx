import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'social',
    initialState : {
        facebook: [],
        twitter: [],
        like: [],
        disLike: [],
    },
    reducers: {
        fabookShare: (social, action) => {
            social.facebook.push(action.payload)
          },
          likeNews : (social, action) =>{
              social.like.push(action.payload)
          },
          unlikeNews: (social, action)=>{
              social.disLike.push(action.payload)
          },
          twitterShare : (social, action)=>{
              social.twitter.puch(action.payload)
          }
    }
})


//action creators

export const FACEBOOK_LIKE = (newsId) => ({
    type : 'FACEBOOK_LIKE',
    payload : {
        newsId
    }

})

//  reducer 


export default function reducer(state, action){
    switch (action.type) {
        case 'FACEBOOK_LIKE':
            return [
                ...state
            ]
        default:
            return state
    }
}

export const {fabookShare,likeNews,twitterShare,unlikeNews} = slice.actions