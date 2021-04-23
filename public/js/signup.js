const signup = document.querySelector('.signup-form');
signup?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { action, method } = event.target;
  const response = await fetch(action, {
    method,
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ name: event.target.name.value, email: event.target.email.value, password: event.target.password.value })
  })
  const result = await response.text();
  window.location.href = '/'
})
