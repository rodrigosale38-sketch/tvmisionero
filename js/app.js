(function () {
  var S = window.SITE;
  var WA = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var $ = function (s) { return document.querySelector(s); };
  function wa(msg) { return 'https://wa.me/' + S.whatsapp + '?text=' + encodeURIComponent(msg); }

  // Tarjetas de la portada
  $('#cards').innerHTML = S.products.map(function (p) {
    var li = p.features.map(function (f) {
      return f.charAt(0) === '!' ? '<li class="warn">' + f.slice(1) + '</li>' : '<li>' + f + '</li>';
    }).join('');
    return '<section class="card ' + p.id + '"><div class="price">' + p.price + '<small>por mes</small></div>' +
      '<div class="logo"><img src="' + p.logo + '" alt="' + p.name + '"></div>' +
      '<h2>' + p.name + ': Características</h2><ul>' + li + '</ul>' +
      '<a class="btn" href="#' + p.id + '">Continuar</a></section>';
  }).join('');

  // Secciones de guía (una por producto)
  $('#guides').innerHTML = S.products.map(function (p) {
    return '<section class="page guide ' + p.id + '" id="g-' + p.id + '" hidden>' +
      '<a class="back" href="#">← Volver a los planes</a>' +
      '<div class="wrap">' +
      '<span class="tag">' + p.name + '</span>' +
      '<h1>Guías de instalación precisas</h1>' +
      '<p class="sub">Estimado usuario, aquí encontrará cómo instalar en su televisor Android / Google TV / TV Box y más abajo encontrará cómo instalarlo en un celular Android.</p>' +
      '<p class="notice">🚫 No es compatible con dispositivos ROKU ni iOS (iPhone)</p>' +
      '<h2 class="step">📺 Televisor Android / Google TV / TV Box</h2>' +
      '<div class="code" role="note"><i class="sp s1">✦</i><i class="sp s2">✦</i><i class="sp s3">✦</i><i class="sp s4">✦</i>' +
      '<span class="lbl">CÓDIGO DOWNLOADER</span><b>' + p.downloader + '</b></div>' +
      '<div class="vrow"><div class="vbox"><video controls playsinline preload="metadata"><source src="' + p.video + '" type="video/mp4">Su navegador no puede reproducir este video.</video></div>' +
      '<button class="btn alert" data-open="problems">⚠️ Posibles problemas que tengas al instalar</button></div>' +
      '<h2 class="step">📱 Celular Android</h2>' +
      '<div class="panel"><p>Descargue la aplicación directamente en su celular Android desde el siguiente botón.</p>' +
      '<a class="btn" href="' + p.mobileLink + '" target="_blank" rel="noopener">⬇ Descargar para celular Android</a></div>' +
      '<div class="actions">' +
      '<a class="btn wa" target="_blank" rel="noopener" href="' + wa('Hola! Necesito ayuda para instalar ' + p.name) + '">' + WA + ' Pedir ayuda personalizada por WhatsApp</a>' +
      '<a class="btn trial" target="_blank" rel="noopener" href="' + wa('Hola! Ya terminé de instalar ' + p.name + ', quiero solicitar la prueba gratis') + '">✅ Ya terminé de instalar, solicitar prueba gratis por WhatsApp</a>' +
      '</div></div></section>';
  }).join('');

  // Cartel de problemas
  $('#problemsList').innerHTML = S.problems.map(function (x) {
    return '<div class="prob"><h3>' + x.title + '</h3><p>' + x.text + '</p></div>';
  }).join('');
  var dlg = $('#problems');
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-open="problems"]')) dlg.showModal();
    if (e.target === dlg || e.target.id === 'closeDlg') dlg.close();
  });

  // Navegación fluida entre secciones (sin recargar ni abrir otra página)
  function route() {
    var id = location.hash.slice(1);
    var found = S.products.some(function (p) { return p.id === id; });
    $('#home').hidden = found;
    S.products.forEach(function (p) { $('#g-' + p.id).hidden = p.id !== id; });
    var t = found ? $('#g-' + id) : $('#home');
    window.scrollTo(0, 0);
    t.classList.remove('enter'); void t.offsetWidth; t.classList.add('enter');
    document.querySelectorAll('video').forEach(function (v) { v.pause(); });
  }
  window.addEventListener('hashchange', route);
  route();
})();
