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
    assets: "http://localhost:3000",
    siteURL: "http://listingslab.com",
    siteTitle: "@listingslab",
    siteIcon: "http://listingslab.com/png/logo192.png",
    title: "All your base",
    excerpt: "All your base are belong to us is a popular Internet meme based on a badly translated phrase from the opening cutscene of the video game Zero Wing",
    body: "<p>Don't believe?  <a href='https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us' target='_blank'>check wikipedia</a>. By the early 2000s, a GIF animation depicting the opening text was widespread on the Something Awful message forums and other internet forums.[3] The phrase found popular reference outside internet forums through the 2000s and 2010s, including use by Newgrounds in 2001.</p>",
    image: "http://listingslab.com/png/Aybabtu.png",
  };
  const {
    assets,
    title,
    excerpt,
    body,
    siteTitle,
    siteIcon,
    siteURL,
    image,
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
    <link rel="apple-touch-icon" href="${assets}/png/logo512.png" />
    <link type="text/css" href="${assets}/css/listingslab.css" rel="stylesheet" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    
    <meta name="msapplication-TileColor" content="#006c72">
    <meta name="msapplication-TileImage" content="${assets}/png/ms-icon-144x144.png">
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
      <header>
        
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
        <h1>${title}</h1>
      </header>
      <section>
        <article>
          <header>
            <img class="image" src="${image}" align="right"/>
            <h2>${excerpt}</h2>
            
          </header>
          ${body}
        </article>

      </section>

      <footer>
        <p>
          <a href="https://github.com/orgs/listingslab-software" target="_blank">
              unlicensed software by listingslab
          </a>
        </p>
      </footer>
    </div>
  </body>
</html>`;

  return html;
}