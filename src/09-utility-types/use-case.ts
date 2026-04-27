type Product = {
  id: string;
  title: string;
  price: number;
  stock: number;
  createdAt: Date;
};

type NewProductInput = Omit<Product, "id">;
type ProductPatch = Partial<Pick<Product, "title" | "price" | "stock">>;
type ProductCard = Pick<Product, "id" | "title" | "price">;
type ProductCatalog = Record<string, Product>;

class ProductService {
  private catalog: ProductCatalog = {};

  create(input: NewProductInput): Product {
    const product: Product = {
      id: `p_${Object.keys(this.catalog).length + 1}`,
      ...input,
    };

    this.catalog[product.id] = product;
    return product;
  }

  update(productId: string, patch: ProductPatch): Product {
    const product = this.catalog[productId];

    if (!product) {
      throw new Error("Product not found");
    }

    const updatedProduct: Product = {
      ...product,
      ...patch,
    };

    this.catalog[productId] = updatedProduct;
    return updatedProduct;
  }

  findOne(productId: string): Readonly<Product> | undefined {
    return this.catalog[productId];
  }

  findAllCards(): ProductCard[] {
    return Object.values(this.catalog).map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
    }));
  }
}

const service = new ProductService();

const input: NewProductInput = {
  title: "Pen",
  price: 10,
  stock: 100,
  createdAt: new Date(),
};

const created = service.create(input);
console.log(created)

service.update(created.id, { price: 12, stock: 80 });

console.log(service.findOne(created.id));
console.log(service.findAllCards());
