async function switchTab(direction) {
	try {
		const tabs = await chrome.tabs.query({ currentWindow: true });
		const currentTab = tabs.find((tab) => tab.active);
		let newIndex = currentTab.index + direction;

		if (newIndex < 0) {
			newIndex = tabs.length - 1;
		} else if (newIndex >= tabs.length) {
			newIndex = 0;
		}

		chrome.tabs.update(tabs[newIndex].id, { active: true });
	} catch (error) {
		console.error('Error in switchTab:', error);
	}
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.direction === 'left') {
		switchTab(-1);
	} else if (request.direction === 'right') {
		switchTab(1);
	}
});
