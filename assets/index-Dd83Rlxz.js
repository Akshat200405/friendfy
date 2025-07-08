(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function h(e){let t=0;const o=r=>{t=r,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>o(t+1)),o(0);const l=document.getElementById("chat-form"),n=document.getElementById("chat-input"),s=document.getElementById("chat-messages");l.addEventListener("submit",r=>{r.preventDefault();const d=n.value.trim();if(d){const i=document.createElement("div");i.className="self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs",i.textContent=d,s.appendChild(i),n.value="",s.scrollTop=s.scrollHeight}}),document.getElementById("add-story-btn").addEventListener("click",()=>{alert("Open story upload dialog here!")})}localStorage.getItem("loggedIn")!=="true"&&(window.location.href="/friendfy/login.html");document.querySelector("#app").innerHTML=`
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
   
`;function u(){return JSON.parse(localStorage.getItem("frindifyDB"))}function g(e){localStorage.setItem("frindifyDB",JSON.stringify(e))}let a=localStorage.getItem("mainProfileFollowing")==="true";function m(){const e=document.getElementById("follow-btn");e&&(e.textContent=a?"Unfollow":"Follow",e.classList.toggle("bg-blue-600",!a),e.classList.toggle("bg-red-500",a),e.classList.toggle("hover:bg-blue-700",!a),e.classList.toggle("hover:bg-red-600",a))}document.addEventListener("DOMContentLoaded",()=>{m();const e=document.getElementById("follow-btn");e&&(e.onclick=()=>{a=!a,localStorage.setItem("mainProfileFollowing",a),m()})});setTimeout(()=>{m();const e=document.getElementById("follow-btn");e&&(e.onclick=()=>{a=!a,localStorage.setItem("mainProfileFollowing",a),m()})},0);function y(){if(!window.L){console.error("Leaflet library not loaded!");return}if(!document.getElementById("friends-map"))return;window.friendsMap&&window.friendsMap.remove();const t=L.map("friends-map").setView([22.9734,78.6569],4.5);window.friendsMap=t,L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(t),[{name:"Jane Smith",lat:28.6139,lng:77.209},{name:"Mike Johnson",lat:19.076,lng:72.8777},{name:"Emily Clark",lat:12.9716,lng:77.5946}].forEach(l=>{L.marker([l.lat,l.lng]).addTo(t).bindPopup(`<b>${l.name}</b>`)})}document.getElementById("menu-btn").addEventListener("click",()=>{document.getElementById("mobile-menu").classList.toggle("hidden")});let c={john:{name:"John",img:"https://randomuser.me/api/portraits/men/32.jpg",content:"John's story: Enjoying a sunny day at the park! 🌞",video:"https://www.w3schools.com/html/mov_bbb.mp4"},jane:{name:"Jane",img:"https://randomuser.me/api/portraits/women/44.jpg",content:"Jane's story: Just finished a great book! 📚",video:"https://www.w3schools.com/html/movie.mp4"},mike:{name:"Mike",img:"https://randomuser.me/api/portraits/men/54.jpg",content:"Mike's story: Had an awesome workout session! 💪",video:""}};function v(){let e=`
    <div class="flex flex-col items-center">
      <button id="add-story-btn" class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 text-white text-3xl font-bold border-4 border-white shadow hover:scale-105 transition">
        +
      </button>
      <span class="text-xs mt-2 text-gray-600">Add Story</span>
    </div>
  `;Object.entries(c).forEach(([t,o])=>{e+=`
      <div class="flex flex-col items-center">
        <img id="story-${t}" class="w-16 h-16 rounded-full object-cover border-4 border-blue-400 cursor-pointer hover:scale-105 transition" src="${o.img}" alt="Story of ${o.name}">
        <span class="text-xs mt-2 text-gray-700">${o.name}</span>
      </div>
    `}),document.querySelector(".max-w-md.mx-auto.flex.space-x-4.mb-8.overflow-x-auto.pb-2").innerHTML=e,Object.keys(c).forEach(t=>{document.getElementById(`story-${t}`).onclick=()=>w(c[t])}),document.getElementById("add-story-btn").onclick=E}function w(e){document.querySelector("#app").innerHTML=`
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
        <img class="mx-auto w-24 h-24 rounded-full object-cover border-4 border-blue-400 mb-4" src="${e.img}" alt="${e.name}">
        <h2 class="text-2xl font-bold mb-2 text-blue-600">${e.name}'s Story</h2>
        <p class="text-gray-700 mb-4">${e.content}</p>
        ${e.video?`
          <video controls class="mx-auto rounded-lg shadow mb-4" style="max-width:100%;height:auto;">
            <source src="${e.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `:""}
      </div>
    </div>
  `,document.getElementById("back-btn").onclick=()=>window.location.reload()}function E(){document.querySelector("#app").innerHTML=`
  
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
  `,document.getElementById("back-btn").onclick=()=>window.location.reload(),document.getElementById("story-form").onsubmit=e=>{e.preventDefault();const t=document.getElementById("story-name").value.trim(),o=document.getElementById("story-img").value.trim(),l=document.getElementById("story-content").value.trim(),n=document.getElementById("story-video").value.trim(),s=t.toLowerCase().replace(/\s+/g,"");c[s]={name:t,img:o,content:l,video:n},document.getElementById("story-success").classList.remove("hidden"),setTimeout(()=>window.location.reload(),1200)}}function I(){if(!localStorage.getItem("frindifyDB")){const e={users:[{id:1,name:"John Doe",username:"@johndoe",bio:"Web Developer | Blogger",img:"https://randomuser.me/api/portraits/men/32.jpg"}],stories:[],chats:[],friends:[]};localStorage.setItem("frindifyDB",JSON.stringify(e))}}document.addEventListener("DOMContentLoaded",()=>{m();const e=document.getElementById("follow-btn");e&&(e.onclick=()=>{a=!a,localStorage.setItem("mainProfileFollowing",a),m()});const t=u();t.users.some(l=>l.username==="@akshatk")||(t.users.push({name:"Akshat Kumar",username:"@akshatk",bio:"Frontend Dev | Builder",img:"https://randomuser.me/api/portraits/men/75.jpg"}),g(t)),console.log(u().users)});function f(){const e=u(),t=document.getElementById("friends-list");t&&(t.innerHTML="",e.users.forEach((o,l)=>{const n=document.createElement("li");n.className="flex items-center py-3",n.innerHTML=`
      <img class="h-12 w-12 rounded-full object-cover mr-4" src="${o.img}" alt="${o.name}">
      <div class="text-left">
        <p class="font-semibold text-gray-800">${o.name}</p>
        <p class="text-gray-500 text-sm">${o.username}</p>
      </div>
      <button class="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 view-user-btn" data-username="${o.username}">View</button>
    `,t.appendChild(n)}),document.querySelectorAll(".view-user-btn").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.username,n=e.users.find(s=>s.username===l);n?b(n):alert("User not found")})}))}function B(){const e=document.getElementById("add-user-btn"),t=document.getElementById("add-user-form");!e||!t||(e.addEventListener("click",()=>{t.classList.toggle("hidden")}),t.addEventListener("submit",o=>{o.preventDefault();const l=document.getElementById("new-name").value.trim(),n=document.getElementById("new-username").value.trim(),s=document.getElementById("new-bio").value.trim(),r=document.getElementById("new-img").value.trim()||"https://randomuser.me/api/portraits/lego/1.jpg";if(!l||!n)return;const d=u();d.users.push({name:l,username:n,bio:s,img:r}),g(d),t.reset(),t.classList.add("hidden"),f()}))}function b(e){document.querySelector("#app").innerHTML=`
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500">
      <div class="bg-white/90 p-8 rounded-xl shadow-md max-w-sm w-full text-center">
        <button id="back-main" class="mb-4 text-blue-600 hover:underline text-left">&larr; Back</button>
        <img class="mx-auto w-24 h-24 rounded-full object-cover border-4 border-blue-400 mb-4" src="${e.img}" alt="${e.name}">
        <h2 class="text-2xl font-bold mb-2 text-blue-600">${e.name}</h2>
        <p class="text-gray-700 mb-4">${e.content}</p>
        ${e.video?`
          <video controls class="mx-auto rounded-lg shadow mb-4" style="max-width:100%;height:auto;">
            <source src="${e.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `:""}
      </div>
    </div>
  `,document.getElementById("back-main").onclick=()=>window.location.reload()}function S(){const e=document.getElementById("chat-form"),t=document.getElementById("chat-input"),o=document.getElementById("chat-messages");if(!e||!t||!o)return;let l=JSON.parse(localStorage.getItem("chatMessages")||"[]");o.innerHTML="",l.forEach(s=>{const r=document.createElement("div");r.className=s.self?"self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs":"self-start bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs",r.textContent=s.text,o.appendChild(r)});function n(s){const r=s.toLowerCase();return r.includes("hello")||r.includes("hi")?"Hi there! 👋 How can I help you today?":r.includes("how are you")?"I'm just code, but I'm doing great! 😊":r.includes("your name")?"I'm your friendly chat bot!":r.includes("bye")?"Goodbye! Have a great day!":r.includes("help")?"You can ask me anything or just say hello!":"I'm a simple chat bot. Try saying 'hello', 'how are you', or 'help'!"}e.onsubmit=s=>{s.preventDefault();const r=t.value.trim();if(!r)return;const d=document.createElement("div");d.className="self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs",d.textContent=r,o.appendChild(d),l.push({text:r,self:!0}),localStorage.setItem("chatMessages",JSON.stringify(l)),t.value="",o.scrollTop=o.scrollHeight,setTimeout(()=>{const i=n(r),p=document.createElement("div");p.className="self-start bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs",p.textContent=i,o.appendChild(p),l.push({text:i,self:!1}),localStorage.setItem("chatMessages",JSON.stringify(l)),o.scrollTop=o.scrollHeight},800)}}const k={};JSON.parse(localStorage.getItem("profileData"));function x(){const e={name:"John Doe",username:"@johndoe",bio:"Techie | Blogger | Dreamer",img:"https://randomuser.me/api/portraits/men/32.jpg"};let t=JSON.parse(localStorage.getItem("profileData"))||e;const o=document.getElementById("profile-name"),l=document.getElementById("profile-username"),n=document.getElementById("profile-bio"),s=document.getElementById("profile-img");if(!o||!l||!n||!s){console.warn("Profile elements not found!");return}o.textContent=t.name,l.textContent=t.username,n.textContent=t.bio,s.src=t.img;const r=document.getElementById("edit-profile"),d=document.getElementById("edit-form"),i=document.getElementById("save-profile");r&&d&&i&&(document.getElementById("edit-name").value=t.name,document.getElementById("edit-username").value=t.username,document.getElementById("edit-bio").value=t.bio,document.getElementById("edit-img").value=t.img,r.onclick=()=>d.classList.toggle("hidden"),i.onclick=()=>{t={name:document.getElementById("edit-name").value,username:document.getElementById("edit-username").value,bio:document.getElementById("edit-bio").value,img:document.getElementById("edit-img").value},localStorage.setItem("profileData",JSON.stringify(t)),x(),d.classList.add("hidden")})}x();I();y();S();v();B();f();setTimeout(()=>{const e=document.querySelectorAll(".max-w-md.mx-auto.bg-white\\/70.rounded-xl.shadow-md.p-6 ul button");e[0]&&(e[0].onclick=()=>b(c.jane)),e[1]&&(e[1].onclick=()=>b(c.mike))},0);h(document.querySelector("#counter"));
