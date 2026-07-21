(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-btn { 
            position: fixed; 
            bottom: 30px; 
            right: 30px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            width: 60px;
            height: 60px;
            border-radius: 50%; 
            cursor: pointer; 
            font-size: 26px; 
            box-shadow: 0 8px 25px rgba(0,0,0,0.3); 
            z-index: 2147483647; /* সর্বোচ্চ লেয়ার যাতে অন্য কিছুর নিচে না যায় */
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
            bottom: 105px; /* চ্যাট বাটন থেকে উপরে ফাঁকা জায়গা রাখার জন্য */
            right: 30px; 
            width: 380px; 
            height: 580px; 
            border: none; 
            z-index: 2147483646; 
            background: transparent !important; 
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        @media (max-width: 480px) {
            .chat-frame {
                width: 100% !important;
                height: 100% !important;
                bottom: 0 !important;
                right: 0 !important;
                left: 0 !important;
                top: 0 !important;
                border-radius: 0 !important;
            }
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