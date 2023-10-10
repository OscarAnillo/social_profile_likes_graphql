import { gql } from '@apollo/client';

export const GET_ALL_USERS =  gql`
    query {
        allUsers {
            id
            firstName
            lastName
            email
            picturePath
            location
            occupation
        }
    }
`

export const GET_SINGLE_USER = gql`
    query SingleUser($id: ID!){
        singleUser(id: $id) {
            id
            firstName
            lastName
            email
            picturePath
            location
            occupation   
        }
    }
`