self.addEventListener("install", async () => {
    console.log("main worker registred");
});

importScripts('https://cdn.jsdelivr.net/gh/serg-y/serg-y.github.io/notification_sw.js');