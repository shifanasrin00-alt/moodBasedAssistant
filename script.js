// Mood-Based Study Assistant Interactive Script

const submitBtn = document.getElementById('submitBtn');
const moodSelect = document.getElementById('moodSelect');
const suggestionDiv = document.getElementById('suggestion');
const body = document.body;

// Emoji pool for floating animations
const emojiPool = {
    happy: ["😃", "🎉", "✨", "🌈", "😄"],
    stressed: ["😔", "😣", "☁️", "🌧️", "💤"],
    tired: ["😴", "🛌", "☕", "😪", "🌙"],
    motivated: ["😎", "💪", "🔥", "🚀", "🏆"],
    sad: ["😢", "💔", "😞", "🌧️", "😔"],
    confused: ["🤔", "😕", "🌀", "❓", "😵"],
    excited: ["🤩", "🎈", "🎊", "🚀", "🌟"],
    relaxed: ["😌", "🌼", "🧘‍♀️", "🌸", "🌿"],
    bored: ["😐", "😴", "📚", "🌀", "💤"],
    anxious: ["😟", "😰", "🌬️", "🧘‍♂️", "💨"],
    curious: ["🤓", "🔍", "🧐", "📖", "💡"]
};

// Background gradients for moods - Premium Color Palettes
const moodBg = {
    happy: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
    stressed: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tired: "linear-gradient(135deg, #203a43 0%, #2c5364 100%)",
    motivated: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
    sad: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    confused: "linear-gradient(135deg, #3f4c6b 0%, #606c88 100%)",
    excited: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
    relaxed: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    bored: "linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)",
    anxious: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    curious: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
};

// Suggestions for moods
const moodSuggestions = {
    happy: "Study creative subjects and reward yourself with a fun treat! 🎨",
    stressed: "Take 5-min deep breathing and try a 25-min Pomodoro session. 🌿",
    tired: "Take a short walk or a 10-min power nap and revise light topics. ☕",
    motivated: "Use your motivation! Start a difficult subject for 45-min focus session. 💪",
    sad: "It's okay to feel sad sometimes. Remember, you're not alone. Maybe watch a cozy video? 💙",
    confused: "Take a break, clear your mind, and try to revisit the topic later. Break it down! 🤔",
    excited: "Channel your excitement into studying something new or challenging! Let's dive in! 🚀",
    relaxed: "Enjoy the calm! Maybe read a light book or watch an educational video. 🌼",
    bored: "Try switching subjects or take a short break to refresh your mind. Mix it up! 💤",
    anxious: "Practice mindfulness or meditation for a few minutes. Deep breaths can help calm your mind. 🌬️",
    curious: "Explore a new topic or dive deeper into something you love. Curiosity is a great motivator! 🔍"
};

// Clear existing emojis
function clearEmojis() {
    document.querySelectorAll('.emoji').forEach(e => e.remove());
}

// Create floating emojis for current mood
function createEmojis(mood) {
    clearEmojis();
    const emojis = emojiPool[mood];
    for (let i = 0; i < 7; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 90 + "%";
        emoji.style.top = Math.random() * 80 + "%";
        emoji.style.animationDuration = 3 + Math.random() * 3 + "s";
        emoji.style.fontSize = 25 + Math.random() * 25 + "px";
        body.appendChild(emoji);
    }
}

// Handle mood selection
submitBtn.addEventListener('click', () => {
    const mood = moodSelect.value;

    // Hide current suggestion for re-animation
    suggestionDiv.classList.remove('show');

    if (!mood) {
        setTimeout(() => {
            suggestionDiv.textContent = "Please select your mood first! 😅";
            suggestionDiv.classList.add('show');
        }, 50);
        clearEmojis();
        body.style.background = "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)";
        return;
    }

    // Set suggestion text and show with animation delay
    setTimeout(() => {
        suggestionDiv.textContent = moodSuggestions[mood];
        suggestionDiv.classList.add('show');
    }, 100);

    // Change body background with CSS transition
    body.style.background = moodBg[mood];

    // Create floating emojis
    createEmojis(mood);
});