export const selectState = (state: any) => state.CustomerReducers;

export const selectWishList = (state: any) => selectState(state).wishList;

// export const selectState = (state: any) => state.FuniroReducers;

export const selectCart = (state: any) => selectState(state).cart;

export const selectCartProducts = (state: any) => selectCart(state).products;