export default function Button({children, ...props}){
    return(
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-green-400 text-white-400 hover:bg-blue-600 hover:text-stone-100" {...props}>
        {children}
        </button>

    )
}