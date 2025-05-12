function astar(start, end) {
	var cont = 0;
	var visited_nodes = new Set(); // Para contar nodos únicos visitados
	var dot = '{';
	var list = [[start, heuristic(start, end), inc(), 0, 0]];
	dot += list[0][2] + ' [label="' + list[0][0] + '"];';
	visited_nodes.add(start);
	
	while (list.length > 0) {
	  var current = list.shift();
	  
	  if (current[0][current[0].length - 1] === end) {
		dot += '}';
		console.log("Nodos visitados:", visited_nodes.size);
		console.log("Lista de nodos visitados:", Array.from(visited_nodes).join(', '));
		return dot;
	  }
	  
	  var temp = successors(current, end);
	  
	  temp.forEach(val => {
		const node = val[0][val[0].length - 1];
		visited_nodes.add(node);
		dot += val[2] + ' [label="' + val[0] + '"];' + 
			   current[2] + '--' + val[2] + ' [label="' + 
			   (val[4]) + '+' + (val[1]-val[4]) + '=' + val[1] + '"];';
	  });
	  
	  list = list.concat(temp);
	  list = list.sort(function(a, b) {
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