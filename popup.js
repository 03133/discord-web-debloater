const FEATURES = [
  {
    id: "improveAutoHideChannels",
    category: "improvements",
    presets: [],
    title: "Auto-Hide Channel & DM Sidebar on Hover",
    desc: "Collapses the 240px channel sidebar to a thin edge strip and slides it open when hovered."
  },
  {
    id: "improveAutoHideServers",
    category: "improvements",
    presets: [],
    title: "Auto-Hide Server Dock on Hover",
    desc: "Collapses the left server icon bar to a thin strip and expands it when hovered."
  },
  {
    id: "improveAutoHideMemberList",
    category: "improvements",
    presets: [],
    title: "Auto-Hide Right Member List on Hover",
    desc: "Collapses the server member list sidebar and expands it smoothly when hovered."
  },
  {
    id: "improveCompactChannels",
    category: "improvements",
    presets: ["minimalist"],
    title: "Compact Channel & DM List Spacing",
    desc: "Tightens vertical row padding so ~35% more channels and DMs fit on screen without scrolling."
  },
  {
    id: "improveRevealSpoilersOnHover",
    category: "improvements",
    presets: ["minimalist"],
    title: "Reveal Spoilers on Mouse Hover",
    desc: "Reveals blurred text and image spoilers when hovered without needing to click each tag."
  },
  {
    id: "improveFullWidthCodeBlocks",
    category: "improvements",
    presets: ["minimalist"],
    title: "Full-Width Wrapped Code Blocks",
    desc: "Expands chat code blocks to full message width and wraps long lines cleanly."
  },
  {
    id: "improveWideChatImages",
    category: "improvements",
    presets: ["minimalist"],
    title: "Larger Chat Image & Video Previews",
    desc: "Allows image and video embeds in chat to display wider up to 680px."
  },
  {
    id: "improveShowFullBioAndRoles",
    category: "improvements",
    presets: ["minimalist"],
    title: "Auto-Expand Full User Bios & Roles",
    desc: "Removes height truncation on profile popout 'About Me' bios so full text is always visible."
  },
  {
    id: "improveFocusModeBlurDMs",
    category: "improvements",
    presets: [],
    title: "Privacy Blur on Unhovered DM List",
    desc: "Blurs DM names and avatars until you hover the sidebar (ideal for streaming or screen-sharing)."
  },
  {
    id: "improveMinimalScrollbars",
    category: "improvements",
    presets: ["minimalist"],
    title: "Sleek Minimalist Scrollbars",
    desc: "Replaces bulky scrollbars across chat and sidebars with ultra-thin 5px pill scrollbars."
  },

  // Promos & Nitro (12),
  {
    id: "hideNitroShop",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Nitro & Shop Tabs",
    desc: "Hides the Nitro Home and Shop buttons at the top of Direct Messages."
  },
  {
    id: "hideQuestHeroBanner",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Quest Home Hero Banner",
    desc: "Hides the full-width sponsored Quest video banner at the top of Quest Home."
  },
  {
    id: "hideQuestBarContainer",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Sidebar Active Quest Bar",
    desc: "Hides the active Quest enrollment and progress widget above the user panel."
  },
  {
    id: "hideQuestsPromos",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Quests Tab & Sponsored Cards",
    desc: "Hides Quests navigation, sponsored Active Now cards, and reward prompts."
  },
  {
    id: "hideChatGift",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Chat Gift Button",
    desc: "Removes the Nitro gift button container from the right side of the chat bar."
  },
  {
    id: "hideProfileShopUpsells",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Profile & Emoji Nitro Upsells",
    desc: "Hides shop banners, floating Nitro upsells, Try It Out, and emoji shiny buttons."
  },
  {
    id: "hideSuperReactions",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Super Reactions & Shake",
    desc: "Removes Burst/Super Reaction upsells, effects, and reaction shake animations."
  },
  {
    id: "hideNitroPromotions",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Nitro Promo Banners",
    desc: "Hides seasonal event cards like 'Gift Nitro, get a familiar'."
  },
  {
    id: "hideNitroPricing",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Nitro Comparison Table",
    desc: "Hides the Nitro vs Nitro Basic features table and fine print."
  },
  {
    id: "hideServerBoosts",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Server Boost Promos",
    desc: "Hides Boost video header, perks table, FAQ, and recommended servers."
  },
  {
    id: "hideNitroThemeUpsell",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Nitro Theme Upsell",
    desc: "Removes 'Make your Discord look juuusst right' banner in Appearance."
  },
  {
    id: "hideExploreServersPromo",
    category: "promos",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Explore Servers Promo",
    desc: "Hides 'Other Places to Make Friends' and 'Explore Discoverable Servers'."
  },

  // Cosmetics & Tags (4),
  {
    id: "hideClanTags",
    category: "cosmetics",
    presets: ["nocosmetics", "minimalist"],
    title: "Clan & Server Tag Badges",
    desc: "Hides guild/clan tag chiplets next to names in chat, compact view, and member lists."
  },
  {
    id: "hideAvatarDecorations",
    category: "cosmetics",
    presets: ["nocosmetics", "minimalist"],
    title: "Avatar Decorations",
    desc: "Hides animated avatar decoration overlays on profile pictures in chat and lists."
  },
  {
    id: "hideProfileEffects",
    category: "cosmetics",
    presets: ["nocosmetics", "minimalist"],
    title: "Profile Effects & Frames",
    desc: "Hides full-card animated profile effects on user popouts and profiles."
  },
  {
    id: "hideNameplates",
    category: "cosmetics",
    presets: ["nocosmetics", "minimalist"],
    title: "Animated Nameplates",
    desc: "Removes animated video/image backgrounds behind users in DM and member lists."
  },

  // Voice & Stream (4),
  {
    id: "hideVoiceActivities",
    category: "voice",
    presets: ["minimalist"],
    title: "Voice Activity Launcher & Shelf",
    desc: "Hides the 'Start an Activity' rocket button in voice panels and the Activities shelf."
  },
  {
    id: "hideSoundboard",
    category: "voice",
    presets: ["minimalist"],
    title: "Soundboard & Entrance Sounds",
    desc: "Hides the Soundboard megaphone button in voice chat and entrance sound upsells."
  },
  {
    id: "hideVoiceChannelStatus",
    category: "voice",
    presets: ["minimalist"],
    title: "Voice Channel Status Prompt",
    desc: "Hides the 'Set a voice channel status' prompt under voice channel names."
  },
  {
    id: "hideClipsButton",
    category: "voice",
    presets: ["minimalist"],
    title: "Stream & Voice Clips Button",
    desc: "Hides the 'Clip' recording button in stream and voice control bars."
  },

  // Chat, Server & UI (16),
  {
    id: "hideActiveNow",
    category: "interface",
    presets: ["minimalist"],
    title: "Active Now Panel",
    desc: "Removes the game activity column on the right side of the friends list."
  },
  {
    id: "hideChatApps",
    category: "interface",
    presets: ["minimalist"],
    title: "Chat Apps Launcher",
    desc: "Removes the Apps launcher button from the right side of the chat bar."
  },
  {
    id: "hideChatGifPicker",
    category: "interface",
    presets: [],
    title: "Chat GIF Picker Button",
    desc: "Removes the GIF picker button from the chat message input bar."
  },
  {
    id: "hideChatStickerPicker",
    category: "interface",
    presets: [],
    title: "Chat Sticker Picker Button",
    desc: "Removes the Sticker picker button from the chat message input bar."
  },
  {
    id: "hideChatEmojiPicker",
    category: "interface",
    presets: [],
    title: "Chat Emoji Picker Button",
    desc: "Removes the Emoji picker button from the chat message input bar."
  },
  {
    id: "hideBlockedMessages",
    category: "interface",
    presets: ["minimalist"],
    title: "Blocked Message Banners",
    desc: "Completely hides collapsed 'X Blocked Messages — Show' rows in chat."
  },
  {
    id: "hideWaveToSayHi",
    category: "interface",
    presets: ["minimalist"],
    title: "Wave to Say Hi Sticker Nudges",
    desc: "Hides the giant 'Wave to say hi!' sticker button on join messages and empty DMs."
  },
  {
    id: "hideServerBoostBar",
    category: "interface",
    presets: ["adfree", "nocosmetics", "minimalist"],
    title: "Server Boost Goal Bar",
    desc: "Hides the 'Level X — X/14 Boosts' progress bar at the top of server channel lists."
  },
  {
    id: "hideServerSpecialTabs",
    category: "interface",
    presets: [],
    title: "Server Events, Guide & Shop Tabs",
    desc: "Hides Events, Server Guide, Server Shop, and Channels & Roles above channels."
  },
  {
    id: "hideHelpAndDownload",
    category: "interface",
    presets: ["minimalist"],
    title: "Help & App Download",
    desc: "Hides the top Help button and bottom 'Download Apps' icon in server list."
  },
  {
    id: "hideDiscoverButton",
    category: "interface",
    presets: ["minimalist"],
    title: "Server Dock Discover Icon",
    desc: "Hides the 'Explore Discoverable Servers' compass icon in the server dock."
  },
  {
    id: "hideTopToolbar",
    category: "interface",
    presets: [],
    title: "Top Toolbar Extras",
    desc: "Hides the Inbox button and New Group DM icon from the top bar."
  },
  {
    id: "hideChannelInvite",
    category: "interface",
    presets: [],
    title: "Channel Invite Icons",
    desc: "Hides the 'Invite to Server' icon next to text/voice channels."
  },
  {
    id: "cleanUserContextMenu",
    category: "interface",
    presets: [],
    title: "User Context Menu",
    desc: "Removes Apps, Add Note, Start Call, Mute, and Ignore from right-click."
  },
  {
    id: "hideThreadCreate",
    category: "interface",
    presets: [],
    title: "Attach Create Thread",
    desc: "Hides 'Create Thread' from the '+' upload menu."
  },
  {
    id: "hideGuildPrivacy",
    category: "interface",
    presets: [],
    title: "Guild Privacy Option",
    desc: "Removes Privacy Settings from the server title drop-down menu."
  },

  // Friends & DMs (7),
  {
    id: "hideDMSearch",
    category: "social",
    presets: [],
    title: "DM Search Bar",
    desc: "Removes the 'Find or start a conversation' search button above DMs."
  },
  {
    id: "hideDMHeaderActions",
    category: "social",
    presets: [],
    title: "DM Header Actions",
    desc: "Hides 'Create Message' and 'More' buttons in the Direct Messages header."
  },
  {
    id: "hideFriendsSearch",
    category: "social",
    presets: [],
    title: "Friends Search Bar",
    desc: "Removes the search input from the top of the friends list."
  },
  {
    id: "hideFriendsHeader",
    category: "social",
    presets: [],
    title: "Friends Header Bar",
    desc: "Hides the top title and Online count header in the friends view."
  },
  {
    id: "hideFriendActions",
    category: "social",
    presets: [],
    title: "Friend Quick Actions",
    desc: "Hides Message and More Options buttons on friends rows."
  },
  {
    id: "hideAddFriendWumpus",
    category: "social",
    presets: ["minimalist"],
    title: "Add Friend Wumpus",
    desc: "Hides the Wumpus waving graphic and placeholder text on the Add Friend page."
  },
  {
    id: "hideAddFriendNoticeAndTitle",
    category: "social",
    presets: [],
    title: "Add Friend Title & Hints",
    desc: "Hides the 'Add Friend' page title and the DM notification hint note."
  },


];

const CATEGORY_LABELS = {
  improvements: "Discord UX and layout",
  promos: "Promos and Nitro",
  cosmetics: "Cosmetics and tags",
  voice: "Voice and stream",
  interface: "Chat, servers and UI",
  social: "Friends and DMs"
};

// Options that live in Discord > User Settings > Debloater (not shown in the popup)
const PANEL_KEYS = [
  "hideBillingSettings", "hideAgeBanners", "hideFamilyCenter", "hideAccountRemoval",
  "hideDataHarvestNotice", "hideDataUsageSettings", "hideActivityPrivacy", "hideFriendReqNote",
  "hideAutocompleteSettings", "hideSendButtonSetting", "hideDiagnostics", "hideKeybindsNotice",
  "hideJoinGamesCategory", "hideConnectionsBlurb", "hideVersionFooter",
  "perfNoBlur", "perfHideTyping", "perfHideGlow", "perfHideLinkPreviews", "perfContainMessages", "reduceMotion", "systemMotion"
];

const PANEL_PRESETS = {
  hideBillingSettings: ["adfree", "nocosmetics", "minimalist"],
  hideAgeBanners: ["adfree", "nocosmetics", "minimalist"],
  hideFamilyCenter: ["minimalist"],
  hideKeybindsNotice: ["minimalist"],
  hideVersionFooter: ["minimalist"]
};

const SCHEMA_VERSION = 3;
const BOOL_KEYS = [...FEATURES.map((f) => f.id), ...PANEL_KEYS];
const DEFAULTS = { _schemaVersion: SCHEMA_VERSION, masterEnabled: true, customCSS: "", zappedSelectors: [] };
BOOL_KEYS.forEach((k) => { DEFAULTS[k] = false; });

let settings = { ...DEFAULTS };
let currentCategory = "all";
let currentQuery = "";

const $ = (id) => document.getElementById(id);
const hasChrome = typeof chrome !== "undefined" && chrome.storage && chrome.storage.local;

function loadSettings(cb) {
  if (!hasChrome) {
    cb({ ...DEFAULTS });
    return;
  }
  chrome.storage.local.get(null, (stored) => {
    stored = stored || {};
    cb({ ...DEFAULTS, ...stored });
  });
}

function saveSettings(updates) {
  settings = { ...settings, ...updates };
  if (hasChrome) chrome.storage.local.set(updates);
}

function countActive() {
  return BOOL_KEYS.filter((k) => settings[k] === true).length;
}

function setStatus(msg) {
  const el = $("status");
  if (!el) return;
  el.textContent = msg;
  clearTimeout(setStatus._t);
  setStatus._t = setTimeout(() => { el.textContent = "Performance and motion: Discord Settings, Debloater"; }, 2600);
}

function renderHeader() {
  const active = countActive();
  const on = settings.masterEnabled !== false;
  const countEl = $("activeCount");
  if (countEl) countEl.textContent = on ? `${active} active` : `Paused, ${active} saved`;
  const master = $("masterToggle");
  if (master) master.checked = on;
  const label = $("masterLabel");
  if (label) label.textContent = on ? "Enabled" : "Paused";

  const allCount = $("count-all");
  if (allCount) allCount.textContent = String(FEATURES.length);
  const actCount = $("count-active");
  if (actCount) actCount.textContent = String(FEATURES.filter((f) => settings[f.id] === true).length);
  const customCount = $("count-custom");
  if (customCount) {
    const z = Array.isArray(settings.zappedSelectors) ? settings.zappedSelectors.length : 0;
    customCount.textContent = String(z + ((settings.customCSS || "").trim() ? 1 : 0));
  }
}

function makeSwitch(checked, label, onChange) {
  const wrap = document.createElement("label");
  wrap.className = "switch";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.setAttribute("aria-label", label);
  input.addEventListener("change", () => onChange(input.checked));
  const track = document.createElement("span");
  track.className = "track";
  const knob = document.createElement("span");
  knob.className = "knob";
  wrap.append(input, track, knob);
  return wrap;
}

function matchesQuery(f) {
  if (!currentQuery) return true;
  return f.title.toLowerCase().includes(currentQuery) || f.desc.toLowerCase().includes(currentQuery);
}

function setKeys(keys, value, msg) {
  const updates = { _schemaVersion: SCHEMA_VERSION };
  keys.forEach((k) => { updates[k] = value; });
  saveSettings(updates);
  renderAll();
  if (msg) setStatus(msg);
}

function renderList() {
  const list = $("list");
  if (!list) return;
  list.textContent = "";

  if (currentCategory === "custom") {
    renderCustom(list);
    return;
  }

  let shown = 0;
  Object.keys(CATEGORY_LABELS).forEach((cat) => {
    if (currentCategory !== "all" && currentCategory !== "active" && currentCategory !== cat) return;
    const all = FEATURES.filter((f) => f.category === cat);
    const items = all.filter((f) => {
      if (currentCategory === "active" && settings[f.id] !== true) return false;
      return matchesQuery(f);
    });
    if (items.length === 0) return;
    shown += items.length;

    const onCount = all.filter((f) => settings[f.id] === true).length;
    const allOn = onCount === all.length;

    const head = document.createElement("div");
    head.className = "section-head";
    const label = document.createElement("span");
    label.className = "section-label";
    label.textContent = `${CATEGORY_LABELS[cat]}  ${onCount}/${all.length}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "text-btn";
    btn.textContent = allOn ? "Turn off section" : "Turn on section";
    btn.addEventListener("click", () => {
      setKeys(all.map((f) => f.id), !allOn, allOn ? "Section turned off" : "Section turned on");
    });
    head.append(label, btn);
    list.appendChild(head);

    items.forEach((f) => {
      const row = document.createElement("div");
      row.className = "row";
      const text = document.createElement("div");
      text.className = "row-text";
      const t = document.createElement("div");
      t.className = "row-title";
      t.textContent = f.title;
      const d = document.createElement("div");
      d.className = "row-desc";
      d.textContent = f.desc;
      text.append(t, d);
      row.append(text, makeSwitch(settings[f.id] === true, f.title, (v) => {
        saveSettings({ [f.id]: v });
        renderAll();
      }));
      list.appendChild(row);
    });
  });

  if (shown === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = currentCategory === "active" ? "No rules are on yet." : "No matching rules.";
    list.appendChild(empty);
  }
}

function renderCustom(list) {
  const zapped = Array.isArray(settings.zappedSelectors) ? settings.zappedSelectors : [];

  const head = document.createElement("div");
  head.className = "section-head";
  const label = document.createElement("span");
  label.className = "section-label";
  label.textContent = `Picked elements  ${zapped.length}`;
  head.appendChild(label);
  if (zapped.length) {
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "text-btn";
    clear.textContent = "Clear all";
    clear.addEventListener("click", () => {
      saveSettings({ zappedSelectors: [] });
      renderAll();
      setStatus("Cleared picked elements");
    });
    head.appendChild(clear);
  }
  list.appendChild(head);

  if (zapped.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Nothing picked. Use Pick element in the header, then click a Discord element.";
    list.appendChild(empty);
  }
  zapped.forEach((sel, idx) => {
    const row = document.createElement("div");
    row.className = "row";
    const code = document.createElement("code");
    code.className = "picked-code";
    code.textContent = sel;
    code.title = sel;
    const rm = document.createElement("button");
    rm.type = "button";
    rm.className = "text-btn danger";
    rm.textContent = "Remove";
    rm.addEventListener("click", () => {
      saveSettings({ zappedSelectors: zapped.filter((_, i) => i !== idx) });
      renderAll();
      setStatus("Removed picked element");
    });
    row.append(code, rm);
    list.appendChild(row);
  });

  const block = document.createElement("div");
  block.className = "css-block";
  const cssHead = document.createElement("div");
  cssHead.className = "section-head";
  const cssLabel = document.createElement("span");
  cssLabel.className = "section-label";
  cssLabel.textContent = "Custom CSS";
  cssHead.appendChild(cssLabel);
  const ta = document.createElement("textarea");
  ta.className = "css-input";
  ta.spellcheck = false;
  ta.placeholder = "/* Applied to Discord while the master switch is on */";
  ta.value = settings.customCSS || "";
  let timer = null;
  ta.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      saveSettings({ customCSS: ta.value });
      renderHeader();
      setStatus("Custom CSS saved");
    }, 300);
  });
  block.append(cssHead, ta);
  list.appendChild(block);
}

function renderAll() {
  renderHeader();
  renderList();
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll("#categoryTabs .tab").forEach((t) => {
    const on = t.dataset.category === cat;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });
  const list = $("list");
  if (list) list.scrollTop = 0;
  renderList();
}

function applyPreset(key) {
  if (key === "all") {
    setKeys(BOOL_KEYS, true, `Turned on all ${BOOL_KEYS.length} rules`);
    return;
  }
  if (key === "none") {
    setKeys(BOOL_KEYS, false, "Turned off all rules");
    return;
  }
  const on = [];
  FEATURES.forEach((f) => { if (Array.isArray(f.presets) && f.presets.includes(key)) on.push(f.id); });
  Object.keys(PANEL_PRESETS).forEach((k) => { if (PANEL_PRESETS[k].includes(key)) on.push(k); });
  const updates = { _schemaVersion: SCHEMA_VERSION };
  BOOL_KEYS.forEach((k) => { updates[k] = on.includes(k); });
  saveSettings(updates);
  renderAll();
  setStatus(`Preset applied, ${on.length} rules on`);
}

function exportJson() {
  const payload = { _schemaVersion: SCHEMA_VERSION, masterEnabled: settings.masterEnabled !== false, customCSS: settings.customCSS || "", zappedSelectors: settings.zappedSelectors || [] };
  BOOL_KEYS.forEach((k) => { payload[k] = settings[k] === true; });
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "discord-debloater-settings.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus("Exported settings");
}

function importFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let parsed;
    try {
      parsed = JSON.parse(String(reader.result || ""));
    } catch {
      setStatus("Invalid JSON file");
      return;
    }
    if (!parsed || typeof parsed !== "object") {
      setStatus("Invalid JSON file");
      return;
    }
    const updates = { _schemaVersion: SCHEMA_VERSION };
    let count = 0;
    BOOL_KEYS.forEach((k) => {
      if (typeof parsed[k] === "boolean") { updates[k] = parsed[k]; count++; }
    });
    if (typeof parsed.masterEnabled === "boolean") updates.masterEnabled = parsed.masterEnabled;
    if (typeof parsed.customCSS === "string") updates.customCSS = parsed.customCSS;
    if (Array.isArray(parsed.zappedSelectors)) updates.zappedSelectors = parsed.zappedSelectors.filter((s) => typeof s === "string");
    saveSettings(updates);
    renderAll();
    setStatus(`Imported ${count} settings`);
  };
  reader.readAsText(file);
}

function startPicker() {
  if (!hasChrome || !chrome.tabs) return;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs && tabs[0];
    if (!tab || !tab.url || !/^https:\/\/([a-z0-9-]+\.)?discord\.com\//.test(tab.url)) {
      setStatus("Open a Discord tab first");
      return;
    }
    chrome.tabs.sendMessage(tab.id, { type: "START_ELEMENT_PICKER" }, () => {
      void chrome.runtime.lastError;
    });
    window.close();
  });
}

function init() {
  // Presets
  const presets = $("presetSelect");
  if (presets) {
    presets.addEventListener("change", () => {
      const v = presets.value;
      if (v) applyPreset(v);
      presets.selectedIndex = 0;
    });
  }
  $("enableAllBtn")?.addEventListener("click", () => applyPreset("all"));
  $("disableAllBtn")?.addEventListener("click", () => applyPreset("none"));

  // Search
  const search = $("searchInput");
  if (search) {
    search.addEventListener("input", () => {
      currentQuery = search.value.toLowerCase().trim();
      renderList();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== search && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
        e.preventDefault();
        search.focus();
      }
    });
  }

  // Category tabs
  document.querySelectorAll("#categoryTabs .tab").forEach((t) => {
    t.addEventListener("click", () => setCategory(t.dataset.category));
  });

  // Master pause
  $("masterToggle")?.addEventListener("change", (e) => {
    saveSettings({ masterEnabled: e.target.checked });
    renderAll();
    setStatus(e.target.checked ? "Rules resumed" : "All rules paused");
  });

  $("zapBtn")?.addEventListener("click", startPicker);

  // JSON
  $("exportBtn")?.addEventListener("click", exportJson);
  const importBtn = $("importBtn");
  const importInput = $("importFile");
  if (importBtn && importInput) {
    importBtn.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", () => {
      importFile(importInput.files && importInput.files[0]);
      importInput.value = "";
    });
  }

  loadSettings((s) => {
    settings = s;
    renderAll();
  });

  if (hasChrome && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== "local") return;
      const keys = Object.keys(changes).filter((k) => k !== "_compiledCssCache" && !k.startsWith("_"));
      if (keys.length === 0) return;
      for (const [k, c] of Object.entries(changes)) settings[k] = c.newValue;
      if (currentCategory === "custom" && document.activeElement && document.activeElement.tagName === "TEXTAREA") {
        renderHeader();
      } else {
        renderAll();
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
