async function loadSpotlights() {
    const spotlightContainer = document.getElementById('spotlight-cards');
    
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Failed to fetch member data');
        
        const members = await response.json();
        const goldSilverMembers = members.filter(member =>
            /gold|silver/i.test(member.membershipLevel)
        );

        if (goldSilverMembers.length === 0) {
            throw new Error('No gold or silver members found');
        }

        // Shuffle and select 2 or 3 random members
        const numberOfSpotlights = Math.min(3, goldSilverMembers.length);
        const selectedMembers = goldSilverMembers
            .sort(() => 0.5 - Math.random())
            .slice(0, numberOfSpotlights);

        spotlightContainer.innerHTML = selectedMembers.map(member => `
            <div class="spotlight-card">
                <div class="spotlight-header">
                    <img src="${member.image}" alt="${member.name} logo" class="member-logo" loading="lazy" width="150" height="150">
                    <span class="membership-badge ${member.membershipLevel.split(' ')[0].toLowerCase()}">${member.membershipLevel}</span>
                </div>
                <div class="spotlight-content">
                    <h4>${member.name}</h4>
                    <div class="contact-info">
                        <p>${member.phone}</p>
                        <p>${member.address}</p>
                        <a href="${member.website}" target="_blank" rel="noopener noreferrer" class="website-link">
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading spotlights:', error);
        spotlightContainer.innerHTML = `
            <div class="error-message">
                <p><i class="fas fa-exclamation-circle"></i> ${error.message}</p>
            </div>
        `;
    }
}

// Load spotlights when the DOM is ready
document.addEventListener('DOMContentLoaded', loadSpotlights);

