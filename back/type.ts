

interface Products {
    id: number,
    name: string,
    description:string,
    price: number,
    stock: number,
    images: Image[],
    categoryId: Category
}

interface Image {
    id: number;
    url: string;
  }

interface Category {
    id: number,
    name: string
}