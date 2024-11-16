<?php
// Leggi il contenuto del file JSON
$json_data = file_get_contents('data.json');

// Decodifica i dati JSON in un array associativo
$data = json_decode($json_data, true);

// Verifica se i dati sono presenti e non vuoti
if (!empty($data['prodotti'])) {
    $index = 0;

    foreach ($data['prodotti'] as $prodotto) {
        // Verifica se la quantità è presente, altrimenti imposta a 0
        $prodotto['quantita'] = isset($prodotto['quantita']) ? $prodotto['quantita'] : 0;
        $prodotto['prezzo'] = isset($prodotto['prezzo']) ? number_format($prodotto['prezzo'], 2, '.', ',') : '0.00';

        echo '<div class="row border-bottom mb-2">';
        echo '<div class="col-12 col-md-4">';
        echo '<h3>' . $prodotto['nome'] . '</h3>';
        echo '<h5>' . $prodotto['descrizione'] . '</h5>';
        echo '</div>';
        echo '<div class="col-12 col-md-8">';
        echo '<div class="row">';
        echo '<div class="col-md-4 text-end h4">';
        echo '<h4 class="d-inline d-md-none">Prezzo: </h4>€ <span id="value-' . $index . '">' . $prodotto['prezzo'] . '</span>';
        echo '</div>';
        echo '<div class="col-md-4 text-end h4">';
        echo '<h4 class="d-inline d-md-none">Quantità: </h4><span id="minus-' . $index . '" onclick="remove(' . $index . ')" class="pointer">-</span> <span id="piece-' . $index . '">' . $prodotto['quantita'] . '</span> <span id="plus-' . $index . '" onclick="add(' . $index . ')" class="pointer">+</span>';
        echo '</div>';
        echo '<div class="col-md-4 text-end h4">';

        $totale_prodotto = number_format($prodotto['quantita'] * $prodotto['prezzo'], 2, '.', ',');
        echo '<h4 class="d-inline d-md-none">Totale: </h4>€ <span id="total-' . $index . '">' . $totale_prodotto . '</span>';


        echo '</div>';
        echo '</div>';
        echo '</div>';
        echo '</div>';

        $index++;
    }
} else {
    echo 'Nessun dato disponibile.';
}
?>
