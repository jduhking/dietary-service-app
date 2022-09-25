import { entity } from "simpler-state";

export const filters = entity([]);

export const addFilter = (filter) => {
  filters.set((value) => {
    return [...value, filter];
  });
};
export const removeFilter = (filter) => {
  filters.set((value) => {
    return value.filter(item => item !== filter)
  });
};

export const clearFilters = () =>{
  filters.set([]);
}

//ORDER ITEMS

export const orderItems = entity([]);

export const addOrderItem = (item) => {
  //no duplicate order items
  if(orderItems.get().includes(item)) return
  orderItems.set((value) => {
    return [...value, item];
  });
};
export const removeOrderItem = (item) => {
  console.log("remove")
  orderItems.set((value) => {
    return value.filter(x => x !== item)
  });
};

export const clearOrderItems = ()=>{
  orderItems.set([])
}
