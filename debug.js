const {VideoList} = require('./models')


class Debug {
    async start() {
        let ViewVideos = await VideoList.findAll({ where: {user_id: '8' } }).then( (res) => { return res} )
        Object.keys(ViewVideos).map(function(key, index) {
            if(key == "link") ViewVideos[key] = "wandeeee";
         });
         
         
        console.log(ViewVideos)
    }
}

module.exports = Debug