// import {listAllUsers} from ""

exports.handler = async(event,context) => {
    console.log("function ran");
    console.log("just getting all users first")

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify({msg:"Hi"}),
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({
            msg: "Sorry, you must be logged in to see this"
        })
    }
}