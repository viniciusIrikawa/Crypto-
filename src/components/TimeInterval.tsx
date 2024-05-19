interface Type {
    timeInterval: string,
    setTimeInterval: (time: string) => void;
}

const TimeInterval = ({ timeInterval, setTimeInterval }: Type) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeInterval(e.target.value);
    }

    return (
        <div className="flex flex-col w-2/3 mt-2">
            <label className="text-white-low text-sm mb-2" htmlFor="select-time-interval"> Time interval </label>
            <select name="time-interval" 
                    id="select-time-interval"
                    value={timeInterval} 
                    className='bg-[#393939] text-white rounded-md px-5 py-2 cursor-pointer' 
                    onChange={(e) => handleChange(e)}>
            <option value="1" key=""> 1m </option>
            <option value="5" key=""> 5m </option>
            <option value="15" key=""> 15m </option>
            <option value="30" key=""> 30m </option>
            <option value="60" key=""> 1h </option>
            <option value="240" key=""> 4h </option>
            <option value="D" key=""> 1D </option>
            <option value="W" key=""> 1w </option>
            <option value="M" key=""> 1M </option>
            </select>
        </div>
    )
}

export default TimeInterval;