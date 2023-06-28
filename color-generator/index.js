function generateColor() {
    let color = '#';
    let digits = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      let randomDigit = Math.floor(Math.random() * 16);
      color += digits[randomDigit];
    }

    document.querySelector('#color').innerHTML = color;
    document.body.style.backgroundColor = color;
  }

  generateColor();