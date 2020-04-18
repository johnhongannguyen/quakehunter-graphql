module.exports = {
    Query: {
        quakes: (_,__,{dataSources}) =>
        dataSources.quakeAPI.getAllQuakes(),
        quake: (_,{id}, {dataSources}) =>
        dataSources.quakeAPI.getQuakeById({quakeId:id}),
       // me:(_,_, {dataSources}) => dataSources.userAPI.findOrCreateUser()
    }
}