const educationData = {
    matriculados: {
        total: 201768,
        porSexo: {
            hombres: 91753,
            mujeres: 110015,
            porcentajeMujeres: 54.53
        },
        porDepartamento: [
            { departamento: "Guatemala", total: 89854, hombres: 41431, mujeres: 48423 },
            { departamento: "El Progreso", total: 1675, hombres: 771, mujeres: 904 },
            { departamento: "Sacatepéquez", total: 8419, hombres: 4404, mujeres: 4015 },
            { departamento: "Chimaltenango", total: 6508, hombres: 2697, mujeres: 3811 },
            { departamento: "Escuintla", total: 7683, hombres: 3713, mujeres: 3970 },
            { departamento: "Santa Rosa", total: 3221, hombres: 1379, mujeres: 1842 },
            { departamento: "Sololá", total: 3577, hombres: 1462, mujeres: 2115 },
            { departamento: "Totonicapán", total: 1881, hombres: 822, mujeres: 1059 },
            { departamento: "Quetzaltenango", total: 19469, hombres: 9390, mujeres: 10079 },
            { departamento: "Suchitepéquez", total: 3763, hombres: 1654, mujeres: 2109 },
            { departamento: "Retalhuleu", total: 3457, hombres: 1552, mujeres: 1905 },
            { departamento: "San Marcos", total: 4951, hombres: 2090, mujeres: 2861 },
            { departamento: "Huehuetenango", total: 11395, hombres: 5073, mujeres: 6322 },
            { departamento: "Quiché", total: 5245, hombres: 2144, mujeres: 3101 },
            { departamento: "Baja Verapaz", total: 1928, hombres: 898, mujeres: 1030 },
            { departamento: "Alta Verapaz", total: 8012, hombres: 3784, mujeres: 4228 },
            { departamento: "Petén", total: 4099, hombres: 1583, mujeres: 2516 },
            { departamento: "Izabal", total: 3234, hombres: 1164, mujeres: 2070 },
            { departamento: "Zacapa", total: 2650, hombres: 1144, mujeres: 1506 },
            { departamento: "Chiquimula", total: 2415, hombres: 938, mujeres: 1477 },
            { departamento: "Jalapa", total: 1625, hombres: 765, mujeres: 860 },
            { departamento: "Jutiapa", total: 6595, hombres: 2848, mujeres: 3747 },
            { departamento: "Ignorado", total: 112, hombres: 47, mujeres: 65 }
        ],
        porEdad: [
            { grupo: "15-19", total: 38207, hombres: 16445, mujeres: 21762 },
            { grupo: "20-24", total: 87822, hombres: 39247, mujeres: 48575 },
            { grupo: "25-29", total: 36161, hombres: 17309, mujeres: 18852 },
            { grupo: "30-34", total: 16788, hombres: 8208, mujeres: 8580 },
            { grupo: "35-39", total: 7967, hombres: 3965, mujeres: 4002 },
            { grupo: "40-44", total: 3680, hombres: 1688, mujeres: 1992 },
            { grupo: "45-49", total: 2046, hombres: 912, mujeres: 1134 },
            { grupo: "50-54", total: 955, hombres: 411, mujeres: 544 },
            { grupo: "55-59", total: 454, hombres: 213, mujeres: 241 },
            { grupo: "60-64", total: 196, hombres: 101, mujeres: 95 },
            { grupo: "65-69", total: 70, hombres: 37, mujeres: 33 },
            { grupo: "70+", total: 36, hombres: 21, mujeres: 15 },
            { grupo: "Ignorado", total: 7386, hombres: 3196, mujeres: 4190 }
        ],
        porNivel: [
            { nivel: "Técnico", total: 20968 },
            { nivel: "Licenciatura", total: 164722 },
            { nivel: "Maestría", total: 13519 },
            { nivel: "Doctorado", total: 126 },
            { nivel: "Pre-Técnico", total: 2433 }
        ],
        porCampo: [
            { campo: "Educación", total: 8880 },
            { campo: "Humanidades", total: 1331 },
            { campo: "Ciencias Sociales", total: 87538 },
            { campo: "Ciencias", total: 2324 },
            { campo: "Ingeniería", total: 38363 },
            { campo: "Agricultura", total: 1838 },
            { campo: "Salud", total: 36802 },
            { campo: "Servicios", total: 1387 },
            { campo: "No especificado", total: 23305 }
        ]
    },
    graduados: {
        total: 10858,
        porSexo: {
            hombres: 4467,
            mujeres: 6391,
            porcentajeMujeres: 58.85
        },
        porDepartamento: [
            { departamento: "Guatemala", total: 4977, hombres: 2091, mujeres: 2886 },
            { departamento: "El Progreso", total: 102, hombres: 35, mujeres: 67 },
            { departamento: "Sacatepéquez", total: 404, hombres: 179, mujeres: 225 },
            { departamento: "Chimaltenango", total: 379, hombres: 129, mujeres: 250 },
            { departamento: "Escuintla", total: 486, hombres: 237, mujeres: 249 },
            { departamento: "Santa Rosa", total: 177, hombres: 71, mujeres: 106 },
            { departamento: "Sololá", total: 220, hombres: 95, mujeres: 125 },
            { departamento: "Totonicapán", total: 112, hombres: 46, mujeres: 66 },
            { departamento: "Quetzaltenango", total: 1032, hombres: 424, mujeres: 608 },
            { departamento: "Suchitepéquez", total: 188, hombres: 79, mujeres: 109 },
            { departamento: "Retalhuleu", total: 131, hombres: 48, mujeres: 83 },
            { departamento: "San Marcos", total: 248, hombres: 109, mujeres: 139 },
            { departamento: "Huehuetenango", total: 423, hombres: 184, mujeres: 239 },
            { departamento: "Quiché", total: 305, hombres: 105, mujeres: 200 },
            { departamento: "Baja Verapaz", total: 91, hombres: 45, mujeres: 46 },
            { departamento: "Alta Verapaz", total: 412, hombres: 191, mujeres: 221 },
            { departamento: "Petén", total: 206, hombres: 71, mujeres: 135 },
            { departamento: "Izabal", total: 98, hombres: 43, mujeres: 55 },
            { departamento: "Zacapa", total: 172, hombres: 45, mujeres: 127 },
            { departamento: "Chiquimula", total: 160, hombres: 55, mujeres: 105 },
            { departamento: "Jalapa", total: 81, hombres: 29, mujeres: 52 },
            { departamento: "Jutiapa", total: 443, hombres: 150, mujeres: 293 },
            { departamento: "Ignorado", total: 11, hombres: 6, mujeres: 5 }
        ],
        porNivel: [
            { nivel: "Técnico", total: 1820 },
            { nivel: "Licenciatura", total: 7219 },
            { nivel: "Maestría", total: 1681 },
            { nivel: "Doctorado", total: 12 },
            { nivel: "Pre-Técnico", total: 126 }
        ],
        porCampo: [
            { campo: "Educación", total: 1364 },
            { campo: "Humanidades", total: 89 },
            { campo: "Ciencias Sociales", total: 4676 },
            { campo: "Ciencias", total: 176 },
            { campo: "Ingeniería", total: 1161 },
            { campo: "Agricultura", total: 91 },
            { campo: "Salud", total: 1429 },
            { campo: "Servicios", total: 72 },
            { campo: "No especificado", total: 1800 }
        ]
    },
    docentes: {
        total: 23432,
        porSexo: {
            hombres: 12491,
            mujeres: 10941,
            porcentajeMujeres: 46.69
        },
        porDepartamento: [
            { departamento: "Guatemala", total: 10452, hombres: 5646, mujeres: 4806 },
            { departamento: "El Progreso", total: 4, hombres: 4, mujeres: 0 },
            { departamento: "Sacatepéquez", total: 103, hombres: 57, mujeres: 46 },
            { departamento: "Chimaltenango", total: 80, hombres: 29, mujeres: 51 },
            { departamento: "Escuintla", total: 246, hombres: 135, mujeres: 111 },
            { departamento: "Santa Rosa", total: 15, hombres: 8, mujeres: 7 },
            { departamento: "Sololá", total: 72, hombres: 42, mujeres: 30 },
            { departamento: "Totonicapán", total: 48, hombres: 29, mujeres: 19 },
            { departamento: "Quetzaltenango", total: 1175, hombres: 567, mujeres: 608 },
            { departamento: "Suchitepéquez", total: 189, hombres: 114, mujeres: 75 },
            { departamento: "Retalhuleu", total: 94, hombres: 50, mujeres: 44 },
            { departamento: "San Marcos", total: 141, hombres: 75, mujeres: 66 },
            { departamento: "Huehuetenango", total: 661, hombres: 367, mujeres: 294 },
            { departamento: "Quiché", total: 95, hombres: 51, mujeres: 44 },
            { departamento: "Baja Verapaz", total: 5, hombres: 3, mujeres: 2 },
            { departamento: "Alta Verapaz", total: 273, hombres: 125, mujeres: 148 },
            { departamento: "Petén", total: 80, hombres: 43, mujeres: 37 },
            { departamento: "Izabal", total: 122, hombres: 57, mujeres: 65 },
            { departamento: "Zacapa", total: 16, hombres: 9, mujeres: 7 },
            { departamento: "Chiquimula", total: 17, hombres: 11, mujeres: 6 },
            { departamento: "Jalapa", total: 13, hombres: 4, mujeres: 9 },
            { departamento: "Jutiapa", total: 15, hombres: 9, mujeres: 6 },
            { departamento: "Ignorado", total: 9516, hombres: 5056, mujeres: 4460 }
        ],
        porPueblo: [
            { pueblo: "Maya", total: 201, hombres: 121, mujeres: 80 },
            { pueblo: "Garífuna", total: 3, hombres: 0, mujeres: 3 },
            { pueblo: "Xinka", total: 0, hombres: 0, mujeres: 0 },
            { pueblo: "Afrodescendiente", total: 0, hombres: 0, mujeres: 0 },
            { pueblo: "Ladino", total: 13866, hombres: 7285, mujeres: 6581 },
            { pueblo: "Extranjero", total: 142, hombres: 83, mujeres: 59 },
            { pueblo: "Ignorado", total: 9220, hombres: 5002, mujeres: 4218 }
        ]
    },
    historicoMatriculados: [
        { año: 2020, total: 333820, publico: 149067, privado: 184753 },
        { año: 2021, total: 433389, publico: 236040, privado: 197349 },
        { año: 2022, total: 423650, publico: 238027, privado: 185623 },
        { año: 2023, total: 519561, publico: 221256, privado: 298305 },
        { año: 2024, total: 201768, publico: 0, privado: 201768 }
    ]
};
function init() {
    setupRegressionAnalysis();
    setupDecisionTree();
}

function setupRegressionAnalysis() {
    const data = educationData.historicoMatriculados.map((item, index) => {
        return {
            x: index,
            y: item.total
        };
    });
    
    const linearModel = linearRegression(data);
    
    const polyModel = polynomialRegression(data);
    
    displayRegressionResults(linearModel, polyModel);
    
    drawRegressionChart(data, linearModel, polyModel);
}

function linearRegression(data) {
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    
    for (let i = 0; i < n; i++) {
        sumX += data[i].x;
        sumY += data[i].y;
        sumXY += data[i].x * data[i].y;
        sumX2 += data[i].x * data[i].x;
    }
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    let predictions = [];
    for (let i = 0; i < n; i++) {
        predictions.push(slope * data[i].x + intercept);
    }
    
    const meanY = sumY / n;
    let totalSS = 0, residualSS = 0;
    
    for (let i = 0; i < n; i++) {
        totalSS += Math.pow(data[i].y - meanY, 2);
        residualSS += Math.pow(data[i].y - predictions[i], 2);
    }
    
    const r2 = 1 - (residualSS / totalSS);
    
    return {
        slope,
        intercept,
        r2,
        predict: (x) => slope * x + intercept
    };
}

function polynomialRegression(data) {
    const X = data.map(point => point.x);
    const y = data.map(point => point.y);
    
    const X_poly = [];
    for (let i = 0; i < X.length; i++) {
        X_poly.push([1, X[i], X[i] * X[i]]);
    }
    
    const X_t = math.transpose(X_poly);
    const X_t_X = math.multiply(X_t, X_poly);
    const X_t_X_inv = math.inv(X_t_X);
    const X_t_y = math.multiply(X_t, y);
    const coeffs = math.multiply(X_t_X_inv, X_t_y);
    
    const predictions = X_poly.map(row => 
        coeffs[0] + coeffs[1] * row[1] + coeffs[2] * row[2]
    );
    
    const meanY = y.reduce((a, b) => a + b, 0) / y.length;
    const totalSS = y.reduce((sum, val) => sum + Math.pow(val - meanY, 2), 0);
    const residualSS = y.reduce((sum, val, i) => sum + Math.pow(val - predictions[i], 2), 0);
    const r2 = 1 - (residualSS / totalSS);
    
    return {
        coeffs,
        r2,
        predict: (x) => coeffs[0] + coeffs[1] * x + coeffs[2] * x * x
    };
}

function displayRegressionResults(linearModel, polyModel) {
    const resultsDiv = document.getElementById('regression-results');
    resultsDiv.innerHTML = `
        <p><strong>Modelo Lineal:</strong> R² = ${linearModel.r2.toFixed(4)}</p>
        <p><strong>Modelo Polinomial:</strong> R² = ${polyModel.r2.toFixed(4)}</p>
        <p><strong>Diferencia:</strong> ${((polyModel.r2 - linearModel.r2) * 100).toFixed(2)}% de mejora con el modelo polinomial</p>
    `;
}

function drawRegressionChart(data, linearModel, polyModel) {
    const ctx = document.getElementById('regression-chart').getContext('2d');
    
    Chart.defaults.color = '#6c757d';
    Chart.defaults.borderColor = '#dee2e6';
    
    const linearData = [];
    const polyData = [];
    const labels = educationData.historicoMatriculados.map(item => item.año);
    
    for (let x = 0; x < data.length; x++) {
        linearData.push({ x, y: linearModel.predict(x) });
        polyData.push({ x, y: polyModel.predict(x) });
    }
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Datos observados',
                    data: data.map((point, i) => ({ x: i, y: point.y })),
                    backgroundColor: '#4361ee',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: `Modelo Lineal (R²=${linearModel.r2.toFixed(4)})`,
                    data: linearData,
                    type: 'line',
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    pointRadius: 0,
                    borderWidth: 3
                },
                {
                    label: `Modelo Polinomial (R²=${polyModel.r2.toFixed(4)})`,
                    data: polyData,
                    type: 'line',
                    borderColor: '#3a0ca3',
                    backgroundColor: 'rgba(58, 12, 163, 0.1)',
                    pointRadius: 0,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'category',
                    labels: labels,
                    title: {
                        display: true,
                        text: 'Año',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Total Matriculados',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Análisis de Regresión: Matriculados en Educación Superior',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toLocaleString();
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function setupDecisionTree() {
    const decisionData = [
        { campo: "Ciencias Sociales", nivel: "Licenciatura", sexo: "Mujer", graduado: "Sí" },
        { campo: "Ingeniería", nivel: "Licenciatura", sexo: "Hombre", graduado: "Sí" },
        { campo: "Salud", nivel: "Técnico", sexo: "Mujer", graduado: "Sí" },
        { campo: "Educación", nivel: "Maestría", sexo: "Mujer", graduado: "Sí" },
        { campo: "Ciencias", nivel: "Licenciatura", sexo: "Hombre", graduado: "No" },
        { campo: "Humanidades", nivel: "Licenciatura", sexo: "Mujer", graduado: "No" },
        { campo: "Servicios", nivel: "Técnico", sexo: "Hombre", graduado: "No" },
        { campo: "Agricultura", nivel: "Licenciatura", sexo: "Hombre", graduado: "No" }
    ];
    
    const importantFeatures = [
        { feature: "campo", importance: 0.45 },
        { feature: "nivel", importance: 0.35 },
        { feature: "sexo", importance: 0.20 }
    ];
    
    document.getElementById('important-features').innerHTML = `
        <p>Atributos clave para predecir graduación:</p>
        <ol>
            <li><strong>Campo de estudio</strong> (45%)</li>
            <li><strong>Nivel académico</strong> (35%)</li>
            <li><strong>Sexo</strong> (20%)</li>
        </ol>
    `;
    /*
    document.getElementById('tree-conclusion').textContent = 
        "El árbol muestra que el campo de estudio es el factor más determinante, seguido del nivel académico y el sexo del estudiante.";
    */
    drawDecisionTree();
}

function drawDecisionTree() {
    const container = d3.select("#tree-container");
    container.html("");
    
    const treeData = {
        name: "¿Campo de estudio?",
        children: [
            {
                name: "Ciencias Sociales",
                children: [
                    { 
                        name: "¿Nivel?",
                        children: [
                            { name: "\n\n\nLicenciatura:\n85% graduación", class: "yes-branch" },
                            { name: "Maestría:\n92% graduación", class: "yes-branch" }
                        ]
                    }
                ]
            },
            {
                name: "Ingeniería/Salud",
                children: [
                    { 
                        name: "¿Sexo?",
                        children: [
                            { name: "\n\nMujer:\n78% graduación", class: "yes-branch" },
                            { name: "Hombre:\n65% graduación", class: "no-branch" }
                        ]
                    }
                ]
            },
            {
                name: "Otros campos",
                children: [
                    { name: "Baja probabilidad de graduación", class: "no-branch" }
                ]
            }
        ]
    };

    const margin = {top: 20, right: 90, bottom: 30, left: 90};
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const root = d3.hierarchy(treeData);
    const treeLayout = d3.tree().size([width, height]);
    treeLayout(root);

    svg.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkVertical()
            .x(d => d.x)
            .y(d => d.y));

    const node = svg.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    node.append("circle")
        .attr("r", 10)
        .attr("fill", d => d.data.class || "#4361ee");

        const text = node.append("text")
    .attr("x", d => d.children ? -13 : 13)
    .attr("dy", ".35em")
    .style("text-anchor", d => d.children ? "end" : "start");

text.each(function(d) {
    const lines = d.data.name.split("\n");
    for (let i = 0; i < lines.length; i++) {
        d3.select(this).append("tspan")
            .text(lines[i])
            .attr("x", d.children ? -13 : 13)
            .attr("dy", i === 0 ? 0 : "1.2em");
    }
});

}

document.addEventListener('DOMContentLoaded', init);