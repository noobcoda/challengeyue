//import {gql} from "@apollo/client";
import gql from 'graphql-tag';

export const SIGNUP = gql`
    mutation RegisterUser($name: String, $email: String) {
        registerUser(name:$name,email:$email){
            _id
            email
        }
    }
`;