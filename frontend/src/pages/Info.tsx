function Info() {
  return (
    <div className="bg-gray-400">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 my-auto p-8">
            <div className="text-left text-white space-y-4">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p>
                A results-driven Software Developer with over 3 years of
                experience. I am adept at leveraging technical expertise to
                achieve organizational and personal milestones. I am passionate
                about continuous learning and proactively embrace new
                technologies to deliver impactful and innovative solutions.
              </p>
            </div>
          </div>

          <div className="flex-1 p-8">
            <img
              className="rounded-full w-90 h-90 object-cover mx-auto border-2 border-white shadow-lg shadow-white"
              src="../../public/profilepic.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
