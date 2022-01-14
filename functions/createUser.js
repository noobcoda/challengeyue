const {CREATE_USER} = require("./utils/userQueries.js");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async(event) => {
    const {email,name} = JSON.parse(event.body);
    const variables = {email,name};
    try{
        const {createAccount} = await sendQuery(CREATE_USER, variables);
        return formattedResponse(200,createAccount);
    }catch(err){
        console.log(err);
        return formattedResponse(500,{err:"Something went wrong!"});
    }
}