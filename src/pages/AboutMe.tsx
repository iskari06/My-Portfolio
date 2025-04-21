const AboutMe = () => {
  return (
    <div className="text-white py-10">
      <h2 className="text-4xl mb-8 special-gothic">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Hi there! I'm Christopher Lazaga, a passionate developer with expertise in modern web technologies.
            I specialize in creating responsive, user-friendly applications with a focus on clean code and excellent user experience.
          </p>
          <p className="mb-4">
            My journey in development started with a fascination for how things work behind the scenes.
            This curiosity led me to explore various programming languages and frameworks, ultimately finding my niche in web development.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#947e57] to-[#f7e6c8] flex items-center justify-center">
            <span className="text-lg">Profile Image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;