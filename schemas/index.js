import schema from './schema.graphql';
import Query from './Query.graphql';
import Pizza from './Pizza.graphql';
import Ingredient from './Ingredient.graphql';

const typeDefs = [
    schema,
    Query,
    Pizza,
    Ingredient
];

export default typeDefs;