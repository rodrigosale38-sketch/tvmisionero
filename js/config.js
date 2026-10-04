/* ====== DATOS EDITABLES ======
   Acá cambiás precios, códigos Downloader, links de celular y textos. */
window.SITE = {
  whatsapp: "5493765247994",   // tu número con código de país (sin + ni espacios)
  problems: [
    { title: "«NO SE HA PODIDO INSTALAR LA APLICACIÓN»",
      text: "Estimado usuario, es muy posible que necesite liberar espacio de almacenamiento. Vaya a Ajustes del televisor, busque el apartado de Aplicaciones y desinstale las aplicaciones que no use. Luego vuelva a intentar la instalación." },
    { title: "«DOWNLOADER NO TIENE PERMISOS PARA INSTALAR FUENTES DESCONOCIDAS»",
      text: "No se preocupe, es normal. Solo debe ir a Ajustes desde el mismo cartel que le aparece, habilitar a Downloader, salir y volver a intentar la instalación." }
  ],
  products: [
    { id: "stella", name: "Stella TV", price: "$12.000", logo: "img/stella.webp",
      downloader: "6277541", video: "videos/stella_video.mp4", mobileLink: "https://bit.ly/4bg5tgE",
      features: [
        "Muchas series y películas",
        "Muchos canales de televisión nacionales de Argentina e internacionales",
        "Canales de adultos con código de seguridad",
        "Pack fútbol y deportes en general",
        "Delay de 2 minutos en la transmisión en vivo",
        "Calidad de canales ESTÁNDAR",
        "Mínimo de internet: 20 megas o más (si hay muchos dispositivos en su hogar se recomiendan más megas)",
        "Canales funcionales sin cortes" ] },
    { id: "flujo", name: "Flujo TV", price: "$11.200", logo: "img/flujo.jpg",
      downloader: "3627194", video: "videos/flujo_video.mp4", mobileLink: "https://da.gd/f1ViQ",
      features: [
        "Muchas series y películas",
        "Muchos canales de televisión nacionales de Argentina e internacionales",
        "Canales de adultos con código de seguridad",
        "Pack fútbol y deportes en general",
        "Delay de 2 minutos en la transmisión en vivo",
        "Calidad de canales ESTÁNDAR",
        "Mínimo de internet: 15 megas o más (si hay muchos dispositivos en su hogar se recomiendan más megas)",
        "!Algunos canales se cortan por momentos (Telefe es uno de ellos)" ] },
    { id: "femon", name: "Femon Plus", price: "$8.000", logo: "img/femon.svg",
      downloader: "5065230", video: "videos/femon_video.mp4", mobileLink: "https://app.femon.net/femonplus/descargas/femonappplus.html",
      features: [
        "Canales de TV, deportes y pack fútbol",
        "Delay de 2 segundos",
        "Canales con calidad FULL HD / ALTA",
        "Requisito de internet: 3 megas o más",
        "Más de 50 mil películas en alta calidad (para verlas en alta calidad se necesita mejor internet)",
        "!Aclaración: tiene series, pero el buscador no las encuentra, hay que buscarlas a mano",
        "Pack de adultos con código de seguridad" ] }
  ]
};
