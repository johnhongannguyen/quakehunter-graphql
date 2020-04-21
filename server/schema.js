const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
       quakes: [Quake]!
       quake(id: ID!) : Quake
       users: [User]
       me: User
    }

    type Quake {
        id: ID!
        location: String
        magnitude: Float
        when: String
        time: String

    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        records:[Quake]!

    }

    type Mutation{
        # if false, saving record failed -- check error
        saveRecord(recordId: ID!): RecordUpdateResponse!
        # if false, delete record failed -- check error
        deleteRecord(recordId: ID!): RecordUpdateResponse!
        login(email: String): String
    }

    type RecordUpdateResponse{
        success: Boolean!
        message: String
        records: [Quake]
    }
`; 

module.exports = typeDefs