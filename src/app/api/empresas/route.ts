import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
  {
    "name": "magazine luiza",
    "description": "empresa especializada em eletronicos",
    "address": "rua café filho, 281",
    "phone": "3823-0166",
    "products": [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style and comfortable wearing.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      }
    ]
  },
  {
    "name": "ponto frio",
    "description": "empresa especializada em eletronicos",
    "address": "rua café filho, 208",
    "phone": "3823-0166",
    "products": [
      {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "Inspired by the mythical water dragon.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        }
      }
    ]
  },
  {
    "name": "americanas",
    "description": "empresa especializada em nada",
    "address": "rua café filho, 292",
    "phone": "3823-0166",
    "products": [
      {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive",
        "price": 64,
        "description": "USB 3.0 compatibility and fast data transfers.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
          "rate": 3.3,
          "count": 203
        }
      }
    ]
  },
  {
    "name": "amazon",
    "description": "empresa especializada em varejo",
    "address": "rua café filho, 070",
    "phone": "3823-0166",
    "products": [
      {
        "id": 13,
        "title": "Acer SB220Q 21.5 inches Full HD Monitor",
        "price": 599,
        "description": "Ultra-thin IPS display with 75Hz refresh rate.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        }
      }
    ]
  },
  {
    "name": "mercado livre",
    "description": "empresa especializada em varejo",
    "address": "rua café filho, 305",
    "phone": "3823-0166",
    "products": [
      {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker",
        "price": 39.99,
        "description": "Lightweight raincoat with adjustable design.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 3.8,
          "count": 679
        }
      }
    ]
  }
])



}