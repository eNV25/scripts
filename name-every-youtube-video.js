// Go a YouTube Channel and copy and paste in the browser's JavaScript Console.

// scroll to the bottom
(function () {
    const interval = setInterval(() => {
        window.scrollTo(0, document.documentElement.scrollHeight);
    }, 1);
})();

// fix copy on Chrome
// https://stackoverflow.com/questions/62212958/devtools-console-copy-is-not-a-function-while-on-youtube
document.querySelector('#copy').remove();

// copy video titles
var titles = "";
$$("a.ytd-grid-video-renderer").forEach((item) => {
    titles = item.getAttribute("title") + "\n" + titles;
});
copy(titles);
