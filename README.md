# Introducción a GraphQL

## Installación y ejecución del servidor
```
npm install
npm start
```

## Rutas
API:
```
# http://localhost:3000/pizza_api
```

Graph<i>i</i>QL
```
# http://localhost:3000/graphiql
```

## Queries y Mutations
```
{
  pizzas{
    id
  }
}
```
```
{
  pizzas(name:"margarita"){
    id
    name
  }
}
```
```
{
  pizzas(name:"margarita"){
    id
    name
  }
}
```
```
{
  pizzas(name:["margarita", "hawaiana"]){
    id
    name
    origin
  }
}
```
```
{
  pizzas{
    id
  }
  
  ingredients{
    name
  }
}
```
```
{
  pizzas{
    __typename
    origin
    ingredients{
      name
    }
  }
}
```
```
mutation {
  createPizzas(pizzas: {name: "vegetal", origin: "Suecia"}){
    id
    name
    origin
  }
}
```
```
mutation {
  createPizzas(pizzas: [{name: "vegetal", origin: "Suecia"}]){
    name
    origin
  }
}
```
```
mutation {
  createPizzas(pizzas: [
                          {
                            name: "vegetal",
                            origin: "Suecia"
                            ingredientIds: [1, 2, 5, 6]
                          }
  					   ]
  			  ){
    id
    name
    origin
    ingredients{
      name
      calories
    }
  }
}
```