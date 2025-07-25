window.addEventListener('load', () => {
  const container = document.getElementById('container');
  container.addEventListener('wheel', (event) => {
    container.scrollLeft += event.deltaY;
  });
});
