const del = document.querySelectorAll('.delete');
del.forEach(el => {
  el?.addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/profile', {
      method: 'DELETE',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ id: el.dataset.id })
    })
    const result = await response.text();
    el.parentElement.remove();
  })
})
