import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String! $password: String!) {
        login(email: $email password: $password) {
            id
            firstName
            lastName
            email
            password
            picturePath
            location
            occupation
        }
    }
`

export const REGISTER_USER = gql`
    mutation Register($firstName: String! $lastName: String! $email: String! $password: String! $location: String $occupation: String) {
        register(firstName: $firstName lastName: $lastName email: $email password: $password location: $location occupation: $occupation) {
            id
            firstName
            lastName
            email
            location
            occupation
        }
    }
`