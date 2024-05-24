const db = require('../config/firestore.config.js');

class Product {
  constructor(
    id,
    name,
    title,
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
    redirectLinks,
    imageurl
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
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
    this.imageurl = imageurl;
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
            data.title,
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
            data.redirectlinks,
            data.imageurl
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
            data.title,
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
            data.redirectlinks,
            data.imageurl
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

  static getByIds(cb) {
    const collectionPath = 'Products';
    const collectionRef = db.collection(collectionPath);

    const ids = ["1191", "1151", "2111", "2112", "2113", "2114", "2115", "2116", "1133", "1145", "1150", "1126", "1146", "1117"];

    const promises = ids.map(id => collectionRef.doc(id).get());


    Promise.all(promises)
      .then((docs) => {
        const products = [];
        docs.forEach((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const product = new Product(
              data.id,
              data.name,
              data.title,
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
              data.redirectlinks,
              data.imageurl
            );
            products.push(product);
          }
        });
        // Call the callback with the list of products
        cb(null, products);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error(`Error fetching products by fixed IDs:`, error);
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
            data.title,
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
            data.redirectlinks,
            data.imageurl
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