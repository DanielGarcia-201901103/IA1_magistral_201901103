async function fit_predict_draw() {
    const { PolynomialRegression, joinArrays } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myPolynomialRegression = await PolynomialRegression(); 
    const model = new myPolynomialRegression(3); // Exponente 3

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const C = [400.5, 405.8, 410.9, 425.4, 450.1, 500.5, 575.7, 456.5, 320.1, 221.9]; // Columna 'C'

    model.fit(NO, C);

    const yPredict = model.predict(NO);
    const mse = model.mse(C, yPredict); // Error cuadrático medio

    const log = document.getElementById('log');
    log.innerHTML = 'MSE: ' + Math.floor(mse * 10) / 10; // Mostrar con 1 decimal sin aproximar

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

fit_predict_draw();