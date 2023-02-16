const path = window.location.href

const search = path.search('id')

const id = path.split('').splice(search + 3, path.length).join('')
console.log(id)

async function exibirReceita() {
  const find = await (await fetch('http://localhost:3333/recipes/' + id)).json()

    const root = document.querySelector('#root')

    // const { name, author } = find.recipe
    const { 
      recipe: 
        {
          name,
          author
        } 
    } = find


    root.innerHTML = `
      <h1>${ name }</h1> 
      <span>${ author }</span> 
    `
}

document.body.onload = () => exibirReceita()


