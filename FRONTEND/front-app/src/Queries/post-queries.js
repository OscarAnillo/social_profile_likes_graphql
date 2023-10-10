import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
    query {
        allPosts {
            id
            userId
            firstName
            lastName
            description
            location
            picturePath
            userPicturePath
        }
    }
`