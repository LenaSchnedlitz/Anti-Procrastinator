(async () => {
  const INITIAL_URL = "";

  const container = document.getElementById("timeWasters");
  const stored = await browser.storage.sync.get();
  const timeWasters = sanitize(stored.timeWasters);

  function sanitize(list = [""]) {
    const sanitized = list.filter((url) => !!url);
    return sanitized.length ? sanitized : [""];
  }

  function urlInput(value = INITIAL_URL, idx = timeWasters.length - 1) {
    const input = document.createElement("input");
    Object.assign(input, {
      placeholder: "https://your-url-here...",
      type: "text",
      value,
      onchange: (e) => {
        timeWasters[idx] = e.target.value;
        browser.storage.sync.set({ timeWasters });
      },
    });

    const label = document.createElement("label");
    label.appendChild(input);

    const wrapper = document.createElement("li");
    wrapper.appendChild(label);
    return wrapper;
  }

  timeWasters.forEach((url, idx) => container.appendChild(urlInput(url, idx)));

  document.getElementById("urlAdder").addEventListener("click", () => {
    timeWasters.push(INITIAL_URL);
    browser.storage.sync.set({ timeWasters });
    container.appendChild(urlInput());
  });
})();
