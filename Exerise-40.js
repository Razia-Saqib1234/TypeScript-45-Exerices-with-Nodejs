function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//call three function and creat 3 variables with different values
var album1 = make_album("Ali Zafar", "Album title 1");
var album2 = make_album("Atif", "Album title 2");
// Call function with third parameter
var album3 = make_album("Abrar", "Album title 3", 6);
console.log(album1);
console.log(album2);
console.log(album3);
