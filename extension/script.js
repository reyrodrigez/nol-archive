(() => {
  const getUrl = () => {
    return [
      document.location.protocol,
      '//',
      'nol.hu',
      document.location.pathname
    ].join('');
  };

  const fuckNer = () => {
    document.getElementsByTagName('h1')[0].textContent = 'Fuck NER!';
    document.getElementsByTagName('p')[0].textContent = 'megyünk az archívumba';
  };

  const gotoWayback = (url) => {
    document.location = url;
  };

  const url = getUrl();
  fuckNer();
  gotoWayback(`http://web.archive.org/web/${url}`);
})();
