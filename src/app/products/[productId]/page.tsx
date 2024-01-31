export default function Page({ params }: { params: { productId: string } }) {
  return <div>Product: {params.productId}</div>;
}
