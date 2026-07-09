(() => {
  'use strict';

  const mount = document.getElementById('app');

  function addLink(attributes) {
    const link = document.createElement('link');
    for (const [name, value] of Object.entries(attributes)) {
      link.setAttribute(name, value);
    }
    document.head.appendChild(link);
  }

  function configureEnvironment() {
    const isLocalFile = window.location.protocol === 'file:';

    addLink({
      rel: 'stylesheet',
      href: isLocalFile ? './css/fonts-offline.css' : './css/fonts.css',
    });

    if (!isLocalFile) {
      addLink({ rel: 'manifest', href: './site.webmanifest' });
    }
  }

  function activateDynamicImages(root) {
    const update = (scope) => {
      const images = scope.matches?.('img[data-dynamic-src]')
        ? [scope]
        : scope.querySelectorAll?.('img[data-dynamic-src]') || [];

      for (const image of images) {
        const source = image.dataset.dynamicSrc;
        if (source && !source.includes('{{')) {
          image.src = source;
          image.removeAttribute('data-dynamic-src');
        }
      }
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') update(mutation.target);
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) update(node);
        }
      }
    });

    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['data-dynamic-src'],
    });
    update(root);
  }

  function start() {
    const template = window.__HEARTH_TEMPLATE__;
    const componentLogic = window.__HEARTH_LOGIC__;

    if (typeof template !== 'string' || typeof componentLogic !== 'string') {
      throw new Error('Template Hearth non disponibile');
    }

    const page = document.createElement('x-dc');
    page.innerHTML = template.replace(
      /src="{{\s*([^"]+?)\s*}}"/g,
      'src="./assets/images/placeholder.svg" data-dynamic-src="{{ $1 }}"',
    );

    const logic = document.createElement('script');
    logic.type = 'text/x-dc';
    logic.dataset.dcScript = '';
    logic.dataset.props = JSON.stringify({
      $preview: { width: 1180, height: 1400 },
    });
    logic.textContent = componentLogic;

    mount.replaceWith(page);
    page.after(logic);
    activateDynamicImages(document.body);
    window.__dcBoot();
    document.documentElement.classList.add('app-ready');

    delete window.__HEARTH_TEMPLATE__;
    delete window.__HEARTH_LOGIC__;
  }

  try {
    configureEnvironment();
    start();
  } catch (error) {
    console.error('[Hearth]', error);
    mount.classList.add('app-loading--error');
    mount.querySelector('p').textContent =
      'Non è stato possibile caricare la pagina. Riprova tra poco.';
  }
})();
