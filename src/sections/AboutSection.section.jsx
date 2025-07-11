import { FaLock, FaHeartbeat, FaChartLine } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"  // 🔗 This makes the navbar link scroll to this section
      className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4 md:px-16 lg:px-24 xl:px-32 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-900 mb-6 tracking-tight">
        About <span className="text-sky-500">SafeHands</span>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
        SafeHands is your go-to healthcare companion, making health data secure, 
        easy to access, and beautifully managed. We're redefining digital wellness — 
        where privacy, simplicity, and real-time insights meet.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <FaLock className="text-4xl text-sky-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Privacy First</h3>
          <p className="text-gray-600 text-sm">
            Built with industry-grade security protocols so your data stays truly yours.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <FaHeartbeat className="text-4xl text-rose-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">User-Centered</h3>
          <p className="text-gray-600 text-sm">
            Intuitive UI built for everyone — patients, doctors, and caregivers alike.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <FaChartLine className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Real-time Insights</h3>
          <p className="text-gray-600 text-sm">
            Stay updated with real-time health data and powerful dashboard analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
