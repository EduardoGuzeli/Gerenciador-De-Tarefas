import Header from './components/Header'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TaskCard from './components/TaskCard'
import TaskModal from './components/TaskModal'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'
import Focus from './pages/Focus'
import Tasks from './pages/Tasks'


const App = () => {
  return (
    <>
      <Header />
      
      <ProgressBar />
      <Sidebar />
      <StatCard />
      <TaskCard />
      <TaskModal />
      <Calendar />
      <Dashboard />
      <Focus />
      <Tasks />
      <Footer />
    </>
  )
}

export default App
