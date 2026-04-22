 function changeQty(btn, delta) {
      const wrap = btn.closest('.qty-control');
      const val = wrap.querySelector('.qty-value');
      let n = parseInt(val.textContent) + delta;
      if (n < 1) n = 1;
      val.textContent = n;
    }

    document.querySelectorAll('.btn-remove').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.product-card');
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        card.style.opacity = '0';
        card.style.transform = 'translateX(20px)';
        setTimeout(() => card.remove(), 300);
      });
    });