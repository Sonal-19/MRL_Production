import React from 'react'

function MetallographicHotMountingPress() {
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
             Metallographic Hot Mounting Press
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/metallographicpress.webp"alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
                Metallographic Hot Mounting Press
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
                Specimen Hot Mounting Machine is a mechanical type machine. By turning the hand-wheel
                of the machine, a couple of bevel gear is rotated to drive the screw rod which in turn
                pushes/pulls the lower die up and down along the mould sleeve. The thermo set plastics
                together with specimen being mounted is formed under heated conditions. During this
                process the pressure is self adjusted by a spring fixed inside the machine. A Signal light is
                used to indicate the pressure level.
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
                    <td className="border border-gray-400 px-4 py-2">VGI-2S2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Specimen Dia.</td>
                    <td className="border border-gray-400 px-4 py-2">30mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Heater Capacity</td>
                    <td className="border border-gray-400 px-4 py-2">650W 220V</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Adjustable Temperature Range</td>
                    <td className="border border-gray-400 px-4 py-2">0-200ºC</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Power</td>
                    <td className="border border-gray-400 px-4 py-2">220V 50Hz voltage fluctuation less than + 15%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Overall Dimensions</td>
                    <td className="border border-gray-400 px-4 py-2">340mm X 270mm X 400mm</td>
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

export default MetallographicHotMountingPress
