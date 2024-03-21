import { MyModal } from './MyModal';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { Skeleton } from './Skeleton';

export interface sub {
    "username": string;
    "language": string;
    "input": string;
    "code": string;
}

export function Table(){
    const [data, setdata] = useState<sub>();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/all/submission`)
        .then(response => {
            setLoading(false)
            setdata(response.data.submission);
        })
    },[])

    if(loading){
        return <div>
            <Skeleton count={"5"} />
        </div>
    }

    return<div>
        <p className="text-center my-10 text-2xl text-gray-600 font-medium underline underline-offset-8 decoration-4 decoration-sky-500">Submissions</p>
        <div className="overflow-auto p-3">          
            <table className="table-auto w-full h-max">
                <thead>
                    <tr className="bg-gray-200 text-base sticky top-0" >
                        <th className="w-40 font-sans font-normal text-gray-600 py-3 px-6">Username</th>
                        <th className="w-40 font-sans font-normal text-gray-600 py-3 px-6">Language</th>
                        <th className="w-60 font-sans font-normal text-gray-600 py-3 px-6">Time</th>
                        <th className="font-sans font-normal text-gray-600 py-3 px-6">Stdin</th>
                        <th className="w-40 font-sans font-normal text-gray-600 py-3 px-6">Source code</th>
                    </tr>
                </thead>
                <tbody>
                    {// @ts-ignore
                    data.map((d: { username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; language: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; time: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; input: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; code: any; }) => <tr className="border-b">
                        <td className="text-center text-sm font-medium p-4 whitespace-nowrap">{d.username}</td>
                        <td className="text-center text-sm text-green-600 p-4 whitespace-nowrap">{d.language}</td>
                        <td className="text-center text-sm text-gray-600 p-4 whitespace-nowrap">{d.time}</td>
                        <td className="text-center text-sm text-gray-600 p-4 whitespace-nowrap">{d.input}</td>
                        <td className="text-sm font-medium text-blue-800 cursor-pointer p-4 whitespace-nowrap"> <MyModal language={d.language} code={d.code} /></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
}