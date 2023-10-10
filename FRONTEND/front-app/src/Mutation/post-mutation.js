import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost(
    $userId: ID!
    $description: String!
    $picturePath: String
  ) {
    createPost(
      userId: $userId
      description: $description
      picturePath: $picturePath
    ) {
      id
      userId
      firstName
      lastName
      location
      description
      picturePath
      userPicturePath
    }
  }
`;
