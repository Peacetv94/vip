function periksaDomain() {
  const allowedDomains = ['https://cobaedithtml.blogspot.com/', 'https://peacetv01.blogspot.com/','https://peacetvid.blogspot.com/','https://ratix94.blogspot.com/','https://peace-live-tv.blogspot.com/'];
  const referrer = document.referrer;
  let isAllowed = false;

  allowedDomains.forEach(domain => {
    if (referrer.startsWith(domain)) {
      isAllowed = true;
    }
  });

  if (!isAllowed) {
    window.location.replace("https://peace-live-tv.blogspot.com/");
  }
}

periksaDomain();
