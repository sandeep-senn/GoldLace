export const getHeroQuery = `
*[_type == "hero"][0]{
  heading1,
  heading2,
  description,
  buttonText,
  "mainImage": mainImage.asset->url,
  "thumbnails": thumbnails[].asset->url
}
`;

export const getAllProducts = `
*[_type == "product"]{
  _id,
  title,
  price,
  category,
  "image": image.asset->url,
  description,
  availability,
  delivery
}
`;

export const getAllBannersQuery = `
  *[_type == "banner"]{
    _id,
    "images": images[].asset->url
  }
`;
