import { motion } from "framer-motion";

import useProducts from "../hooks/useProducts";
import SingleProduct from "./SingleProduct";

function Products({ title }) {
  const { products, isLoading } = useProducts();
  if (isLoading)
    return (
      <>
        <div className="h-[100vh]"></div>
      </>
    );

  return (
    <div className="max-w-[1200px] mx-auto my-16 px-4 sm:px-6">
      <h3 className="pb-6 mx-auto text-2xl font-bold tracking-wide text-center border-b-4 sm:text-3xl font-gambetta drop-shadow-lg border-main w-fit">
        {title}
      </h3>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Products;
