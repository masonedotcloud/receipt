function roundToTwoDecimals(num) {
    return num.toFixed(2); // Arrotonda a due decimali e restituisce come stringa "0.00"
}

function updateQuantity(id, increment) {
    const pieceElement = document.getElementById('piece-' + id);
    const totalElement = document.getElementById('total-' + id);
    const valueElement = document.getElementById('value-' + id);
    const subTotalElement = document.getElementById('sub-total');
    const overlaySubTotalElement = document.getElementById('value-overlay-sub-total');

    let quantity = parseInt(pieceElement.textContent);
    quantity = Math.max(quantity + increment, 0);
    pieceElement.textContent = quantity;

    const price = parseFloat(valueElement.textContent);
    const total = roundToTwoDecimals(quantity * price);

    totalElement.textContent = total;

    const subTotal = roundToTwoDecimals(parseFloat(subTotalElement.textContent) + (increment * price));
    subTotalElement.textContent = roundToTwoDecimals(Math.max(subTotal, 0));

    overlaySubTotalElement.textContent = roundToTwoDecimals(Math.max(subTotal, 0));
}


function remove(id) {
    updateQuantity(id, -1);
}

function add(id) {
    updateQuantity(id, 1);
}


function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('it-IT', options);
}


window.jsPDF = window.jspdf.jsPDF;

// Convert HTML content of a specific element to PDF
function Convert_HTML_To_PDF() {

    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
        return;
    }

    if (!lightSwitch.checked) {
    
        var element = document.querySelector("#content");

        // Ottenere le dimensioni dell'elemento HTML
        var width = element.offsetWidth + 50;
        var height = element.offsetHeight + 20;

        // Creare un nuovo documento PDF con le dimensioni dell'elemento HTML
        var doc = new jsPDF('p', 'pt', [width, height]);

        // Convertire l'HTML in PDF
        doc.html(element, {
            callback: function (doc) {
                // Salvare il PDF
                doc.save('document-html.pdf');
            },
            margin: [10, 20, 0, 20],
            x: 0,
            y: 0
        });
    }
}





document.addEventListener('DOMContentLoaded', function () {
    const dataDiv = document.getElementById('current-date');
    dataDiv.innerText = formatDate(new Date());

    const url = 'data.php'; // Sostituisci con il percorso corretto al tuo script PHP

    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            document.getElementById('inner-tbody').innerHTML = data;
        },
        error: function (xhr, status, error) {
            console.error('Si è verificato un errore durante la richiesta:', error);
        }
    });


    window.addEventListener('scroll', controllaVisibilita);

    function controllaVisibilita() {
        const divRiferimento = document.getElementById('sub-total');
        const divDaMostrare = document.getElementById('overlay-sub-total');

        const rect = divRiferimento.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (!(rect.top < windowHeight && rect.bottom >= 0)) {
            divDaMostrare.style.display = 'block';
        } else {
            divDaMostrare.style.display = 'none';
        }
    }





}, false);

