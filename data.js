"use strict";

function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "name": "Крутая куртка",
      "description": "Очень модная куртка, покупаем, пока не распродали весь товар.",
      "price": 3700,
      "img": "img/cell-1.png"
    },
    {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "name": "Пиджак модный",
      "description": "Непонятно что на картинке продается, пусть будет крутой пиджак.",
      "price": 5200,
      "img": "img/cell-2.png"
    },
    {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "name": "Толстовка",
      "description": "Крутая, синяя толстовка от фирмы GB.",
      "price": 1500,
      "img": "img/cell-3.png"
    },
    {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "name": "Крутая футболка",
      "description": "Футболка на бородатом мужике, хочешь быть таким же бородатым - покупай!",
      "price": 4500,
      "img": "img/cell-4.png"
    },
    {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "name": "Пиджак",
      "description": "Голубой пиджак, хочешь? А он скоро закончится!",
      "price": 3400,
      "img": "img/cell-5.png"
    },
    {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "name": "Рубашка женская",
      "description": "Модная рубашка на модной девушке, а ты уже модная?",
      "price": 6100,
      "img": "img/cell-6.png"
    }
  ]
}`;
