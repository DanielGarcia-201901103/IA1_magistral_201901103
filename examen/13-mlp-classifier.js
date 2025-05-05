/*async function fit_predict() {
    const { MLPClassifier, accuracyScore } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    // Datos de la compuerta OR
    const X = [[0, 0], [0, 1], [1, 0], [1, 1]]; // Entradas
    const y = [0, 1, 1, 1]; // Salidas (tabla de verdad OR)

    // Configurar el modelo: 2 nodos de entrada, 1 oculto, 1 de salida
    const myMLPClassifier = await MLPClassifier(); 
    const model = new myMLPClassifier(2, 1, 1); // input_nodes=2, hidden_nodes=1, output_nodes=1

    // Entrenar el modelo
    model.fit(X, y);

    // Predecir y calcular accuracy
    const yPredict = X.map(input => Math.round(model.predict(input)[0])); // Redondear a 0 o 1
    const myAccuracyScore = await accuracyScore();
    const accuracy = myAccuracyScore(y, yPredict);

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>Accuracy (Precisión): ' + accuracy;
}

fit_predict();*/
async function fit_predict() {
    const { MLPClassifier, accuracyScore } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    // Datos de la compuerta AND
    const X = [[0, 0], [0, 1], [1, 0], [1, 1]]; // Entradas
    const y = [0, 0, 0, 1]; // Salidas (tabla de verdad AND)

    // Configurar el modelo: 2 nodos de entrada, 2 ocultos, 1 de salida
    const myMLPClassifier = await MLPClassifier(); 
    const model = new myMLPClassifier(2, 2, 1); // input_nodes=2, hidden_nodes=2, output_nodes=1

    // Entrenar el modelo
    model.fit(X, y);

    // Predecir y calcular accuracy
    const yPredict = X.map(input => Math.round(model.predict(input)[0])); // Redondear a 0 o 1
    const myAccuracyScore = await accuracyScore();
    const accuracy = myAccuracyScore(y, yPredict);

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>Accuracy (Precisión): ' + accuracy;
}

fit_predict();