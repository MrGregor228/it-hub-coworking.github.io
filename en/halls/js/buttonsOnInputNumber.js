jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-sort-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-sort-down"></i></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 0.5;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 0.5;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});


jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-sort-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-sort-down"></i></div></div>').insertAfter('.quantity .quant2 input');
jQuery('.quant2').each(function() {
  var spinners = jQuery(this),
    inpute = spinners.find('input[type="number"]'),
    btnUps = spinners.find('.quantity-up'),
    btnDowns = spinners.find('.quantity-down'),
    minimum = inpute.attr('min'),
    maximum = inpute.attr('max');

  btnUps.click(function() {
    var oldValues = parseFloat(inpute.val());
    if (oldValues >= maximum) {
      var newValue = oldValues;
    } else {
      var newValue = oldValues + 0.5;
    }
    spinners.find("input").val(newValue);
    spinners.find("input").trigger("change");
  });

  btnDowns.click(function() {
    var oldValues = parseFloat(inpute.val());
    if (oldValues <= minimum) {
      var newValue = oldValues;
    } else {
      var newValue = oldValues - 0.5;
    }
    spinners.find("input").val(newValue);
    spinners.find("input").trigger("change");
  });

});