import { useState } from "react";
import CodeSnippet from "./CodeSnippet";


export function MyModal({language, code}: any){
    const [show, setshow] = useState(false);
    return <>
        <p className="text-center"><button onClick={() => setshow(true)}> View</button></p>
        {show && 
        <div className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-[2px] flex justify-center items-center">
            <div className="bg-white rounded shadow-lg w-2/3 h-4/5 overflow-auto">
                <div className="flex justify-between px-6 py-2 border-b border:bg-black w-2/3 bg-white fixed">
                    <p className="text-black text-lg font-normal">Source Code</p>
                    <p className="text-right"><button onClick={() => setshow(false)} className="text-red-500">close</button></p>
                </div>
                <div className="mt-12">
                    <CodeSnippet language={language} code={code} />
                </div>
            </div>
        </div>}
    </>
}