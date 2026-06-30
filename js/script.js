function openTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');
  document.getElementById(tabName).style.display = 'block';
  event.target.classList.add('active');
}
