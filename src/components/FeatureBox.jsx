import React from "react";
import box1 from "../assets/images/icon-brand-recognition.svg";
import box2 from "../assets/images/icon-detailed-records.svg";
import box3 from "../assets/images/icon-fully-customizable.svg";

function FeatureBox() {
  return (
    // Feature Section
    <section id="feature" className="bg-gray-100 pb-32">
      {/* FeatureBox Container */}
      <div className="relative container mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
        {/* Horizontal Line */}
        <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
        {/* Vertical Line  */}
        <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

        {/* Box-1 */}
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:1/3">
          {/* Image Positioning */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* Image Container For Background & Center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src={box1} alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </div>

        {/* Box-2 */}
        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8  md:1/3">
          {/* Image Positioning */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* Image Container For Background & Center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src={box2} alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </div>

        {/* Box-3 */}
        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:1/3">
          {/* Image Positioning */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* Image Container For Background & Center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src={box3} alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureBox;
