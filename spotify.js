document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        { name: 'Heatwaves', artist: 'Glass Animals', image: '/media/heatwaves.png', duration: 240, audio: '/songs/Heatwaves.mp3' },
        { name: 'Starboy', artist: 'Weeknd', image: '/media/starboy.png', duration: 227, audio: '/songs/Starboy.mp3' },
        { name: 'Stay', artist: 'The Kid LAROI', image: '/media/stay.jpg', duration: 139, audio: '/songs/Stay.mp3' },
        { name: 'Copines', artist: 'Aya Nakamura', image: '/media/copines.jpg', duration: 176, audio: '/songs/Copines.mp3' },
        { name: 'Save Your Tears', artist: 'Weeknd', image: '/media/saveyourtears.jpg', duration: 216, audio: '/songs/Save_Your_Tears.mp3' },
        { name: 'I Ain\'t Worried', artist: 'OneRepublic', image: '/media/iaintworried.jpg', duration: 149, audio: '/songs/I_Aint_Worried.mp3' },
        { name: 'I Wanna Be Yours', artist: 'Arctic Monkeys', image: '/media/iwby.jpg', duration: 184, audio: '/songs/I_Wanna_Be_Yours.mp3' },
        { name: 'Attention', artist: 'Charlie Puth', image: '/media/attention.jpg', duration: 212, audio: '/songs/Attention.mp3' }
    ];

    const songInfoImg = document.querySelector('.song-info img');
    const songName = document.querySelector('#song-name');
    const songArtist = document.querySelector('#song-artist');
    const progressBar = document.querySelector('.progress-filled');
    const progressContainer = document.querySelector('.progress-bar');
    const currentTimeEl = document.querySelector('.current-time');
    const totalTimeEl = document.querySelector('.total-time');
    const playBtn = document.querySelector('#play');
    const pauseBtn = document.querySelector('#pause');
    const nextBtn = document.querySelector('#next');
    const previousBtn = document.querySelector('#previous');
    const repeatBtn = document.querySelector('#repeat');
    const shuffleBtn = document.querySelector('#shuffle');
    const volumeBtn = document.querySelector('#volume');
    const muteBtn = document.querySelector('#mute');
    const fullscreenBtn = document.querySelector('#fullscreen');
    const menuBtn = document.querySelector('#menu');
    const albumCards = document.querySelectorAll('.album-card');
    const volumeContainer = document.querySelector('.volume-container');
    const volumeProgress = document.querySelector('.volume-progress');

    let currentSongIndex = 0;
    let isPlaying = false;
    let isLooping = false;
    let isShuffling = false;
    let isMuted = false;
    let volume = 1.0; // Volume range: 0.0 to 1.0
    let currentTime = 0;
    let audio = new Audio();

    // time format function
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Updates player UI 
    const updatePlayer = (songIndex) => {
        const song = songs[songIndex];
        songInfoImg.src = song.image;
        songName.textContent = song.name;
        songArtist.textContent = song.artist;
        totalTimeEl.textContent = formatTime(song.duration);
        currentTime = 0;
        currentTimeEl.textContent = formatTime(0);
        progressBar.style.width = '0%';
        currentSongIndex = songIndex;

        // Sets audio source
        audio.src = song.audio;
        audio.currentTime = 0;
        audio.loop = isLooping;
        audio.volume = isMuted ? 0 : volume;

        if (isPlaying) {
            audio.play().catch(err => {
                console.error(`Audio playback error: ${err.message}`);
            });
        }
    };

    // Syncs progress bar with audio
    audio.addEventListener('timeupdate', () => {
        currentTime = audio.currentTime;
        currentTimeEl.textContent = formatTime(currentTime);
        progressBar.style.width = `${(currentTime / songs[currentSongIndex].duration) * 100}%`;
    });

    // Handles song ending
    audio.addEventListener('ended', () => {
        if (isLooping) {
            audio.currentTime = 0;
            audio.play();
        } else {
            playNext();
        }
    });

    
});