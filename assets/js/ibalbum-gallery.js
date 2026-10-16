/* IBAlbum: preserve photo proportions and place each photo in the shortest column. */
(function () {
  'use strict';
  const gallery = document.querySelector('.album-gallery');
  if (!gallery) return;
  const photos = Array.from(gallery.querySelectorAll('.album-photo'));
  if (!photos.length) return;
  // Keep newest activities at the top; undated club gatherings follow them.
  photos.sort((a, b) => (b.dataset.date || '').localeCompare(a.dataset.date || ''));
  const gap = 14;
  let lastWidth = 0;
  let lastColumns = 0;
  let frame = 0;
  function layout(force = false) {
    const width = gallery.clientWidth;
    const columns = window.innerWidth >= 900 ? 3 : window.innerWidth >= 576 ? 2 : 1;
    if (!width || (!force && width === lastWidth && columns === lastColumns)) return;
    lastWidth = width;
    lastColumns = columns;
    const columnWidth = (width - gap * (columns - 1)) / columns;
    const heights = new Array(columns).fill(0);
    gallery.style.setProperty('--album-column-width', columnWidth + 'px');
    photos.forEach(photo => {
      const image = photo.querySelector('img');
      const imageWidth = Number(image.getAttribute('width')) || image.naturalWidth || 4;
      const imageHeight = Number(image.getAttribute('height')) || image.naturalHeight || 3;
      const column = heights.indexOf(Math.min(...heights));
      photo.style.transform = 'translate3d(' + column * (columnWidth + gap) + 'px,' + heights[column] + 'px,0)';
      heights[column] += columnWidth * imageHeight / imageWidth + gap;
    });
    gallery.style.setProperty('--album-height', Math.max(...heights) - gap + 'px');
    gallery.classList.add('is-positioned');
  }
  function schedule() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => layout());
  }
  photos.forEach(photo => {
    const image = photo.querySelector('img');
    if (!image.hasAttribute('width') || !image.hasAttribute('height')) image.addEventListener('load', () => layout(true));
  });
  layout();
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(gallery);
  window.addEventListener('resize', schedule);

  // Keep links from Home NEWS working after removing the year sections.
  function openLinkedPhoto() {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    if (!hash.startsWith('activity-')) return;
    const photo = photos.find(item => item.dataset.activity === hash);
    if (photo) photo.click();
  }
  window.addEventListener('hashchange', openLinkedPhoto);
  if (document.readyState === 'complete') requestAnimationFrame(openLinkedPhoto);
  else window.addEventListener('load', openLinkedPhoto, { once: true });
})();
