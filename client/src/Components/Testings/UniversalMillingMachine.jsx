import React from 'react'

function UniversalMillingMachine() {
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
            Universal Milling Machine
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/millimc.webp" alt="MRLogo" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
            Universal Milling Machine
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
            Vertical milling machine are the most common milling machines where cutting tool is used in
            a vertical orientation. The milling tool presses against the stationary metal piece and removes
            the material according to your design requirements and gives the desired shape and finish.
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
                  <td className="border border-gray-400 px-4 py-2">JP M 1.5</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Table Length &amp; Width</td>
                  <td className="border border-gray-400 px-4 py-2">1060 x 240</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">No. of T-Slots/Size</td>
                  <td className="border border-gray-400 px-4 py-2">3 x 16</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Swivel</td>
                  <td className="border border-gray-400 px-4 py-2">+45°</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Travel X Y Z</td>
                  <td className="border border-gray-400 px-4 py-2">550x170x340</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Spindle Speeds</td>
                  <td className="border border-gray-400 px-4 py-2">9</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Range of Spindle Speeds</td>
                  <td className="border border-gray-400 px-4 py-2">66-477</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Spindle Taper</td>
                  <td className="border border-gray-400 px-4 py-2">ISO-40</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Feed Horizontal</td>
                  <td className="border border-gray-400 px-4 py-2">3</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Motor Spindle</td>
                  <td className="border border-gray-400 px-4 py-2">2 H.P. 1440</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Coolant Pump Motor</td>
                  <td className="border border-gray-400 px-4 py-2">0.1 H.P.</td>
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

export default UniversalMillingMachine
