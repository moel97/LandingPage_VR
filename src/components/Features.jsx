import {features} from "../constants/index.jsx";
export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-center text-orange-600">FEATURES</h2>
          <h1 className="mt-10 text-4xl tracking-tight text-white text-center sm:text-6xl lg:text-6xl">
            Easily build
            <span className = "bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text" > {" "} your code</span> 
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.text} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-orange-800" />
                  </div>
                  {feature.text}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}