const VOLUME_SLIDER_ID = 'volume-slider';

const DEFAULTS = {
    enabled: true,
    maxVal: 100
};

function updateSlider(settings) {
    const volumeSliderEl = document.getElementById(VOLUME_SLIDER_ID);

    if (!volumeSliderEl) return;

    if (settings.enabled) {
        volumeSliderEl.setAttribute("max", settings.maxVal);
        volumeSliderEl.setAttribute("step", 1);
    } else {
        volumeSliderEl.setAttribute("max", 100);
    }
}

chrome.storage.sync.get(DEFAULTS, (settings) => {
    updateSlider(settings);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync') {
        chrome.storage.sync.get(DEFAULTS, (settings) => {
            updateSlider(settings);
        });
    }
});