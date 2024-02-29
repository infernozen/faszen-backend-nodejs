const { response } = require("express");

exports.getSuperSearches = (req, res) => {
    superSearches = [
        {
          id: '1',
          item: 'Party Wear',
          image: 'https://5.imimg.com/data5/YC/CN/MY-19885899/go-tex-5202a.jpg'
        },
        {
          id: '2',
          item: 'Dresses',
          image: 'https://th.bing.com/th/id/OIP.yD6zqOzqpXZsGwT4JINAGQHaJ4?rs=1&pid=ImgDetMain'
        },
        {
          id: '3',
          item: 'Denims',
          image: 'https://th.bing.com/th/id/OIP.8eXBJv2JDvegBQkcx49yyQHaJQ?rs=1&pid=ImgDetMain'
        },
        {
          id: '4',
          item: 'Festive Fits',
          image: 'https://th.bing.com/th/id/OIP.SVh7-wfj9p9BbRA5m-3q4wHaKL?rs=1&pid=ImgDetMain'
        },
        {
          id: '5',
          item: 'Tops & Tees',
          image: 'https://th.bing.com/th/id/OIP.6pUTwgw6mit_yDQAzWOGywHaLz?rs=1&pid=ImgDetMain'
        },
        {
          id: '6',
          item: 'Footwear',
          image: 'https://th.bing.com/th/id/OIP.UNYNWP5nATJJl2WASdWeEgHaHa?rs=1&pid=ImgDetMain'
        },
        {
          id: '7',
          item: 'Accessories',
          image: 'https://therighthairstyles.com/wp-content/uploads/2019/04/hair-accessory-trends-featured-image.jpg'
        },
        {
          id: '8',
          item: 'Handbags',
          image: 'https://i.pinimg.com/originals/56/f9/2f/56f92f024bf3ffdd45336479fd80381d.jpg'
        },
    ];

    res.status(200).json({
        status: 'success',
        data: superSearches
    });
};

exports.getPopularBrands = (req, res) => {
  brands = [
    {
      "id": "1",
      "item": "Image 1",
      "image": "https://th.bing.com/th/id/OIP.fQz_VfXm_sAi_6-jbPjp7gHaEK?rs=1&pid=ImgDetMain"
    },
    {
      "id": "2",
      "item": "Image 2",
      "image": "https://cdn.1min30.com/wp-content/uploads/2017/09/logo-coco-chanel.jpg"
    },
    {
      "id": "3",
      "item": "Image 3",
      "image": "https://th.bing.com/th/id/OIP.gLnegatM0Y3mbOikrwcFtwHaDt?w=600&h=300&rs=1&pid=ImgDetMain"
    },
    {
      "id": "4",
      "item": "Image 4",
      "image": "https://th.bing.com/th/id/R.e7aa12033b0cff69fd9694eb60e8d2d2?rik=sMT%2b94E506fE2w&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fVersace-symbol.jpg&ehk=kFc7B7cHwD92yl%2f5DtMju6SObjzOPvUAsPu4pxrIKGc%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "id": "5",
      "item": "Image 5",
      "image": "https://1000logos.net/wp-content/uploads/2017/03/LV-emblem.jpg"
    },
    {
      "id": "6",
      "item": "Image 6",
      "image": "https://th.bing.com/th/id/OIP.hEY9ggb9hQebSPWqaEQIpAHaFb?w=750&h=550&rs=1&pid=ImgDetMain"
    },
    {
      "id": "7",
      "item": "Image 7",
      "image": "https://th.bing.com/th/id/OIP.gLnegatM0Y3mbOikrwcFtwHaDt?w=600&h=300&rs=1&pid=ImgDetMain"
    },
    {
      "id": "8",
      "item": "Image 8",
      "image": "https://1000logos.net/wp-content/uploads/2017/03/LV-emblem.jpg"
    },
    {
      "id": "9",
      "item": "Image 9",
      "image": "https://th.bing.com/th/id/R.e7aa12033b0cff69fd9694eb60e8d2d2?rik=sMT%2b94E506fE2w&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fVersace-symbol.jpg&ehk=kFc7B7cHwD92yl%2f5DtMju6SObjzOPvUAsPu4pxrIKGc%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "id": "10",
      "item": "Image 10",
      "image": "https://th.bing.com/th/id/OIP.hEY9ggb9hQebSPWqaEQIpAHaFb?w=750&h=550&rs=1&pid=ImgDetMain"
    },
    {
      "id": "11",
      "item": "Image 11",
      "image": "https://cdn.1min30.com/wp-content/uploads/2017/09/logo-coco-chanel.jpg"
    },
    {
      "id": "12",
      "item": "Image 12",
      "image": "https://th.bing.com/th/id/OIP.fQz_VfXm_sAi_6-jbPjp7gHaEK?rs=1&pid=ImgDetMain"
    }
  ];
  

  res.status(200).json({
      status: 'success',
      data: brands
  });
};

exports.getPostsInit = (req, res) => {
  dressShop = [
    {
      "id": 1,
      "item": "Qsju-Oi1w3Y",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/Qsju-Oi1w3Y.jpg"
    },
    {
      "id": 2,
      "item": "eolq9FYYR0M",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/eolq9FYYR0M.jpg"
    },
    {
      "id": 3,
      "item": "WM7OXpKM-T8",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/WM7OXpKM-T8.jpg"
    },
    {
      "id": 4,
      "item": "hqjYiCThabQ",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/hqjYiCThabQ.jpg"
    },
    {
      "id": 5,
      "item": "OyImE_PtBsQ",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/OyImE_PtBsQ.jpg"
    },
    {
      "id": 6,
      "item": "5fTaIFOEqAE",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/5fTaIFOEqAE.jpg"
    },
    {
      "id": 7,
      "item": "tZWU_-pZkSA",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/tZWU_-pZkSA.jpg"
    },
    {
      "id": 8,
      "item": "gAhe1rdfhYQ",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/gAhe1rdfhYQ.jpg"
    }
  ];
  
  styleHacks = [
    {
      "id": 1,
      "item": "LLny24RmA2s",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/LLny24RmA2s.jpg"
    },
    {
      "id": 2,
      "item": "SVNledEfJts",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/SVNledEfJts.jpg"
    },
    {
      "id": 3,
      "item": "hgPrNP44Y2g",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/hgPrNP44Y2g.jpg"
    },
    {
      "id": 4,
      "item": "0mdNrdZULsE",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/0mdNrdZULsE.jpg"
    },
    {
      "id": 5,
      "item": "dIeAZRv1riw",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/dIeAZRv1riw.jpg"
    },
    {
      "id": 6,
      "item": "HHweV98_5bU",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/HHweV98_5bU.jpg"
    },
    {
      "id": 7,
      "item": "XPsT0tmXm3M",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/XPsT0tmXm3M.jpg"
    },
    {
      "id": 8,
      "item": "d-HsSqgveCk",
      "image": "https://storage.googleapis.com/fiz-storage/youtube-thumbnails/d-HsSqgveCk.jpg"
    }
  ];

  let response = {
    "the dress shop": dressShop,
    "style hacks": styleHacks
  }
  

  res.status(200).json({
      status: 'success',
      data: response
  });
};