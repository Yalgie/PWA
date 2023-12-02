self.addEventListener("install", () => {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated.");
});

self.addEventListener("push", function (event) {
  const options = {
    body: "This is a notification.",
    icon: "icon.png",
    badge: "badge.png",
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
