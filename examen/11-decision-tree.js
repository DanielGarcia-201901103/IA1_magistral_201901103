async function fit_predict() {
    const { DecisionTreeClassifier, LabelEncoder } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');
    
    // Datos del archivo pred.csv
    const D = [true, false, false, false, true, true, false, true, true, false];
    const E = ['N', 'P', 'P', 'N', 'P', 'P', 'N', 'P', 'N', 'P'];

    // Codificar las etiquetas
    const myLabelEncoder = await LabelEncoder();
    const encoder = new myLabelEncoder();
    const encE = encoder.fitTransform(E);

    // Preparar características (X) y etiquetas (y)
    const X = D.map((dVal, i) => [dVal ? 1 : 0, encE[i]]);
    const y = encE;

    // Entrenar el modelo
    const myDecisionTree = await DecisionTreeClassifier();
    const model = new myDecisionTree();
    model.fit(X, y);

    // Obtener la ganancia del atributo 'E' (segunda columna en X)
    const eGain = model.gain[1]; // Índice 1 corresponde a 'E' (segunda columna)
    const formattedGain = Math.floor(eGain * 100) / 100; // 2 decimales sin redondear

    const log = document.getElementById('log');
    log.innerHTML = `Ganancia del atributo 'E': ${formattedGain.toFixed(2)}`;
}

fit_predict();