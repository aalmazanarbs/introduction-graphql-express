import schema from './schema.graphql';
import Query from './Query.graphql';
import Mutation from './Mutation.graphql';
import Pizza from './Pizza.graphql';
import Ingredient from './Ingredient.graphql';

const typeDefs = [
    schema,
    Mutation,
    Query,
    Pizza,
    Ingredient
];

export default typeDefs;