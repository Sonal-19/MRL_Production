import React from 'react'

function ToolMakerMcroscope() {
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
            Tool Maker's Microscope
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/toolmakermicroscope.jpg" alt="MRLogo" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
            Tool Maker's Microscop
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
          The Mitutoyo TM Series is a toolmaker&#39;s microscope well suited for measuring dimensions
          and angles of machined metals. It can also be used to check the shape of screws and gears by
          attaching an optional reticle. The compact body makes it ideal for use on shop-floors with
          limited space. Angle measurement is performed easily by turning the angle scale disc to align
          the cross-hair reticle with the work piece image. Illumination intensity can be adjusted.
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
                  <td className="border border-gray-400 px-4 py-2">TM 176-811E</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Observation image</td>
                  <td className="border border-gray-400 px-4 py-2">Erect image</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Optical tube</td>
                  <td className="border border-gray-400 px-4 py-2">Monocular (diopter adjustable) Depression angle: 30º 
                    Reticle: 90º broken cross-hair(176-126)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Heating Rate</td>
                  <td className="border border-gray-400 px-4 py-2">0.02 to 300 K/min</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Angle Reading</td>
                  <td className="border border-gray-400 px-4 py-2">Range: 360º Minimum reading: 6&#39; (by vernier)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Eyepiece</td>
                  <td className="border border-gray-400 px-4 py-2">15X (176-116), View field dia.: 13mm Optional: 10X, 20X</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Objective</td>
                  <td className="border border-gray-400 px-4 py-2">2X (176-138), Working distance: 67mm Optiona:5X, 10X</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Total Magnification</td>
                  <td className="border border-gray-400 px-4 py-2">30X</td>
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

export default ToolMakerMcroscope
