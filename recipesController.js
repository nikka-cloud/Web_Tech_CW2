const recipes = require('../../services/recipes');

exports.listRecipes = (req, res) => {
  res.render('recipes/list', { title: 'All Recipes', recipes: recipes.getAll() });
};

exports.recipeDetail = (req, res) => {
  const recipe = recipes.getById(req.params.id);
  res.render('recipes/detail', { recipe });
};

exports.newRecipeForm = (req, res) => {
  res.render('recipes/form', { title: 'Add Recipe', recipe: {} });
};

exports.editRecipeForm = (req, res) => {
  const recipe = recipes.getById(req.params.id);
  res.render('recipes/form', { title: 'Edit Recipe', recipe });
};

exports.createRecipe = (req, res) => {
  recipes.create(req.body);
  res.redirect('/recipes');
};

exports.updateRecipe = (req, res) => {
  recipes.update(req.params.id, req.body);
  res.redirect('/recipes/' + req.params.id);
};

exports.deleteRecipe = (req, res) => {
  recipes.delete(req.params.id);
  res.redirect('/recipes');
};
