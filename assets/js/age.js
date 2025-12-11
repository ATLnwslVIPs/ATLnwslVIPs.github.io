document.addEventListener('DOMContentLoaded', function () {
  const nodes = document.querySelectorAll('.js-timeago');

  nodes.forEach(function (el) {
    const iso = el.getAttribute('datetime');
    if (!iso) return;

    const then = new Date(iso);
    const now  = new Date();
    const diffMs   = now - then;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    let text;

    if (diffDays < 1) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffHours < 1) {
        const diffMins = Math.max(1, Math.floor(diffMs / (1000 * 60)));
        text = diffMins + ' min ago';
      } else {
        text = diffHours + ' hour' + (diffHours === 1 ? '' : 's') + ' ago';
      }
    } else {
      text = diffDays + ' day' + (diffDays === 1 ? '' : 's') + ' ago';
    }

    el.textContent = text;
  });
});
