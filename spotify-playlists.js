document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const playlistCards = document.querySelectorAll('.playlist-card');
    let originalContent = content.innerHTML; 

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
                
            })
            .catch(error => {
                console.error('Error loading playlist:', error);
                content.innerHTML = '<p>Error loading playlist</p>';
            });
    };

    const addPlaylistEventListeners = () => {
        playlistCards.forEach(card => {
            card.addEventListener('click', () => {
                const playlistId = card.dataset.playlistId;
                loadPlaylistPage(playlistId);
            });
        });
    };

    addPlaylistEventListeners();
});