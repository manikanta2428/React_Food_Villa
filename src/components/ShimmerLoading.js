

const ShimmerLoading = () => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-violet-50">
    {Array(10).fill("").map((e,index) => <div key={index} className='shimmer'></div>)}

    </div>
    
  )
}
export default ShimmerLoading;