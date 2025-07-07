import './style.css'
import { setupCounter } from './counter.js'

if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = '/login.html';
}


document.querySelector('#app').innerHTML = `
  <nav class="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl mx-2 mt-2 mb-4 border border-blue-200/40">
  
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center">
          <span class="font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-pulse">
          FRINDIFY
        </span>
        </div>
        <div class="hidden md:flex space-x-6">
         <a href="index.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
  <i class="fa-solid fa-house mr-1"></i>Home
</a>
          </a>
        <a href="explore.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
  <i class="fa-solid fa-compass mr-1"></i>Explore
</a>
<a href="profile.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
  <i class="fa-solid fa-user mr-1"></i>Profile
</a>
        </div>
        <div class="md:hidden">
          <button id="menu-btn" class="text-gray-700 focus:outline-none">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
       <!-- Stories Section -->
<div class="max-w-md mx-auto flex space-x-4 mb-8 overflow-x-auto pb-2">
  <!-- Add Story Button -->
  <div class="flex flex-col items-center">
    <button id="add-story-btn" class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 text-white text-3xl font-bold border-4 border-white shadow hover:scale-105 transition">
      +
    </button>
    <span class="text-xs mt-2 text-gray-600">Add Story</span>
  </div>
  <!-- Example Stories -->
  <div class="flex flex-col items-center">
    <img class="w-16 h-16 rounded-full object-cover border-4 border-blue-400" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Story 1">
    <span class="text-xs mt-2 text-gray-700">John</span>
  </div>
  <div class="flex flex-col items-center">
    <img class="w-16 h-16 rounded-full object-cover border-4 border-pink-400" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Story 2">
    <span class="text-xs mt-2 text-gray-700">Jane</span>
  </div>
  <div class="flex flex-col items-center">
    <img class="w-16 h-16 rounded-full object-cover border-4 border-green-400" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Story 3">
    <span class="text-xs mt-2 text-gray-700">Mike</span>
  </div>
</div>
      <div id="mobile-menu" class="md:hidden hidden">
      <a href="index.html" class="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
  <i class="fa-solid fa-house mr-1"></i>Home
</a>
        <a href="explore.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
  <i class="fa-solid fa-compass mr-1"></i>Explore
</a>
        <a href="profile.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
  <i class="fa-solid fa-user mr-1"></i>Profile
</a>
      </div>
    </div>
  </nav>
  <!-- Main Content -->
  <div class="text-center p-6 min-h-screen font-sans bg-white/20">
    <!-- Profile Card -->
<!-- Profile Card -->

<div class="max-w-md mx-auto bg-white/70 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
      <div class="flex flex-col items-center p-8">
        <img class="h-24 w-24 rounded-full object-cover mb-4 border-4 border-blue-500" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile Photo">
        <h2 class="text-2xl font-bold text-gray-800 mb-1">John Doe</h2>
        <p class="text-blue-600 mb-2">@johndoe</p>
        <p class="text-gray-600 mb-4">Web Developer | Tech Enthusiast | Blogger</p>
        <div class="flex space-x-6 mb-4">
          <div>
            <span class="font-bold text-gray-800">1.2k</span>
            <span class="text-gray-500 text-sm">Followers</span>
          </div>
          <div>
            <span class="font-bold text-gray-800">500</span>
            <span class="text-gray-500 text-sm">Following</span>
          </div>
          <div>
            <span class="font-bold text-gray-800">150</span>
            <span class="text-gray-500 text-sm">Posts</span>
          </div>
        </div>
    <button id="follow-btn" class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Follow</button>
      </div>
    </div>
    <!-- Friends List -->
    <div class="max-w-md mx-auto bg-white/70 rounded-xl shadow-md p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Friends</h3>
      <ul id="friends-list" class="divide-y divide-gray-200"></ul>
      <button id="add-user-btn" class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">+ Add Friend</button>

<!-- Hidden Form -->
<form id="add-user-form" class="mt-4 space-y-3 hidden">
  <input type="text" id="new-name" class="w-full border rounded px-3 py-2" placeholder="Name" required />
  <input type="text" id="new-username" class="w-full border rounded px-3 py-2" placeholder="Username (e.g. @john)" required />
  <input type="text" id="new-bio" class="w-full border rounded px-3 py-2" placeholder="Bio" />
  <input type="text" id="new-img" class="w-full border rounded px-3 py-2" placeholder="Image URL" />
  <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Save Friend</button>
</form>
        <li class="flex items-center py-3">
          <img class="h-12 w-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Friend 1">
          <div class="text-left">
            <p class="font-semibold text-gray-800">Jane Smith</p>
            <p class="text-gray-500 text-sm">@janesmith</p>
          </div>
          <button class="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200">View</button>
        </li>
        <li class="flex items-center py-3">
          <img class="h-12 w-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Friend 2">
          <div class="text-left">
            <p class="font-semibold text-gray-800">Mike Johnson</p>
            <p class="text-gray-500 text-sm">@mikejohnson</p>
          </div>
          <button class="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200">View</button>
        </li>
        <li class="flex items-center py-3">
          <img class="h-12 w-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Friend 3">
          <div class="text-left">
            <p class="font-semibold text-gray-800">Emily Clark</p>
            <p class="text-gray-500 text-sm">@emilyclark</p>
          </div>
          <button class="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200">View</button>
        </li>
      </ul>
    </div>
  </div>
   <!-- Chat Section -->
    <div class="max-w-md mx-auto bg-white/70 rounded-xl shadow-md p-6 mt-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Chat</h3>
      <div class="h-48 overflow-y-auto mb-4 bg-gray-50 rounded p-3 flex flex-col gap-2" id="chat-messages">
        <div class="self-start bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs">Hi John! 👋</div>
        <div class="self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">Hello! How are you?</div>
      </div>
      <form id="chat-form" class="flex gap-2">
        <input id="chat-input" type="text" class="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type a message..." autocomplete="off" />
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Send</button>
      </form>
    </div>
    <div class="max-w-md mx-auto bg-white/70 rounded-xl shadow-md p-6 mt-8 mb-8">
  <h3 class="text-xl font-bold text-gray-800 mb-4">Friends Live Location</h3>
  <div id="friends-map" style="height: 300px; border-radius: 12px; overflow: hidden;"></div>
</div>
   
`
function getDB() {
  return JSON.parse(localStorage.getItem('frindifyDB'));
}

function updateDB(newDB) {
  localStorage.setItem('frindifyDB', JSON.stringify(newDB));
}
// After setting innerHTML and before setupFriendsMap();
let isFollowing = localStorage.getItem('mainProfileFollowing') === 'true';

function updateFollowBtn() {
  const btn = document.getElementById('follow-btn');
  if (!btn) return;
  btn.textContent = isFollowing ? 'Unfollow' : 'Follow';
  btn.classList.toggle('bg-blue-600', !isFollowing);
  btn.classList.toggle('bg-red-500', isFollowing);
  btn.classList.toggle('hover:bg-blue-700', !isFollowing);
  btn.classList.toggle('hover:bg-red-600', isFollowing);
}

document.addEventListener('DOMContentLoaded', () => {
  updateFollowBtn();
  const btn = document.getElementById('follow-btn');
  if (btn) {
    btn.onclick = () => {
      isFollowing = !isFollowing;
      localStorage.setItem('mainProfileFollowing', isFollowing);
      updateFollowBtn();
    };
  }
});

// Or, if you want it to work right after rendering:
setTimeout(() => {
  updateFollowBtn();
  const btn = document.getElementById('follow-btn');
  if (btn) {
    btn.onclick = () => {
      isFollowing = !isFollowing;
      localStorage.setItem('mainProfileFollowing', isFollowing);
      updateFollowBtn();
    };
  }
}, 0);
function setupFriendsMap() {
  if (!window.L) {
    console.error("Leaflet library not loaded!");
    return;
  }
  const mapDiv = document.getElementById('friends-map');
  if (!mapDiv) return;

  // Remove previous map if exists
  if (window.friendsMap) {
    window.friendsMap.remove();
  }

  const map = L.map('friends-map').setView([22.9734, 78.6569], 4.5);
  window.friendsMap = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const friendLocations = [
    { name: "Jane Smith", lat: 28.6139, lng: 77.2090 },
    { name: "Mike Johnson", lat: 19.0760, lng: 72.8777 },
    { name: "Emily Clark", lat: 12.9716, lng: 77.5946 },
  ];

  friendLocations.forEach(friend => {
    L.marker([friend.lat, friend.lng])
      .addTo(map)
      .bindPopup(`<b>${friend.name}</b>`);
  });
}
document.getElementById('menu-btn').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});
let stories = {
  john: {
    name: "John",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "John's story: Enjoying a sunny day at the park! 🌞",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  jane: {
    name: "Jane",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Jane's story: Just finished a great book! 📚",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  mike: {
    name: "Mike",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    content: "Mike's story: Had an awesome workout session! 💪",
    video: ""
  }
};

// Helper to render the stories section
function renderStoriesSection() {
  let storyHtml = `
    <div class="flex flex-col items-center">
      <button id="add-story-btn" class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 text-white text-3xl font-bold border-4 border-white shadow hover:scale-105 transition">
        +
      </button>
      <span class="text-xs mt-2 text-gray-600">Add Story</span>
    </div>
  `;
  Object.entries(stories).forEach(([key, story]) => {
    storyHtml += `
      <div class="flex flex-col items-center">
        <img id="story-${key}" class="w-16 h-16 rounded-full object-cover border-4 border-blue-400 cursor-pointer hover:scale-105 transition" src="${story.img}" alt="Story of ${story.name}">
        <span class="text-xs mt-2 text-gray-700">${story.name}</span>
      </div>
    `;
  });
  document.querySelector('.max-w-md.mx-auto.flex.space-x-4.mb-8.overflow-x-auto.pb-2').innerHTML = storyHtml;

  // Add listeners for stories
  Object.keys(stories).forEach(key => {
    document.getElementById(`story-${key}`).onclick = () => renderStoryPage(stories[key]);
  });
  document.getElementById('add-story-btn').onclick = renderAddStoryPage;
}
//story section
function renderStoryPage(story) {
  document.querySelector('#app').innerHTML = `
    <nav class="bg-white shadow mb-6">
      <div class="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div class="flex items-center">
          <span class="font-bold text-2xl text-blue-600">FRINDIFY</span>
        </div>
        <div class="hidden md:flex space-x-6">
          <a href="index.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
            <i class="fa-solid fa-house mr-1"></i>Home
          </a>
          <a href="explore.html" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">
            <i class="fa-solid fa-compass mr-1"></i>Explore
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded">Profile</a>
        </div>
      </div>
    </nav>
        <p class="block md:hidden text-gray-700 text-sm text-center mb-4 px-4">
      Welcome to Friendify!<br>
      Connect, share stories, and chat with friends.<br>
      Tap the <span class="font-bold">☰</span> menu above to explore.
    </p>
    
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
      <div class="bg-white/90 p-8 rounded-xl shadow-md max-w-sm w-full text-center">
        <button id="back-btn" class="mb-4 text-blue-600 hover:underline text-left">&larr; Back</button>
        <img class="mx-auto w-24 h-24 rounded-full object-cover border-4 border-blue-400 mb-4" src="${story.img}" alt="${story.name}">
        <h2 class="text-2xl font-bold mb-2 text-blue-600">${story.name}'s Story</h2>
        <p class="text-gray-700 mb-4">${story.content}</p>
        ${story.video ? `
          <video controls class="mx-auto rounded-lg shadow mb-4" style="max-width:100%;height:auto;">
            <source src="${story.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        ` : ''}
      </div>
    </div>
  `;
  document.getElementById('back-btn').onclick = () => window.location.reload();
}

// Add Story page
function renderAddStoryPage() {
  document.querySelector('#app').innerHTML = `
  
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
      <div class="bg-white/90 p-8 rounded-xl shadow-md max-w-sm w-full text-center">
        <button id="back-btn" class="mb-4 text-blue-600 hover:underline text-left">&larr; Back</button>
        <h2 class="text-2xl font-bold mb-6 text-center text-blue-600">Add a Story</h2>
        <form id="story-form" class="flex flex-col gap-4">
          <input type="text" id="story-name" class="border rounded px-4 py-2" placeholder="Your Name" required />
          <input type="text" id="story-img" class="border rounded px-4 py-2" placeholder="Image URL" required />
          <textarea id="story-content" class="border rounded px-4 py-2" placeholder="Your story..." required></textarea>
          <input type="text" id="story-video" class="border rounded px-4 py-2" placeholder="Video URL (optional)" />
          <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Post Story</button>
        </form>
        <div id="story-success" class="text-green-600 text-center mt-4 hidden">Story posted!</div>
      </div>
    </div>
  `;
  
  
  document.getElementById('back-btn').onclick = () => window.location.reload();
  document.getElementById('story-form').onsubmit = (e) => {
    e.preventDefault();
    // Add new story
    const name = document.getElementById('story-name').value.trim();
    const img = document.getElementById('story-img').value.trim();
    const content = document.getElementById('story-content').value.trim();
    const video = document.getElementById('story-video').value.trim();
    const key = name.toLowerCase().replace(/\s+/g, '');
    stories[key] = { name, img, content, video };
    document.getElementById('story-success').classList.remove('hidden');
    setTimeout(() => window.location.reload(), 1200);
  };

}
function initDatabase() {
  if (!localStorage.getItem('frindifyDB')) {
    const db = {
      users: [
        {
          id: 1,
          name: "John Doe",
          username: "@johndoe",
          bio: "Web Developer | Blogger",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
        }
      ],
      stories: [],
      chats: [],
      friends: []
    };
    localStorage.setItem('frindifyDB', JSON.stringify(db));
  }
}


document.addEventListener('DOMContentLoaded', () => {
  updateFollowBtn();
  const btn = document.getElementById('follow-btn');
  if (btn) {
    btn.onclick = () => {
      isFollowing = !isFollowing;
      localStorage.setItem('mainProfileFollowing', isFollowing);
      updateFollowBtn();
    };
  }

  // ✅ Add user to local DB if not already present
  const db = getDB();
  const exists = db.users.some(user => user.username === "@akshatk");
  if (!exists) {
    db.users.push({
      name: "Akshat Kumar",
      username: "@akshatk",
      bio: "Frontend Dev | Builder",
      img: "https://randomuser.me/api/portraits/men/75.jpg"
    });
    updateDB(db);
  }

  console.log(getDB().users); // Test output
});
function renderUsersFromDB() {
  const db = getDB();
  const container = document.getElementById('friends-list');
  if (!container) return;

  container.innerHTML = '';

  db.users.forEach((user, index) => {
    const li = document.createElement('li');
    li.className = "flex items-center py-3";
    li.innerHTML = `
      <img class="h-12 w-12 rounded-full object-cover mr-4" src="${user.img}" alt="${user.name}">
      <div class="text-left">
        <p class="font-semibold text-gray-800">${user.name}</p>
        <p class="text-gray-500 text-sm">${user.username}</p>
      </div>
      <button class="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 view-user-btn" data-username="${user.username}">View</button>
    `;
    container.appendChild(li);
  });

  // ✅ Attach click events to view buttons
  document.querySelectorAll('.view-user-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const username = btn.dataset.username;
      const user = db.users.find(u => u.username === username);
      if (user) {
        renderProfilePage(user);
      } else {
        alert("User not found");
      }
    });
  });
}


function setupAddUserForm() {
  const showBtn = document.getElementById('add-user-btn');
  const form = document.getElementById('add-user-form');

  if (!showBtn || !form) return;

  showBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('new-name').value.trim();
    const username = document.getElementById('new-username').value.trim();
    const bio = document.getElementById('new-bio').value.trim();
    const img = document.getElementById('new-img').value.trim() || "https://randomuser.me/api/portraits/lego/1.jpg";

    if (!name || !username) return;

    const db = getDB();
    db.users.push({ name, username, bio, img });
    updateDB(db);

    form.reset();
    form.classList.add('hidden');
    renderUsersFromDB();
  });
}


function renderProfilePage(person) {
  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
      <div class="bg-white/90 p-8 rounded-xl shadow-md max-w-sm w-full text-center">
        <button id="back-main" class="mb-4 text-blue-600 hover:underline text-left">&larr; Back</button>
        <img class="mx-auto w-24 h-24 rounded-full object-cover border-4 border-blue-400 mb-4" src="${person.img}" alt="${person.name}">
        <h2 class="text-2xl font-bold mb-2 text-blue-600">${person.name}</h2>
        <p class="text-gray-700 mb-4">${person.content}</p>
        ${person.video ? `
          <video controls class="mx-auto rounded-lg shadow mb-4" style="max-width:100%;height:auto;">
            <source src="${person.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        ` : ''}
      </div>
    </div>
  `;
  document.getElementById('back-main').onclick = () => window.location.reload();
  
}

function setupChat() {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  if (!chatForm || !chatInput || !chatMessages) return;

  // Load messages from localStorage
  let messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
  chatMessages.innerHTML = '';
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.className = msg.self
      ? 'self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs'
      : 'self-start bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs';
    div.textContent = msg.text;
    chatMessages.appendChild(div);
  });

 
  function getBotReply(userMsg) {
    const msg = userMsg.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) return "Hi there! 👋 How can I help you today?";
    if (msg.includes('how are you')) return "I'm just code, but I'm doing great! 😊";
    if (msg.includes('your name')) return "I'm your friendly chat bot!";
    if (msg.includes('bye')) return "Goodbye! Have a great day!";
    if (msg.includes('help')) return "You can ask me anything or just say hello!";
    return "I'm a simple chat bot. Try saying 'hello', 'how are you', or 'help'!";
  }

  chatForm.onsubmit = (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    // Add user message
    const div = document.createElement('div');
    div.className = 'self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs';
    div.textContent = text;
    chatMessages.appendChild(div);
    messages.push({ text, self: true });
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Bot reply
    setTimeout(() => {
      const replyText = getBotReply(text);
      const reply = document.createElement('div');
      reply.className = 'self-start bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs';
      reply.textContent = replyText;
      chatMessages.appendChild(reply);
      messages.push({ text: replyText, self: false });
      localStorage.setItem('chatMessages', JSON.stringify(messages));
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
  };
}
// Default profile data
const defaultProfile = {
  name: "John Doe",
  username: "@johndoe",
  bio: "Web Developer | Tech Enthusiast | Blogger",
  img: "https://randomuser.me/api/portraits/men/32.jpg"
};

// Load from localStorage or use default
let profileData = JSON.parse(localStorage.getItem('profileData')) || defaultProfile;

// Render Profile Info
function renderProfileData() {
  document.getElementById('profile-name').textContent = profileData.name;
  document.getElementById('profile-username').textContent = profileData.username;
  document.getElementById('profile-bio').textContent = profileData.bio;
  document.getElementById('profile-img').src = profileData.img;

  // Fill edit form
  document.getElementById('edit-name').value = profileData.name;
  document.getElementById('edit-username').value = profileData.username;
  document.getElementById('edit-bio').value = profileData.bio;
  document.getElementById('edit-img').value = profileData.img;
}

// Setup Edit Profile logic
function setupEditProfile() {
  const editBtn = document.getElementById('edit-profile');
  const editForm = document.getElementById('edit-form');
  const saveBtn = document.getElementById('save-profile');

  if (!editBtn || !editForm || !saveBtn) return;

  editBtn.addEventListener('click', () => {
    editForm.classList.toggle('hidden');
  });

  saveBtn.addEventListener('click', () => {
    profileData = {
      name: document.getElementById('edit-name').value.trim(),
      username: document.getElementById('edit-username').value.trim(),
      bio: document.getElementById('edit-bio').value.trim(),
      img: document.getElementById('edit-img').value.trim()
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));
    renderProfileData();
    editForm.classList.add('hidden');
  });
}
// Profile Setup Code (Run after content is rendered)
function setupUserProfile() {
  const defaultProfile = {
    name: "John Doe",
    username: "@johndoe",
    bio: "Techie | Blogger | Dreamer",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  };

  let profileData = JSON.parse(localStorage.getItem('profileData')) || defaultProfile;

  // Inject data
  const nameEl = document.getElementById('profile-name');
  const usernameEl = document.getElementById('profile-username');
  const bioEl = document.getElementById('profile-bio');
  const imgEl = document.getElementById('profile-img');

  if (!nameEl || !usernameEl || !bioEl || !imgEl) {
    console.warn("Profile elements not found!");
    return;
  }

  nameEl.textContent = profileData.name;
  usernameEl.textContent = profileData.username;
  bioEl.textContent = profileData.bio;
  imgEl.src = profileData.img;

  // Edit Feature
  const editBtn = document.getElementById('edit-profile');
  const form = document.getElementById('edit-form');
  const saveBtn = document.getElementById('save-profile');

  if (editBtn && form && saveBtn) {
    document.getElementById('edit-name').value = profileData.name;
    document.getElementById('edit-username').value = profileData.username;
    document.getElementById('edit-bio').value = profileData.bio;
    document.getElementById('edit-img').value = profileData.img;

    editBtn.onclick = () => form.classList.toggle('hidden');

    saveBtn.onclick = () => {
      profileData = {
        name: document.getElementById('edit-name').value,
        username: document.getElementById('edit-username').value,
        bio: document.getElementById('edit-bio').value,
        img: document.getElementById('edit-img').value
      };
      localStorage.setItem('profileData', JSON.stringify(profileData));
      setupUserProfile(); // re-render
      form.classList.add('hidden');
    };
  }
}


setupUserProfile()
initDatabase();
setupFriendsMap()
setupChat();
renderStoriesSection();
setupAddUserForm();
 renderUsersFromDB();
setTimeout(() => {
  const friendButtons = document.querySelectorAll('.max-w-md.mx-auto.bg-white\\/70.rounded-xl.shadow-md.p-6 ul button');
  if (friendButtons[0]) friendButtons[0].onclick = () => renderProfilePage(stories.jane);
  if (friendButtons[1]) friendButtons[1].onclick = () => renderProfilePage(stories.mike);
  // Add more if you have more friends
}, 0);
setupCounter(document.querySelector('#counter'))