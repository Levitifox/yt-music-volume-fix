const toggle = document.getElementById('toggle');
const maxValInput = document.getElementById('maxVal');

const DEFAULTS = {
    enabled: true,
    maxVal: 100
};

chrome.storage.sync.get(DEFAULTS, prefs => {
    toggle.checked = prefs.enabled;
    maxValInput.value = prefs.maxVal;

    maxValInput.disabled = !prefs.enabled;
    maxValInput.style.opacity = prefs.enabled ? '1' : '0.5';
});

toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;

    maxValInput.disabled = !isEnabled;
    maxValInput.style.opacity = isEnabled ? '1' : '0.5';

    chrome.storage.sync.set({
        enabled: isEnabled,
        maxVal: Number(maxValInput.value)
    });
});

maxValInput.addEventListener('input', () => {
    let val = Number(maxValInput.value);
    if (val < 10) val = 10;

    chrome.storage.sync.set({
        enabled: toggle.checked,
        maxVal: val
    });
});