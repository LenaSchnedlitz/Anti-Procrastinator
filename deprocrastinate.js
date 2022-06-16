(async () => {
  const stored = await browser.storage.sync.get();
  const timeWasters = stored.timeWasters || [];

  const texts = [
    "No time to waste",
    "Get back to work",
    "Life is too short - don't waste your time!",
    "I believe you have better things to do",
  ];

  function block(url) {
    if (window.location.href.toLowerCase().includes(url.toLowerCase())) {
      const overlay = document.createElement("div");
      overlay.classList.add("anti-procrastinator__overlay");
      overlay.innerText =
        texts[Math.floor(Math.random() * texts.length)] + " 🙃";

      const styleSheet = document.createElement("style");
      styleSheet.innerText =
        ".anti-procrastinator__overlay:not(:first-of-type){display: none}" +
        ".anti-procrastinator__overlay{position:absolute;inset:0;z-index:10000;width:100vw;height:100%;background:#e1f2f799;color:#000;display:flex;justify-content:center;align-items:center;font-size:3rem;font-weight:bold}";

      document.body.insertBefore(overlay, document.body.children[0]);
      document.body.insertBefore(styleSheet, document.body.children[0]);
    }
  }

  timeWasters.forEach(block);
})();
