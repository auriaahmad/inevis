import Image from 'next/image';

const AboutUs = () => {
  const imageSources = [
    "/assets/customer.jpg",
    "/assets/experience.jpg",
    "/assets/operators.jpg"
  ];
  const placeholder = '/assets/telecom.jpg';

  return (
    <section className="relative text-justify bg-gradient-to-br from-white to-purple-50">
      <div className="container pt-36 mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Our business - your success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Since 2010 inevis brokers mobile communications services to retailers. As a wholesaler, we can yield a considerable amount of buying power, thus being able to offer excellent conditions to our business partners. Our extensive range of products enables you to supply exactly the kind of hardware your customers desire.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            More importantly, however, it is crucial to us that you always feel supported in an optimal way. At our headquarters in Frankfurt and our branch office in Cologne, we constantly develop customized distribution models and promotion campaigns for our partners. Because our goal is your success.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Talk to us. Trust inevis as a competent partner at your side. It's worth it!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {imageSources.map((src, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${index === 0 ? "col-span-2 row-span-2" : ""
                }`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container max-w-screen-lg mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
      <div className="grid gap-6">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">44 million</h3>
            <p className="text-lg text-gray-600">Transactions every 24 hours</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">$119 trillion</h3>
            <p className="text-lg text-gray-600">Assets under holding</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">46,000</h3>
            <p className="text-lg text-gray-600">New users annually</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
          </p>
        </div>
        
      </div>
      <div className="container mx-auto px-6 lg:px-20 mt-20 pb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Our team</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image
                  src={placeholder}
                  alt={`Team member ${index + 1}`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Member Name</h3>
              <p className="text-sm text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;