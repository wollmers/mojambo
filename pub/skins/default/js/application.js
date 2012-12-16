/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */


jQuery(function($){
    $.datepicker.regional['de'] = {
        closeText: 'schließen',
        prevText: '&#x3c;zurück',
        nextText: 'Vor&#x3e;',
        currentText: 'heute',
        monthNames: ['Januar','Februar','März','April','Mai','Juni',
        'Juli','August','September','Oktober','November','Dezember'],
        monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
        'Jul','Aug','Sep','Okt','Nov','Dez'],
        dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
        dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        weekHeader: 'Wo',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['de']);

    $.timepicker.regional['de'] = {
        timeOnlyTitle: 'Uhrzeit w&auml;hlen',
        timeText: 'Zeit',
        hourText: 'Stunde',
        minuteText: 'Minute',
        secondText: 'Sekunde',
        millisecText: 'Millisekunde',
        timezoneText: 'Zeitzone',
        currentText: 'Jetzt',
        closeText: '&Uuml;bernehmen',
        timeFormat: 'hh:mm tt',
        amNames: ['vorm.', 'AM', 'A'],
        pmNames: ['nachm.', 'PM', 'P'],
        ampm: false
    };
    $.timepicker.setDefaults($.timepicker.regional['de']);
});

/* switch skin */
/* TODO: save skin to user/session via Ajax */
/* TODO: make the code more flexible */
$('#skin-switcher a').click(function() {
    var style = $(this).attr('href').replace('#','');
    
    $('.skin').each(function(){
        if (this.href) {
            this.href = this.href.replace(/skins[/][^/]+[/]/,'skins/'+style+'/');
        }
        if (this.src) {
            this.src = this.src.replace(/skins[/][^/]+[/]/,'skins/'+style+'/');
        }
    });
});
    
$('.hasTimePicker').timepicker({ stepMinute: 5 });

$(function() {
    $('.datepicker').datepicker();
});
    
    
/* helper for sticky footer */
$(window).resize(function() {
    $('div.padder').height($('div.footer').height());
});
    
$(document).ready(function () {
    $('div.padder').height($('div.footer').height());
});
    
/* Portlets */ 
$(function() {
    $( ".column" ).sortable({
        connectWith: ".column"
    });
    $( ".column" ).disableSelection();
});

/* save a nested list via Ajax */
$('a#saver').click(function() {
    var arr = [];       
    $('div.column').each(function() {
      //var id = $(this).attr('id');
      var data = {
        column : $(this).attr('id'),
        portlets : $('#' + $(this).attr('id')).sortable('toArray')
      };
      arr.push(data);
   });
   alert(JSON.stringify(arr)); 
});


