import React from 'react'
import { Image, Shimmer } from 'react-shimmer'

const ShimmerLoading = () => {
  return (
    <div>
      <Image
        src='https://source.unsplash.com/random/800x600'
        fallback={<Shimmer width={800} height={600} />}
      />
    </div>
  )
}
export default ShimmerLoading;