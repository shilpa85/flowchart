export function fetchFlowchart(){
	if(localStorage.getItem('canvas') != null){
		return {type: 'FETCH', payload: localStorage.getItem('canvas')}
	}
}


