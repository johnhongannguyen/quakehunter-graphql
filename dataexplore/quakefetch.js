const fetch = require('node-fetch')
const url ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'
fetch(url)
.then(response =>{
    return response.json()
})
.then(quakedata =>{
    console.log(quakedata.features[0]);
    const quake = quakedata.features[0];
    const date = new Date(quake.properties.time);
    console.log(date);
    const year = date.getFullYear();
    const month = monthName(date.getMonth());
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds();
    const dateString = `${month} ${day}, ${year} at ${hour}:${minute} and ${seconds} seconds`;
    const timeStamp = quake.properties.time;


    function monthName(index){
        const monthLegend = {
            0:"January",
            1:"February",
            2:"March",
            3:"April",
            4:"May",
            5:"June",
            6:"July",
            7:"August",
            8:"September",
            9:"Octorber",
            10:"November",
            11:"December"
        }
        return monthLegend[index];
    };
    const customData = {
        magnitude: quake.properties.mag,
        location: quake.properties.place,
        when: dateString,
        time: timeStamp,
        id: quake.id

    }
    console.log(customData);
})