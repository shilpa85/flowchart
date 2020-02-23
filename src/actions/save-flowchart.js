export function saveFlowchart(canvas){
	localStorage.setItem('canvas', canvas);
	return {type: 'SAVE', payload: canvas}
}


