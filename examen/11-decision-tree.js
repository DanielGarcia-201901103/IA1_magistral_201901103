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
    // X: Combinación de 'D' (booleana) y 'E' codificada (aunque 'E' es también la salida)
    const X = D.map((dVal, i) => [dVal ? 1 : 0, encE[i]]); // Convertir booleano a 0/1
    const y = encE; // Etiquetas codificadas

    // Entrenar el modelo
    const myDecisionTree = await DecisionTreeClassifier(); 
    const model = new myDecisionTree();
    model.fit(X, y);

    // Predecir la sexta fila (índice 5 en base 0)
    const sixthRow = X[5]; // [1, 1] (D=true, E='P' codificado como 1)
    const encYPredict = model.predict([sixthRow]);
    const yPredict = encYPredict[0]; // Ya está en 0/1 (no necesita inverseTransform)

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>Predicción para la sexta fila (0 o 1):<br>' + yPredict;
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