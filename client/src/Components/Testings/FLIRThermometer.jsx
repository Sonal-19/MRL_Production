import React from 'react'

function FLIRThermometer() {
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
            FLIR Thermometer
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/flir-infrared-thermometer.jpg" alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
                FLIR Thermometer
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
                The FLIR helps you visualize the hot and cold spots that can indicate electrical faults,
                mechanical break-downs, or air and water leaks. This all-in-one, non-contact measurement
                and imaging tool displays temperature anomalies on screen, allowing you to inspect
                efficiently and pinpoint the source of problems faster than with a single-spot IR thermometer.
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
                    <td className="border border-gray-400 px-4 py-2">TG-167</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">IR Resolution</td>
                    <td className="border border-gray-400 px-4 py-2">80 x 60 pixels</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Accuracy</td>
                    <td className="border border-gray-400 px-4 py-2">50°C to 100°C (122°F to 212°F), acc. ±1.5°C
                                                                        (±3°F); 0°C to 50°C (32°F to 122°F) and
                                                                        100°C to 300°C (212°F to 572°F), acc.
                                                                        ±2.5°C (±5°F); -25°C to 0°C (-13°F to 32°F),
                                                                        acc. ±3°C (±7°F)&quot;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Thermal Sensitivity/NETD</td>
                    <td className="border border-gray-400 px-4 py-2">&lt;70 mK</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Field of view (FOV)</td>
                    <td className="border border-gray-400 px-4 py-2">51° X 66°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Image Modes</td>
                    <td className="border border-gray-400 px-4 py-2">MSX® (Multi Spectral Dynamic Imaging), visual</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Storage Media</td>
                    <td className="border border-gray-400 px-4 py-2">eMMC 4 GB</td>
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

export default FLIRThermometer
