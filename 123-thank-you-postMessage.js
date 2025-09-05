/* 123-thank-you-postMessage.js */
(function () {
  // CHANGE THIS to your Wix site’s origin to be safer than '*'
  // e.g. 'https://yourdomain.com' or 'https://your-wix-site.wixsite.com/site'
  var PARENT_ORIGIN = '*';

  function notifyParent() {
    try {
      window.parent && window.parent.postMessage(
        { type: 'FORM_SUBMITTED', source: '123FormBuilder', ts: Date.now() },
        PARENT_ORIGIN
      );
    } catch (e) {
      // no-op
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', notifyParent);
  } else {
    notifyParent();
  }
})();
