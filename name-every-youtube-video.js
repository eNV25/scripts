// copy and paste in the browser's javascript console

// scroll to the bottom
(function () {
    const interval = setInterval(() => {
        window.scrollTo(0, document.documentElement.scrollHeight);
    }, 1);
})();

// copy video titles
var titles = "";
$$("a.ytd-grid-video-renderer").forEach((item) => {
    titles = item.getAttribute("title") + "\n" + titles;
});
copy(titles);
