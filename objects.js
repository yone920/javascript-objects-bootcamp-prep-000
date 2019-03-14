const playlist = {
  Alison: "Slowdive",
  "My Bloody Valentine": "Sometimes"
}

function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({}, object, {[artistName]: songTitle})
}


updatePlaylist( playlist, 'Phil Ochs', "Here's to the State of Mississippi")
