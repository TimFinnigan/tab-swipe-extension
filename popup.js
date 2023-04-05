document.getElementById('enableExtension').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0];
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ['content.js'],
		});
	});
});
