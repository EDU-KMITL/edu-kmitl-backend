const { CourseList } = require('./models')


class Debug {
    async start() {
        let CourseLists = await CourseList.findAll({ where: { uuid:"izJLR1SNTIyqP"}, include: [ { all: true } ]  }).then((res) => { return res })
        Object.keys(CourseLists).map(function (key, index) {
            CourseLists[key].User.password = "--secret--"
            delete CourseLists[key].User.password
        });
        console.log(CourseLists[0].User)
    }
}

module.exports = Debug