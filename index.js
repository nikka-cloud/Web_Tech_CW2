let recipes = [
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      image: '/images/carbonara.jpg',
      ingredients: ['Spaghetti', 'Eggs', 'Cheese', 'Pancetta'],
      steps: 'Boil, fry pancetta, mix with eggs and cheese, combine.'
    }
  ];
  
  exports.getAll = () => recipes;
  
  exports.getById = id => recipes.find(r => r.id === id);
  
  exports.create = data => {
    const newRecipe = {
      id: Date.now().toString(),
      ...data
    };
    recipes.push(newRecipe);
  };
  
  exports.update = (id, data) => {
    const index = recipes.findIndex(r => r.id === id);
    if (index !== -1) {
      recipes[index] = { ...recipes[index], ...data };
    }
  };
  
  exports.delete = id => {
    recipes = recipes.filter(r => r.id !== id);
  };

  