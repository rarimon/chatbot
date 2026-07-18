(function() {
    // স্টাইল ইনজেক্ট করা
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-btn { position: fixed; bottom: 20px; right: 20px; background: #6366f1; color: white; padding: 15px; border-radius: 50%; cursor: pointer; font-size: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); z-index: 10000; }
        .chat-frame { display: none; position: fixed; bottom: 80px; right: 20px; width: 350px; height: 500px; border: none; z-index: 10000; box-shadow: 0 5px 25px rgba(0,0,0,0.2); border-radius: 15px; background: white; }
    `;
    document.head.appendChild(style);

    // বাটন তৈরি
    const btn = document.createElement('div');
    btn.className = 'chat-btn';
    btn.innerHTML = '💬';
    document.body.appendChild(btn);

    // আইফ্রেম তৈরি
    const iframe = document.createElement('iframe');
    iframe.className = 'chat-frame';
    iframe.src = 'YOUR_HOSTED_URL_HERE';
    document.body.appendChild(iframe);

    // ক্লিক ইভেন্ট
    btn.onclick = () => {
        iframe.style.display = (iframe.style.display === 'block') ? 'none' : 'block';
    };
})();