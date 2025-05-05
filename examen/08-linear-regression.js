/*async function fit_predict_draw() {
    const { LinearRegression, joinArrays } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myLinearRegression = await LinearRegression(); 
    const model = new myLinearRegression();

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const A = [10.5, 9.8, 11.2, 9.2, 9.1, 10.8, 11.5, 11.2, 10.3, 9.7]; // Columna 'A'

    model.fit(NO, A);

    // Predecir para NO = 1
    const predictionFor1 = model.predict([5])[0];
    const flooredPrediction = Math.floor(predictionFor1 * 10) / 10; // 1 decimal sin redondear

    const log = document.getElementById('log');
    log.innerHTML = 'Predicción para NO=5: ' + flooredPrediction;
}

fit_predict_draw();*/

async function fit_predict_draw() {
    const { LinearRegression } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myLinearRegression = await LinearRegression(); 
    const model = new myLinearRegression();

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const A = [10.5, 9.8, 11.2, 9.2, 9.1, 10.8, 11.5, 11.2, 10.3, 9.7]; // Columna 'A'

    // Entrenar el modelo
    model.fit(NO, A);

    // Predecir para todos los valores de NO
    const predictions = NO.map(no => {
        const pred = model.predict([no])[0];
        return {
            NO: no,
            A: A[no-1], // Valor real
            Predicción: Math.floor(pred * 10) / 10 // Valor predicho con 1 decimal sin redondear
        };
    });

    // Formatear la salida
    const log = document.getElementById('log');
    let output = '<table border="1"><tr><th>NO</th><th>Valor Real (A)</th><th>Predicción</th></tr>';
    
    predictions.forEach(p => {
        output += `<tr><td>${p.NO}</td><td>${p.A}</td><td>${p.Predicción}</td></tr>`;
    });
    
    output += '</table>';
    log.innerHTML = output;
}

fit_predict_draw();