import React from 'react'
import ForumLeft from './ForumLeft'
import ForumRight from './ForumRight'

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
