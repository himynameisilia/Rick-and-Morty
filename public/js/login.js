const login = document.querySelector('.signin-form');
login?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { action, method } = event.target;
  const response = await fetch(action, {
    method,
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ email: event.target.email.value, password: event.target.password.value })
  })
  const result = await response.text();
  window.location.href = '/'
})
