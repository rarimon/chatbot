(function() {
    // স্টাইল ইনজেক্ট করা
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-btn { 
            position: fixed; 
            bottom: 25px; 
            right: 25px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            width: 60px;
            height: 60px;
            border-radius: 50%; 
            cursor: pointer; 
            font-size: 26px; 
            box-shadow: 0 6px 20px rgba(0,0,0,0.25); 
            z-index: 999999; 
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
            animation: pulse-animation 2s infinite;
        }
        
        @keyframes pulse-animation {
            0% { box-shadow: 0 0 0 0 rgba(118, 75, 162, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(118, 75, 162, 0); }
            100% { box-shadow: 0 0 0 0 rgba(118, 75, 162, 0); }
        }

        .chat-btn:hover { 
            transform: scale(1.1); 
            animation: none; 
        }
        
        .chat-frame { 
            display: none; 
            position: fixed; 
            bottom: 95px; 
            right: 25px; 
            width: 380px; 
            height: 600px; 
            border: none; 
            z-index: 999998; 
            background: transparent !important; 
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 10px 35px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('div');
    btn.className = 'chat-btn';
    btn.innerHTML = '💬';
    document.body.appendChild(btn);

    const iframe = document.createElement('iframe');
    iframe.className = 'chat-frame';
    iframe.src = 'https://chatbot-sepia-sigma-28.vercel.app/'; // আপনার ভেরসেল লিংক
    iframe.setAttribute('allowtransparency', 'true');
    document.body.appendChild(iframe);

    btn.onclick = () => {
        iframe.style.display = (iframe.style.display === 'block') ? 'none' : 'block';
    };
})();