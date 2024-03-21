import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";


export function InputForm(){
    const nagivate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        language: "",
        input: "",
        code: ""
    })

    async function sendRequest() {
        try{
            await axios.post(`${BACKEND_URL}/api/submission`, inputs);
            nagivate("/submission/all")
        }catch (e) {
            alert("Error while submission")
        }
    }

    return <div className="flex flex-col items-center justify-center mt-20">
        <div className="mb-4 w-1/3">
            <input type="text" onChange={(e) => {
                setInputs({
                    ...inputs,
                    username: e.target.value
                })
            }} className="block r-4 p-2.5 w-full text-base rounded border border-gray-400 hover:border-2 hover:border-blue-500" placeholder="username" required />
        </div>
        <div className="relative w-1/3 mb-4">
            <select onChange={(e) => {
                setInputs({
                    ...inputs,
                    language: e.target.value
                })
            }} className="block appearance-none w-full bg-white border border-gray-400 hover:border-2 hover:border-blue-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option selected>Java</option>
                <option>C++</option>
                <option>javaScript</option>
                <option>Python</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <div className="mb-4 w-1/3">
            <textarea onChange={(e) => {
                setInputs({
                    ...inputs,
                    input: e.target.value
                })
            }} rows={3} className="block r-4 p-2.5 w-full text-base rounded border border-gray-400 hover:border-2 hover:border-blue-500" placeholder="standard inputs"></textarea>
        </div>
        <div className="mb-6 w-1/3">
            <textarea onChange={(e) => {
                setInputs({
                    ...inputs,
                    code: e.target.value
                })
            }} rows={6} className="block r-4 p-2.5 w-full text-base rounded border border-gray-400 hover:border-2 hover:border-blue-500" placeholder="paste your code here"></textarea>
        </div>
        <button onClick={sendRequest} className="text-white bg-blue-700 hover:bg-blue-600 font-medium rounded text-base w-min px-5 py-2.5 text-center">Submit</button>
    </div>
}
