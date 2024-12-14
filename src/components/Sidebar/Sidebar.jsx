import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import {v4} from 'uuid'
const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompts,newChat } = useContext(Context)
    const loadPrompt = async (prompt) => {
        setRecentPrompts(prompt)
         await onSent(prompt)
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>新的对话</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">最近对话</p>
                    {prevPrompts.map((item) => {
                        return <div  onClick={()=>loadPrompt(item)} key={v4()} className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p> {item.slice(0, 25)}...</p>
                        </div>
                    })}

                </div> : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>帮助</p> : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>历史记录</p> : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>设置</p> : null}

                </div>
            </div>
        </div>
    )
}

export default Sidebar