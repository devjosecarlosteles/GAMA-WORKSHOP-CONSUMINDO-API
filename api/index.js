import express from 'express';
import cors from 'cors';

const app =  express();

app.use(cors())
app.use(express.json())

const recipes = [{ 
  id: 'd19acc7a-a451-4fe1-873b-a899ea8ab0d3',
  name: 'Risoto de abóbora',
  author: 'José Carlos'
}]

app.get('/health', (req, res) => {
  return res.status(200).json({ message: 'success' })
})

app.get('/recipes', (req, res) => {
  return res.status(200).json(recipes)
})

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const recipe = recipes.find(recipe => recipe.id === id)

  if (!recipe) return res.status(404).json({message: 'not found'})

  return res.status(200).json({ recipe })
})


app.post('/recipes', (req, res) => {
  const { id, name, author } = req.body;
  
  console.log(req.body)

  recipes.push({ id, name, author })
  return res.status(201).json({ id, name, author })
})

app.put('/recipes/:id', (req, res) => {
  const { name, author } = req.body;
  
  recipes.map(recipe => {
    if(recipe.id === req.params.id) {
      recipe.name = name ?? recipe.name;
      recipe.author = author ??recipe.author
    }
  })

  return res.status(202).json({ recipes })
})

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params
  const recipeIndex = recipes.findIndex(recipe => recipe.id === id)

  console.log(recipeIndex)
  
  recipes.splice(recipeIndex, 1)

  return res.status(202).json({ recipes })
})

app.listen(3333, () => { console.log('server running in localhost:3333') })