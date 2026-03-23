'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

interface Rating {
  rate: number
  count: number
}

interface Product{
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating[]

}

interface Empresa{
  name: string
  description: string
  addres: string
  phone: string
  products: Product[]
}

export default function Home() {

  const [empresas, setProducts] = useState<Empresa[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('/api/empresas');
      const json = await data.json() as Empresa[];
      console.log(json);
      setProducts(json);
    };

    
    getData();
  }, []);

  return (
    <main>
      <section className="flex min-h-24 flex-wrap">
        
        {empresas.map((empresa: Empresa) => (
          empresa.products.map((product: Product) => (

            <div key={product.id} className="flex flex-col bg-gray-50 items-center m-5 rounded-2xl border-gray-400 border w-2xs h-80 place-content-center"><div/>

            <div className="relative rounded-t-2xl overflow-hidden">
              <Image 
                src={product.image}
                alt={product.title}
                width={288}
                height={160}
              />
            </div>


            <h2 className="font-bold text-center mt-3">{product.title}</h2>

            <p className="text-center mt-1">
              R$ {product.price.toFixed(2).replace('.',',')}</p>

            <button className="font-bold bg-black text-white p-2 rounded-2xl mt-5 mb-2">
              Detalhes
            </button>

          </div>

          ))
        ))}

      </section>
    </main>
  );
}