"use client";
import pricesData from "../../../data/prices.json";

export default function Prices() {
  return (
    <main className="relative flex justify-center min-h-screen bg-[#edd4cd]">
      <section className="top-4 p-8 text-gray-900 max-w-5xl">
        <h1 className="text-2xl font-bold pb-2 pt-4">OUR PRICES</h1>
        <p className="text-lg mb-8">
          Discover our flexible pricing options designed to meet your dog's needs,
          whether it's a short stay or an extended boarding period.
        </p>

        {pricesData.sections?.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-pink-700">{section.heading}</h2>
            <div className="">
              <table className="w-full border-2 border-pink-700 bg-white">
                <thead>
                  <tr className="bg-pink-50 text-pink-700">
                    <th className="p-4 border border-pink-700 text-left w-[20%]">Service</th>
                    <th className="p-4 border border-pink-700 text-left w-[15%]">Price</th>
                    <th className="p-4 border border-pink-700 text-left w-[65%]">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items?.map((item, itemIndex) => (
                    <tr key={item.id || itemIndex}>
                      <td className="p-4 border border-pink-700 font-medium ">{item.service}</td>
                      <td className="p-4 border border-pink-700 text-pink-700 font-bold">{item.price}</td>
                      <td className="p-4 border border-pink-700">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {pricesData.specialRates?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-pink-700">Special Rates</h2>
            <div className="">
              <table className="w-full border border-pink-700 bg-pink-50">
                <thead>
                  <tr className="">
                    <th className="p-4 border border-pink-700 text-left">Service</th>
                    <th className="p-4 border border-pink-700 text-left">Price</th>
                    <th className="p-4 border border-pink-700 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pricesData.specialRates.map((rate, rateIndex) => (
                    <tr key={rate.id || rateIndex} className="">
                      <td className="p-4 border border-pink-700 font-medium w-1/4">{rate.service}</td>
                      <td className="p-4 border border-pink-700 text-pink-700 font-bold w-1/4">{rate.price}</td>
                      <td className="p-4 border border-pink-700 w-1/2">{rate.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
