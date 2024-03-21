

export function Skeleton({count}: any){
    return <div>
        <p className="text-center my-10 text-2xl text-gray-600 font-medium underline underline-offset-8 decoration-4 decoration-sky-500">Submissions</p>
        <div role="status" className="w-full divide-y divide-gray-200 animate-pulse dark:divide-gray-300 dark:border-gray-700">
            {Array.from({ length: count }, (_,) =>
                <div className="flex items-center gap-x-10 px-8">
                    <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-300 w-28 my-6"></div>
                    <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-300 w-28 my-6"></div>
                    <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-300 w-60 my-6"></div>
                    <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-300 w-1/2 my-6"></div>
                    <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-300 w-28 my-6"></div>
                </div>     
             )}
        </div>
    </div>
}