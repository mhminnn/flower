onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('YEYYY, dapat bunga kuning ').split('');
    const titleElement = document.getElementById('title');
    titleElement.style.fontSize = "50px"; // ganti ukuran sesuai selera
    let index = 0;

    const img = document.createElement("img");
    img.src = "images/download.gif";
    img.width = 100;
    titleElement.appendChild(img);

    function appendTitle() {
      if (index < titles.length) {
        const span = document.createElement("span");
        span.textContent = titles[index];
        titleElement.appendChild(span);
        index++;
        setTimeout(appendTitle, 120);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
