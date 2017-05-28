let data = require('./data.json');

const ingredientResolver = {  
    Query: {
        ingredients: () => {
            return data.ingredients;
        }
    }
};

export default ingredientResolver;