import React from 'react'
import AllLessons from '../../Components/AllLessons/AllLessons'
import AssignmentAnalytics from '../../Components/AssignmentAnalytics/AssignmentAnalytics'

 const Home = () => {
    return (
        <div>
            <AssignmentAnalytics/>
            <AllLessons/>
        </div>
    )
}

export default Home;