type LComp = {
    disp: boolean
}

// TODO: [15] Zasady clean code - unikaj skracania słów, żeby inni programiści nie musieli sie głowić co miałes na myśli
// ::::: Czyli tutaj disp -> display
// ::::: A wgl najlepiej "isDisplayed" albo "ifDisplayed", żeby od razu było wiadomo, że to boolean
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
