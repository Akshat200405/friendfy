export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  // ...existing code...

// Simple chat functionality
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (msg) {
    const div = document.createElement('div');
    div.className = 'self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs';
    div.textContent = msg;
    chatMessages.appendChild(div);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
document.getElementById('add-story-btn').addEventListener('click', () => {
  alert('Open story upload dialog here!');
});
}
