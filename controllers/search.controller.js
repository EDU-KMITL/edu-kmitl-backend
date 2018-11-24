/**
 * Created by MisterNT on 5/1/2017.
 */
const Validator = require('validatorjs')
const { Course } = require('./../models')

const Search = function (req, res) {
    const rules = {
        search: 'required|max:25'
    };
    let validation = new Validator(req.body, rules);
    validation.passes(async function () {
        let dataSearch = [];
        let query = req.body.search
        dataSearch.push(await Course.findAll({
            where: {
                status:"PUBLIC",
                $or: [
                    { 'name': { like: '%' + query + '%' } },
                    { 'uuid': { like: '%' + query + '%' } },
                    { 'detail': { like: '%' + query + '%' } }
                ]
            }
        }))

        res.status(200).json({
            success: true,
            data: dataSearch
          });
    })
    validation.fails(function () {
        res.status(200).json(validation.errors);
    });
}
module.exports = Search;
