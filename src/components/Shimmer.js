const ShimmerUI = () => {
    return(
        <div className="shimmerContainer flex flex-wrap m-[70px]">
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className="shimmerCard shimmer-pulse w-[260px] break-words m-7 rounded-lg h-[400px]"
                />
            ))}
        </div>
    )
}

export const ShimmerMenuUi = () => {
    return(
        <div className="menu max-w-[800px] m-auto p-[20px]">
            <h1 className="menuTitle font-bold text-5xl mb-8"></h1>
            <hr className="text-[gainsboro] mb-7"/>
            <div className="menuDetails shimmer-pulse border border-[rgba(2, 6, 12, 0.15)] rounded-3xl shadow-xl p-10 mb-7 h-80">
                <h3 className="RatingCount flex text-green-700 text-lg mb-4">
                </h3>
                <h4 className="cuisinesName mb-4"></h4>
                <h4 className="mb-4"></h4>
                <h4 className="mb-4"></h4>
            </div>
            <hr className="text-[gainsboro] mb-7"/>

            <div className="shadow-lg  mx-auto my-4">
                <div className="text-2xl font-bold  flex justify-between rounded-sm mb-2 p-4 cursor-pointer bg-gray-100  dark:bg-gray-800">
                    <span></span>
                </div>
            </div>
            <div className="shadow-lg  mx-auto my-4">
                <div className="text-2xl font-bold  flex justify-between rounded-sm mb-2 p-4 cursor-pointer bg-gray-100  dark:bg-gray-800">
                    <span></span>
                </div>
            </div>
            <div className="shadow-lg  mx-auto my-4">
                <div className="text-2xl font-bold  flex justify-between rounded-sm mb-2 p-4 cursor-pointer bg-gray-100  dark:bg-gray-800">
                    <span></span>
                </div>
            </div>
            <div className="shadow-lg  mx-auto my-4">
                <div className="text-2xl font-bold  flex justify-between rounded-sm mb-2 p-4 cursor-pointer bg-gray-100  dark:bg-gray-800">
                    <span></span>
                </div>
            </div>
            <div className="shadow-lg  mx-auto my-4">
                <div className="text-2xl font-bold  flex justify-between rounded-sm mb-2 p-4 cursor-pointer bg-gray-100  dark:bg-gray-800">
                    <span></span>
                </div>
            </div>
        </div>
        
        
    )
}
export default ShimmerUI;