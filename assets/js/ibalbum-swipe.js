/* Touch navigation for the album's existing lightbox controls. */
(function () {
  'use strict';
  let gesture = null;

  document.addEventListener('touchstart', function (event) {
    gesture = null;
    if (event.touches.length !== 1) return;
    const image = event.target.closest('.al-lightbox-image');
    const overlay = image && image.closest('.al-lightbox-overlay.is-open');
    if (!overlay) return;
    const touch = event.touches[0];
    gesture = { id: touch.identifier, x: touch.clientX, y: touch.clientY, overlay: overlay };
  }, { passive: true });

  document.addEventListener('touchmove', function (event) {
    if (!gesture) return;
    if (event.touches.length !== 1) { gesture = null; return; }
    const touch = event.touches[0];
    if (touch.identifier !== gesture.id) { gesture = null; return; }
    const dx = touch.clientX - gesture.x;
    const dy = touch.clientY - gesture.y;
    if (Math.abs(dx) > 15 && Math.abs(dx) > Math.abs(dy) * 1.5 && event.cancelable) event.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', function (event) {
    const start = gesture;
    gesture = null;
    if (!start || event.touches.length || !start.overlay.classList.contains('is-open')) return;
    const touch = Array.from(event.changedTouches).find(function (item) { return item.identifier === start.id; });
    if (!touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const button = start.overlay.querySelector(dx < 0 ? '.al-lightbox-next' : '.al-lightbox-prev');
    if (!button || button.disabled) return;
    if (event.cancelable) event.preventDefault();
    button.click();
  }, { passive: false });

  document.addEventListener('touchcancel', function () { gesture = null; }, { passive: true });
})();
