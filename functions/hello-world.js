const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
}

exports.handler = async function (event, context) {
    console.log('Request starting');

    if (event.httpMethod === 'GET') {
        console.log('Returning message');

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: "Hello World from a Netlify Function" })
        };
    }
    else if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: 'You can use CORS' }),
        }
    }
}
