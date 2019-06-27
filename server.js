const express = require('express'); 
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')

const app = express(); 

// entry point for any client that wants to access graphQL on our server
app.use('/graphql', expressGraphQL({
  schema:schema, 
  graphiql: true, 
}))

app.listen(4000, () => {
  console.log("Server is running on port 4000...")
})