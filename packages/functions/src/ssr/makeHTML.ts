/* eslint-disable */

const importsProd = `"imports": {
        "@listingslab/root-config": "https://listingslab.com/root-config/listingslab-root-config.js",
        "@listingslab/appshell": "https://listingslab.com/appshell/listingslab-appshell.js"
      }`;

// const importsDev = `"imports": {
//         "@listingslab/root-config": "http://localhost:9000/listingslab-root-config.js",
//         "@listingslab/appshell": "http://localhost:8080/listingslab-appshell.js"
//       }`;

export default function makeHTML(req:any) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>listingslab</title>
    <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https: localhost:*; script-src 'unsafe-inline' 'unsafe-eval' https: localhost:*; connect-src https: localhost:* ws://localhost:*; style-src 'unsafe-inline' https:; object-src 'none';">
    <meta name="importmap-type" content="systemjs-importmap" />
    <script type="systemjs-importmap">
      {
        ${ importsProd }
      }
    </script>
    <script type="systemjs-importmap">
      {
        "imports": {
          "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
        }
      }
    </script>
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js" as="script">
    <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js"></script>
  </head>
  <body>
    <noscript>
      You'll need a LOT of JavaScript to run this app'
    </noscript>
    <script>
      System.import('@listingslab/root-config');
    </script>
    <import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>
  </body>
</html>`;

  return html;
}

/*
${ mode === "DEV" ? importsDev : importsProd }
*/