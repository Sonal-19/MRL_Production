import React from 'react'

function AirJetErosionTester() {
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
            Air Jet Erosion Tester
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/airjeterosion.jpg" alt="MRLogo" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
            Air Jet Erosion Tester
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
            Air Jet Erosion Tester is a unique and a feature rich erosion tester that is capable of testing
            bulk materials and coatings under erosion. Its capabilities range from subjecting sample to
            tightly controlled gentle erosion to some of the harshest erosion conditions seen on the field.
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
                  <td className="border border-gray-400 px-4 py-2">TR 471-800</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Particle Velocity</td>
                  <td className="border border-gray-400 px-4 py-2">30 to 100 m/s</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Erodent Feed Rate</td>
                  <td className="border border-gray-400 px-4 py-2">1 to 10 g/min</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Angle of Impingement</td>
                  <td className="border border-gray-400 px-4 py-2">15°, 30°, 45°, 60°, 75° &amp; 90°</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Nozzle Diameter</td>
                  <td className="border border-gray-400 px-4 py-2">1.5 mm, standard (others on request)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Sample Size</td>
                  <td className="border border-gray-400 px-4 py-2">25 x 25 x 5 mm; 20 X 20 X 5 mm for 15 and
                        30 degree angles (Other sizes on request)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Temperature Options</td>
                  <td className="border border-gray-400 px-4 py-2">Ambient or 1,000 deg C (consult Ducom for
                    higher temperature options)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Standard Erodent</td>
                  <td className="border border-gray-400 px-4 py-2">50 µm Alumina Al2O3; Silica</td>
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

export default AirJetErosionTester
