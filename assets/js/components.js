(function () {
  "use strict";

  var currentPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/+$/, "") || "/";

  function getNavigation() {
    return [
      ["/", "Home"],
      ["/services/", "Services"],
      ["/work/", "Work"],
      ["/about/", "About"],
      ["/contact/", "Contact"]
    ];
  }

  function renderHeader() {
    var links = getNavigation().map(function (item) {
      var itemPath = item[0].replace(/\/+$/, "");
      var isCurrent = currentPath === itemPath || (item[0] === "/" && (currentPath === "" || currentPath === "/")) ||
        (item[0] === "/services/" && currentPath.indexOf("/services/") === 0);
      return '<a href="' + item[0] + '"' + (isCurrent ? ' aria-current="page"' : "") + ">" + item[1] + "</a>";
    }).join("");

    return [
      '<div class="topbar"><div class="wrap topbar-inner">',
      '<a href="mailto:contact@i-startup.tn"><span aria-hidden="true">EMAIL</span> contact@i-startup.tn</a>',
      '<div class="social-links" aria-label="Social links">',
      '<a href="https://www.linkedin.com/in/ali-cheikh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>',
      '<a href="https://github.com/Ali-Cheikh" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>',
      "</div></div></div>",
      '<header class="site-header"><div class="wrap header-inner">',
      '<a class="brand" href="/"><img class="brand-logo" src="/assets/images/logo-horizontal-light.svg" alt="I-StartUp"></a>',
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>',
      '<nav id="site-nav" class="site-nav" aria-label="Main navigation">',
      links,
      '<a class="button button-primary button-small" href="mailto:contact@i-startup.tn?subject=Project%20enquiry">Let’s talk <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>',
      "</nav></div></header>"
    ].join("");
  }

  function renderFooter() {
    return [
      '<footer class="site-footer"><div class="wrap">',
      '<div class="footer-top"><a class="brand footer-brand" href="/">',
      '<img class="footer-lockup" src="/assets/images/wordmark-only-dark.svg" alt="I-StartUp"></a>',
      '<p>Product engineering and operational systems for teams doing serious work.</p>',
      '<a class="button button-primary" href="mailto:contact@i-startup.tn">contact us <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></div>',
      '<div class="footer-grid">',
      '<div><h2>About</h2><p>A product engineering studio based in Tunisia, working remotely with teams worldwide.</p><a href="/about/">About I-StartUp</a></div>',
      '<div><h2>Services</h2><a href="/services/#development">Development</a><a href="/services/#automation">Automation</a><a href="/services/#systems">Internal systems</a></div>',
      '<div><h2>Explore</h2><a href="/work/">Selected Work</a><a href="/process/">How We Work</a></div>',
      '<div><h2>Contact</h2><a href="mailto:contact@i-startup.tn">contact@i-startup.tn</a><a href="tel:+21690725434">+216 90 725 434</a></div>',
      '</div></div><div class="footer-bottom"><div class="wrap"><span>© 2026 I-StartUp.</span><a href="/">Home <i class="fa-solid fa-arrow-up" aria-hidden="true"></i></a></div></div></footer>'
    ].join("");
  }

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.outerHTML = renderHeader();
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.outerHTML = renderFooter();
    }
  }

  customElements.define("site-header", SiteHeader);
  customElements.define("site-footer", SiteFooter);
})();
