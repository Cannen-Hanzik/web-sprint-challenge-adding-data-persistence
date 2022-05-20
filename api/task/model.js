const db = require('../../data/dbConfig.js');

function getAll() {
    return db('tasks as t')
        .select('t.*', 'p.product_name', 'p.project_description')
        .join('projects as p', 'p.project_id', 't.project_id')
};

async function add(task) {
    const [task_id] = await db('tasks').insert(task);
    return getAll().where({
        task_id
    }).first();
};

module.exports = {
    getAll,
    add,
};