export default function Body({ children }: any) {


    return (
        <div className="flex justify-center mt-24 mb-24">
            <div className="bg-base-100 shadow-Around rounded-md size-11/12 grid justify-items-center p-2">
                <div className="w-10/12 shadow-xl z-0 truncate">
                    {children}
                </div>
            </div>
        </div>
    )
}