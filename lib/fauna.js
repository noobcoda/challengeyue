// import {gql} from "@apollo/client";

// export const listAllUsers = () => {
//     console.log("Hi");
//     const query = gql`
//         query getUsers{
//             allUserAccounts{
//                 data{
//                     email
//                 }
//             }
//         }
//     `
//     return graphQLClient
//         .request(query)
//         .then(({entries:{data}}) => data)
// }