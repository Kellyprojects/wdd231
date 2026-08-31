document.addEventListener("DOMContentLoaded", () => {
    // Update footer dates safely
    const currentYearElem = document.getElementById("current-year");
    if (currentYearElem) currentYearElem.textContent = new Date().getFullYear();

    const lastModifiedElem = document.getElementById("last-modified");
    if (lastModifiedElem) lastModifiedElem.textContent = document.lastModified;

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Directory members fetching and rendering
    const memberList = document.getElementById("member-list");
    const gridViewBtn = document.getElementById("grid-view-btn");
    const listViewBtn = document.getElementById("list-view-btn");

    if (memberList) {
        const url = 'data/members.json';

        async function getMembers() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                displayMembers(data);
            } catch (error) {
                console.error("Error loading members data:", error);
            }
        }

        function displayMembers(members) {
            memberList.innerHTML = "";
            if (!Array.isArray(members)) return;

            members.forEach(member => {
                const card = document.createElement("section");
                card.classList.add("member-card");

                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}" loading="lazy" width="100" height="100">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                    <p class="membership-level">${member.membershipLevel}</p>
                `;
                memberList.appendChild(card);
            });
        }

        if (gridViewBtn && listViewBtn) {
            gridViewBtn.addEventListener("click", () => {
                memberList.className = "grid";
            });

            listViewBtn.addEventListener("click", () => {
                memberList.className = "list";
            });
        }

        getMembers();
    }
});


