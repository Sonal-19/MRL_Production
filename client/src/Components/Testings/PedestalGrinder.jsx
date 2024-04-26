import React from 'react'

function PedestalGrinder() {
  return (
    <>
      <div
        className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/test4.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center mt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-white mt-16 font-medium mb-0">
            Pedestal Grinder
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/Pedestal-Grinder.webp" alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Pedestal Grinder
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              A pedestal grinder is a type of grinding machine that is mounted on a pedestal, either bolted
              to the floor or resting on rubber feet. Pedestal grinders are commonly used for sharpening
              high-speed steel cutting tool used in lathes and milling machines. They can also be used for
              tasks such as deburring, removing surface imperfections, and working with extremely hard
              materials.
            </p>
          </div>

          {/* Specifications */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-black mb-8 mt-4 lg:mt-0 font-serif text-center">
              Specifications
            </h4>
          </div>

          {/* Table */}
          <div className="w-full flex justify-center">
            <div className="card rounded bg-white border shadow p-4 pb-5 mb-5 w-50">
              <table className="table-auto min-w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">Attribute</th>
                    <th className="border border-gray-400 px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Model</td>
                    <td className="border border-gray-400 px-4 py-2">GM 0.5</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">RPM</td>
                    <td className="border border-gray-400 px-4 py-2">2800</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Wheel Size</td>
                    <td className="border border-gray-400 px-4 py-2">8 inch</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Horsepower</td>
                    <td className="border border-gray-400 px-4 py-2">0.5 HP</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Power</td>
                    <td className="border border-gray-400 px-4 py-2">220V 1Phase</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PedestalGrinder
