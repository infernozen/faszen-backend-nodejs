const db = require('../config/firestore.config.js');

class Product {
  constructor(
    id,
    name,
    price,
    sizes,
    images,
    description,
    similarProducts,
    variants,
    rating,
    tags,
    isAvailable,
    category,
    isActive,
    model3D,
    isARTryOnAvailable,
    is3Davailable,
    arLensID,
    organisationImageUrl,
    redirectLinks
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.sizes = sizes;
    this.images = images;
    this.description = description;
    this.similarProducts = similarProducts;
    this.variants = variants;
    this.rating = rating;
    this.tags = tags;
    this.isAvailable = isAvailable;
    this.category = category;
    this.isActive = isActive;
    this.model3D = model3D;
    this.isARTryOnAvailable = isARTryOnAvailable;
    this.is3Davailable = is3Davailable;
    this.arLensID = arLensID;
    this.organisationImageUrl = organisationImageUrl;
    this.redirectLinks = redirectLinks;
  }

  static getByCategory(category, cb) {
    const collectionPath = 'Products';
    const collectionRef = db.collection(collectionPath);

    collectionRef.where('category', '==', category)
      .get()
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const product = new Product(
            data.id,
            data.name,
            data.price,
            data.sizes,
            data.images,
            data.description,
            data.similarproducts,
            data.variants,
            data.rating,
            data.tags,
            data.isAvailable,
            data.category,
            data.isActive,
            data.model3D,
            data.isARTryOnAvailable,
            data.is3Davailable,
            data.arLensID,
            data.organisationImageUrl,
            data.redirectlinks
          );
          products.push(product);
        });
        cb(null, products);
      })
      .catch((error) => {
        console.error(`Error fetching products by category '${category}':`, error);
        cb(error);
      });
  }

  static getByTag(tags, cb) {
    const collectionPath = 'Products';
    const collectionRef = db.collection(collectionPath);

    const tagArray = tags.split(',');

    collectionRef.where('tags', 'array-contains-any', tagArray)
      .get()
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const product = new Product(
            data.id,
            data.name,
            data.price,
            data.sizes,
            data.images,
            data.description,
            data.similarproducts,
            data.variants,
            data.rating,
            data.tags,
            data.isAvailable,
            data.category,
            data.isActive,
            data.model3D,
            data.isARTryOnAvailable,
            data.is3Davailable,
            data.arLensID,
            data.organisationImageUrl,
            data.redirectlinks
          );
          products.push(product);
        });
        cb(null, products);
      })
      .catch((error) => {
        console.error(`Error fetching products by tag(s) '${tags}':`, error);
        cb(error);
      });
  }

  static getAll(cb) {
    const collectionPath = 'Products';
    const collectionRef = db.collection(collectionPath);

    collectionRef.get()
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const product = new Product(
            data.id,
            data.name,
            data.price,
            data.sizes,
            data.images,
            data.description,
            data.similarproducts,
            data.variants,
            data.rating,
            data.tags,
            data.isAvailable,
            data.category,
            data.isActive,
            data.model3D,
            data.isARTryOnAvailable,
            data.is3Davailable,
            data.arLensID,
            data.organisationImageUrl,
            data.redirectlinks
          );
          products.push(product);
        });
        cb(null, products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        cb(error);
      });
  }
}


module.exports = Product;