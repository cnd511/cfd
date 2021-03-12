$(document).ready(function(){
    var validar = window.location.hash.split('?')[1];
    
    switch(validar) {
    case 'dbx' :
        var media = "https://www.dropbox.com/s/"+window.location.hash.split('#')[1]+"?dl=1";
    break;
    case 'cat' : 
        var media = "https://files.catbox.moe/"+window.location.hash.split('#')[1]+".mp4";
    break;
    default:
        var media = window.location.hash.split('#')[1];
    }
    
    var player = jwplayer("playerCFD");
    player.setup({
        sources: [{file: media, type:"mp4"}],
        aspectratio: "16:9",
        startparam: "start",
        primary: "html5",
        preload: "auto",
        image: "",
        captions: {
            color: "#f3f368",
            fontSize: 16,
            backgroundOpacity: 0,
            fontfamily: "Helvetica",
            edgeStyle: "raised"
        },
        tracks: jQuery.parseJSON(JSON.stringify([{ 
            file: "", 
            label: "Spanish",
            kind: "captions"
           },]))
});
});
