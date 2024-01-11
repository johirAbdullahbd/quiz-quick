const obj = { point: "", allSelect: "" };
export const setDataHandle = (data) => {
  obj.point = data.point;
  obj.allSelect = data.allSelect;
};

export const getDataHandle = () => {
  return obj;
};
