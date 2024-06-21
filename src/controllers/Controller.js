// Controller.js
const db = require('../models/index.js');
const expHbs = require('express-handlebars');
const hbs = expHbs.create();

class Controller {
    static async #render(req, res, module, view, title, data) {
        const dataBase = {
            url: `${process.env.HTTP}${process.env.HOST_NAME}${process.env.PORT === '80' ? `/` : `:${process.env.PORT}/`}`,
            dateFormat: global.DateTime.dateFormat,
            timeFormat: global.DateTime.timeFormat,
        };
        data = Object.assign(dataBase, data);
        await res.render('layouts/main', { module, view, title, data });
    }

    static async _renderHbsFile(viewPath, data = {}) {
        return await hbs.render(viewPath, data);
    }

    static async _index(req, res, module, data = {}) {
        let title = `${db[module]?.name.charAt(0).toUpperCase()}${db[module]?.name.slice(1)}` ?? module;
        const dataDefault = {
            module: db[module]?.name,
        };
        data = Object.assign(data, dataDefault);
        await Controller.#render(req, res, module, 'index', title, data); // Sửa đổi tên file view và extension
    }
}

module.exports = Controller;


// formPage: async (req, res, model, title, data) => {
    //     let formProperties = ['field', 'label', 'validate', 'onlySelect', 'relation'];
    //     let fieldDefsFiltered = model.fieldDefs.map(item => Object.fromEntries(Object.entries(item).filter(([key, value]) => formProperties.includes(key))));
    //     await Controller.render(req, res, 'page.form.ejs', title, Object.assign(data, {fields: fieldDefsFiltered}));
    // },
    //
    // formData: async (req, res) => {
    //     let accounts = await Account.getFullRecords(req, res);
    //     let services = await Service.getFullRecords(req, res);
    //     let categories = await Category.getFullRecords(req, res);
    //     let paymentStatuses = await PaymentStatus.getFullRecords(req, res);
    //     return {accounts: accounts, services: services, categories: categories, paymentStatuses: paymentStatuses};
    // },
    //
    // store: async (req, res, model) => {
    //     model.fieldDefs.forEach((field) => {
    //         if (typeof req.body[field.field] !== 'undefined') {
    //             field.value = req.body[field.field];
    //         }
    //     });
    //     await Model.store(req, res, model);
    // },
    //
    // update: async (req, res, model) => {
    //     model.fieldDefs.forEach((field) => {
    //         if (typeof req.body[field.field] !== 'undefined') {
    //             field.value = req.body[field.field];
    //         }
    //     });
    //     await Model.update(req, res, model);
    // },
    //
    // delete: async (req, res, model) => {
    //     await Model.delete(req, res, model);
    // },

    // function selectItem: async (req, res, model) => {
    //     if (req.body.checked === 'true') {
    //         let ids = [];
    //         if (req.params.id === `${model.module}_check_all`) {
    //             ids = await Model.getAllIds(req, res, model);
    //             ids = ids.map(obj => obj.id.toString());
    //         } else {
    //             ids.push(req.params.id);
    //         }
    //         ids.forEach((id) => {
    //             if (!req.session.module[model.module].listing.selected.includes(id)) {
    //                 req.session.module[model.module].listing.selected.push(id);
    //             }
    //         });
    //     } else {
    //         if (req.params.id === `${model.module}_check_all`) {
    //             req.session.module[model.module].listing.selected = [];
    //         } else {
    //             req.session.module[model.module].listing.selected = req.session.module[model.module].listing.selected.filter(id => id !== req.params.id);
    //         }
    //     }
    //
    //     res.json({selected: req.session.module[model.module].listing.selected.length});
    // },