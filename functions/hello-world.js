const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
}

exports.handler = async function (event, context) {
    console.log('Request starting');

    // For GET requests return a message.
    // You can have a separate function or reuse this one to support other options like POST, PUT or DELETE.
    if (event.httpMethod === 'GET') {
        console.log('Returning message');

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: "Hello World from a Netlify Function" })
        };
    }
    // To handle issues with CORS, we need to declare that it can be used.
    else if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: 'You can use CORS' }),
        }
    }
}
