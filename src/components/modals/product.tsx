import Company from "./company"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

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
  rating: Rating

}

interface Empresa{
  name: string
  description: string
  address: string
  phone: string
  products: Product[]
}

interface ProductModalProps {
    product: Product | null
    empresa: Empresa | null     
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function DialogCloseButton( {product, empresa, open, onOpenChange}: ProductModalProps) {
  const [openCompany, setOpenCompany] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    if (!product) return null
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:min-w-2xl">
        <DialogHeader>
          <div className="flex flex-row">
            <Image 
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              priority
              />
            <div className="flex flex-col gap-5 mt-7 ml-5">
              <DialogTitle className="font-bold">{product.title}</DialogTitle>
              <h2>{product.category}</h2>
              <h2 className="font-bold text-black font-">R$ {product.price.toFixed(2).replace(".",",")}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <DialogDescription>{product.description}</DialogDescription>
            <p className="font-bold">Rate: {product.rating.rate}</p>
            <p>{product.rating.count} Avaliations</p>
          </div>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2"></div>
        </div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
          <div className="flex gap-3">
            <Button type="button" onClick={() => setOpenCompany(true)}>View Company</Button>
            <Button type="button">Add to card</Button> 
          </div>
          <Company empresa={empresa} open={openCompany} onOpenChange={(setOpenCompany)}
          ></Company>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
