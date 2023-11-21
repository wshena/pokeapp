/* eslint-disable react/prop-types */

export const FullLoading = () => {
  return (
		<div className="w-full h-[100vh] flex items-center justify-center">
			<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-900" />
    </div>
  )
}

export const CustomHeightLoading = ({height}) => {
  return (
		<div className={`w-full h-[${height}px] flex items-center justify-center`}>
			<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-900" />
    </div>
  )
}