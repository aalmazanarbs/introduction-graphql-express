let data = require('./data.json');

const pizzaResolver = {
    Query: {
        pizzas(root, { name }) {
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
        //Have to resolve the field "ingredients" when a "Pizza" object is requested
        ingredients(pizza) {
            let pizzaIngredientsIds = data.pizza_ingredients
                .filter((pizza_ingredient) => pizza_ingredient.pizzaId === pizza.id)
                .map((pizza_ingredient) => pizza_ingredient.ingredientId);
            return data.ingredients.filter((ingredient) => pizzaIngredientsIds.indexOf(ingredient.id) > -1);
        }
    },

    Mutation: {
        createPizzas(root, { pizzas }) {
            if (pizzas === undefined || pizzas.length < 1) {
                return null;
            }

            let newPizzas = [];

            pizzas.forEach((pizza) => {
                if (pizza.name) {
                    let newPizza = {
                        id: data.pizzas.length + 1,
                        name: pizza.name,
                        origin: pizza.origin
                    };

                    addPizzaToData(newPizza, pizza.ingredientIds);
                    newPizzas.push(newPizza);
                }
            });

            newPizzas = newPizzas.length > 0 ? newPizzas : null;

            // The "ingredients" field is autoresolved by GraphQL
            return newPizzas;
        }
    }
};

function addPizzaToData(newPizza, ingredientIds) {
    // Need to check if the pizza name exists but not now ...
    data.pizzas.push(newPizza);
    
    if (ingredientIds && ingredientIds.length > 0) {
        ingredientIds.forEach((ingredientId) => {
            // Need to check if the ingredient exists but neither now :)
            data.pizza_ingredients.push({
                pizzaId: newPizza.id,
                ingredientId: ingredientId
            });
        });
    }
}

export default pizzaResolver;