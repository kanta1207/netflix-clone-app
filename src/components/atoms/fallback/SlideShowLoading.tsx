import { memo } from "react"

export const SlideShowLoading = memo(() => {
  return (
    <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth space-x-3">
        {[...Array(20)].map(() => (
            <div className="bg-[#2e2d2d] animate-pulse w-[170px] h-[130px] sm:w-[230px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            </div>
        ))}
      </div>
  )
})
