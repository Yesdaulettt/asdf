let teamsData = []; // Store the loaded team data

// Load team data from JSON file
function loadTeamData() {
  try {
    // In a real implementation, you would fetch this from a JSON file
    // For this example, we'll use the provided JSON directly
    const data = [
      {
        "name": "FC NA'VI",
        "played": 10,
        "goals": "19/8",
        "goalDifference": "+11",
        "points": 22,
        "form": ["W", "W", "L", "D", "L", "D", "W", "W", "W", "W"],
        "topScorer": "Alidar (7 goals)",
        "logo": "JAMECO STORE (3)/NaVi.png",
        "players": [
          "Doszhan Zhuntai (Captain)",
          "Bekzat Omirzak",
          "Ayanadi Alshynbai",
          "Muratbek Daryn",
          "Yernur Qambar",
          "Alidar Saqtassyn"
        ],
        "group": "Group A",
        "stadium": "JIHC Main Field",
        "wins": 3,
        "founded": "2020",
        "bio": "FC NA'VI is one of the strongest teams in the tournament with a solid defense and creative midfield."
      },
      {
        "name": "FC JIHC UNITED",
        "played": 10,
        "goals": "16/4",
        "goalDifference": "+12",
        "points": 19,
        "form": ["W", "W", "D", "W", "L", "D", "W", "W", "D", "D"],
        "topScorer": "Bekzat(8 goals)",
        "logo": "JAMECO STORE (3)/jihc united.png",
        "players": [
          "Aibol Janabek",
          "Aidos aga",
          "Alikhan 1d2",
          "Bekassyl 1d1",
          "Bekzat 2d2",
          "Yelzhan 1f4",
          "Nurtugan 2f2"
        ],
        "group": "Group A",
        "stadium": "JIHC Stadium",
        "wins": 2,
        "founded": "2019",
        "bio": "The official team of JIHC with a mix of experienced and young players."
      },
      {
        "name": "FC BARYS",
        "played": 10,
        "goals": "11/7",
        "goalDifference": "+4",
        "points": 18,
        "form": ["L", "W", "L", "D", "W", "W", "W", "W", "D", "L"],
        "topScorer": "Arsen aga (5 goals)",
        "logo": "JAMECO STORE (3)/Image.png",
        "players": [
          "Almaz Anarbek (Captain)",
          "Arsen Marat",
          "Alibi Kanatuly",
          "Ali Kultay",
          "Gibrat 1f2",
          "Abylai 1d2",
          "Zhursin 1f4",
          "Zangar 1f1"
        ],
        "group": "Group A",
        "stadium": "Barys Arena",
        "wins": 2,
        "founded": "2021",
        "bio": "FC BARYS has shown consistent performance throughout the tournament."
      },
      {
        "name": "FC NOMAD",
        "played": 10,
        "goals": "8/9",
        "goalDifference": "-1",
        "points": 16,
        "form": ["W", "L", "D", "L", "W", "L", "W", "W", "D", "L"],
        "topScorer": "Sagynai (2 goals)",
        "logo": "JAMECO STORE (3)/Nomad.png",
        "players": [
          "Nurzhan Abeyov (Captain)",
          "Agasultan aga",
          "Alibek 1f1",
          "Arnur 1d2",
          "Azamat 2f3",
          "Sagynai 2d1",
          "Zhasulan 2f2"
        ],
        "group": "Group A",
        "stadium": "Nomad Field",
        "wins": 1,
        "founded": "2020",
        "bio": "FC NOMAD has a balanced team with strong midfield presence."
      },
      {
        "name": "AVALANCHE FC",
        "played": 10,
        "goals": "12/8",
        "goalDifference": "+4",
        "points": 15,
        "form": ["L", "D", "W", "W", "D", "L", "D", "L", "W", "L"],
        "topScorer": "Almas aga (6 goals)",
        "logo": "JAMECO STORE (3)/Image.png",
        "players": [
          "Almas aga(Captain)",
          "Aqay",
          "Adilet 1f2",
          "Yerzat 2f2",
          "Yeskendir 1f1",
          "Nurislam 2f3",
          "Ramazan 2d2"
        ],
        "group": "Group B",
        "stadium": "Avalanche Park",
        "wins": 1,
        "founded": "2021",
        "bio": "AVALANCHE FC is known for their fast-paced attacking style."
      },
      {
        "name": "FC INFINITY",
        "played": 10,
        "goals": "9/10",
        "goalDifference": "-1",
        "points": 15,
        "form": ["W", "D", "W", "W", "L", "D", "W", "L", "L", "L"],
        "topScorer": "Zhangerkhan Alekulov (4 goals)",
        "logo": "JAMECO STORE (3)/infinity.png",
        "players": [
          "Zhangerkhan Alykulov (Captain)",
          "Nurdos aga",
          "Khaqnazar 1d2",
          "Imangali 2f2",
          "Farkhat aga",
          "Doszhan 1d2"
        ],
        "group": "Group B",
        "stadium": "Infinity Ground",
        "wins": 1,
        "founded": "2020",
        "bio": "FC INFINITY has a young squad with great potential."
      },
      {
        "name": "ACACIA PTL",
        "played": 10,
        "goals": "10/10",
        "goalDifference": "0",
        "points": 13,
        "form": ["W", "L", "D", "L", "L", "L", "L", "W", "W", "W"],
        "topScorer": "M.Nurassyl (4 goals)",
        "logo": "JAMECO STORE (3)/Acacia.png",
        "players": [
          "Maqsat Galiyev (Captain)",
          "Yernur aga",
          "Sanzhar 2f2",
          "B. Nurassyl",
          "M.Nurassyl",
          "Ilias Bakyt",
          "Rustembek 2d1"
        ],
        "group": "Group B",
        "stadium": "Acacia Stadium",
        "wins": 1,
        "founded": "2019",
        "bio": "ACACIA PTL has shown improvement throughout the tournament."
      },
      {
        "name": "FC LOS JAMECOS",
        "played": 10,
        "goals": "8/11",
        "goalDifference": "-3",
        "points": 13,
        "form": ["W", "L", "D", "D", "W", "D", "L", "L", "L", "L"],
        "topScorer": "Nurbakhyt (5 goals)",
        "logo": "JAMECO STORE (3)/los jamecos.png",
        "players": [
          "Gazizbek Janay (Captain)",
          "Danial aga",
          "Nuredil Yesdaulet",
          "Nursultan 1f1",
          "Nurbakhyt 1f1",
          "Timur 1d2",
          "Beknur 1f4",
          "Assylkenei 1f4"
        ],
        "group": "Group B",
        "stadium": "Jamecos Field",
        "wins": 1,
        "founded": "2021",
        "bio": "FC LOS JAMECOS has a passionate fan base and creative players."
      },
      {
        "name": "INVINCIBLE FC",
        "played": 10,
        "goals": "6/17",
        "goalDifference": "-11",
        "points": 8,
        "form": ["L", "W", "L", "W", "L", "D", "L", "D", "D", "L"],
        "topScorer": "Qanat Aldabek (3 goals)",
        "logo": "JAMECO STORE (3)/Invincible.png",
        "players": [
          "Alisher Zhunissov (Captain)",
          "Akimzhan Baltabay",
          "Alikhan Nurgali",
          "Dosymzhan Ayat",
          "Duysembai Ali",
          "Baqbergen Baqdaulet",
          "Shopan Aksultan"
        ],
        "group": "Group B",
        "stadium": "Invincible Park",
        "wins": 0,
        "founded": "2021",
        "bio": "INVINCIBLE FC is working hard to improve their standings."
      },
      {
        "name": "FC KAZFORCE",
        "played": 10,
        "goals": "4/10",
        "goalDifference": "-6",
        "points": 6,
        "form": ["L", "D", "W", "L", "D", "L", "L", "L", "L", "L"],
        "topScorer": "Makhdi 1f3 (2 goals)",
        "logo": "JAMECO STORE (3)/Kazforce.png",
        "players": [
          "Aidos agay (Captain)",
          "Nursultan aga",
          "Temirlan 1d1",
          "Makhdi 1f3",
          "Asqarbek 1f3",
          "Ali 1d1"
        ],
        "group": "Group A",
        "stadium": "Kazforce Arena",
        "wins": 0,
        "founded": "2020",
        "bio": "FC KAZFORCE is a developing team with potential."
      },
      {
        "name": "FC MAXI-TEA",
        "played": 10,
        "goals": "8/17",
        "goalDifference": "-9",
        "points": 6,
        "form": ["L", "L", "L", "W", "D", "D", "W", "L", "L", "L"],
        "topScorer": "Bakhdiar aga (5 goals)",
        "logo": "JAMECO STORE (3)/Maxi tea.png",
        "players": [
          "Bakhtiar aga (Captain)",
          "Dias aga",
          "Akezhan 2d1",
          "Kassym-Zhomart 1d2",
          "Khudaybergen 2d2",
          "Yernar 2d2"
        ],
        "group": "Group A",
        "stadium": "Maxi-Tea Stadium",
        "wins": 0,
        "founded": "2021",
        "bio": "FC MAXI-TEA has shown moments of brilliance in the tournament."
      }
    ];
    
    teamsData = data;
    renderTeams(teamsData);
    setupEventListeners();
  } catch (error) {
    console.error("Error loading team data:", error);
    showErrorState();
  }
}

// Show error message if data fails to load
function showErrorState() {
  const teamsGrid = document.getElementById('teams-grid');
  if (teamsGrid) {
    teamsGrid.innerHTML = `
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Failed to load team data. Please try again later.</p>
        <button id="retry-btn" class="btn">Retry</button>
      </div>
    `;
    
    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', loadTeamData);
    }
  }
}

// Setup all event listeners after data is loaded
function setupEventListeners() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }
  
  // Search functionality
  const searchInput = document.getElementById('team-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredTeams = teamsData.filter(team => 
        team.name.toLowerCase().includes(searchTerm) ||
        (team.group && team.group.toLowerCase().includes(searchTerm)) ||
        (team.stadium && team.stadium.toLowerCase().includes(searchTerm))
      );
      renderTeams(filteredTeams);
    });
  }
  
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      let filteredTeams = teamsData;
      
      if (filter !== 'all') {
        filteredTeams = teamsData.filter(team => 
          team.group && team.group.toLowerCase().includes(filter.replace('group-', ''))
        );
      }
      
      renderTeams(filteredTeams);
    });
  });
  
  // Modal functionality
  const modal = document.getElementById('team-modal');
  const closeBtn = document.querySelector('.close-btn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      if (modal) modal.style.display = 'none';
    });
  }
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function renderTeams(teams) {
  const teamsGrid = document.getElementById('teams-grid');
  if (!teamsGrid) return;
  
  // Show loading state initially
  if (teams.length === 0 && teamsData.length === 0) {
    teamsGrid.innerHTML = `
      <div class="loading-state">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading teams...</p>
      </div>
    `;
    return;
  }
  
  // Show no results state
  if (teams.length === 0) {
    teamsGrid.innerHTML = '<p class="no-teams">No teams found matching your criteria.</p>';
    return;
  }
  
  // Render team cards
  teamsGrid.innerHTML = '';
  teams.forEach(team => {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    
    // Safely handle missing properties
    const logo = team.logo || 'default_logo.png';
    const players = team.players || [];
    const stadium = team.stadium || 'Unknown stadium';
    const group = team.group || 'No group';
    const primaryColor = team.primaryColor || '#0077ff';
    
    teamCard.innerHTML = `
      <div class="team-card-header" style="background: ${primaryColor}">
        <img src="${logo}" alt="${team.name} Logo" class="team-logo" onerror="this.src='default_logo.png'">
      </div>
      <div class="team-card-body">
        <h3 class="team-name">${team.name}</h3>
        <div class="team-meta">
          <span class="team-group">${group}</span>
          <span class="team-stadium"><i class="fas fa-map-marker-alt"></i> ${stadium}</span>
        </div>
        <div class="team-players">
          <h4>Key Players:</h4>
          <ul class="player-list">
            ${players.slice(0, 4).map(player => `<li>${player}</li>`).join('')}
            ${players.length > 4 ? '<li>+ more</li>' : ''}
          </ul>
        </div>
      </div>
    `;
    
    teamCard.addEventListener('click', () => openTeamModal(team));
    teamsGrid.appendChild(teamCard);
  });
}

function openTeamModal(team) {
  const modal = document.getElementById('team-modal');
  if (!modal) return;
  
  const modalContent = document.querySelector('.modal-content');
  const modalHeader = document.querySelector('.modal-header');
  
  // Safely handle missing properties
  const logo = team.logo || 'default_logo.png';
  const players = team.players || [];
  const stadium = team.stadium || 'Unknown stadium';
  const group = team.group || 'No group';
  const wins = team.wins || 0;
  const topScorer = team.topScorer || 'Unknown';
  const founded = team.founded || 'Unknown';
  const bio = team.bio || 'No information available.';
  const primaryColor = team.primaryColor || '#0077ff';
  const secondaryColor = team.secondaryColor || '#00a1ff';
  
  // Set modal header background
  if (modalHeader) {
    modalHeader.style.background = `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`;
  }
  
  // Set modal content
  const modalLogo = document.getElementById('modal-team-logo');
  if (modalLogo) {
    modalLogo.src = logo;
    modalLogo.alt = `${team.name} Logo`;
    modalLogo.onerror = function() { this.src = 'default_logo.png'; };
  }
  
  const modalName = document.getElementById('modal-team-name');
  if (modalName) modalName.textContent = team.name;
  
  const modalGroup = document.getElementById('modal-team-group');
  if (modalGroup) modalGroup.textContent = group;
  
  const modalStadium = document.getElementById('modal-team-stadium');
  if (modalStadium) modalStadium.textContent = stadium;
  
  const modalWins = document.getElementById('modal-team-wins');
  if (modalWins) modalWins.textContent = wins;
  
  const modalScorer = document.getElementById('modal-team-scorer');
  if (modalScorer) modalScorer.textContent = topScorer;
  
  const modalFounded = document.getElementById('modal-team-founded');
  if (modalFounded) modalFounded.textContent = founded;
  
  const modalBio = document.getElementById('modal-team-bio');
  if (modalBio) modalBio.textContent = bio;
  
  // Set players list
  const playersList = document.getElementById('modal-team-players');
  if (playersList) {
    playersList.innerHTML = '';
    players.forEach(player => {
      const li = document.createElement('li');
      li.textContent = player;
      playersList.appendChild(li);
    });
  }
  
  // Show modal
  modal.style.display = 'block';
  
  // Add animation class
  if (modalContent) {
    modalContent.classList.add('animate-in');
    setTimeout(() => {
      modalContent.classList.remove('animate-in');
    }, 300);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadTeamData();
});