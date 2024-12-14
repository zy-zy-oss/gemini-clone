import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
    const { prevPrompts,
        setPrevPrompts,
        onSent,
        setRencentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Myllm</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ? (<><div className="greet">
                    <p><span>你好,张羽</span></p>
                    <p>今天有什么我可以帮你的吗？</p>
                </div>
                    <div className="cards">
                        <div className="card">
                            <p>推荐旅游的漂亮风景🌴</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>间断地总结内容📖</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>头脑风暴提供创意🤯</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>提高代码的质量💻</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div></>) :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='发消息' />
                        <div>
                            <img src={assets.gallery_icon} alt="" /><img src={assets.mic_icon} alt="" /><img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        接口来自Gemini，不会有隐私泄漏的风险，请放心使用。中国大陆可能会需要科学上网🥺。
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main