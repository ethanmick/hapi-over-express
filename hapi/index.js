'use strict';
//
// Ethan Mick
//

const Hapi = require('hapi')

const port = process.env.PORT || 8080
const server = new Hapi.Server()

server.connection({ port: port })

server.route({
    method: 'POST',
    path: '/hello',
    handler: (req, reply) => {
        reply({ hello: req.payload.name })
    }
})

server.start( (err) => {
    console.log('Server running at:', server.info.uri, err ? err : '');
})

/*
 * A simple Test
 */
/*
var req = {
    method: 'POST',
    url: '/hello',
    payload: JSON.stringify({name: 'Ethan'})
};

server.inject(req, res => {
    console.log('Tested!', res.statusCode, res.result);
});
*/