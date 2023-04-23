 
const App = ()=> {   
    
    const [dataContext, setDataContext] = useState({
        name: 'John',
        age: 30
    })  
    return (
        <MainContext.Provider value={{dataContext,setDataContext}}>
            <HashRouter>
            Link: <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/">Home</Link>
              
               <Switch>
                    <Route exact path="/register">
                        <Coba/>
                    </Route>
                    <Route exact path="/login">
                        <Coba2/>
                    </Route>
                    <Route exact path="/">
                        <div> Halaman home</div>
                    </Route>
                </Switch>
            </HashRouter>  
        </MainContext.Provider>
    )
}


ReactDOM.render(<App/>,document.getElementById("root"));
 
