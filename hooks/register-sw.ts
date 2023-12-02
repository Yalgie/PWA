import { useEffect } from "react";

const urlBase64ToUint8Array = (base64String: string) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const onRegister = (registration: ServiceWorkerRegistration) => {
  // const convertedVapidKey = urlBase64ToUint8Array(
  //   process.env.VAPID_PUBLIC_KEY as string
  // );
  // console.log(convertedVapidKey)
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager
  // registration.pushManager
  //   .subscribe({
  //     userVisibleOnly: true,
  //     applicationServerKey: convertedVapidKey,
  //   })
  //   .then((subscription) => {
  //     fetch("/api/subscribe", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ subscription }),
  //     });
  //   });
};

const onRegisterError = (error: any) => {
  console.error(error);
};

export const useRegisterServiceWorker = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => onRegister(registration))
        .catch((error) => onRegisterError(error));
    }
  }, []);
};
