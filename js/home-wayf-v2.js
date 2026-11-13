/* Comportements repris de la page de connexion : changement de vue (slide)
   et ombres haut/bas des zones scrollables. */
(function () {
  /* Recherche : clic sur la pilule = focus du champ ; pas d'envoi à vide */
  var sf = document.querySelector('.wayf-provider-btn--search');
  if (sf) {
    sf.addEventListener('click', function (e) { if (!e.target.closest('button')) sf.querySelector('input').focus(); });
    sf.addEventListener('submit', function (e) { var i = sf.querySelector('input'); if (!i.value.trim()) { e.preventDefault(); i.focus(); } });
  }
  function show(id) {
    document.querySelectorAll('.wayf-view-slide').forEach(function (v) {
      var on = v.id === id;
      v.hidden = !on;
      v.classList.toggle('is-entering', on);
    });
    var el = document.getElementById(id); if (el) { var vp = el.querySelector('[data-scroll]'); if (vp) vp.scrollTop = 0; updateShadows(el); }
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-go]'); if (b) show(b.getAttribute('data-go'));
  });
  function updateShadows(root) {
    (root || document).querySelectorAll('.wayf-scroll-area').forEach(function (a) {
      var vp = a.querySelector('.wayf-scroll-area__viewport'); if (!vp) return;
      var t = a.querySelector('.wayf-scroll-area__shadow--top'), b = a.querySelector('.wayf-scroll-area__shadow--bottom');
      if (t) t.dataset.visible = String(vp.scrollTop > 0);
      if (b) b.dataset.visible = String(vp.scrollTop + vp.clientHeight < vp.scrollHeight - 1);
    });
  }
  document.querySelectorAll('.wayf-scroll-area__viewport').forEach(function (vp) { vp.addEventListener('scroll', function () { updateShadows(vp.closest('.wayf-view-slide')); }); });
  window.addEventListener('resize', function () { updateShadows(); });
  updateShadows();
})();
