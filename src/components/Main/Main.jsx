import React, { useContext } from 'react';
import './Main.css';
import { Context } from '../../context/Context';
import userIcon from '/src/assets/user_icon.png';
import compassIcon from '/src/assets/compass_icon.png';
import bulbIcon from '/src/assets/bulb_icon.png';
import messageIcon from '/src/assets/message_icon.png';
import codeIcon from '/src/assets/code_icon.png';
import geminiIcon from '/src/assets/gemini_icon.png';
import galleryIcon from '/src/assets/gallery_icon.png';
import micIcon from '/src/assets/mic_icon.png';
import sendIcon from '/src/assets/send_icon.png';

const Main = () => {
    const {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Myllm</p>
                <img src={userIcon} alt="User" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>你好,张羽</span></p>
                            <p>今天有什么我可以帮你的吗？</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>推荐旅游的漂亮风景🌴</p>
                                <img src={compassIcon} alt="Compass" />
                            </div>
                            <div className="card">
                                <p>间断地总结内容📖</p>
                                <img src={bulbIcon} alt="Bulb" />
                            </div>
                            <div className="card">
                                <p>头脑风暴提供创意🤯</p>
                                <img src={messageIcon} alt="Message" />
                            </div>
                            <div className="card">
                                <p>提高代码的质量💻</p>
                                <img src={codeIcon} alt="Code" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={userIcon} alt="User" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={geminiIcon} alt="Gemini" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="发消息"
                        />
                        <div>
                            <img src={galleryIcon} alt="Gallery" />
                            <img src={micIcon} alt="Mic" />
                            {input && (
                                <img
                                    onClick={() => onSent()}
                                    src={sendIcon}
                                    alt="Send"
                                />
                            )}
                        </div>
                    </div>
                    <p className="bottom-info">
                        接口来自Gemini，不会有隐私泄漏的风险，请放心使用。中国大陆可能会需要科学上网🥺。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
