export default function Portfolio() {
    return (
      <section className="bg-gradient-to-br from-[#D7E5F8] to-white min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Portfolio: AI-Powered Transformation
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl leading-relaxed">
          Our AI-powered monitoring solution delivered remarkable improvements in operational efficiency for Telefonica.
        </p>
  
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">✅ Faster Incident Resolution</h3>
            <p className="text-gray-700">
              Leveraging AI-powered monitoring, we significantly reduced downtime and response times.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">✅ 30% Reduction in Operational Costs</h3>
            <p className="text-gray-700">
              Through automated issue detection and smart resource allocation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">✅ Real-Time Analytics</h3>
            <p className="text-gray-700">
              Helping the client improve service delivery and customer satisfaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">✅ Seamless Integration</h3>
            <p className="text-gray-700">
              Ensuring minimal disruption and maximum efficiency.
            </p>
          </div>
        </div>
  
        <p className="text-lg text-gray-600 mt-8 max-w-3xl leading-relaxed">
          This transformation enabled Telefonica to streamline operations, reduce manual intervention, and enhance overall service reliability.
        </p>
      </section>
    );
  }  