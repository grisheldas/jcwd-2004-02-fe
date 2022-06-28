import { useState } from "react"

const BoxWithImage = () => { 

    const [input, setInput] = useState({quantity:1})   
    const [quantity, setquantity] = useState(1)
    
    const handleChange = (e,prop) => {
        setInput({...input,[prop]:e})
    }

    // const increase = () => {
    //     let count = parseInt(input.quantity) + 1
    //     setInput({...input, quantity:count})
    // } 

    // const decrease = () => {
    //     let count = parseInt(input.quantity) - 1
    //     count = count < 1 ? 1 : count
    //     setInput({...input,quantity:count})
    // } 

    const incNum = () => {
        let count = parseInt(input.quantity) + 1;
        setInput({ ...input, quantity: count });
      };
    
      const decNum = () => {
        let count = parseInt(input.quantity) - 1;
        count = count < 1 ? 1 : count;
        setInput({ ...input, quantity: count });
      };

    return ( 
        <div className=" w-[700px] h-[260px] rounded-lg mr-12 shadow-xl shadow-purple-100 p-6 border-2"> 
            <div>
                <div>
                    <input type={"checkbox"} className="mr-2"/>
                    <span className="text-sm">Pilih Semua</span> 
                    <img className="my-6" src={"/Line24.svg"}/>
                </div>
                <div className="flex">
                    <div className="flex items-center">
                        <div>
                            <input type={"checkbox"}/> 
                        </div> 
                        <div className="w-[86px] h-[86px]"> 
                            <img src={"./bisolvontablet.jpg"}/>
                        </div> 
                    </div> 
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col ml-10">
                            <span>Bisolvon 8MG 4 Tablet</span> 
                            <span className="text-xs">1 strip</span>
                        </div> 
                        <div className="">
                            <span className="font-bold text-purple-900">Rp13.000</span>
                        </div>
                    </div>
                </div> 
                <div className="flex items-center justify-end">
                    <span className="text-sm">Pindahkan ke whistlist</span>
                    <span className="mx-3">|</span> 
                    <img src={"./Trash.svg"}/> 
                    <div className="w-[150px] h-[38px] pl-5 pr-3 bg-gray-200 rounded-xl ml-5 flex justify-between items-center">
                        {/* <img src={"./min.svg"} />  */}
                        <button 
                        onClick={() => {let count=parseInt(quantity)-1
                        count = count + ""
                        setquantity(count)}}>-</button>
                        <input type="number" name="quantity" onChange={(value) => setquantity(value)} value={quantity} className="text-sm font-bold text-purple-900 ml-2 w-5"/>
                        {/* <div onChange={(e) => handleChange(e,"quantity")}></div> */}
                        {/* <img src={"./plus.svg"} onClick={increase}/>  */} 
                        <button 
                        onClick={() => {let count=parseInt(quantity)+1
                        count = count + ""
                        setquantity(count)} 
                        }
                        >+</button>
                    </div>
                </div>
            </div>

        </div>
    )
} 

export default BoxWithImage