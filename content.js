const swipeHandler = new Hammer(document.documentElement);

swipeHandler.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

swipeHandler.on('swipeleft', () => {
	chrome.runtime.sendMessage({ direction: 'left' });
});

swipeHandler.on('swiperight', () => {
	chrome.runtime.sendMessage({ direction: 'right' });
});
