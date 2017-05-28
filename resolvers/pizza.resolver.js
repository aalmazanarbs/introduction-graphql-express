let data = require('./data.json');

const pizzaResolver = {
    Query: {
        pizzas(_, { name }) {
            if (name === undefined) {
                return data.pizzas;
            }

            let requestedPizzas = [];

            name.forEach((pizzaName) => {
                requestedPizzas.push(
                    data.pizzas.find((pizza) => pizza.name === pizzaName)
                );
            });

            return requestedPizzas;
        }
    },
    Pizza: {
        ingredients(pizza) {
            let pizzaIngredientsIds = data.pizza_ingredients
                                    .filter((pizza_ingredient) => pizza_ingredient.pizzaId === pizza.id)
                                    .map((pizza_ingredient) => pizza_ingredient.ingredientId);
            return data.ingredients.filter((ingredient) => pizzaIngredientsIds.indexOf(ingredient.id) > -1);
        }
    }
};

export default pizzaResolver;