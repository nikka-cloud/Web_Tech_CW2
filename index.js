const express = require('express');
const router = express.Router();
const controller = require('../../controllers/recipes');

router.get('/', controller.listRecipes);
router.get('/new', controller.newRecipeForm);
router.post('/', controller.createRecipe);
router.get('/:id', controller.recipeDetail);
router.get('/:id/edit', controller.editRecipeForm);
router.post('/:id', controller.updateRecipe);
router.post('/:id/delete', controller.deleteRecipe);

module.exports = router;
