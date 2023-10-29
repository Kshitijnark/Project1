import React,{useState,useEffect} from 'react'
import HomeTopNav from './components/HomeTopNav'
import HomeSideNav from './components/HomeSideNav'

export default function StudentHome() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Retrieve the username from local storage
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <>
    <HomeTopNav/>
    {loggedInUser ? (
            <>
              
              <ul>
                <p>Welcome, {loggedInUser.username}!</p>
                <p>Wishlist</p>
                <p>Log out</p>
              </ul>
            </>
          ) : (
            <p>User not logged in.</p>
          )}
    <HomeSideNav/>
    </>
  )
}
