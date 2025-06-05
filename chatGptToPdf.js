javascript: (() => {
  const articles = document.getElementsByTagName('article');
  const html = document.createElement('div');
  const wnd = window.open('about:blank', '', '_blank');
  for (const article of articles) {
    html.innerHTML += article.innerHTML;
  }
  wnd.document.write(html.innerHTML);
  wnd.print();
})();
