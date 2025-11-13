function Home() {
  const sectionClass = "min-h-screen w-full grid relative place-items-center";
  const divClass =
    "font-signature text-center h-[1.7em] leading-[1.7em] w-full scale-z-100 font-medium text-4xl md:text-7xl";

  return (
    <section className={sectionClass}>
      <div className={divClass}>
        <h2>Aditya Krishnakumar</h2>
      </div>
    </section>
  );
}

export default Home;
