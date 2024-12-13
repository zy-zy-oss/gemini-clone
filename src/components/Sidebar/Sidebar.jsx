import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>新的对话</p> : null}
                </div>
                {extended ? <div className="rencent">
                    <p className="recent-title">最近对话</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p> what is react</p>
                    </div>
                </div> : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended? <p>帮助</p>:null}
                   
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>历史记录</p>:null}
                    
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended? <p>设置</p>:null}
                   
                </div>
            </div>
        </div>
    )
}

export default Sidebar