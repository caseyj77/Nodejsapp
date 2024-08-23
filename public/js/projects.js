document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', function() {
      const detailsRow = this.closest('tr').nextElementSibling;
      detailsRow.style.display = detailsRow.style.display === 'none' || detailsRow.style.display === '' ? 'table-row' : 'none';
      this.textContent = detailsRow.style.display === 'table-row' ? '▲' : '▼';
    });
  });
  