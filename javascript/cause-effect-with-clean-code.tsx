// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUserProfile() {
  return {
    data: {
      user: {
        name: 'Jessica Castro',
        github: 'https://github.com/jessicacastro'
      }
    }
  }
}

export function UserProfile() {
  const [isFetchingUserProfile, setIsFetchingUserProfile] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      setIsFetchingUserProfile(true)

      const fetchUserProfileResponse = fetchUserProfile()

      setUserData(fetchUserProfileResponse.data.user)
      
      setIsFetchingUserProfile(false)
    }

    loadUser()
  })

  if (isFetchingUserProfile) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}