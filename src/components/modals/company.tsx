import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


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

interface CompanyModalProps{
    empresa: Empresa | null
    open: boolean
    onOpenChange: (Open: boolean) => void

}

export default function Company({empresa, open, onOpenChange}: CompanyModalProps) {
    if (!empresa) return null
    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>{empresa.name}</DialogTitle>
                <DialogDescription>
                    {empresa.description}
                </DialogDescription>
                <div>
                  <p><b>Adress:</b> {empresa.address}</p>
                  <p><b>Phone:</b> +55 (31) {empresa.phone}</p>
                  <p><b>Quantity of products:</b> {empresa.products.length}</p>
                </div>
                </DialogHeader>
            </DialogContent>
            </Dialog>


    )}
