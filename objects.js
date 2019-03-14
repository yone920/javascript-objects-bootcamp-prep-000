const playlist = {
  Alison: "Slowdive",
  "My Bloody Valentine": "Sometimes"
}

function updatePlaylist(playObject, artistName, songTitle) {
  playObject[artistName] = songTitle
  return playObject
}

updatePlaylist( playlist, "Phil Ochs", "Here's to the State of Mississippi" )


function updatePlaylist(playObject, artistName, songTitle) {
  playObject[artistName] = songTitle
  return playObject
}

updatePlaylist( playlist, "Phil Ochs", "Here's to the State of Mississippi" )
