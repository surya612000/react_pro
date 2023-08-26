import UserProfile from './Components/UserProfile/index'
const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'surya',
  role: 'software',
}
const App = () => {
  return <UserProfile userDetails={userDetails} />
}

export default App
