import React from 'react'

function HotAirOven() {
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
             Hot Air Oven
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/hot-air-oven.webp" alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
                Hot Air Oven
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
                Hot Air ovens provide uniform temperatures throughout. Process applications for laboratory
                ovens can be for annealing, die-bond curing, drying, Polyimide baking, sterilizing, and other
                industrial laboratory functions.
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
                    <td className="border border-gray-400 px-4 py-2">Weiber</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Oven Walling</td>
                    <td className="border border-gray-400 px-4 py-2">Double walled</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Inside chamber</td>
                    <td className="border border-gray-400 px-4 py-2">Stainless steel sheet of grade SS 304</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Outside chamber</td>
                    <td className="border border-gray-400 px-4 py-2">heavy gauge PCRC steel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">TAWN Resolution (FRS /HSS)</td>
                    <td className="border border-gray-400 px-4 py-2">0.12/0.2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Temperature ranges</td>
                    <td className="border border-gray-400 px-4 py-2">5 Degree C above ambient to 250 degree C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Supply</td>
                    <td className="border border-gray-400 px-4 py-2">100-240VAC</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Display</td>
                    <td className="border border-gray-400 px-4 py-2">LCD</td>
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

export default HotAirOven
