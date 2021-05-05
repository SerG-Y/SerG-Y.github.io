self.addEventListener("install", async () => {
    console.log("man worker registred");
});

importScripts('notification_sw.js');