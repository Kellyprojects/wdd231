async function loadSpotlights() {
    const spotlightContainer = document.getElementById('spotlight-cards');
    
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Failed to fetch member data');
        
        const members = await response.json();
        const goldSilverMembers = members.filter(member => 
            member.level === 'Gold' || member.level === 'Silver'
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
                    <img src="${member.logo}" alt="${member.name} Logo" class="member-logo">
                    <span class="membership-badge ${member.level.toLowerCase()}">${member.level} Member</span>
                </div>
                <div class="spotlight-content">
                    <h4>${member.name}</h4>
                    <div class="contact-info">
                        <p><i class="fas fa-phone"></i> ${member.phone}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${member.address}</p>
                        <a href="${member.website}" target="_blank" class="website-link">
                            <i class="fas fa-globe"></i> Visit Website
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
