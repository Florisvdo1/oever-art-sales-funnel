/*
 * Client‑side JavaScript for the luxury one‑page funnel. It handles
 * insertion of the current year into the footer so the site stays up to
 * date automatically. More complex back‑end functionality could be
 * integrated here when needed.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});