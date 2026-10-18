const CSS_RULES = {
  // 1. Active Now column on Friends page
  hideActiveNow: `
    [class*="nowPlayingColumn_"],
    aside[class*="refresh-active-now"] {
      display: none !important;
    }
  `,

  // 2. Nitro & Shop tabs in Direct Messages sidebar
  hideNitroShop: `
    [data-list-item-id*="___nitro"],
    [data-list-item-id*="___shop"],
    li:has(> div > a[href="/store"]),
    li:has(> div > a[href="/shop"]),
    a[href="/store"],
    a[href="/shop"],
    a[href^="/shop/"] {
      display: none !important;
    }
  `,

  // 3. Send a Gift button in chat input
  hideChatGift: `
    [class*="buttons_"] > div[class*="container_"]:has([aria-label="Send a gift"]),
    div[class*="container_"][style*="--custom-promotion-gradient"],
    [aria-label="Send a gift"],
    [aria-label="Upgrade to Nitro to send a gift"],
    [class*="trinketsIcon_"] {
      display: none !important;
    }
  `,

  // 4. Apps button in chat input
  hideChatApps: `
    [class*="app-launcher-entrypoint"],
    div[class*="buttonContainer_"]:has(> [aria-label="Apps"][role="button"]),
    div[aria-label="Apps"][role="button"],
    button[aria-label="Apps"] {
      display: none !important;
    }
  `,

  // 5. Chat GIF Picker button
  hideChatGifPicker: `
    .expression-picker-chat-input-button:has([aria-label="Open GIF picker"]),
    div[class*="buttonContainer_"]:has(> [aria-label="Open GIF picker"]),
    [aria-label="Open GIF picker"] {
      display: none !important;
    }
  `,

  // 6. Chat Sticker Picker button
  hideChatStickerPicker: `
    .expression-picker-chat-input-button:has([aria-label="Open sticker picker"]),
    .expression-picker-chat-input-button:has([class*="stickerButton_"]),
    div[class*="buttonContainer_"]:has(> [aria-label="Open sticker picker"]),
    [aria-label="Open sticker picker"],
    [class*="stickerButton_"] {
      display: none !important;
    }
  `,

  // 7. Chat Emoji Picker button
  hideChatEmojiPicker: `
    .expression-picker-chat-input-button:has([aria-label="Add Emoji"]),
    .expression-picker-chat-input-button:has([class*="emojiButton_"]),
    div[class*="buttonContainer_"]:has(> [aria-label="Add Emoji"]),
    [aria-label="Add Emoji"][class*="emojiButton_"] {
      display: none !important;
    }
  `,

  // 8. "Find or start a conversation" search button & outer container
  hideDMSearch: `
    div[class*="searchBar_"]:has(button[data-mana-component="button"]),
    div[class*="searchBar_"]:has(button[class*="fullWidth_"]),
    div[class*="searchBar_e6b769"],
    [class*="searchBar_"] button[data-mana-component="button"] {
      display: none !important;
    }
  `,

  // 9. Friends list search bar & outer container
  hideFriendsSearch: `
    div[class*="searchBar_"]:has(input[aria-label="Search"]),
    div[class*="searchBar_"]:has(input[placeholder="Search"]),
    div[class*="searchBar__5ec2f"],
    [class*="searchBar_"] input[aria-label="Search"] {
      display: none !important;
    }
  `,

  // 10. Friends header title, dot, and online count section
  hideFriendsHeader: `
    [class*="bar_"][data-window-chrome="true"] [class*="title_"],
    [class*="sectionTitle_"],
    [class*="dot__9293f"] {
      display: none !important;
    }
  `,

  // 11. Help button and Download Apps server dock icon
  hideHelpAndDownload: `
    a[href*="support.discord.com"][aria-label="Help"],
    [aria-label="Help"][role="button"],
    [data-list-item-id="guildsnav___app-download-button"],
    div[class*="listItem"]:has([data-list-item-id="guildsnav___app-download-button"]),
    [aria-label="Download Apps"] {
      display: none !important;
    }
  `,

  // 12. Server Dock "Discover" compass icon
  hideDiscoverButton: `
    div[class*="listItem"]:has([data-list-item-id="guildsnav___guild-discover-button"]),
    [data-list-item-id="guildsnav___guild-discover-button"] {
      display: none !important;
    }
  `,

  // 13. Inbox and New Group DM buttons
  hideTopToolbar: `
    [aria-label="Inbox"],
    [aria-label="New Group DM"],
    [class*="inviteToolbar_"] {
      display: none !important;
    }
  `,

  // 14. Friend row quick action buttons (Message / More options)
  hideFriendActions: `
    [class*="actions_fc004c"],
    [aria-label^="Message "][role="button"],
    [aria-label^="More options for "][role="button"] {
      display: none !important;
    }
  `,

  // 15. DM Header "Create Message" & "More" buttons
  hideDMHeaderActions: `
    [class*="headerActions_"],
    [aria-label="Create Message"],
    [class*="privateChannelRecipientsInviteButtonIconContainer_"] {
      display: none !important;
    }
  `,

  // 16. "Invite to Server" icon next to channels
  hideChannelInvite: `
    [class*="inviteButton_"][aria-label="Invite to Server"],
    [aria-label="Invite to Server"][role="button"] {
      display: none !important;
    }
  `,

  // 17. Context menu items: Invite to Server, Apps, Add Note, Start Call, Mute, Ignore
  cleanUserContextMenu: `
    #user-context-invite-to-server,
    #user-context-apps,
    #user-context-note,
    #user-context-call,
    #user-context-mute-channel,
    #user-context-ignore {
      display: none !important;
    }
  `,

  // 18. "Create Thread" in attach menu
  hideThreadCreate: `
    #channel-attach-THREAD {
      display: none !important;
    }
  `,

  // 19. Server menu "Privacy Settings"
  hideGuildPrivacy: `
    #guild-header-popout-privacy {
      display: none !important;
    }
  `,

  // 20. Adult age group warning notices and Confirm Age prompts
  hideAgeBanners: `
    [class*="noticeWrapper_"],
    [class*="container_"][class*="info_"]:has(button[aria-label="Dismiss"]),
    [data-testid*="age-verification"],
    [class*="ageVerification_"] {
      display: none !important;
    }
  `,

  // 21. Family Center in Settings and sidebar
  hideFamilyCenter: `
    [data-nav-anchor-key="account_family_center_category"],
    [data-nav-anchor-key="account_family_center_nested_panel"],
    [data-list-item-id="settings-sidebar___account_family_center_category"] {
      display: none !important;
    }
  `,

  // 22. Disable Account & Close Account buttons in Settings
  hideAccountRemoval: `
    [data-nav-anchor-key="account_removal_category"],
    [data-nav-anchor-key="account_disable_setting"],
    [data-nav-anchor-key="account_delete_setting"] {
      display: none !important;
    }
  `,

  // 23. "How Discord Uses My Data" disclaimer & Request Data button
  hideDataHarvestNotice: `
    [data-nav-anchor-key="data_usage_disclaimer_setting"],
    [data-nav-anchor-key="data_harvest_request_setting"],
    [data-list-item-id="settings-sidebar___data_usage_category"] {
      display: none !important;
    }
  `,

  // 24. Data usage toggles (Improve Discord, Personalization, Quests, Clips)
  hideDataUsageSettings: `
    [data-nav-anchor-key="data_usage_category"],
    [data-nav-anchor-key="data_usage_statistics_setting"],
    [data-nav-anchor-key="data_usage_personalization_setting"],
    [data-nav-anchor-key="data_usage_quests_setting"],
    [data-nav-anchor-key="data_usage_quests_3p_setting"],
    [data-nav-anchor-key="clips_allow_voice_recording_setting"] {
      display: none !important;
    }
  `,

  // 25. Activity Privacy server card and related links
  hideActivityPrivacy: `
    [data-nav-anchor-key="profile_privacy_to_activity_privacy_navigator"],
    [data-nav-anchor-key="profile_privacy_related_settings"] {
      display: none !important;
    }
  `,

  // 26. "Show personalized messages on incoming friend requests"
  hideFriendReqNote: `
    [data-nav-anchor-key="friend_requests_notes_setting"] {
      display: none !important;
    }
  `,

  // 27. Nitro Features Comparison Table and Fine Print
  hideNitroPricing: `
    [data-testid="v2-marketing-page-comparison-table"],
    [class*="tableWrapper__7eea4"],
    [class*="finePrint_df7724"],
    [class*="root__7eea4"],
    [class*="comparisonTable_"] {
      display: none !important;
    }
  `,

  // 28. "Gift Nitro, get a familiar" and promotional banners
  hideNitroPromotions: `
    [class*="giftCardPromotion_"],
    [class*="upsellBanner_"],
    [class*="premiumPromo_"] {
      display: none !important;
    }
  `,

  // 29. Server Boosts promos, perks tables, videos, and FAQ
  hideServerBoosts: `
    [class*="header_a0750b"],
    [class*="wrapper__629de"],
    [class*="wrapper__0a9d0"],
    [class*="wrapper__4b63d"],
    [class*="wrapper_a04c02"] {
      display: none !important;
    }
  `,

  // 30. Nitro Theme Upsell in Appearance ("Make your Discord look juuusst right")
  hideNitroThemeUpsell: `
    [class*="displayContainer_a1d343"],
    [class*="container_a1d343"],
    [class*="themeUpsell_"] {
      display: none !important;
    }
  `,

  // 31. Sticker & Game Mentions autocomplete settings
  hideAutocompleteSettings: `
    [data-nav-anchor-key="chat_stickers_autocomplete"],
    [data-nav-anchor-key="chat_game_mentions_autocomplete"] {
      display: none !important;
    }
  `,

  // 32. "Show send message button" setting
  hideSendButtonSetting: `
    [data-nav-anchor-key="enable_send_button_outside_experiment"] {
      display: none !important;
    }
  `,

  // 33. Diagnostic accordion & Reset Voice Settings button
  hideDiagnostics: `
    [data-nav-anchor-key="voice_and_video_diagnostics_accordion"],
    [data-nav-anchor-key="voice_and_video_reset_all_settings"] {
      display: none !important;
    }
  `,

  // 34. "Custom keybinds are not currently supported in the browser" notice
  hideKeybindsNotice: `
    [data-nav-anchor-key="system_custom_keybinds_category"],
    [data-nav-anchor-key="custom_keybinds_setting"] {
      display: none !important;
    }
  `,

  // 35. "Who Can Join My Games" setting and sidebar item
  hideJoinGamesCategory: `
    [data-nav-anchor-key="activity_sharing_game_joining_category"],
    [data-list-item-id="settings-sidebar___activity_sharing_game_joining_category"] {
      display: none !important;
    }
  `,

  // 36. Connections info paragraph
  hideConnectionsBlurb: `
    [data-nav-anchor-key="account_connections_category"] ~ div:has(> div > h2) p,
    [data-nav-anchor-key="account_connections_category"] [class*="description_"] {
      display: none !important;
    }
  `,

  // 37. Build hash & legal links footer (Privacy Policy, Terms of Service)
  hideVersionFooter: `
    [class*="compactInfo_"],
    [class*="links_b5b79f"],
    [class*="info_"] > [class*="line_"] {
      display: none !important;
    }
  `,

  // 38. "Other Places to Make Friends" header & "Explore Discoverable Servers" button
  hideExploreServersPromo: `
    [class*="header_a14595"],
    [class*="grid_a14595"],
    header:has(+ [class*="grid_"]),
    div:has(> button > [class*="text_a14595"]),
    button[class*="container_a14595"] {
      display: none !important;
    }
  `,

  // 39. Add Friend Wumpus illustration & helper container
  hideAddFriendWumpus: `
    [class*="addFriendWumpusWrapper_"],
    div:has(> img[alt="Wumpus Waving"]),
    img[alt="Wumpus Waving"] {
      display: none !important;
    }
  `,

  // 40. Add Friend page title & DM message disclaimer note
  hideAddFriendNoticeAndTitle: `
    [class*="title__94b08"],
    [class*="marginTop8_fd297e"],
    div[class*="marginTop8_"][style*="color: var(--text-subtle)"] {
      display: none !important;
    }
  `,

  // 41. Quest Home Hero Banner (matches [data-testid="quest-home-hero-banner"])
  hideQuestHeroBanner: `
    [data-testid="quest-home-hero-banner"],
    div[class*="wrapper__43da9"]:has([class*="contentWrapper__43da9"]),
    div[class*="wrapper_"]:has(> [class*="contentWrapper_"] [class*="sponsoredTag_"]),
    div[class*="wrapper_"]:has(> [class*="heroBackground_"] img[src*="/quests/"]) {
      display: none !important;
    }
  `,

  // 42. Sidebar Active Quest Progress Bar (matches [data-testid="quest-bar-container"])
  hideQuestBarContainer: `
    [data-testid="quest-bar-container"],
    div[class*="wrapper__0d616"]:has([class*="contentWrapper__0d616"]),
    div[class*="contentWrapper_"]:has([class*="questRewardTile_"]),
    [class*="questAcceptedContent_"],
    [class*="questProgressWrapper_"] {
      display: none !important;
    }
  `,

  // 43. Quests Navigation Tab & Sponsored Active Now Cards
  hideQuestsPromos: `
    [data-list-item-id*="___quests"],
    [data-testid="quest-bar-container"],
    li:has(> div > a[href="/quest-home"]),
    a[href="/quest-home"],
    a[href="/discovery/quests"],
    [class*="questPromo_"],
    [class*="questsBar_"],
    [class*="questMask_"],
    div[class^="itemCard__"]:has(span[class^="promotedTagBackground__"]) {
      display: none !important;
    }
  `,

  // 44. Clan / Server Tags in Chat (Cozy & Compact), Member List, Friends & Popouts
  hideClanTags: `
    [class*="clanTagChiplet"],
    span[class*="chipletContainer"],
    [class*="chipletContainerInner"],
    div[class*="compact_"] span[class*="clanTagChiplet"],
    div[class^="body_"] > span[class^="clickable_"] [role="button"],
    span[class*="clanTag_"],
    [class*="clanTag_"],
    [class*="guildTag_"],
    [class*="clanBadge_"] {
      display: none !important;
    }
  `,

  // 45. Avatar Decorations in Chat, Member List & Profiles
  hideAvatarDecorations: `
    svg[class^="avatarDecoration_"],
    img[class^="avatarDecoration_"],
    [class*="avatarDecoration_"] {
      display: none !important;
    }
  `,

  // 46. Profile Effects & Animated Profile Frames
  hideProfileEffects: `
    [class*="profileEffects_"],
    [class*="profileFrameContainer_"] {
      display: none !important;
    }
  `,

  // 47. Animated Video/Image Nameplates in DM List, Member List & User Panel
  hideNameplates: `
    li[class*="dm_"] > div > div[class*="container_"]:has(div[class^="videoContainer_"], img[class*="img_"]),
    div[class*="member_"] > div > div[class*="container_"] > :is(div[class^="videoContainer_"], img[class*="img_"]),
    div[class*="fitInAccount_"] > :is(div[class^="videoContainer_"], img[class*="img_"]) {
      display: none !important;
    }
    div[class*="member_"] > div > div[class*="container_"]:has(div[class^="videoContainer_"], img[class*="img_"]),
    div[class*="fitInAccount_"]:has(div[class^="videoContainer_"], img[class*="img_"]) {
      background: none !important;
    }
  `,

  // 48. Profile Shop, Floating Nitro & Emoji Inspection Upsells
  hideProfileShopUpsells: `
    [class*="shopBanner_"],
    [class*="collectiblesUpsell_"],
    [class*="profileEffectsUpsell_"],
    [class*="avatarDecorationUpsell_"],
    div[class^="settingsPage_"] > div > div[class*="floatingNitroUpsell_"],
    div[class^="settingsPage_"] > div > div > div[class*="tryItOutSection_"],
    aside[class*="upsellContainer_"],
    div[class^="characterCount_"] > div[class*="upsell_"],
    div[class^="emojiSection_"] > button[class^="shinyButton_"] {
      display: none !important;
    }
  `,

  // 49. Burst / Super Reactions Upsell, Effects & Shake Animation
  hideSuperReactions: `
    [aria-label="Add Super Reaction"],
    [class*="burstReactionTooltipUpsell_"],
    div[class*="burstReactionTooltipPrompt_"],
    [class*="superReaction_"],
    div[class^="effectsWrapper_"] {
      display: none !important;
    }
    div[class*="shakeReaction_"] {
      animation: none !important;
    }
  `,

  // 50. Voice Activity Launcher (Rocket Icon) & Activity Shelf
  hideVoiceActivities: `
    [aria-label="Start an Activity"],
    [aria-label="Activities"],
    button[aria-label*="Activity"][role="button"],
    [class*="activityPanel_"],
    [class*="channelAppLauncher_"] {
      display: none !important;
    }
  `,

  // 51. Soundboard Button & Nitro Entrance Sounds
  hideSoundboard: `
    [aria-label="Open Soundboard"],
    [aria-label="Soundboard"],
    [class*="soundboardButton_"],
    [data-nav-anchor-key*="soundboard"],
    [class*="soundboardUpsell_"] {
      display: none !important;
    }
  `,

  // 52. Voice Channel Status Prompt ("Set a voice channel status")
  hideVoiceChannelStatus: `
    [class*="channelStatus_"],
    [class*="voiceChannelStatus_"],
    [aria-label="Set a voice channel status"],
    [aria-label="Edit voice channel status"] {
      display: none !important;
    }
  `,

  // 53. Clips Button in Stream/Voice Controls
  hideClipsButton: `
    [aria-label="Save Clip"],
    [aria-label="Clip"],
    button[aria-label*="Clip"][role="button"],
    [class*="clipButton_"] {
      display: none !important;
    }
  `,

  // 54. Blocked Message Banners ("X Blocked Messages — Show")
  hideBlockedMessages: `
    [class*="blockedSystemMessage_"],
    div[class*="groupStart_"]:has([class*="blockedSystemMessage_"]),
    li:has(> div [class*="blockedSystemMessage_"]) {
      display: none !important;
    }
  `,

  // 55. "Wave to Say Hi" / Welcome Sticker Nudges
  hideWaveToSayHi: `
    [class*="welcomeCTA_"],
    [class*="welcomeCTAButton_"],
    [class*="compact_"] [class*="welcomeCTA_"] {
      display: none !important;
    }
  `,

  // 56. Server Boost Goal Bar at Top of Channel List
  hideServerBoostBar: `
    li:has([data-list-item-id^="channels___boosts"]),
    [data-list-item-id^="channels___boosts"],
    [class*="guildBoostProgressBar_"],
    [class*="premiumGuildProgressBar_"],
    div[class*="container_"]:has(> [class*="progressBar_"][class*="boost_"]) {
      display: none !important;
    }
  `,

  // 57. Server Special Tabs (Events, Server Guide, Server Shop, Channels & Roles)
  hideServerSpecialTabs: `
    li:has([data-list-item-id^="channels___upcoming-events"]),
    li:has([data-list-item-id^="channels___home"]),
    li:has([data-list-item-id^="channels___shop"]),
    li:has([data-list-item-id^="channels___channel-browser"]),
    li:has([data-list-item-id^="channels___customize-community"]),
    [data-list-item-id^="channels___upcoming-events"],
    [data-list-item-id^="channels___home"],
    [data-list-item-id^="channels___shop"],
    [data-list-item-id^="channels___channel-browser"],
    [data-list-item-id^="channels___customize-community"] {
      display: none !important;
    }
  `,

  // 58. Billing & Payment Sidebar Section in User Settings
  hideBillingSettings: `
    [data-list-item-id="settings-sidebar___billing_header"],
    [data-list-item-id="settings-sidebar___premium"],
    [data-list-item-id="settings-sidebar___subscriptions"],
    [data-list-item-id="settings-sidebar___guild_boosting"],
    [data-list-item-id="settings-sidebar___gifts"],
    [data-list-item-id="settings-sidebar___billing"],
    [data-nav-anchor-key*="billing"],
    [aria-label="User Settings"] [class*="item_"][data-tab-id="Discord Nitro"],
    [aria-label="User Settings"] [class*="item_"][data-tab-id="Subscriptions"],
    [aria-label="User Settings"] [class*="item_"][data-tab-id="Server Boost"],
    [aria-label="User Settings"] [class*="item_"][data-tab-id="Library Inventory"],
    [aria-label="User Settings"] [class*="item_"][data-tab-id="Billing"] {
      display: none !important;
    }
  `,

  // =========================================================================
  // DISCORD UX IMPROVEMENTS (59 - 70). Pure CSS. No opacity or dimming rules.
  // =========================================================================

  // 61. Channel/DM sidebar slides open on hover, otherwise shrinks to a 6px strip.
  improveAutoHideChannels: `
    div[class^="sidebar_"]:not(:hover):not(:focus-within) {
      width: 6px !important;
      min-width: 6px !important;
      max-width: 6px !important;
      overflow: hidden !important;
    }
    div[class^="sidebar_"]:hover,
    div[class^="sidebar_"]:focus-within {
      width: 240px !important;
      min-width: 240px !important;
      max-width: 240px !important;
      transition: width 0.35s cubic-bezier(0.32, 0.72, 0, 1) !important;
    }
  `,

  // 62. Server dock slides open on hover, otherwise shrinks to an 8px strip.
  improveAutoHideServers: `
    nav[aria-label="Servers sidebar"]:not(:hover):not(:focus-within) {
      width: 8px !important;
      min-width: 8px !important;
      max-width: 8px !important;
      overflow: hidden !important;
    }
    nav[aria-label="Servers sidebar"]:hover,
    nav[aria-label="Servers sidebar"]:focus-within {
      width: 72px !important;
      min-width: 72px !important;
      max-width: 72px !important;
      transition: width 0.35s cubic-bezier(0.32, 0.72, 0, 1) !important;
    }
  `,

  // 63. Member list slides open on hover, otherwise shrinks to a 6px strip.
  improveAutoHideMemberList: `
    [class*="membersWrap_"]:not(:hover):not(:focus-within) {
      width: 6px !important;
      min-width: 6px !important;
      max-width: 6px !important;
      overflow: hidden !important;
    }
    [class*="membersWrap_"]:hover,
    [class*="membersWrap_"]:focus-within {
      width: 240px !important;
      min-width: 240px !important;
      max-width: 240px !important;
      transition: width 0.35s cubic-bezier(0.32, 0.72, 0, 1) !important;
    }
  `,

  // 64. Tighter channel and DM row spacing.
  improveCompactChannels: `
    [data-list-item-id^="channels___"] {
      padding-top: 2px !important;
      padding-bottom: 2px !important;
      min-height: 28px !important;
    }
  `,

  // 65. Spoilers reveal while hovered.
  improveRevealSpoilersOnHover: `
    [class*="spoilerContainer_"]:hover {
      background: transparent !important;
    }
    [class*="spoilerContainer_"]:hover * {
      filter: none !important;
      visibility: visible !important;
    }
    [class*="spoilerContainer_"]:hover img,
    [class*="spoilerContainer_"]:hover video {
      filter: none !important;
    }
    [class*="spoilerContainer_"]:hover button,
    [class*="spoilerContainer_"]:hover [role="button"] {
      display: none !important;
    }
  `,

  // 66. Code blocks use the full message width and wrap long lines.
  improveFullWidthCodeBlocks: `
    [class*="codeContainer_"] {
      width: 100% !important;
      max-width: 100% !important;
    }
    [class*="codeContainer_"] pre,
    [class*="codeContainer_"] code {
      white-space: pre-wrap !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }
  `,

  // 67. Chat image previews can grow to 680px.
  improveWideChatImages: `
    [class*="imageWrapper_"] {
      max-width: min(680px, 100%) !important;
    }
    [class*="imageWrapper_"] img {
      max-width: 100% !important;
    }
  `,

  // 68. Profile bios and role lists are never truncated.
  improveShowFullBioAndRoles: `
    [class*="userBio_"],
    [class*="bioText_"] {
      max-height: none !important;
      -webkit-line-clamp: unset !important;
      overflow: visible !important;
      display: block !important;
    }
    [class*="rolesList_"] {
      max-height: none !important;
      overflow: visible !important;
    }
  `,

  // 69. Streamer privacy: DM names and avatars blur until the DM list is hovered.
  improveFocusModeBlurDMs: `
    nav[aria-label="Private channels"]:not(:hover) li[class*="channel_"]:not(:has([data-list-item-id*="friend" i])) [class*="name_"],
    nav[aria-label="Private channels"]:not(:hover) li[class*="channel_"]:not(:has([data-list-item-id*="friend" i])) [class*="avatar_"] {
      filter: blur(4px) !important;
      transition: filter 0.3s cubic-bezier(0.32, 0.72, 0, 1) !important;
    }
  `,

  // 70. Thin scrollbars.
  improveMinimalScrollbars: `
    *::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
    }
    *::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.14) !important;
      border-radius: 999px !important;
    }
    *::-webkit-scrollbar-track {
      background: transparent !important;
    }
  `
};

// Performance options (Discord settings > Debloater > Performance). CSS only.
const PERF_CSS = {
  perfNoBlur: `
    *, *::before, *::after {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }
  `,
  perfHideTyping: `
    div[class*="typing_"] {
      display: none !important;
    }
  `,
  perfHideGlow: `
    [class*="gradientBackground_"] {
      background-image: none !important;
      animation: none !important;
    }
  `,
  perfHideLinkPreviews: `
    [class*="embedWrapper_"] {
      display: none !important;
    }
  `,
  perfContainMessages: `
    li[class*="messageListItem_"] {
      contain: layout style !important;
    }
  `
};

// Motion options (Discord settings > Debloater > Motion). CSS only.
const MOTION_CSS = `
  *, *::before, *::after {
    transition-duration: 1ms !important;
    animation-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
`;

// Rows shown in Discord settings > Debloater.
const SETTINGS_RULE_ROWS = [
  ["hideBillingSettings", "Billing sidebar section", "Nitro, Server Boost, Subscriptions, Gift Inventory, Billing."],
  ["hideAgeBanners", "Age group warnings", "Adult content notices and Confirm Age banners."],
  ["hideFamilyCenter", "Family Center", "Removes Family Center from navigation and panels."],
  ["hideAccountRemoval", "Disable & delete account", "Hides the Disable Account and Delete Account buttons."],
  ["hideDataHarvestNotice", "Data disclaimer & export", "Hides How Discord Uses My Data and the Request Data panel."],
  ["hideDataUsageSettings", "Data tracking switches", "Hides Improve Discord, Personalization, Quests, and Clips."],
  ["hideActivityPrivacy", "Activity privacy card", "Removes the activity sharing card in privacy settings."],
  ["hideFriendReqNote", "Personalized requests", "Hides the personalized friend request setting."],
  ["hideAutocompleteSettings", "Autocomplete settings", "Hides sticker and game mention autocomplete toggles."],
  ["hideSendButtonSetting", "Send button setting", "Hides the Show send message button switch."],
  ["hideDiagnostics", "Voice diagnostics", "Hides the diagnostics accordion and reset button."],
  ["hideKeybindsNotice", "Unsupported keybinds notice", "Hides the browser notice in Custom Keybinds."],
  ["hideJoinGamesCategory", "Join games settings", "Removes Who Can Join My Games settings."],
  ["hideConnectionsBlurb", "Connections blurb", "Hides the intro paragraph in Connections settings."],
  ["hideVersionFooter", "Build hash & legal links", "Hides build info, Terms, Privacy, and More links."]
];
const PERF_ROWS = [
  ["perfNoBlur", "Disable background blur", "Removes backdrop blur on overlays. Lowers GPU work."],
  ["perfHideTyping", "Hide typing indicator", "Removes the animated typing dots above the chat bar."],
  ["perfHideGlow", "Hide animated gradient glow", "Stops the purple gradient animation (for example before joining voice). Trade-off: no glow."],
  ["perfHideLinkPreviews", "Hide link previews", "Hides link preview cards and their images. Trade-off: no inline previews."],
  ["perfContainMessages", "Contain message list layout", "Limits layout work per message while scrolling. May clip some popouts inside messages."]
];
const MOTION_ROWS = [
  ["reduceMotion", "Reduce motion", "Turns off Discord transitions and animations."],
  ["systemMotion", "Follow system setting", "Applies Reduce motion when the OS requests it."]
];

const SCHEMA_VERSION = 3;

let settingsCache = {};
let lastCompiledCss = null;
let adoptedSheet = null;

function buildDefaults() {
  const d = { _schemaVersion: SCHEMA_VERSION, masterEnabled: true, customCSS: "", zappedSelectors: [] };
  for (const k of Object.keys(CSS_RULES)) d[k] = false;
  for (const k of Object.keys(PERF_CSS)) d[k] = false;
  d.reduceMotion = false;
  d.systemMotion = false;
  return d;
}

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function motionReduced(s) {
  return s.reduceMotion === true || (s.systemMotion === true && prefersReducedMotion());
}

function compileCSS(s) {
  if (s.masterEnabled === false) return "";
  let out = "";
  for (const [k, css] of Object.entries(CSS_RULES)) {
    if (s[k] === true) out += css + "\n";
  }
  for (const [k, css] of Object.entries(PERF_CSS)) {
    if (s[k] === true) out += css + "\n";
  }
  if (motionReduced(s)) out += MOTION_CSS + "\n";
  if (Array.isArray(s.zappedSelectors)) {
    const valid = s.zappedSelectors.map((x) => String(x || "").trim()).filter(Boolean);
    if (valid.length) out += `\n${valid.join(",\n")} {\n  display: none !important;\n}\n`;
  }
  if (typeof s.customCSS === "string" && s.customCSS.trim()) out += `\n${s.customCSS.trim()}\n`;
  return out;
}

// Constructable stylesheet only. No <style> element is ever written into Discord's DOM.
function applyCompiledCSS(cssText) {
  if (cssText === lastCompiledCss) return;
  lastCompiledCss = cssText;
  try {
    if (!adoptedSheet) adoptedSheet = new CSSStyleSheet();
    adoptedSheet.replaceSync(cssText);
    if (!document.adoptedStyleSheets.includes(adoptedSheet)) {
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, adoptedSheet];
    }
  } catch {}
}

function storeSet(obj) {
  try {
    chrome.storage.local.set(obj);
  } catch {}
}

function applySettings(s) {
  settingsCache = s;
  const css = compileCSS(s);
  applyCompiledCSS(css);
  if (css !== "") storeSet({ _compiledCssCache: css });
  if (activePage) renderPanel();
}

function setSetting(key, value) {
  settingsCache = { ...settingsCache, [key]: value };
  applySettings(settingsCache);
  storeSet({ [key]: value });
}

// Animation helpers. GSAP is loaded from lib/gsap.min.js into the isolated world.
function animateIn(el, y = 10) {
  if (typeof gsap === "undefined" || motionReduced(settingsCache)) return;
  gsap.fromTo(el, { opacity: 0, y }, { opacity: 1, y: 0, duration: 0.42, ease: "power3.out", clearProps: "transform,opacity" });
}

function pop(el) {
  if (typeof gsap === "undefined" || motionReduced(settingsCache)) return;
  gsap.fromTo(el, { scale: 0.86 }, { scale: 1, duration: 0.36, ease: "back.out(2)", clearProps: "transform" });
}

// ---- Debloater category inside Discord's own User Settings sidebar ----
// Pages: Settings rules, Performance, Motion. Each page renders in a fixed panel
// over the settings content area. Only inline styles and a closed Shadow Root are used.
const DEBLOATER_LOGO_URI = "data:image/png;base64,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";
const PAGE_ICON_ATTR = 'width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
const DEBLOATER_PAGES = [
  { id: "rules", label: "Settings rules", title: "Settings rules", sub: "Hide Discord settings sections. Changes apply instantly.", icon: `<svg ${PAGE_ICON_ATTR}><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>` },
  { id: "performance", label: "Performance", title: "Performance", sub: "Optional CSS-only changes. Turn off any of them at any time.", icon: `<svg ${PAGE_ICON_ATTR}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>` },
  { id: "motion", label: "Motion", title: "Motion", sub: "Turn off Discord transitions and animations.", icon: `<svg ${PAGE_ICON_ATTR}><circle cx="12" cy="12" r="9"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>` }
];
const ITEM_CSS = [
  "display:flex", "align-items:center", "gap:10px", "min-height:32px", "padding:6px 10px",
  "border-radius:4px", "cursor:pointer", "color:#b5bac1",
  "font:500 16px/20px 'gg sans','Segoe UI',Roboto,Arial,sans-serif"
].join(";");

let activePage = null;
let categoryEl = null;
let pageItems = {};
let panelHost = null;
let panelShadow = null;
let panelEl = null;
let titleEl = null;
let subEl = null;

function settingsSidebarList() {
  return document.querySelector('ul[data-list-id="settings-sidebar"]');
}

function settingsAside() {
  const list = settingsSidebarList();
  return list ? list.closest("aside") : null;
}

function styleItem(link, active) {
  link.style.background = active ? "#404249" : "transparent";
  link.style.color = active ? "#ffffff" : "#b5bac1";
}

function updateItems() {
  for (const p of DEBLOATER_PAGES) {
    const link = pageItems[p.id];
    if (link) styleItem(link, activePage === p.id);
  }
}

function injectSettingsEntry() {
  const list = settingsSidebarList();
  if (!list) return;
  if (categoryEl && list.contains(categoryEl)) return;

  categoryEl = document.createElement("li");
  categoryEl.style.cssText = "list-style:none;margin:16px 0 0 0;padding:0;";

  const head = document.createElement("div");
  head.style.cssText = "display:flex;align-items:center;gap:8px;padding:0 10px 6px 10px;";
  const logo = document.createElement("img");
  logo.src = DEBLOATER_LOGO_URI;
  logo.width = 28;
  logo.height = 28;
  logo.alt = "";
  logo.style.cssText = "display:block;width:28px;height:28px;";
  const heading = document.createElement("h3");
  heading.textContent = "Debloater";
  heading.style.cssText = "margin:0;font:600 12px/16px 'gg sans','Segoe UI',Roboto,Arial,sans-serif;text-transform:uppercase;letter-spacing:0.02em;color:#949ba4;";
  head.appendChild(logo);
  head.appendChild(heading);

  const ul = document.createElement("ul");
  ul.style.cssText = "list-style:none;margin:0;padding:0;";

  for (const p of DEBLOATER_PAGES) {
    const li = document.createElement("li");
    li.style.cssText = "list-style:none;margin:0;padding:0;";
    const link = document.createElement("div");
    link.setAttribute("role", "link");
    link.setAttribute("tabindex", "0");
    link.style.cssText = ITEM_CSS;
    link.innerHTML = p.icon;
    const labelEl = document.createElement("span");
    labelEl.textContent = p.label;
    link.appendChild(labelEl);
    link.addEventListener("mouseenter", () => { if (activePage !== p.id) link.style.background = "#35373c"; });
    link.addEventListener("mouseleave", () => { if (activePage !== p.id) link.style.background = "transparent"; });
    link.addEventListener("click", () => openPage(p.id));
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPage(p.id); }
    });
    li.appendChild(link);
    ul.appendChild(li);
    pageItems[p.id] = link;
  }

  categoryEl.appendChild(head);
  categoryEl.appendChild(ul);
  list.appendChild(categoryEl);
  updateItems();
}

function ensurePanel() {
  if (panelHost && panelHost.isConnected) return;
  panelHost = document.createElement("div");
  panelHost.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;z-index:2147483000;display:none;";
  panelShadow = panelHost.attachShadow({ mode: "closed" });
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(`
    :host { all: initial; }
    .panel {
      position: fixed; box-sizing: border-box; overflow: hidden;
      background: #313338; color: #dbdee1; padding: 60px 40px 40px 40px;
      font-family: "gg sans", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      display: flex; flex-direction: column;
    }
    h2 { margin: 0 0 4px 0; font: 600 20px/24px "gg sans", "Segoe UI", Roboto, Arial, sans-serif; color: #f2f3f5; }
    .sub { font-size: 14px; line-height: 18px; color: #949ba4; margin-bottom: 20px; }
    .rows { overflow-y: auto; flex: 1; padding-right: 8px; }
    .row {
      display: flex; align-items: center; justify-content: space-between; gap: 24px;
      padding: 14px 0; border-bottom: 1px solid #3f4147;
    }
    .row-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .row-title { font: 500 16px/20px "gg sans", "Segoe UI", Roboto, Arial, sans-serif; color: #f2f3f5; }
    .row-desc { font-size: 14px; line-height: 18px; color: #949ba4; }
    .switch { position: relative; width: 40px; height: 24px; flex-shrink: 0; }
    .switch input { position: absolute; opacity: 0; width: 100%; height: 100%; margin: 0; cursor: pointer; z-index: 1; }
    .track {
      position: absolute; inset: 0; border-radius: 12px; background: #80848e; pointer-events: none;
      transition: background-color 0.25s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .knob {
      position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 50%;
      background: #ffffff; pointer-events: none;
      transition: transform 0.25s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .switch input:checked ~ .track { background: #23a559; }
    .switch input:checked ~ .knob { transform: translateX(16px); }
    .close {
      position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border: 0; border-radius: 50%;
      background: transparent; color: #b5bac1; font-size: 20px; line-height: 1; cursor: pointer;
    }
    .close:hover { background: #3f4147; color: #f2f3f5; }
    .close:focus-visible { outline: 2px solid #5865f2; outline-offset: 2px; }
    .empty { color: #949ba4; font-size: 14px; padding: 16px 0; }
  `);
  panelShadow.adoptedStyleSheets = [sheet];

  panelEl = document.createElement("div");
  panelEl.className = "panel";

  const close = document.createElement("button");
  close.type = "button";
  close.className = "close";
  close.setAttribute("aria-label", "Close");
  close.textContent = "\u00d7";
  close.addEventListener("click", () => closePage());

  titleEl = document.createElement("h2");
  subEl = document.createElement("div");
  subEl.className = "sub";
  const rows = document.createElement("div");
  rows.className = "rows";

  panelEl.append(close, titleEl, subEl, rows);
  panelShadow.appendChild(panelEl);
  document.body.appendChild(panelHost);
}

function pageDefs(id) {
  if (id === "performance") return PERF_ROWS;
  if (id === "motion") return MOTION_ROWS;
  return SETTINGS_RULE_ROWS;
}

function renderPanel() {
  if (!panelShadow || !activePage) return;
  const page = DEBLOATER_PAGES.find((p) => p.id === activePage);
  titleEl.textContent = page.title;
  subEl.textContent = page.sub;

  const rowsEl = panelShadow.querySelector(".rows");
  rowsEl.textContent = "";
  pageDefs(activePage).forEach(([id, title, desc]) => {
    const row = document.createElement("div");
    row.className = "row";
    const text = document.createElement("div");
    text.className = "row-text";
    const t = document.createElement("div");
    t.className = "row-title";
    t.textContent = title;
    const d = document.createElement("div");
    d.className = "row-desc";
    d.textContent = desc;
    text.append(t, d);

    const sw = document.createElement("label");
    sw.className = "switch";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = settingsCache[id] === true;
    input.setAttribute("aria-label", title);
    input.addEventListener("change", () => setSetting(id, input.checked));
    const track = document.createElement("span");
    track.className = "track";
    const knob = document.createElement("span");
    knob.className = "knob";
    sw.append(input, track, knob);

    row.append(text, sw);
    rowsEl.appendChild(row);
  });
}

function positionPanel() {
  if (!activePage || !panelEl) return;
  const aside = settingsAside();
  if (!aside) {
    closePage();
    return;
  }
  const r = aside.getBoundingClientRect();
  // Keep the panel on screen even when the settings sidebar touches the right edge.
  const left = Math.max(0, Math.min(r.right, window.innerWidth - 480));
  panelEl.style.left = `${Math.round(left)}px`;
  panelEl.style.top = `${Math.round(r.top)}px`;
  panelEl.style.width = `${Math.max(320, Math.round(window.innerWidth - left - 60))}px`;
  panelEl.style.height = `${Math.round(r.height)}px`;
}

function openPage(id) {
  if (!settingsAside()) return;
  const wasOpen = activePage !== null;
  ensurePanel();
  activePage = id;
  panelHost.style.display = "block";
  renderPanel();
  positionPanel();
  updateItems();
  if (!wasOpen) animateIn(panelEl, 12);
}

function closePage() {
  if (!activePage) return;
  activePage = null;
  if (panelHost) panelHost.style.display = "none";
  updateItems();
}

// Escape closes the Debloater page.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activePage) closePage();
});

// Clicking any other Discord settings item closes the Debloater page.
document.addEventListener("click", (e) => {
  if (!activePage) return;
  const path = e.composedPath ? e.composedPath() : [];
  if (panelHost && path.includes(panelHost)) return;
  if (categoryEl && path.includes(categoryEl)) return;
  const aside = settingsAside();
  if (aside && path.includes(aside)) closePage();
}, true);

window.addEventListener("resize", () => positionPanel());

let domSyncQueued = false;
function scheduleDomSync() {
  if (domSyncQueued) return;
  domSyncQueued = true;
  setTimeout(() => {
    domSyncQueued = false;
    injectSettingsEntry();
    if (activePage) positionPanel();
  }, 150);
}

// ---- Live Element Picker / Zapper (closed Shadow Root, neutral Discord colors) ----
let zapperActive = false;
let zapperHost = null;
let zapperOverlay = null;
let zapperHud = null;
let lastHoveredEl = null;

function buildSmartSelector(el) {
  if (!el || el === document.body || el === document.documentElement) return null;
  const testId = el.getAttribute("data-testid");
  if (testId) return `[data-testid="${CSS.escape(testId)}"]`;
  const listItemId = el.getAttribute("data-list-item-id");
  if (listItemId) return `[data-list-item-id="${CSS.escape(listItemId)}"]`;
  const navAnchor = el.getAttribute("data-nav-anchor-key");
  if (navAnchor) return `[data-nav-anchor-key="${CSS.escape(navAnchor)}"]`;
  const ariaLabel = el.getAttribute("aria-label");
  const tag = el.tagName.toLowerCase();
  if (ariaLabel && ariaLabel.length < 48) return `${tag}[aria-label="${CSS.escape(ariaLabel)}"]`;
  const classes = Array.from(el.classList || []);
  const hashed = classes.find((c) => /_[a-f0-9]{5,6}$/i.test(c));
  if (hashed) return `${tag}[class*="${hashed}"]`;
  if (classes.length > 0) return `${tag}.${classes.slice(0, 2).map((c) => CSS.escape(c)).join(".")}`;
  return null;
}

function stopElementPicker() {
  if (!zapperActive) return;
  zapperActive = false;
  lastHoveredEl = null;
  window.removeEventListener("mousemove", onZapperMove, true);
  window.removeEventListener("click", onZapperClick, true);
  window.removeEventListener("keydown", onZapperKeydown, true);
  if (zapperHost) zapperHost.remove();
  zapperHost = null;
  zapperOverlay = null;
  zapperHud = null;
}

function onZapperMove(e) {
  if (!zapperActive) return;
  const target = e.target;
  if (!target || target === zapperHost || target === panelHost) return;
  lastHoveredEl = target;
  const rect = target.getBoundingClientRect();
  if (zapperOverlay) {
    zapperOverlay.style.top = `${rect.top}px`;
    zapperOverlay.style.left = `${rect.left}px`;
    zapperOverlay.style.width = `${rect.width}px`;
    zapperOverlay.style.height = `${rect.height}px`;
    zapperOverlay.style.display = "block";
  }
  const code = zapperHud && zapperHud.querySelector("code");
  if (code) code.textContent = buildSmartSelector(target) || target.tagName.toLowerCase();
}

function onZapperClick(e) {
  if (!zapperActive) return;
  if (e.target === zapperHost) {
    stopElementPicker();
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  const selector = buildSmartSelector(lastHoveredEl || e.target);
  stopElementPicker();
  if (!selector) return;
  chrome.storage.local.get({ zappedSelectors: [] }, (data) => {
    const list = Array.isArray(data.zappedSelectors) ? data.zappedSelectors : [];
    if (!list.includes(selector)) list.push(selector);
    setSetting("zappedSelectors", list);
  });
}

function onZapperKeydown(e) {
  if (e.key === "Escape") {
    e.preventDefault();
    e.stopPropagation();
    stopElementPicker();
  }
}

function startElementPicker() {
  if (zapperActive || !document.body) return;
  zapperActive = true;
  zapperHost = document.createElement("div");
  const shadow = zapperHost.attachShadow({ mode: "closed" });

  zapperOverlay = document.createElement("div");
  zapperOverlay.style.cssText = "position:fixed;pointer-events:none;z-index:2147483646;border:2px solid #5865f2;border-radius:4px;background:rgba(88,101,242,0.12);display:none;";

  zapperHud = document.createElement("div");
  zapperHud.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:2147483647;background:#313338;color:#dbdee1;border-radius:8px;padding:8px 12px;font:13px 'gg sans','Segoe UI',Roboto,Arial,sans-serif;display:flex;align-items:center;gap:10px;box-shadow:0 8px 24px rgba(0,0,0,0.5);";
  zapperHud.innerHTML = `<span style="font-weight:600;color:#f2f3f5;">Select an element</span><code style="background:#1e1f22;padding:2px 6px;border-radius:4px;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">...</code><span style="color:#949ba4;">Click to hide - Esc to cancel</span>`;

  shadow.appendChild(zapperOverlay);
  shadow.appendChild(zapperHud);
  document.documentElement.appendChild(zapperHost);

  window.addEventListener("mousemove", onZapperMove, true);
  window.addEventListener("click", onZapperClick, true);
  window.addEventListener("keydown", onZapperKeydown, true);
}

// ---- Boot ----
function init() {
  try {
    chrome.storage.local.get(null, (stored) => {
      stored = stored || {};
      const merged = { ...buildDefaults(), ...stored };
      if (stored._schemaVersion !== SCHEMA_VERSION) storeSet({ _schemaVersion: SCHEMA_VERSION });
      applySettings(merged);
      const start = () => {
        scheduleDomSync();
        new MutationObserver(scheduleDomSync).observe(document.body, { childList: true, subtree: true });
      };
      if (document.body) start();
      else document.addEventListener("DOMContentLoaded", start, { once: true });
    });

    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== "local") return;
      const relevant = Object.keys(changes).some((k) => k !== "_compiledCssCache");
      if (!relevant) return;
      const next = { ...settingsCache };
      for (const [k, c] of Object.entries(changes)) next[k] = c.newValue;
      applySettings(next);
    });

    chrome.runtime.onMessage.addListener((msg) => {
      if (msg && msg.type === "START_ELEMENT_PICKER") startElementPicker();
    });
  } catch {}
}

init();
