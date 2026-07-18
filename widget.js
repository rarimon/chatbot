(function() {
    // ১. স্টাইল ইনজেক্ট করা (নতুন প্রিমিয়াম ডিজাইনের সাথে মিল রেখে)
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-btn { 
            position: fixed; 
            bottom: 25px; 
            right: 25px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 18px; 
            border-radius: 50%; 
            cursor: pointer; 
            font-size: 24px; 
            box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4); 
            z-index: 10000; 
            transition: transform 0.3s ease;
        }
        .chat-btn:hover { transform: scale(1.1); }
        
        .chat-frame { 
            display: none; 
            position: fixed; 
            bottom: 100px; 
            right: 25px; 
            width: 360px; 
            height: 580px; 
            border: none; 
            z-index: 10000; 
            box-shadow: 0 10px 40px rgba(0,0,0,0.15); 
            border-radius: 20px; 
            background: white; 
            overflow: hidden;
            animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // ২. বাটন তৈরি
    const btn = document.createElement('div');
    btn.className = 'chat-btn';
    btn.innerHTML = '💬';
    document.body.appendChild(btn);

    // ৩. আইফ্রেম তৈরি
    const iframe = document.createElement('iframe');
    iframe.className = 'chat-frame';
    iframe.src = 'https://chatbot-sepia-sigma-28.vercel.app/';
    document.body.appendChild(iframe);

    // ৪. ক্লিক লজিক
    btn.onclick = () => {
        iframe.style.display = (iframe.style.display === 'block') ? 'none' : 'block';
    };
})();