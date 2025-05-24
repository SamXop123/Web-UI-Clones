document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const playlistCards = document.querySelectorAll('.playlist-card');
    let originalContent = content.innerHTML; 

    // for Loading playlist page
    const loadPlaylistPage = (playlistId) => {
        fetch(`/playlists/${playlistId}.html`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to load playlist');
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
                // event listeners for playlist songs
                content.querySelectorAll('.playlist-song').forEach(song => {
                    song.addEventListener('click', () => {
                        const songIndex = parseInt(song.dataset.songIndex);
                        window.updatePlayer(songIndex);
                        if (!window.isPlaying) {
                            window.togglePlayPause();
                        }
                    });
                });
                // event listener for back button
                const backBtn = content.querySelector('.playlist-back-btn');
                backBtn.addEventListener('click', () => {
                    content.innerHTML = originalContent;
                    addPlaylistEventListeners();
                    // Re-attach album card listeners
                    document.querySelectorAll('.album-card').forEach((card, index) => {
                        const playButton = card.querySelector('.play-button');
                        playButton.addEventListener('click', () => {
                            window.updatePlayer(index);
                            if (!window.isPlaying) {
                                window.togglePlayPause();
                            }
                        });
                    });
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

    // event listeners for playlist cards
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