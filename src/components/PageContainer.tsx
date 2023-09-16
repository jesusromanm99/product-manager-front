type props = {
  maxW?: string;
  children: React.ReactNode;
};
function PageContainer({ children, maxW = "max-w-5xl" }: props) {
  return (
    <section className={`${maxW} mx-auto mt-8 bg-white border px-9 py-4 rounded-md`}>
      {" "}
      {children}
    </section>
  );
}

export default PageContainer;
