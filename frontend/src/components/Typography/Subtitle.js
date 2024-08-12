 function Subtitle({styleClass, children}){
    return(
        <div className={`text-xl grid-cols-4 gap-4 font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle