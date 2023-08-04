import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
export const revalidate = 0;

const HomePage = async ()=>{
    const products = await getProducts({isFeatured: true});
    const billboard = await getBillboard("57809199-720f-4778-898a-21c53706cf0e");
    return(
        <Container>
        <div className="space-y-10 pb-10">
          <Billboard 
            data={billboard}
          />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    );
}

export default HomePage;