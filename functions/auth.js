exports.handler = async(event,context) => {
    console.log("function ran");
    console.log("just getting all users first")

    console.log(context)

    //don't need this since we register elsewhere,
    //but may need other endpoints to get different challenges?

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify({msg:"Hey"})
        }
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({
                msg: "Sorry, you must be logged in to see this"
            })
        }
    }

}