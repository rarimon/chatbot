// dashboard.js

function generateEmbedCode() {
    // ড্যাশবোর্ডের ইনপুট থেকে ভ্যালু নেওয়া
    const color = document.getElementById('colorPicker').value;
    const botName = document.getElementById('botName') ? document.getElementById('botName').value : 'RA Technology AI';

    // এম্বেড কোড জেনারেট করা
    const embedCode = `
<script>
    window.botConfig = {
        primaryColor: "${color}",
        botName: "${botName}"
    };
</script>
<script src="https://chatbot-sepia-sigma-28.vercel.app/widget.js"></script>`.trim();

    // টেক্সট এরিয়াতে কোড বসানো
    const textArea = document.getElementById('embedCode');
    if (textArea) {
        textArea.value = embedCode;
    }
}

// কোড কপি করার ফাংশন
function copyCode() {
    const textArea = document.getElementById('embedCode');
    if (textArea) {
        textArea.select();
        document.execCommand('copy');
        alert("কোডটি কপি হয়েছে! এখন আপনার ওয়েবসাইটে ব্যবহার করুন।");
    }
}

// পেজ লোড হওয়ার সাথে সাথে একবার কোড জেনারেট করা
window.onload = () => {
    generateEmbedCode();
};