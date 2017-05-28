import { merge } from 'lodash';
import pizzaResolver from './pizza.resolver';
import ingredientResolver from './ingredient.resolver';

const resolvers = merge(pizzaResolver, ingredientResolver);

export default resolvers;