$('input#cardnumber')
  .keypress(function (event) {
    // El código del carácter 0 es 48
    // El código del carácter 9 es 57
    if (event.which < 48 || event.which > 57 || this.value.length === 4) {
      return false;
    }
  });
  $(document).ready(function () {
  $('input#cardnumber')
    .keypress(function (event) {
      if (event.which < 48 || event.which > 57 || this.value.length === 4) {
        return false;
      }
    });
});


$('input#cardnumber1')
  .keypress(function (event) {
    // El código del carácter 0 es 48
    // El código del carácter 9 es 57
    if (event.which < 48 || event.which > 57 || this.value.length === 2) {
      return false;
    }
  });
  $(document).ready(function () {
  $('input#cardnumber1')
    .keypress(function (event) {
      if (event.which < 48 || event.which > 57 || this.value.length === 2) {
        return false;
      }
    });
});

$('input#cardnumber2')
  .keypress(function (event) {
    // El código del carácter 0 es 48
    // El código del carácter 9 es 57
    if (event.which < 48 || event.which > 57 || this.value.length === 4) {
      return false;
    }
  });
  $(document).ready(function () {
  $('input#cardnumber2')
    .keypress(function (event) {
      if (event.which < 48 || event.which > 57 || this.value.length === 4) {
        return false;
      }
    });
});

