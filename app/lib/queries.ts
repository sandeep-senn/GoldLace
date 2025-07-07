export const getAllProducts = `*[_type == "product"]{
  _id,
  title,
  price,
  category,
  image
}`;
