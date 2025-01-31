import CardProduct from "../../components/products/";

function Products() {
  return (
    <div className="w-full sm:w-3/4 bg-div h-auto ml-auto mr-0 sm:mr-8 px-4 sm:pl-4 mt-8">
      <div>
        <h1 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center py-4 text-center">
          #Las Mejores Ofertas Siempre
        </h1>
      </div>
      <div>
        <CardProduct />
      </div>
    </div>
  );
}

export default Products;
