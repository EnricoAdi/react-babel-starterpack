const Coba2 = ()=>{
    
    const data = useContext(MainContext);
    return(
        <div>{data.dataContext.name}</div>
    )
}