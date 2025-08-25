// Galerie Médias
const mediaData = {
  photos: [
    "images/photos/aillet.jpg",
    "images/photos/betterave1.jpg",
    "images/photos/salade.jpg",
    "images/photos/chinois1.jpg",
    "images/photos/radis.jpg",
    "images/photos/epinard.jpg",
    "images/photos/carotte.jpg",
    "images/photos/chinois2.jpg"
  ],
  videos: [
    "images/videos/marche.mp4",  // renommer "marché.mp4" -> "marche.mp4"
    "images/videos/video2.mp4"
  ],
  sons: [
    "images/sons/champ.mp3",
    "images/sons/son2.mp3"
  ]
};

const mediaList = document.getElementById('media-list');

document.querySelectorAll('.media-btns button').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    mediaList.innerHTML = '';

    mediaData[type].forEach(src => {
      const div = document.createElement('div');
      div.className = 'media-item';
      div.style.height = 'auto';

      if(type === 'photos'){
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        div.appendChild(img);
      } else if(type === 'videos'){
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.style.width = '100%';
        video.style.height = 'auto';
        div.appendChild(video);
      } else if(type === 'sons'){
        const audio = document.createElement('audio');
        audio.src = src;
        audio.controls = true;
        audio.style.width = '100%';
        div.appendChild(audio);
      }

      mediaList.appendChild(div);
    });
  });
});
