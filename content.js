let lastWheelEventTime = 0;

function handleWheelEvent(e) {
	const currentTime = new Date().getTime();
	const timeDelta = currentTime - lastWheelEventTime;

	if (timeDelta < 500) {
		return;
	}

	lastWheelEventTime = currentTime;

	if (e.deltaX < -50) {
		chrome.runtime.sendMessage({ direction: 'right' });
	} else if (e.deltaX > 50) {
		chrome.runtime.sendMessage({ direction: 'left' });
	}
}

window.addEventListener('wheel', handleWheelEvent, { passive: true });
