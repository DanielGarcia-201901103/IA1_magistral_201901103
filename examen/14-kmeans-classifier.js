async function fit_predict() {
    const { KMeans } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const X = [
        [3, 3], // Caso 1
        [2, 4], // Caso 4
        [2, 1], // Caso 6
        [3, 1], // Caso 8
        [1, 5], // Caso 14
        [2, 3]  // Caso 16
    ];

    showTable(X);

    const myKMeans = await KMeans(); 
    const model = new myKMeans(2, 300, 1e-4, 0);

    
    model.fit(X);

    const yPredict = model.predict(X);

    const centroids = model.getCentroids();
    
    const log = document.getElementById('log');
    log.innerHTML += '<br><br>Predict:<br>'+ JSON.stringify(yPredict, null, 2);

    log.innerHTML += '<br><br>Centroids:<br>'+ JSON.stringify(centroids, null, 2);

    
      
    
    
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Y');
    data.addColumn({ type: 'string', role: 'style' });


    const colores = ['red', 'green', 'blue']; // Colores por cluster

    // Armar los datos con colores
    const datosGraficados = X.map((p, i) => [p[0], p[1], `point { fill-color: ${colores[yPredict[i]]}; }`]);

    centroids.forEach(c => datosGraficados.push([c[0], c[1], 'point { fill-color: black; }']));

    data.addRows(datosGraficados);

    const options = {
        title: 'Clustering con KMeans',
        hAxis: { title: 'X' },
        vAxis: { title: 'Y' },
        legend: 'none',
        pointSize: 10
    };

    const chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    }


    // Calcular distancia Manhattan del punto A [3, 3] a su centroide
const pointA = [3, 3];
const clusterA = model.predict([pointA])[0];
const centroidA = centroids[clusterA];
const distance = Math.abs(pointA[0] - centroidA[0]) + Math.abs(pointA[1] - centroidA[1]);

log.innerHTML += `<br><br>Distancia Manhattan de A a su centroide: ${distance.toFixed(1)}`;
}

function showTable(table) {
    let container = document.getElementById('table-container');

    // Crear el elemento de la tabla
    let tableElement = document.createElement('table');

    // Crear la cabecera de la tabla
    let header = tableElement.createTHead();
    let headerRow = header.insertRow();
    let headers = ['X', 'Y'];
    headers.forEach(headerText => {
        let cell = headerRow.insertCell();
        cell.textContent = headerText;
    });

    // Crear el cuerpo de la tabla
    let body = tableElement.createTBody();
    table.forEach(rowData => {
        let row = body.insertRow();
        rowData.forEach(cellData => {
            let cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    // Insertar la tabla en el contenedor
    container.appendChild(tableElement);
}

fit_predict();
