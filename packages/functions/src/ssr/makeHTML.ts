/* eslint-disable */

// const importsProd = `"imports": {
//         "@listingslab/root-config": "https://listingslab.com/root-config/listingslab-root-config.js",
//         "@listingslab/appshell": "https://listingslab.com/appshell/listingslab-appshell.js",
//         "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
//         "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
//       }`;

// const importsDev = `"imports": {
//         "@listingslab/root-config": "http://localhost:9000/listingslab-root-config.js",
//         "@listingslab/appshell": "http://localhost:8080/listingslab-appshell.js"
//       }`;

export default function makeHTML(req:any) {

  const content = {
    siteURL: "http://listingslab.com",
    siteTitle: "@listingslab",
    siteIcon: "http://listingslab.com/png/logo192.png",
    title: "This is the content title",
    excerpt: "This is the excerpt",
    body: "<p>And here is the body text (as HTML)</p>"
  };
  const {
    title,
    excerpt,
    body,
    siteTitle,
    siteIcon,
    siteURL,
  } = content;
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title} ${siteTitle}</title>
    <link rel="manifest" href="https://listingslab.com/manifest.json">
    <link rel="icon" href="https://listingslab.com/favicon.ico" />
    <meta name="theme-color" content="#006c72" />
    <meta name="description" content=${excerpt} />
    <link rel="apple-touch-icon" href="https://listingslab.com/png/logo512.png" />

    <link type="text/css" href="https://listingslab.com/css/meyerweb-reset.css" rel="stylesheet" />
    <link type="text/css" href="https://listingslab.com/css/listingslab.css" rel="stylesheet" />
    
    <meta name="msapplication-TileColor" content="#006c72">
    <meta name="msapplication-TileImage" content="https://listingslab.com/png/ms-icon-144x144.png">
    <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>
    <meta name="importmap-type" content="systemjs-importmap" />
    <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js"></script>  

    </head>
  <body>

    <noscript>You need a LOT of JavaScript to use  <a
      href="https://listingslab.com/pwa"
      target="_self"
      title="PWAs are mobile apps that took all the right vitamins">
      Progressive Web Apps
    </a>(PWA)</noscript>

    <div id="ssr" class="wrapper">

      <nav>
        <a href="${siteURL}" target="_self" title="${title}">
          <img class="siteIcon" src="${siteIcon}" alt="${siteIcon}" />
        </a>
        <ul>
          <li><a href="https://listingslab.com/work/" target="_self">work</a></li>
          <li><a href="https://listingslab.com/life/" target="_self">life</a></li>
          <li><a href="https://listingslab.com/balance/" target="_self">balance</a></li>
        </ul>
      </nav>

      <section>
        <article>
          <header>
            <h1>${title}</h1>
            <p>${excerpt}</p>
          </header>
          ${body}
        </article>

        <aside>
          <h4>Persona</h4>
          <p>pathname & hostname?</p>
        </aside>

      </section>

      <footer>
        <p>Author: milky</p>
        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
      </footer>
    </div>
  </body>
</html>`;

  return html;
}
