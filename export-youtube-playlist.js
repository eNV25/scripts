// run in the browser console after loading the full playlist
var out = ""
$$("a.ytd-playlist-video-renderer").forEach(item => out += "https://youtube.com" + item.getAttribute("href") + "\n")
copy(out)
