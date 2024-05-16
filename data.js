const {Firestore} = require('@google-cloud/firestore');

const firestore = new Firestore({
      projectId: 'ar-tour-416020',
      keyFilename: 'config/service-account.json',
      databaseId: 'faszen-products'
});

async function importProductsData() {
  const products = [
    {
      id: "1111",
      name: "Zeel Clothing Women's Georgette Embroidery Work Lehenga Choli With Dupatta (6018-New-Bridal-Latest-Wedding-Lehenga-White,Free size)",
      title: "Zeel Clothing Women's Georgette Embroidery Work Lehenga Choli With Dupatta (6018-New-Bridal-Latest-Wedding-Lehenga-White,Free size)",
      description: ["Lehenga Fabric: Georgette; Blouse Fabric: Georgette; Dupatta: Net; Inner: Santoon with Cancan(tulle) layered",'Measurements: Lehenga(Semi-Stitched) Flair : 3.50mtr, waist-43", height-43"; Blouse(Unstitched) Size: up to 44"; Dupatta Length: 2.25 mtr',"Package Contains: 1 Semi-Stitched Lehenga with 1 Dupatta and 1 unstitched Blouse"],
      price: "2498.00",
      sizes: ["S","M","L","XL"],
      images: ["https://m.media-amazon.com/images/I/61bDggBJyBL.SY741.jpg","https://m.media-amazon.com/images/I/71RJ7O0gMML.SX679.jpg","https://m.media-amazon.com/images/I/6102iAFa7nL.SY741.jpg"],
      similarproducts: ["1112","1113"],
      variants: ["black", "red"],
      rating: "4.6",
      tags: ["Desi Wear","Lehengas","Lehenga Choli With Dupatta","Desi Wear", "Indian Wear","Yellow Lehenga","Women"],
      isAvailable: "true",
      category: "Desi Wear",
      isActive: "true",
      imageurl: "https://m.media-amazon.com/images/I/61bDggBJyBL.SY741.jpg",
      organisationImageUrl: ["https://th.bing.com/th/id/OIP.YXCrrsdhzHd7_954c7VapQAAAA?rs=1&pid=ImgDetMain"],
      redirectlinks: ["https://amzn.in/d/301B3KV"],
      model3D: "null",
      isARTryOnAvailable: "false",
      is3Davailable: "false",
      arLensID: "null"
    },
    {
      id: "1112",
      name: "PURVAJA Women's Jacquard Semi-Stitched Lehenga choli",
      title: "PURVAJA Women's Jacquard Semi-Stitched Lehenga choli",
      description: ["Pattern Type: Solid; Closure Type: Zipper","Product Content: 1 Choli, 1 Lehenga, 1 Dupatta; Wash Care: Dry clean or hand wash in cold water","Semi-Stitched Lehenga Choli( lehenga stitched and blouse unstitched )"],
      price: "998.00",
      sizes: ["S","M","L"],
      images: ["https://m.media-amazon.com/images/I/81XOmoNi9OL.SY741.jpg","https://m.media-amazon.com/images/I/81tPA3-DWmL.SY741.jpg","https://m.media-amazon.com/images/I/91gMWOVbKrL.SY741.jpg"],
      similarproducts: ["1111","1113"],
      variants: ["black", "white"],
      rating: "4.1",
      tags: ["Desi Wear","Lehengas","Lehenga Choli Semi Stiched", "Indian Wear","Red Lehenga","Women"],
      isAvailable: "true",
      category: "Desi Wear",
      isActive: "true",
      imageurl: "https://m.media-amazon.com/images/I/81XOmoNi9OL.SY741.jpg",
      organisationImageUrl: ["https://th.bing.com/th/id/OIP.YXCrrsdhzHd7_954c7VapQAAAA?rs=1&pid=ImgDetMain"],
      redirectlinks: ["https://amzn.in/d/c5MPh4J"],
      model3D: "null",
      isARTryOnAvailable: "false",
      is3Davailable: "false",
      arLensID: "null"
    },
    {
      id: "1113",
      name: "Zeel Clothing Women's Organza Floral White Semi-Stitched Lehenga Choli (7611-Wedding-Floral-Lehenga-Latest, White)",
      title: "Zeel Clothing Women's Organza Floral White Semi-Stitched Lehenga Choli (7611-Wedding-Floral-Lehenga-Latest, White)",
      description: ["Lehenga Fabric: Organza; Blouse Fabric: Orgaza; Dupatta Fabric: Organza; Inner: Satin with Cancan(tulle) layered net","Lehenga Work: Zari and Sequins Embroidery work with Digital Floral Print; Blouse Work: Zari and Sequins Embroidery work with Digital Floral Print; Dupatta Work: Zari and Sequins Embroidery work with Digital Floral Print","Package Contains: 1 Semi-Stitched Lehenga with Dupatta and unstitched Blouse"],
      price: "3398.00",
      sizes: ["S","M","L"],
      images: ["https://m.media-amazon.com/images/I/91AKEOBcAUL.SY741.jpg","https://m.media-amazon.com/images/I/91dvSBjw3vL.SX569.jpg","https://m.media-amazon.com/images/I/91yy8g3RqsL.SY741.jpg"],
      similarproducts: ["1111","1112"],
      variants: ["blue", "white"],
      rating: "4.0",
      tags: ["Desi Wear","Lehengas","Lehenga Choli Semi Stiched", "Indian Wear","Red Lehenga","Women","Lehenga"],
      isAvailable: "true",
      category: "Desi Wear",
      isActive: "true",
      imageurl: "https://m.media-amazon.com/images/I/91AKEOBcAUL.SY741.jpg",
      organisationImageUrl: ["https://th.bing.com/th/id/OIP.YXCrrsdhzHd7_954c7VapQAAAA?rs=1&pid=ImgDetMain"],
      redirectlinks: ["https://amzn.in/d/9sGFmT6"],
      model3D: "null",
      isARTryOnAvailable: "false",
      is3Davailable: "false",
      arLensID: "null"
    },
  ]

  try {
    
    for (const product of products) {
      const { id, name, price, sizes, images, description, similarproducts, variants, rating, tags
        , isAvailable, category, isActive, model3D, isARTryOnAvailable, is3Davailable, arLensID, organisationImageUrl
        , redirectlinks
       } = product;

      const collectionPath = 'Products'; 
      const documentPath = id; 

      const data = {
        id,
        name,
        price,
        sizes,
        images,
        description,
        similarproducts, 
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
        redirectlinks
      };

      await firestore.collection(collectionPath).doc(documentPath).set(data);

      console.log(`Product with ID ${id} added to Firestore.`);
    }

    console.log('Data import completed successfully.');

  } catch (error) {
    console.error('Error importing data to Firestore:', error);
  }
}

importProductsData();
