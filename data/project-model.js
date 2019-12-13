module.exports = {
  getProjects,
};

function getProjects() {
  return db('projects');
}
