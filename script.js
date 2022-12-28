function handle_click() {
    var x = document.getElementById('Display');
    var btn=document.getElementById('enter_png');
    if (x.style.display === 'none' ) {
      x.style.display = 'block';
      btn.style.display='none';
    } else {
      x.style.display = 'none';
    }
  }