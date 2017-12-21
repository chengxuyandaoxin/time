//logs.js
//var util = require('../../utils/util.js')

Page({
 data: {
  height: 20,
    focus: false


 },

bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  },



})




