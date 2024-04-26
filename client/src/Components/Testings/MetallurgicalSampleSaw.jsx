import React from 'react'

function MetallurgicalSampleSaw() {
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
                Metallurgical Sample Saw
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/samplesaw.jpg" alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
                Metallurgical Sample Saw
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
            The MS 10 metallurgical sample saw is a table top instrument that can effectively be used for
            sample preparation in situations where experimentalists wish to have minimum damage to the
            material structure. The MS 10 consists of a blade assembly and a coolant tank. The control
            panel has a start, stop and RPM controls. The system has a specimen holder, weights, counter
            poise and a cut-off switch.
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
                    <td className="border border-gray-400 px-4 py-2">AI-7981</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Oven Walling</td>
                    <td className="border border-gray-400 px-4 py-2">double walled</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Inside chamber</td>
                    <td className="border border-gray-400 px-4 py-2">Thick stainless steel 304 quality</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Outside chamber</td>
                    <td className="border border-gray-400 px-4 py-2">mild steel sheet powder coated</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Temperature ranges</td>
                    <td className="border border-gray-400 px-4 py-2">50°C to 200°C with +- 2°C accuracy</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Vacuum control</td>
                    <td className="border border-gray-400 px-4 py-2">30Hg displayed on Analog gauge</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Supply</td>
                    <td className="border border-gray-400 px-4 py-2">230V, AC, 50Hz</td>
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

export default MetallurgicalSampleSaw
