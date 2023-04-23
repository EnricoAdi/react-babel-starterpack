const Coba = ()=>{    
    const data = useContext(MainContext);
    const ubah=()=>{
        data.setDataContext({ 
            name : 'enrico'
        })
    }
    // useEffect(()=>{
    //     console.log(data)
    // },[data.dataContext])
    return(
        <div>
            {data.dataContext.name} <br />
            <button onClick={ubah}>Ubah</button>
        </div>
    )
} 