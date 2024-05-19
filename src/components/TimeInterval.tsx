const TimeInterval = () => {
  return (
    <div className="flex flex-col w-2/3 mt-2">
        <label className="text-white-low text-sm mb-2"> Time interval </label>
        <select name="time-interval" id="select-time-interval" className='bg-[#393939] text-white rounded-md px-5 py-2 cursor-pointer'>
          <option value="1m" key=""> 1m </option>
          <option value="5m" key=""> 5m </option>
          <option value="15m" key=""> 15m </option>
          <option value="30m" key=""> 30m </option>
          <option value="1h" key=""> 1h </option>
          <option value="4h" key=""> 4h </option>
          <option value="1w" key=""> 1w </option>
          <option value="1M" key=""> 1M </option>
        </select>
    </div>
  )
}

export default TimeInterval