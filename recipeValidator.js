const { body } = require('express-validator');

const recipeValidationRules = () => {
  return [
    body('name')
      .notEmpty().withMessage('Recipe name is required')
      .trim()
      .isLength({ max: 255 }).withMessage('Recipe name cannot exceed 255 characters'),
    body('ingredients')
      .notEmpty().withMessage('Ingredients are required')
      .trim(),
    body('instructions')
      .notEmpty().withMessage('Instructions are required')
      .trim(),
    body('cookingTime')
      .optional({ nullable: true })
      .isInt({ min: 0 }).withMessage('Cooking time must be a non-negative integer'),
    body('difficulty')
      .optional({ nullable: true })
      .isIn(['Easy', 'Medium', 'Hard']).withMessage('Difficulty must be one of: Easy, Medium, Hard')
  ];
};

module.exports = { recipeValidationRules };