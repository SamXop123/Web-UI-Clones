document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    let originalContent = content.innerHTML; // Store original content

    // Add event listeners for playlist cards
    const addPlaylistEventListeners = () => {
        const playlistCards = document.querySelectorAll('.playlist-card');
        playlistCards.forEach(card => {
            card.addEventListener('click', () => {
                const playlistId = card.dataset.playlistId;
                loadPlaylistPage(playlistId);
            });
        });
    };

    // Re-attach album card play button listeners (from spotify.js logic)
    const addAlbumCardListeners = () => {
        const albumCards = document.querySelectorAll('.album-card');
        albumCards.forEach((card, index) => {
            const playButton = card.querySelector('.play-button');
            // Remove existing listeners by cloning
            const newPlayButton = playButton.cloneNode(true);
            playButton.parentNode.replaceChild(newPlayButton, playButton);
            newPlayButton.addEventListener('click', () => {
                window.updatePlayer(index);
                if (!window.isPlaying) {
                    window.togglePlayPause();
                }
            });
        });
    };

    // Load playlist page
    const loadPlaylistPage = (playlistId) => {
        fetch(`/playlists/${playlistId}.html`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to load playlist');
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
                // Add event listeners for playlist songs
                content.querySelectorAll('.playlist-song').forEach(song => {
                    song.addEventListener('click', () => {
                        const songIndex = parseInt(song.dataset.songIndex);
                        window.updatePlayer(songIndex);
                        if (!window.isPlaying) {
                            window.togglePlayPause();
                        }
                    });
                });
                // Add event listener for back button
                const backBtn = content.querySelector('.playlist-back-btn');
                backBtn.addEventListener('click', () => {
                    content.innerHTML = originalContent;
                    addPlaylistEventListeners();
                    addAlbumCardListeners(); // Re-attach album card listeners
                });
                // Green color effect for back button
                backBtn.addEventListener('mousedown', () => backBtn.classList.add('green'));
                backBtn.addEventListener('mouseup', () => backBtn.classList.remove('green'));
                backBtn.addEventListener('mouseleave', () => backBtn.classList.remove('green'));
            })
            .catch(error => {
                console.error('Error loading playlist:', error);
                content.innerHTML = '<p>Error loading playlist</p>';
            });
    };

    // Initialize listeners
    addPlaylistEventListeners();
});