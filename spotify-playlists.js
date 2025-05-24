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
            .catch(error => {
                console.error('Error loading playlist:', error);
                content.innerHTML = '<p>Error loading playlist</p>';
            });
    };

});