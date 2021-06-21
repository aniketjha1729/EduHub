import React from 'react'
import ForumLeft from '../components/forum/ForumLeft'
import ForumRight from '../components/forum/ForumRight'

const Forum = () => {
    return (
        <div className="ForumDown">
            <div className="ForumLeft">
                <ForumLeft/>
            </div>
            <div className="ForumRight">
                <ForumRight/>
            </div>
        </div>
    )
}

export default Forum;
