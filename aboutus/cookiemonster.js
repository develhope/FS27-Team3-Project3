 const closeButton = document.querySelector('.close-button'); // Selezioniamo il pulsante "Chiudi"
  const cookiesBox = document.querySelector('.cookies-box'); // Selezioniamo il container del banner

  closeButton.addEventListener('click', () => {
    cookiesBox.style.display = 'none'; // Nascondiamo il banner
  });

