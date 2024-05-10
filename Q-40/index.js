function make_album(artist_name, album_title, tracks) {
    var album = { artist_name: artist_name, album_title: album_title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Drake", "Take Care"));
console.log(make_album("Kendrik Lamar", "To pimp a butterfly"));
console.log(make_album("Bruno Mars", "24K Magic", 9));
