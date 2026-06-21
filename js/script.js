function openTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.style.display = 'none';
  });
  document.getElementById(tabName).style.display = 'block';
}