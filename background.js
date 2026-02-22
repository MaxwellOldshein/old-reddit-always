chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1],
        addRules: [
            {
                "id": 1,
                "priority": 2,
                "action": {
                    "type": "allow"
                },
                "condition": {
                    "regexFilter": "^https?://(www\\.)?reddit\\.com/(gallery|media).*",
                    "resourceTypes": ["main_frame"]
                }
            },
            {
                "id": 2,
                "priority": 1,
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "regexSubstitution": "https://old.reddit.com\\1"
                    }
                },
                "condition": {
                    "regexFilter": "^https?://(www\\.)?reddit\\.com(/.*)?$",
                    "resourceTypes": ["main_frame"]
                }
            }
        ]
    })
});