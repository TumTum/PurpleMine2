var PurpleMine = PurpleMine || {}; // eslint-disable-line no-use-before-define


/**
 * Fetch per JavaScript paar doms um sie mit Classen zu füllen
 */
PurpleMine.zFetchDom =  (function () {
  'use strict'

  var instance

  function zFetchDom () {
    if (instance) {
      return instance
    }

    instance = this

    highlightNextStep()
  }

  /**
   *  Ticket: #10412 Hervorheben nächster schritt im Edit Bereich
   */
  function highlightNextStep() {
    $('#issue-form  #attributes  [name="issue[custom_field_values][161]"]').parent().addClass('highlightNextStep');
  }

  return zFetchDom
}())

