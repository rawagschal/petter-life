const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const {cloudinary} = require('./utils/cloudinary');

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/api/images', async (req, res) => {
  const {resources} = await cloudinary.search
  .expression('folder:a-petter-life')
  .sort_by('public_id', 'desc')
  .max_results(30)
  .execute();
  const publicIds = resources.map( file => file.public_id);
  res.send(publicIds);
})

app.post('/api/addPetPhoto', async (req, res) => {
  try {
    const fileStr = req.body.data;
    console.log(fileStr)
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setups'
    })
    console.log(uploadResponse);
    res.json({msg: "Image Uploaded Succesfully!"})
  } catch(error) {
    console.error(error)
    res.status(500).json({err: 'Something went wrong'})
  }
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL ar http://localhost:${PORT}${server.graphqlPath}`);
  });
});
