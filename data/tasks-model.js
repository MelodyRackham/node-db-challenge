const db = require('./db-config');

module.exports = {
  getTasks,
  addTask,
};

function getTasks() {
  return db('tasks as t')
    .innerJoin('projects as p', 'p.id', '=', 't.project_id')
    .select('p.project_name', 'p.project_description', 't.task_description', 't.notes', 't.completed');
}
function addTask(task) {
  return db('tasks').insert(task);
}
