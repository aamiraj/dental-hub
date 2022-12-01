import router from "./routes/Routes";
import {RouterProvider} from 'react-router-dom'

function App() {
  return (
    <div className="bannerBg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
