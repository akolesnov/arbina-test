export const initialState = {
	items: [
		'Salamaleikum',
		'Hello World',
		'salamaleikum',
		'hello world',
	],
}
export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return {  
				items: [...state.items, new Date().toString()]
			}
		default:
			return state
	}
}