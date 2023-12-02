import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" />

        <Script id="one-signal-script">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(function(OneSignal) {
              OneSignal.init({
                appId: "214537ab-4620-4252-91ef-1243748bdf07",
              });
            });
          `}
        </Script>
      </body>
    </Html>
  );
}
