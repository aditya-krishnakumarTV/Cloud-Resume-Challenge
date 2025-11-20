import profilePic from "../assets/profilepic.jpg";

function Info() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-10 min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8">
            <img
              className="rounded-full w-100 shadow-lg shadow-gray-500"
              src={profilePic}
            />
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1"></div>
          <div className="flex-1 p-8 text-left">
            <div className="text-center md:text-left text-black space-y-4">
              <h1 className="text-4xl font-bold font-signature">About Me</h1>
              <p className="text-lg">
                A results-driven Software Developer, adept at leveraging
                technical expertise to achieve organizational and personal
                milestones. I am passionate about continuous learning and
                proactively embracing new technologies to deliver impactful and
                innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
