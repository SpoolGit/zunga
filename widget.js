(function () {
  // STEP 1: Create and style chat button
  const chatBtn = document.createElement('div');
  chatBtn.innerText = '💬';
  Object.assign(chatBtn.style, {
    position: 'fixed', bottom: '20px', right: '20px',
    width: '50px', height: '50px', background: '#000',
    color: '#fff', borderRadius: '50%', textAlign: 'center',
    lineHeight: '50px', cursor: 'pointer', zIndex: 9999,
  });
  document.body.appendChild(chatBtn);

  // STEP 2: Create chat box
  const chatBox = document.createElement('div');
  Object.assign(chatBox.style, {
    position: 'fixed', bottom: '80px', right: '20px',
    width: '300px', height: '400px', background: '#fff',
    border: '1px solid #ccc', borderRadius: '10px',
    display: 'none', flexDirection: 'column',
    zIndex: 9999, fontFamily: 'sans-serif',
  });
  document.body.appendChild(chatBox);

  // Chat area
  const messages = document.createElement('div');
  messages.style.flex = '1';
  messages.style.overflowY = 'auto';
  messages.style.padding = '10px';

  // Input box
  const inputWrapper = document.createElement('div');
  inputWrapper.style.display = 'flex';
  inputWrapper.style.borderTop = '1px solid #eee';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type a message...';
  Object.assign(input.style, {
    flex: '1', padding: '10px', border: 'none', outline: 'none'
  });

  const sendBtn = document.createElement('button');
  sendBtn.innerText = '➤';
  Object.assign(sendBtn.style, {
    padding: '10px', border: 'none', background: '#000',
    color: '#fff', cursor: 'pointer'
  });

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(sendBtn);
  chatBox.appendChild(messages);
  chatBox.appendChild(inputWrapper);

  // STEP 3: Toggle chat
  chatBtn.onclick = () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
  };

  // STEP 4: Send message to backend
  async function sendMessage(text) {
    appendMessage('user', text);

    try {
      //const res = await fetch('https://yourdomain.com/api/chat', {
      //  method: 'POST',
      //  headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify({ message: text }),
      //});
      //const data = await res.json();
      //appendMessage('bot', data.reply || '[No reply]');
	  setTimeout(() => {
		  const dummyReply = `You said: "${text}". Here's a dummy reply.`;
		  appendMessage('bot', dummyReply);
	  }, 800); // simulate delay
    } catch (err) {
      appendMessage('bot', '[Error talking to server]');
    }
  }

  // STEP 5: Handle UI message appending
  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.innerText = text;
    msg.style.margin = '5px 0';
    msg.style.textAlign = sender === 'user' ? 'right' : 'left';
    msg.style.color = sender === 'user' ? '#000' : '#333';
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  // STEP 6: Handle send click
  sendBtn.onclick = () => {
    const text = input.value.trim();
    if (text) {
      sendMessage(text);
      input.value = '';
    }
  };

  // Optional: Enter key to send
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendBtn.click();
  });
})();
