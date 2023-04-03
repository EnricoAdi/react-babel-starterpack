const {useState, useContext, createContext} = React;     
const {Link, Route, Redirect, HashRouter,BrowserRouter, Switch, useHistory} = window.ReactRouterDOM; 
const withRouter = ReactRouterDOM.withRouter; 
const App = ()=> {  
    return (
        <div>
            <HashRouter>
            Link: <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/">Home</Link>
              
               <Switch>
                    <Route exact path="/register">
                        <div> Halaman register</div>
                    </Route>
                    <Route exact path="/login">
                        <div> Halaman login</div>
                    </Route>
                    <Route exact path="/">
                        <div> Halaman home</div>
                    </Route>
                </Switch>
            </HashRouter>  
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));
 
