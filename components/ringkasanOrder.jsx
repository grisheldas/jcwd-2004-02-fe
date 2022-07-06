const RingkasanOrder = ({id, name, price, unit}) => {
    return (
        <div>
            <div className="flex ml-2">
                    <div className="flex items-center">
                        
                        <div className="w-[86px] h-[86px]"> 
                            <img src={'/bisolvon.jpg'}/>
                        </div> 
                    </div> 
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col ml-8">
                            <span className="text-lg text-purple-900 font-semibold">{name}</span> 
                            <span className="text-xs text-purple-900">1 {unit}</span>
                        </div> 
                        <div className="">
                            <span className="font-bold text-purple-900">Rp.{price}</span>
                        </div>
                    </div>
            </div> 
        </div>
    )
} 

export default RingkasanOrder