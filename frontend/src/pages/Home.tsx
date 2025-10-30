function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto p-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8">
              <img
                className="rounded-3xl border-2 border-blue-100 shadow-lg shadow-blue-200"
                src="/workspace.jpg"
              />
            </div>

            <div className="flex-1 my-auto p-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">
                  Aditya Krishnakumar
                </h1>
                <p className="text-2xl font-bold text-gray-700">
                  Software Developer
                </p>
                <p className="text-lg text-gray-700">
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
