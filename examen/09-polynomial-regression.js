/*async function fit_predict_draw() {
    const { PolynomialRegression, joinArrays } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myPolynomialRegression = await PolynomialRegression(); 
    const model = new myPolynomialRegression(3); // Exponente 3

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const C = [400.5, 405.8, 410.9, 425.4, 450.1, 500.5, 575.7, 456.5, 320.1, 221.9]; // Columna 'C'

    model.fit(NO, C);

    const yPredict = model.predict(NO);
    const mse = model.mse(C, yPredict); // Error cuadrático medio
    const r2 = model.r2(C, yPredict);

    const log = document.getElementById('log');
    log.innerHTML = 'MSE: ' + Math.floor(mse * 10) / 10 +'R2: '+r2;; // Mostrar con 1 decimal sin aproximar

    // Opcional: Gráfica (si se desea visualizar)
    const myjoinArrays = await joinArrays();
    const arr = myjoinArrays('x', NO, 'y', C, 'yPredict', yPredict);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);    
    function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);
        var options = {
            series: {
                0: {type: 'scatter'},
                1: {type: 'line', curveType: 'function'}
            }
        };  
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);         
    }
}

fit_predict_draw();*/
/*
async function fit_predict_draw() {
    const { PolynomialRegression, joinArrays } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myPolynomialRegression = await PolynomialRegression(); 
    const model = new myPolynomialRegression(3); // Exponente 3

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const C = [400.5, 405.8, 410.9, 425.4, 450.1, 500.5, 575.7, 456.5, 320.1, 221.9]; // Columna 'C'

    model.fit(NO, C);

    // Predecir para NO = 15
    const predictionFor15 = model.predict([15])[0];
    const flooredPrediction = Math.floor(predictionFor15 * 10) / 10; // 1 decimal sin redondear

    const log = document.getElementById('log');
    log.innerHTML = 'Predicción para NO=15: ' + flooredPrediction;
}

fit_predict_draw();
*/
async function fit_predict_draw() {
    const { PolynomialRegression, joinArrays } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myPolynomialRegression = await PolynomialRegression(); 
    const model = new myPolynomialRegression(3); // Exponente 3

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const C = [400.5, 405.8, 410.9, 425.4, 450.1, 500.5, 575.7, 456.5, 320.1, 221.9]; // Columna 'C'

    model.fit(NO, C);

    // Predecir para todos los valores de NO
    const predictions = NO.map(no => {
        const pred = model.predict([no])[0];
        return {
            NO: no,
            Real: C[no-1], // Valor real de C
            Prediccion: Math.floor(pred * 10) / 10 // Valor predicho con 1 decimal sin redondear
        };
    });

    // Mostrar resultados en una tabla
    const log = document.getElementById('log');
    let html = '<table border="1"><tr><th>NO</th><th>Valor Real (C)</th><th>Predicción</th><th>Diferencia</th></tr>';
    
    predictions.forEach(p => {
        const diff = Math.floor((p.Real - p.Prediccion) * 10) / 10;
        html += `<tr>
            <td>${p.NO}</td>
            <td>${p.Real}</td>
            <td>${p.Prediccion}</td>
            <td>${diff}</td>
        </tr>`;
    });
    
    html += '</table>';
    log.innerHTML = html;

    // Opcional: Mostrar también la predicción para NO=15
    const predictionFor15 = model.predict([15])[0];
    const flooredPrediction15 = Math.floor(predictionFor15 * 10) / 10;
    log.innerHTML += '<br><br>Predicción para NO=15: ' + flooredPrediction15;
}

fit_predict_draw();