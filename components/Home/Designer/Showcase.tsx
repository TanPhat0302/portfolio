import React from 'react'

const Showcase = () => {
    return (
        <div>
            <video
                src="/videos/test.mkv"
                autoPlay
                loop
                muted
                preload="auto"

                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                <div className="relative w-2/5 h-12 bg-black bg-opacity-50 clip-trapezium flex items-center justify-center">
                    <p className="text-white md:text-2xl text-[15px] font-bold ">
                        Showcase
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Showcase