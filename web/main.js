// const btnList = document.querySelector('#btnList')
const btnCreate = document.querySelector('#btnCreate')

// btnList.addEventListener('click', () => listRecipes())
btnCreate.addEventListener('click', () => createRecipe())
// btnUpdate.addEventListener('click', () => updateRecipe())
// btnDelete.addEventListener('click', () => deleteRecipe())

// var recipesList = []


// async function listRecipes () {
//   try {
//     const list = await fetch('http://localhost:3333/recipes')


//     const listToJson = await list.json()

//     console.log(listToJson)

//     const { recipes } = listToJson

//     recipesList.push(recipes[1])

//     recipesList.map(recipe => {
//       const div = document.querySelector('div')
    
//       const divE = document.createElement('div')
    
//       divE.innerHTML = `
//         <h1>${ recipe.name }</h1>
//         <h3>${ recipe.author }</h3>
//       `
    
//       div.appendChild(divE)
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }


async function createRecipe() { 
  const recipeName = prompt('Digite o nome da receita: ');

  try {
    const create = await fetch('http://localhost:3333/recipes', 
      { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': '94009750c51547bb969c79991a0450bd'
        },
        body: JSON.stringify({ 
          id: "802fb8e6-55c7-4a63-92e4-5fe70d020828",
          name: recipeName,
          author: 'José'
        }) 
      })

    const convert = await create.json()

    window.location.reload() 
  } catch (err) {
    console.log(err)
  }
}


// async function updateRecipe() { 
//   try {
//     const create = await fetch('http://localhost:3333/recipes/802fb8e6-55c7-4a63-92e4-5fe70d020828', 
//       { 
//         method: 'PUT', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           name: 'Pãozinho de queijo',
//         }) 
//       })

//     const convert = await create.json()

//     console.log(convert) 
//   } catch (err) {
//     console.log(err)
//   }
// }


// async function deleteRecipe() { 
//   try {
//     const create = await fetch('http://localhost:3333/recipes/802fb8e6-55c7-4a63-92e4-5fe70d020828', 
//       { 
//         method: 'DELETE'
//       })

//     const convert = await create.json()

//     console.log(convert) 
//   } catch (err) {
//     console.log(err)
//   }
// }

const btnExibir = document.querySelector('#exibir')

btnExibir.addEventListener('click', () => {
  window.location.href = '/web/receita.html?id=802fb8e6-55c7-4a63-92e4-5fe70d020828'
})

const toById = (id) => `/web/receita.html?id=${ id }`



document.body.onload = async () => {
  const findAllRecipes = await fetch('http://localhost:3333/recipes')

  const list = await findAllRecipes.json()

  const root = document.querySelector('#root')

  const tbody = document.querySelector('tbody')

  list.map(recipe => {
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')
    const tdAuthor = document.createElement('td')
    const tdRecipeId = document.createElement('td')

    tdName.innerText = recipe.name
    tdAuthor.innerText = recipe.author
    tdRecipeId.innerHTML = `<a href="${ toById(recipe.id) }">Visualizar receita</a>`

    tr.appendChild(tdName)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdRecipeId)


    tbody.appendChild(tr)
  })

  console.dir(ul)

  root.appendChild(ul)
}