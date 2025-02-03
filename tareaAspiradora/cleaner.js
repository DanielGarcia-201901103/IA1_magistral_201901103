function reflex_agent(location, stateA, stateB) {
    if (location === "A" && stateA === "DIRTY") return "CLEAN";
    if (location === "B" && stateB === "DIRTY") return "CLEAN";
    if (location === "A") return "RIGHT";
    if (location === "B") return "LEFT";
}

function getStateKey(location, stateA, stateB) {
    return `${location}-${stateA}-${stateB}`;
}

function maybeDirty(state) {
    return Math.random() < 0.25 ? "DIRTY" : state; 
}

function test(states, visitedStates, iteration = 0) {
    var location = states[0];
    var stateA = states[1];
    var stateB = states[2];

    var currentStateKey = getStateKey(location, stateA, stateB);

    if (!visitedStates.has(currentStateKey)) {
        visitedStates.add(currentStateKey);
    }

    document.getElementById("log").innerHTML += `<br>Iteración ${iteration}: Location: ${location} | Estado: ${currentStateKey}`;
    console.log("Estados visitados:" + visitedStates.size + " / 8");
    
    if (visitedStates.size === 8) {
        document.getElementById("log").innerHTML += "<br><strong>Todos los estados han sido visitados. Deteniendo...</strong>";
        return; // Detener la ejecución
    }

    var action_result = reflex_agent(location, stateA, stateB);
    
    if (action_result === "CLEAN") {
        if (location === "A") states[1] = "CLEAN";
        else if (location === "B") states[2] = "CLEAN";
    } else if (action_result === "RIGHT") {
        states[0] = "B";
    } else if (action_result === "LEFT") {
        states[0] = "A";
    }

    states[1] = maybeDirty(states[1]);
    states[2] = maybeDirty(states[2]);

    iteration++;
    if (iteration >= 100) { 
        document.getElementById("log").innerHTML += "<br><strong>Límite de iteraciones alcanzado. Deteniendo...</strong>";
        return; 
    }

    setTimeout(function () {
        test(states, visitedStates, iteration);
    }, 2000);
}

// Inicialización
var states = ["A", "DIRTY", "DIRTY"]; 
var visitedStates = new Set(); 

test(states, visitedStates);