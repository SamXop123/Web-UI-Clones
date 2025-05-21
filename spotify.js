document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        { name: 'Heatwaves', artist: 'Glass Animals', image: '/media/heatwaves.png', duration: 201, audio: '/songs/Heatwaves.mp3' },
        { name: 'Starboy', artist: 'Weeknd', image: '/media/starboy.png', duration: 230, audio: '/songs/Starboy.mp3' },
        { name: 'Stay', artist: 'The Kid LAROI', image: '/media/stay.jpg', duration: 141, audio: '/songs/Stay.mp3' },
        { name: 'Copines', artist: 'Aya Nakamura', image: '/media/copines.jpg', duration: 174, audio: '/songs/Copines.mp3' },
        { name: 'Save Your Tears', artist: 'Weeknd', image: '/media/saveyourtears.jpg', duration: 215, audio: '/songs/Save_Your_Tears.mp3' },
        { name: 'I Ain\'t Worried', artist: 'OneRepublic', image: '/media/iaintworried.jpg', duration: 148, audio: '/songs/I_Aint_Worried.mp3' },
        { name: 'I Wanna Be Yours', artist: 'Arctic Monkeys', image: '/media/iwby.jpg', duration: 183, audio: '/songs/I_Wanna_Be_Yours.mp3' },
        { name: 'Attention', artist: 'Charlie Puth', image: '/media/attention.jpg', duration: 209, audio: '/songs/Attention.mp3' }
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

 
});