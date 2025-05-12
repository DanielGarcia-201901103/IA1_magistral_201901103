// MIT License
// Copyright (c) 2021 Luis Espino
// Modificado para resolver el problema de ruta A-E

// Datos del grafo (origen, destino, distancia, heurística)
const graph = {
	'A': [['B', 3, 4], ['C', 4, 3], ['D', 3, 4]],
	'B': [['C', 2, 3], ['D', 5, 6]],
	'C': [['B', 2, 3], ['E', 4, 5]],
	'D': [],
	'E': [['A', 3, 2], ['B', 2, 3], ['C', 4, 3], ['D', 6, 7], ['F', 7, 6], ['G', 2, 3]],
	'F': [['B', 1, 2], ['C', 5, 6]],
	'G': [['E', 2, 3], ['D', 2, 1]]
  };
  
  function heuristic(node, end) {
	// Buscamos la heurística del nodo actual al destino
	const connections = graph[node];
	for (let i = 0; i < connections.length; i++) {
	  if (connections[i][0] === end) {
		return connections[i][2]; // Retornar la heurística
	  }
	}
	// Si no hay conexión directa, retornar un valor alto
	return 10;
  }
  
  function successors(n, end) {
	const suc = [];
	const current_node = n[0][n[0].length - 1]; // Último nodo en el camino
	
	// Ordenar sucesores alfabéticamente para mantener consistencia
	const connections = graph[current_node].sort((a, b) => a[0].localeCompare(b[0]));
	
	for (const edge of connections) {
	  const [next_node, distance, h] = edge;
	  
	  // Evitar ciclos
	  if (!n[0].includes(next_node)) {
		const new_path = n[0] + next_node;
		const new_distance = n[1] - n[3] + distance; // g(n) = distancia acumulada
		const new_heuristic = heuristic(next_node, end); // h(n)
		const total = new_distance + new_heuristic; // f(n) = g(n) + h(n)
		const level = n[3] + 1;
		
		suc.push([new_path, total, inc(), level, new_distance]);
	  }
	}
	return suc;
  }
  
  function astar(start, end) {
	var cont = 0;
	var node_count = 0;
	var dot = '{';
	var list = [[start, heuristic(start, end), inc(), 0, 0]]; // [camino, f(n), id, level, g(n)]
	dot += list[0][2] + ' [label="' + list[0][0] + '"];';
	node_count++;
	
	while (list.length > 0) {
	  var current = list.shift();
	  
	  if (current[0][current[0].length - 1] === end) {
		dot += '}';
		console.log("Nodos generados:", node_count);
		return dot;
	  }
	  
	  var temp = successors(current, end);
	  node_count += temp.length;
	  
	  temp.forEach(val => {
		dot += val[2] + ' [label="' + val[0] + '"];' + 
			   current[2] + '--' + val[2] + ' [label="' + 
			   (val[4]) + '+' + (val[1]-val[4]) + '=' + val[1] + '"];';
	  });
	  
	  list = list.concat(temp);
	  list = list.sort(function(a, b) {
		// Ordenar por f(n), y en empate por orden alfabético
		if (a[1] === b[1]) {
		  return a[0].localeCompare(b[0]);
		}
		return a[1] - b[1];
	  });
	  
	  cont++;
	  if (cont > 100) {
		alert("The search is looped!");
		dot += '}';
		return dot;
	  }
	}
	dot += '}';
	return dot;
  }
  
  var id = 1;
  function inc() {
	return id++;
  }
  
  function findRoute() {
	const start = 'A';
	const end = 'E';
	const result = astar(start, end);
	console.log(result);
	return result;
  }
  
  // Ejecutar la búsqueda
  findRoute();