import { Provider } from "react-redux"
import store from "./Redux/store"
import Display from "./components/Display"
import ChangeButtons from "./components/ChangeButtons"


const App = () => {
    return(
        <Provider store={store}>
            <Display />
            <ChangeButtons />
        </Provider>
    )
}

export default App