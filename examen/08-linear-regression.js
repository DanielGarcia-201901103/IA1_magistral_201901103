async function fit_predict_draw() {
    const { LinearRegression, joinArrays } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const myLinearRegression = await LinearRegression(); 
    const model = new myLinearRegression();

    // Datos del archivo pred.csv
    const NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Columna 'NO'
    const A = [10.5, 9.8, 11.2, 9.2, 9.1, 10.8, 11.5, 11.2, 10.3, 9.7]; // Columna 'A'

    model.fit(NO, A);

    // Predecir para NO = 1
    const predictionFor1 = model.predict([1])[0];
    const flooredPrediction = Math.floor(predictionFor1 * 10) / 10; // 1 decimal sin redondear

    const log = document.getElementById('log');
    log.innerHTML = 'Predicción para NO=1: ' + flooredPrediction;
}

fit_predict_draw();