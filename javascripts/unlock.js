$(window).load(function(){

  // two column layout
  if ($('.eaRightColumnContent').length && $('.eaLeftColumnContent').length) {
    sortTwoColumn();
    $('body').addClass('twocolumn');
    $('.eaSubmitResetButtonGroup').appendTo($('.en_left_wrapper').last());

    // put right column before left column
    $('.en_left_wrapper').each(function(){
      var id = $(this).attr('id').match(/[0-9]+$/);
      $(this).before($('#right_wrapper' + id[0]));
    });
  } else {
    $('body').addClass('onecolumn');
  }

  // enable Picker and Selector
  // see http://www.benplum.com/formstone/
  if (typeof $.fn.selecter == 'function') {
    $('select').selecter();
  }
  if (typeof $.fn.picker == 'function') {
    $('input[type=radio], input[type=checkbox]').picker();
  }

  // move validation icon next to label
  // and the error message below the label
  $('.eaErrorMessage').each(function() {
    var self = $(this);
    var label = self.siblings('.eaFormElementLabel');
    var field = self.siblings('.eaFormField');
    var icon = $('.eaValidationIcon', label.parent());
    icon.appendTo(label);
    self.appendTo(field);
  });

  // add class to field, where error occured
  $(window).on('DOMSubtreeModified', '.eaErrorMessage', function(e) {
    var self = $(e.target);
    if (!self.is(':empty')) {
      self.parent().not('form').addClass('validationError');
    }
  });

  // template signified by {}, between the braces is the initial value
  // no escaping of { or } possible, simply: do not use them as text
  // save the template in a variable for use below
  var origBtnLabel = $('.eaSubmitButton').val();
  // initialize with the default value
  var defaultBtnLabel = origBtnLabel.replace(/\{(.*)\}/, function (match, p1) {
    return p1;
  });
  $('.eaSubmitButton').val(defaultBtnLabel);
  // update the label on change
  $('[name="Donation amount"]').on('change', function() {
    var val = $('[name="Donation amount"]:checked').val();
    if (val == "Other") {
      val = $('[name="Donation amount"][type=text]').val();
    }
    var newBtnLabel = origBtnLabel.replace(/\{.*\}/, val);
    $('.eaSubmitButton').val(newBtnLabel);
  });
  //
  // configure progressbar = thermometer = counter
  var $thermometerEl = $('.pgbar-thermometer');
  var thermometerTarget = 250; // default
  var thermometerStart = 0; // default
  // read target value from data-target
  var thermometerDataTarget = $thermometerEl.data('target');
  if (typeof thermometerDataTarget !== 'undefined') {
    var parsedTarget = parseInt(thermometerDataTarget, 10);
    if (!isNaN(parsedTarget) && parsedTarget > 0) {
      thermometerTarget = parsedTarget;
    }
  }
  // read start value from data-start
  var thermometerDataStart = $thermometerEl.data('start');
  if (typeof thermometerDataStart !== 'undefined') {
    var parsedStart = parseInt(thermometerDataStart, 10);
    if (!isNaN(parsedStart) && parsedStart > 0) {
      thermometerStart = parsedStart;
    }
  }
  // initialize eActivistThermometer
  $thermometerEl.eActivistThermometer({
    token: '720b37fd-cb3c-4d2f-b01c-b7e634762fbf',
    campaignId: $('input[name="ea.campaign.id"]').val(),
    target: thermometerTarget,
    initialValue: thermometerStart,
    service: 'EaEmailAOTarget',
    targetDataColumn: 'participatingSupporters'
  });

});