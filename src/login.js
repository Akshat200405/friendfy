import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
    <div class="bg-white/80 p-8 rounded-xl shadow-md max-w-sm w-full">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
      <form id="login-form" class="flex flex-col gap-4">
        <input type="text" id="login-username" class="border rounded px-4 py-2" placeholder="Username" required />
        <input type="password" id="login-password" class="border rounded px-4 py-2" placeholder="Password" required />
        <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
      </form>
    </div>
  </div>
`;

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('loggedIn', 'true');
  window.location.href = '/'; 
});