import './App.css';
import gtpLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImglogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleSend = async ()=>{
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img className='logo' src={gtpLogo} alt="logo" /><span className='brand'>ChatGpt</span></div>
          <button className='midBtn'><img src={addBtn} alt="new chat" className="addBtn" />NewChat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is programmiing</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an api</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="rocket" className="listItemsImg" />Upgrade t Pro</div>
         
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestias repudiandae earum architecto quos voluptate incidunt necessitatibus, officiis consequuntur aperiam illo rem laudantium quis porro quod.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImglogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti assumenda corporis veniam provident odit aspernatur illum ad, reprehenderit unde ut officiis ea voluptates mollitia cum ipsam odio dolor qui? Nemo placeat ullam blanditiis pariatur exercitationem quis! Natus facilis nemo dolor aperiam iste similique atque deserunt aut! Pariatur molestiae non deserunt? Nesciunt, recusandae! Veniam aspernatur qui fuga pariatur facere iste ullam, esse omnis? Sunt dicta reprehenderit officia, dolorem dolor placeat corrupti voluptatum ex incidunt et impedit, dignissimos sapiente natus id tenetur beatae quia. Necessitatibus ut odio eum exercitationem neque facere illum repellendus est eos voluptates dignissimos voluptas explicabo, quae omnis?</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}} /> <button className='send' onClick={handleSend}><img src={sendBtn} alt="send" /></button>
          </div>
          <p>ChatGPT may project Lorem ipsum dolor sit amet  Sequi, debitis natus?</p>
        </div>

      </div>

    </div>
  );
}

export default App;
