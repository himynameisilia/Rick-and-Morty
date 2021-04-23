const sendForm = document.forms.sendForm;
sendForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    action,
    method,
    name: { value: name },
  } = event.target;
  const response = await fetch(`https://rickandmortyapi.com/api/character`)
  const result = await response.json()
  const image = JSON.stringify(result.results.filter(el => el.name === name)[0].image)
  const caracterName = JSON.stringify(result.results.filter(el => el.name === name)[0].name)
  const species = JSON.stringify(result.results.filter(el => el.name === name)[0].species)
  const gender = JSON.stringify(result.results.filter(el => el.name === name)[0].gender)
  const status = JSON.stringify(result.results.filter(el => el.name === name)[0].status)
  document.querySelector('#caracter').innerHTML += `
  <img id="img" style="width: 500px" src=${image}> <br> 
  <span class="rick" id="span-name">${caracterName}</span> <br> 
  <span class="rick" id="span-species">${species}</span> <br> 
  <span class="rick" id="span-gender">${gender}</span> <br> 
  <span class="rick" id="span-status">${status}</span> <br>
  <button id="add">Add</button>
  `

  const add = document.querySelector('#add');
  add?.addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img: document.querySelector('#img').src,
        caracterName: document.querySelector('#span-name').innerHTML,
        species: document.querySelector('#span-species').innerHTML,
        gender: document.querySelector('#span-gender').innerHTML,
        status: document.querySelector('#span-status').innerHTML
      }),
    })
    const result = await response.json();
  })
})
