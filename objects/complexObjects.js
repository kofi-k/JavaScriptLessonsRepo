var music = [
    {
        'artist': 'khalid',
        'album': 'free spirit',
        'year': 2020,
        'songs': ['talk', 'better', 'present'],
        'rating': '4 star'
    },
    {
        'artist': 'j cole',
        'album': 'off season',
        'year': 2022,
        'songs': ['amari', 'off season', 'applying pressure'],
        'rating': '5 star'
    },
]

// assessing array in the nested array
var betterSong = music[0].songs[1]
console.log(betterSong)