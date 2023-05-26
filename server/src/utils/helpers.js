export const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const formatTracks = (tracks) => {
  tracks.sort((a, b) => b.popularity - a.popularity);
  const popularTracks = tracks.slice(0, 10);

  return popularTracks.map((track) => ({
    
    artist: track.artists[0].name,
    track: track.name,
    album_image_url: track.album.images[0].url,
    preview_url: track.preview_url,
  }
  
  ));
};
