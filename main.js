import './styles/main.scss';

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(`modal-backdrop-${modalId.split('-')[1]}`);

  if (modal) {
    modal.classList.add('open');
    backdrop.style.display = 'block';

    const closeButtons = modal.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => closeModal(modalId));
    });
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(`modal-backdrop-${modalId.split('-')[1]}`);

  if (modal) {
    modal.classList.remove('open');
    backdrop.style.display = 'none';
  }
}

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    openModal(modalId);
  });
});

document.getElementById('darkModeToggle').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});

document.getElementById('darkModeToggleSidebar').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('dark-mode', this.checked);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('navbar-menu');
  this.classList.toggle('open');
  menu.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const sidebar = document.querySelector('.sidebar');
  const closeSidebarButton = document.querySelector('.sidebar-close');

  toggler.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
  });

  closeSidebarButton.addEventListener('click', function () {
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  });
});