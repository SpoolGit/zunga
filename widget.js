(function () {
  // Load CSS file
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  //link.href = 'widget.css';  
  document.head.appendChild(link);

  // Chat Button
  const chatBtn = document.createElement('div');
  chatBtn.id = 'zunga-chat-button';
  chatBtn.innerHTML = '💬';
  document.body.appendChild(chatBtn);

  // Chat Box
  const chatBox = document.createElement('div');
  chatBox.id = 'zunga-chat-box';
  chatBox.style.display = 'none';
  document.body.appendChild(chatBox);

  // Messages Area
  const messages = document.createElement('div');
  messages.id = 'zunga-messages';
  chatBox.appendChild(messages);

  // Input Wrapper
  const inputWrapper = document.createElement('div');
  inputWrapper.id = 'zunga-input-wrapper';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type a message...';
  input.id = 'zunga-input';

  const sendBtn = document.createElement('button');
  sendBtn.id = 'zunga-send';
  sendBtn.innerText = '➤';

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(sendBtn);
  chatBox.appendChild(inputWrapper);

  // Open/Close Logic
  chatBtn.onclick = () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
  };

  // Message Rendering
  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = sender === 'user' ? 'zunga-msg user' : 'zunga-msg bot';
    msg.innerText = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  // Send Logic (mocked)
  function sendMessage(text) {
    appendMessage('user', text);
    input.value = '';

    try {
      //const res = await fetch('https://yourdomain.com/api/chat', {
      //  method: 'POST',
      //  headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify({ message: text }),
      //});
      //const data = await res.json();
      //appendMessage('bot', data.reply || '[No reply]');
	  setTimeout(() => {
		  const dummyReply = `You said: "${text}". Here's a dummy reply11111.`;
		  appendMessage('bot', dummyReply);
	  }, 800); // simulate delay
    } catch (err) {
      appendMessage('bot', '[Error talking to server]');
    }
  }

  // Button & Enter Key
  sendBtn.onclick = () => {
    const text = input.value.trim();
    if (text) sendMessage(text);
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendBtn.click();
  });
  
  
  //Clients need to add:
  //<script src="https://spoolgit.github.io/zunga/widget.js"></script>
  
})();
