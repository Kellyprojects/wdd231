document.getElementById("current-year").textContent = new Date().getFullYear();
 document.getElementById('last-modified').textContent = document.lastModified;

const memberList = document.getElementById("member-list");
const gridViewBtn = document.getElementById("grid-view-btn");
const listViewBtn = document.getElementById("list-view-btn");

const members = [
    { name: "Business One", info: "Sustainability-focused environmental solutions" },
    { name: "Company Two", info: "Handcrafted goods and unique designs" }
];

function displayMembers(view) {
    memberList.innerHTML = "";
    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");
        memberCard.innerHTML = `<h3>${member.name}</h3><p>${member.info}</p>`;
        memberList.appendChild(memberCard);
    });
    memberList.className = view;
}

gridViewBtn.addEventListener("click", () => displayMembers("grid"));
listViewBtn.addEventListener("click", () => displayMembers("list"));

displayMembers("grid");
