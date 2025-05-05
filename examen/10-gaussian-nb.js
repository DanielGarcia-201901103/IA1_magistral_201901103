async function fit_predict() {
    const { GaussianNB, LabelEncoder, accuracyScore } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    // Datos del archivo pred.csv
    const data = [
        [10.5, 1, 400.5, 'N'],
        [9.8, 5, 405.8, 'P'],
        [11.2, 20, 410.9, 'P'],
        [9.2, 60, 425.4, 'N'],
        [9.1, 90, 450.1, 'P'],
        [10.8, 120, 500.5, 'P'],
        [11.5, 180, 575.7, 'N'],
        [11.2, 220, 456.5, 'P'],
        [10.3, 340, 320.1, 'N'],
        [9.7, 410, 221.9, 'P']
    ];

    // Mostrar la tabla
    showTable(data);

    // Extraer características (X) y etiquetas (y)
    const X = data.map(row => [row[0], row[1], row[2]]); // Columnas A, B, C
    const y = data.map(row => row[3]); // Columna E

    // Codificar las etiquetas si es necesario (aunque ya son 'N' y 'P')
    const myLabelEncoder = await LabelEncoder();
    const encoder = new myLabelEncoder();
    const encY = encoder.fitTransform(y);

    // Entrenar el modelo
    const myGaussianNB = await GaussianNB();
    const model = new myGaussianNB();
    model.fit(X, encY);

    // Predecir la sexta fila (índice 5 en base 0)
    const sixthRow = X[5]; // [10.8, 120, 500.5]
    const encYPredict = model.predict([sixthRow]);
    const yPredict = encoder.inverseTransform(encYPredict);

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>Predicción para la sexta fila:<br>' + yPredict[0];
}

function showTable(table) {
    let container = document.getElementById('table-container');
    let tableElement = document.createElement('table');

    // Cabecera
    let header = tableElement.createTHead();
    let headerRow = header.insertRow();
    let headers = ['A', 'B', 'C', 'E'];
    headers.forEach(headerText => {
        let cell = headerRow.insertCell();
        cell.textContent = headerText;
    });

    // Cuerpo
    let body = tableElement.createTBody();
    table.forEach(rowData => {
        let row = body.insertRow();
        rowData.forEach(cellData => {
            let cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    container.appendChild(tableElement);
}

fit_predict();