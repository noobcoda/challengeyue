//writing own query or mutation
const GET_USERS = `
query {
    listUsers{
        data{
            name 
        }
    }
}
`;

const CREATE_USER = `
    mutation ($email: String!, $name: String!){
        createAccount(data: {
        email:$email
        profile: {
            create: {
            name:$name
            }
        }
        })
        {
        _id  
        email 
        profile{
            name
        }
        }
    }
`;

module.exports = {
    GET_USERS,
    CREATE_USER,
}