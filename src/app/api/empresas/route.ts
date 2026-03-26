import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
  {
    "name": "Magazine Luiza",
    "description": "Empresa especializada em eletronicos",
    "address": "Rua Café Filho, 281",
    "phone": "3823-0166",
    "products": [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest.",
        "category": "Men's clothing",
        "image": "/images/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png",
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
        "category": "Men's clothing",
        "image": "/images/Mens Casual Premium Slim Fit T-Shirts.png",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      }
    ]
  },
  {
    "name": "Ponto Frio",
    "description": "Empresa especializada em eletronicos",
    "address": "Rua Café Filho, 208",
    "phone": "3823-0166",
    "products": [
      {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "Inspired by the mythical water dragon.",
        "category": "Jewelery",
        "image": "/images/John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet.png",
        "rating": {
          "rate": 4.6,
          "count": 400
        }
      }
    ]
  },
  {
    "name": "Americanas",
    "description": "Empresa especializada em nada",
    "address": "Rua Café Filho, 292",
    "phone": "3823-0166",
    "products": [
      {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive",
        "price": 64,
        "description": "USB 3.0 compatibility and fast data transfers.",
        "category": "Electronics",
        "image": "/images/WD 2TB Elements Portable External Hard Drive.png",
        "rating": {
          "rate": 3.3,
          "count": 203
        }
      }
    ]
  },
  {
    "name": "Amazon",
    "description": "Empresa especializada em varejo",
    "address": "Rua Café Filho, 070",
    "phone": "3823-0166",
    "products": [
      {
        "id": 13,
        "title": "Acer SB220Q 21.5 inches Full HD Monitor",
        "price": 599,
        "description": "Ultra-thin IPS display with 75Hz refresh rate.",
        "category": "Electronics",
        "image": "/images/Acer SB220Q 21.5 inches Full HD Monitor.png",
        "rating": {
          "rate": 2.9,
          "count": 250
        }
      }
    ]
  },
  {
    "name": "Mercado Livre",
    "description": "Empresa especializada em varejo",
    "address": "Rua Café Filho, 305",
    "phone": "3823-0166",
    "products": [
      {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker",
        "price": 39.99,
        "description": "Lightweight raincoat with adjustable design.",
        "category": "Women's clothing",
        "image": "/images/Rain Jacket Women Windbreaker.png",
        "rating": {
          "rate": 3.8,
          "count": 679
        }
      }
    ]
  }
])



}