const projectService = require('../services/projectService');

exports.createProject = async (req, res, next) => {
  req.body.createdBy = req.auth._id;
  req.body.companyId = req.auth.companyId;
  req.body.createDate = new Date();
  const project = await projectService.createProject(req.body);
  res.json(project);
}

exports.getProjectsByCompany = async (req, res, next) => {
  const includeFacade = (req.query.facade || false) == true;
  const projects = await projectService.getProjectsByCompany(req.auth.companyId, includeFacade);
  res.json(projects);
}