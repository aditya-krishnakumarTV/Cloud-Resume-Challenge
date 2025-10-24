function Home() {
  return (
    <>
      <div className="bg-blue-200">
        <div className="max-w-7xl mx-auto p-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8">
              <img
                className="rounded-3xl border-2 border-white shadow-md shadow-white"
                src="../../public/workspace.jpg"
              />
            </div>

            <div className="flex-1 my-auto p-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">
                  Aditya Krishnakumar
                </h1>
                <p>Software Developer</p>
                <p>
                  A results-driven Software Developer, passionate about creating
                  impactful and innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
