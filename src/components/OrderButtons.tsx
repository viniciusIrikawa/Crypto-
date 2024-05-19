const OrderButtons = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-10">
        <button className='bg-[#089981] rounded-md px-10 w-[50%] py-2 mx-1 font-bold text-white'> Long </button>
        <button className='bg-[#F23645] rounded-md px-10 w-[50%] py-2 mx-1 font-bold text-white'> Short </button>
    </div>
  )
}

export default OrderButtons