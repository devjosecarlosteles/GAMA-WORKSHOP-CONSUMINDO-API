const btnList = document.querySelector('#btnList')
const btnCreate = document.querySelector('#btnCreate')

btnList.addEventListener('click', () => listRecipes())
btnCreate.addEventListener('click', () => createRecipe())
btnUpdate.addEventListener('click', () => updateRecipe())
btnDelete.addEventListener('click', () => deleteRecipe())

var recipesList = []

async function listRecipes () {
  try {
    const list = await fetch('http://localhost:3333/recipes')


    const listToJson = await list.json()

    console.log(listToJson)

    const { recipes } = listToJson

    recipesList.push(recipes[1])

    recipesList.map(recipe => {
      const div = document.querySelector('div')
    
      const divE = document.createElement('div')
    
      divE.innerHTML = `
        <h1>${ recipe.name }</h1>
        <h3>${ recipe.author }</h3>
      `
    
      div.appendChild(divE)
    })
  } catch (err) {
    console.log(err)
  }
}


async function createRecipe() { 
  try {
    const create = await fetch('http://localhost:3333/recipes', 
      { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          id: "802fb8e6-55c7-4a63-92e4-5fe70d020828",
          name: 'Pão de queijo',
          author: 'José'
        }) 
      })

    const convert = await create.json()

    console.log(convert) 
  } catch (err) {
    console.log(err)
  }
}


async function updateRecipe() { 
  try {
    const create = await fetch('http://localhost:3333/recipes/802fb8e6-55c7-4a63-92e4-5fe70d020828', 
      { 
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: 'Pãozinho de queijo',
        }) 
      })

    const convert = await create.json()

    console.log(convert) 
  } catch (err) {
    console.log(err)
  }
}


async function deleteRecipe() { 
  try {
    const create = await fetch('http://localhost:3333/recipes/802fb8e6-55c7-4a63-92e4-5fe70d020828', 
      { 
        method: 'DELETE'
      })

    const convert = await create.json()

    console.log(convert) 
  } catch (err) {
    console.log(err)
  }
}

