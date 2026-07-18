(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-btn { 
            position: fixed; 
            bottom: 25px; 
            right: 25px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 15px; 
            border-radius: 50%; 
            cursor: pointer; 
            font-size: 24px; 
            box-shadow: 0 6px 20px rgba(0,0,0,0.2); 
            z-index: 999999; 
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
        }
        .chat-btn:hover { transform: scale(1.1); }
        
        .chat-frame { 
            display: none; 
            position: fixed; 
            bottom: 90px; 
            right: 25px; 
            width: 360px; 
            height: 580px; 
            border: none; 
            z-index: 999998; 
            /* শ্যাডো সরিয়ে ফেলেছি কারণ index.html নিজেই শ্যাডো দিচ্ছে */
            box-shadow: none; 
            background: transparent; 
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('div');
    btn.className = 'chat-btn';
    btn.innerHTML = '💬';
    document.body.appendChild(btn);

    const iframe = document.createElement('iframe');
    iframe.className = 'chat-frame';
    iframe.src = 'https://chatbot-sepia-sigma-28.vercel.app/';
    document.body.appendChild(iframe);

    btn.onclick = () => {
        iframe.style.display = (iframe.style.display === 'block') ? 'none' : 'block';
    };
})();