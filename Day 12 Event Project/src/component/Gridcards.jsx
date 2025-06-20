import React from 'react';
import gridData from '../data/griddata.json';

const Gridcards = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-5 items-center justify-center xl:gap-12">
            {gridData.map((item, index) => (
                <div
                    key={index}
                    className="w-[250px] h-[150px] md:w-[300px] md:h-[200px] xl:w-[350px] xl:h-[230px] bg-[#CFD3DF] border-2  border-[#6589AB] shadow-[0_8px_0_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.5)] rounded-lg p-3 flex flex-col items-center justify-center text-center"
                >
                    <h2 className="mt-2 text-blue-700 font-semibold text-md md:text-xl lg:text-2xl mb-2">
                        {item.title}
                    </h2>
                    <div className=''>

                    </div>
                    <p className="mt-1 text-[13px] md:text-[15px] lg:text-[17px]">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>

    );
};

export default Gridcards;
