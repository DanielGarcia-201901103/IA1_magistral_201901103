/*async function fit_predict() {
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

fit_predict();*/
/*
async function fit_predict() {
    const { GaussianNB } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    // Datos del archivo pred.csv
    const A = [10.5, 9.8, 11.2, 9.2, 9.1, 10.8, 11.5, 11.2, 10.3, 9.7]; // Columna 'A'
    const B = [1, 5, 20, 60, 90, 120, 180, 220, 340, 410]; // Columna 'B'
    const C = [400.5, 405.8, 410.9, 425.4, 450.1, 500.5, 575.7, 456.5, 320.1, 221.9]; // Columna 'C'
    const E = ['N', 'P', 'P', 'N', 'P', 'P', 'N', 'P', 'N', 'P']; // Columna 'E' (etiqueta)

    // Preparar características (X) y etiquetas (y)
    const X = A.map((_, i) => [A[i], B[i], C[i]]); // Combinar A, B, C
    const y = E; // Etiquetas originales (no se codifican)

    // Entrenar el modelo
    const myGaussianNB = await GaussianNB(); 
    const model = new myGaussianNB();
    model.fit(X, y);

    // Predecir la séptima fila (índice 6 en base 0)
    const seventhRow = X[6]; // [11.5, 180, 575.7]
    const yPredict = model.predict([seventhRow])[0]; // Predicción directa (no se codifica)

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>Predicción para la séptima fila:<br>' + yPredict;
}

fit_predict();*/
async function fit_predict() {
    const { GaussianNB } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const A = [10.5, 9.8, 11.2, 9.2, 9.1, 10.8, 11.5, 11.2, 10.3, 9.7]; // Columna 'A'
    const B = [1, 5, 20, 60, 90, 120, 180, 220, 340, 410]; // Columna 'B'
    const C = [400.5, 405.8, 410.9, 425.4, 450.1, 500.5, 575.7, 456.5, 320.1, 221.9]; // Columna 'C'
    const E = ['N', 'P', 'P', 'N', 'P', 'P', 'N', 'P', 'N', 'P']; // Columna 'E' (etiqueta)

    // Preparar características (X) y etiquetas (y)
    const X = A.map((_, i) => [A[i], B[i], C[i]]); // Combinar A, B, C
    const y = E; // Etiquetas originales

    // Entrenar el modelo
    const myGaussianNB = await GaussianNB(); 
    const model = new myGaussianNB();
    model.fit(X, y);

    // Predecir todas las filas
    const predictions = X.map((row, i) => {
        return {
            NO: NO[i],
            A: A[i],
            B: B[i],
            C: C[i],
            Real: E[i],
            Prediccion: model.predict([row])[0]
        };
    });

    // Mostrar resultados en una tabla
    const log = document.getElementById('log');
    let html = '<table border="1"><tr><th>NO</th><th>A</th><th>B</th><th>C</th><th>Real (E)</th><th>Predicción</th></tr>';
    
    predictions.forEach(p => {
        html += `<tr>
            <td>${p.NO}</td>
            <td>${p.A}</td>
            <td>${p.B}</td>
            <td>${p.C}</td>
            <td>${p.Real}</td>
            <td>${p.Prediccion}</td>
        </tr>`;
    });
    
    html += '</table>';
    log.innerHTML = html;
}

fit_predict();