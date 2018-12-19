const { VideoList } = require('./models')


class Debug {
    async start() {
        let ViewVideos = await VideoList.findAll({ where: { user_id: '8' } }).then((res) => { return res })
        Object.keys(ViewVideos).map(function (key, index) {
            ViewVideos[key].link = ViewVideos[key].link.split("=")[1]
            return ViewVideos
        });
        console.log(ViewVideos)
    }
}

module.exports = Debug