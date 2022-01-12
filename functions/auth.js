import faunadb from 'faunadb';
const q = faunadb.query
const client = new faunadb.Client({
    secret: process
})

exports.handler = async(event,context) => {
    console.log("function ran");

    const data = {
        name: "Mario",
        age: "35",
        job: "plumber"
    }

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({
            msg: "Sorry, you must be logged in to see this"
        })
    }
}