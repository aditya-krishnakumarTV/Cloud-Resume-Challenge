function Info() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-10 scale-z-100">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8">
            <div className="text-center md:text-left text-black space-y-4">
              <h1 className="text-4xl font-bold font-signature">About Me</h1>
              <p className="text-lg">
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
              className="rounded-full w-95 mx-auto shadow-lg shadow-gray-500"
              src="/profilepic.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
