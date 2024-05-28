type LComp = {
    disp: boolean
}

const LoadingComponent: React.FC<LComp> = ({ disp }) => {
    return (
        <div className={`flex flex-col gap-4 sm:w-11/12 m-10  ${disp ? "block" : "hidden"}`}>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    )
}

export default LoadingComponent