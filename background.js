// Toolbar badge: active rule count, or OFF while the master switch is paused.
const BADGE_GREEN = "#23a559";
const SKIP_KEYS = new Set(["masterEnabled", "_compiledCssCache"]);

function updateBadge(stored) {
  const s = stored || {};
  if (s.masterEnabled === false) {
    chrome.action.setBadgeBackgroundColor({ color: "#80848e" });
    chrome.action.setBadgeText({ text: "OFF" });
    return;
  }
  const active = Object.keys(s).filter((k) => !k.startsWith("_") && !SKIP_KEYS.has(k) && s[k] === true).length;
  chrome.action.setBadgeBackgroundColor({ color: BADGE_GREEN });
  chrome.action.setBadgeText({ text: active > 0 ? String(active) : "" });
}

function refresh() {
  chrome.storage.local.get(null, updateBadge);
}

// One-time move of settings saved in chrome.storage.sync (v1.1 and v1.2 builds) into local storage.
function migrateFromSync() {
  chrome.storage.local.get(["_migrated"], (flag) => {
    if (flag && flag._migrated === true) {
      refresh();
      return;
    }
    chrome.storage.sync.get(null, (synced) => {
      const payload = { _migrated: true };
      if (synced && Object.keys(synced).length) Object.assign(payload, synced);
      chrome.storage.local.set(payload, refresh);
    });
  });
}

chrome.runtime.onInstalled.addListener(migrateFromSync);
chrome.runtime.onStartup.addListener(migrateFromSync);
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local") refresh();
});
