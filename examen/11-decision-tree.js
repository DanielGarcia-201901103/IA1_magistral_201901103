async function fit_predict() {
    const { DecisionTreeClassifier, LabelEncoder, accuracyScore } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    // Datos del archivo pred.csv
    const D = [true, false, false, false, true, true, false, true, true, false]; // Columna 'D' (booleana)
    const E = ['N', 'P', 'P', 'N', 'P', 'P', 'N', 'P', 'N', 'P']; // Columna 'E' (etiqueta)

    // Mostrar la tabla
    const table = D.map((_, i) => [D[i], E[i]]);
    showTable(table);

    // Codificar las etiquetas 'E' (N -> 0, P -> 1)
    const myLabelEncoder = await LabelEncoder(); 
    const encoder = new myLabelEncoder();
    const encE = encoder.fitTransform(E);

    // Preparar características (X) y etiquetas (y)
    const X = D.map((dVal, i) => [dVal ? 1 : 0, encE[i]]); // Convertir booleano a 0/1
    const y = encE; // Etiquetas codificadas

    // Entrenar el modelo
    const myDecisionTree = await DecisionTreeClassifier(); 
    const model = new myDecisionTree();
    model.fit(X, y);

    // Predecir todas las filas
    const encYPredict = model.predict(X);
    const yPredict = encYPredict; // Ya está en 0/1 (no necesita inverseTransform)

    // Mostrar predicciones para todas las filas
    const predictions = X.map((row, i) => `Fila ${i + 1}: D=${row[0]}, E=${row[1]} → Predicción=${yPredict[i]}`);
    const log = document.getElementById('log');
    log.innerHTML = '<br><br>Predicciones para todas las filas:<br>' + predictions.join('<br>');
    log.innerHTML += '<br><br><strong>Predicción para la quinta fila (0 o 1):</strong><br>' + yPredict[4];
}

function showTable(table) {
    let container = document.getElementById('table-container');
    let tableElement = document.createElement('table');

    // Cabecera
    let header = tableElement.createTHead();
    let headerRow = header.insertRow();
    let headers = ['D', 'E'];
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