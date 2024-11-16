# Receipt

**Progetto Receipt** è un'applicazione web progettata per generare ricevute interattive. Permette di visualizzare, modificare e stampare ricevute in formato HTML, oppure esportarle come file PDF.


## **Funzionalità principali**
1. **Visualizzazione dei prodotti**:
   - Elenco dinamico di prodotti con dettagli come prezzo, quantità e totale.
   - Interfaccia reattiva che permette l'interazione diretta con i prodotti (es. modifica quantità).

2. **Calcolo dinamico dei totali**:
   - Il totale complessivo si aggiorna automaticamente in base alle modifiche delle quantità.

3. **Modalità chiara/scura**:
   - Commutazione tra modalità chiara e scura per migliorare l'esperienza utente.

4. **Esportazione**:
   - **Stampa**: Possibilità di stampare la ricevuta.
   - **Esportazione in PDF**: Utilizzo della libreria `jspdf` per convertire la pagina in PDF.

5. **Dati dinamici**:
   - I dati dei prodotti sono caricati da un file JSON (`data.json`) e mostrati dinamicamente.


## **Requisiti**
- **Frontend**:
  - HTML5 e CSS3
  - Bootstrap 5.3.2
  - jQuery 3.6.4

- **Backend**:
  - PHP per caricare dinamicamente i dati da file JSON.

- **Librerie JavaScript**:
  - [html2canvas](https://html2canvas.hertzen.com/) per acquisire l'immagine della pagina.
  - [jspdf](https://github.com/parallax/jsPDF) per generare PDF.


## **Struttura del progetto**
### **File principali**
1. **`index.html`**: La pagina principale che mostra la ricevuta.
2. **`script.js`**: Contiene le funzioni JavaScript per l'interazione dinamica (es. aggiungere/rimuovere quantità).
3. **`view-mode.js`**: Gestisce la modalità chiara/scura.
4. **`data.json`**: File contenente i dati dei prodotti in formato JSON.
5. **`style.css`**: File CSS opzionale per personalizzazioni aggiuntive.
6. **`functions.php`**: Genera il contenuto dinamico della ricevuta.


## **Installazione**
1. **Clona il repository**:
   ```bash
   git clone https://github.com/masonedotcloud/receipt.git
   ```
2. **Configurazione server**:
   - Copia il progetto nella root di un server locale o remoto (es. XAMPP, WAMP, Nginx).
   - Assicurati che PHP sia attivo.

3. **Modifica dati**:
   - Modifica il file `data.json` per aggiungere o aggiornare i prodotti.

4. **Accesso**:
   - Apri il browser e vai su `http://localhost/receipt`.


## **Utilizzo**
1. **Visualizzazione ricevuta**:
   - La pagina mostra l'elenco dei prodotti con i relativi dettagli.
   
2. **Modifica interattiva**:
   - Clicca sui pulsanti "+" o "-" per modificare la quantità.
   - Il totale complessivo si aggiornerà automaticamente.

3. **Esportazione e stampa**:
   - Usa i pulsanti in basso a destra per stampare la ricevuta o esportarla come PDF.


## **Dipendenze**
- **Bootstrap**: Gestione del layout responsivo.
- **jQuery**: Manipolazione DOM e funzioni AJAX.
- **html2canvas** e **jspdf**: Per funzionalità di esportazione in PDF.

## Licenza

Questo progetto è distribuito sotto la Licenza MIT - vedi il file [LICENSE](LICENSE) per ulteriori dettagli.


## Autore

Questo progetto è stato creato da [alessandromasone](https://github.com/alessandromasone).