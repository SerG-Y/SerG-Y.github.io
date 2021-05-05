self.addEventListener("install", async () => {
    console.log("second worker registred");
});

self.addEventListener('notificationclick', function(event) {
    console.log('On notification click');

    event.notification.close();
});