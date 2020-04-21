const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema');
const QuakeAPI = require('./datasources/quake')
const resolvers = require('./resolvers')

// create store method 
const {createStore} = require('./utils')

const userAPI = require('./datasources/user')
// create store object

const store = createStore()

const server = new ApolloServer ({
    typeDefs,
    resolvers,
    dataSources: ()=>({
        quakeAPI: new QuakeAPI(),
        userAPI: new UserAPI({store})
    })})

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
});