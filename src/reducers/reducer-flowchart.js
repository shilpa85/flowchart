export default function (state = null, action){
	switch (action.type){
		case 'SAVE':
			return action.payload;
		case 'FETCH':
			return action.payload;
		default:
			return state;
	
	}	
}


