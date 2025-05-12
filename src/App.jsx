
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/chiSiamo" element={<ChiSiamo />} />
            <Route path="/" element={< />} />
            <Route path="//:id" element={< />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
