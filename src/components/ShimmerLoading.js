

const ShimmerLoading = () => {
  return (
    <div className="AllCards">
    {Array(10).fill("").map((e,index) => <div key={index} className='shimmer'></div>)}

    </div>
    
  )
}
export default ShimmerLoading;