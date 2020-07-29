export const cumulativeOffSet = (e) => {
  let top = 0;
  let left = 0;
  let element = e;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top,
    left,
  };
};

export const formatMoney = (price) =>
  price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const paginateProducts = (products, currentPage, perPage) =>
  products.slice((currentPage - 1) * perPage, currentPage * perPage);
