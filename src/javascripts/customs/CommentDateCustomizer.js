var CustomPurpleMine = CustomPurpleMine || {}

/**
 * Prototype für die geänderte Darstellung der Datumsanzeige der Kommentare.
 * Ticket #11027
 */
CustomPurpleMine.CommentDateCustomizer = (function () {
    var dayFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' }
    var timeFormatOptions = { hour: 'numeric', minute: 'numeric' }    
    var monthDifferences = {
        Mär : "Mar",
        Mai : "May",
        Okt : "Oct",
        Dez : "Dec",
    }

    // Verändere alle Datumswert der Kommentare und Änderungen in der Tickethistorie
    $("div.journal.has-details > div > h4, div.journal.has-notes > div > h4").each(function(i, obj) {
        var children = obj.childNodes
        var dateElement = children[5]
        var date = new Date(replaceGermanMonthNames(dateElement.title))
        if (isToday(date)) {
            children[4].textContent = " "
            dateElement.textContent = "heute"
        }
        else {
            children[4].textContent = " am "
            dateElement.textContent = date.toLocaleString('de-DE', dayFormatOptions)
        }
        dateElement.after(" um ", date.toLocaleString('de-DE', timeFormatOptions), " Uhr")        
    })

    /**
     * Ersetzt in einem String, alle deutschen Kurzformen der Monatsnamen mit den Englischen.
     * @param {*str zu bearbeitender String}  
     */
    function replaceGermanMonthNames(str) {        
        var re = new RegExp(Object.keys(monthDifferences).join("|"),"gi");    
        return str.replace(re, function(matched){
            return monthDifferences[matched];
        });
    }

    /**
     * Gibt zurück, ob das übergebene Datum heute ist.
     * @param {*date zu überprüfendes Datum} 
     */
    function isToday(date) {
        var today = new Date()
        return date.getDate() == today.getDate() &&
               date.getMonth() == today.getMonth() &&
               date.getFullYear() == today.getFullYear()
    }      
})