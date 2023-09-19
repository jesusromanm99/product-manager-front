type props = {
  maxW?: string;
  children: React.ReactNode;
};
function PageContainer({ children, maxW = "max-w-xs md:max-w-5xl" }: props) {
  return (
    <section className={`${maxW}  mx-auto mt-16 bg-white border px-3 md:px-9 py-4 rounded-md`}>
      {" "}
      {children}
    </section>
  );
}

export default PageContainer;
