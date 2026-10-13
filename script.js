/* ═══════════════════════════════════════════════════════
   Typing Practice Pro — Main Script (v1.3 — Bug Fix & Gemini Update)
   Idea & Advisor: Nishat Hossain Badhon
   Crafted by: DeepSeek AI & Gemini
   ═══════════════════════════════════════════════════════ */

/* ─── 1. WORDS DATABASE ───────────────────────────── */
const WORDS = {
  en: {
    easy: [
      "cat","dog","sun","moon","star","tree","book","pen","cup","bag",
      "car","bus","run","sit","eat","fly","red","blue","green","big",
      "small","hot","cold","day","night","hand","foot","eye","ear","nose",
      "milk","rice","fish","egg","cake","ball","toy","door","wall","floor",
      "road","sky","sea","hill","river","bird","frog","cow","goat","hen",
      "duck","lion","tiger","bear","wolf","fox","rat","bat","ant","bee",
      "hat","cap","shoe","sock","shirt","pant","coat","glove","table","chair",
      "bed","lamp","clock","phone","key","lock","box","boy","girl","man",
      "woman","baby","child","friend","mother","father","sister","brother"
    ],
    medium: [
      "pencil,","window,","garden,","flower,","orange,","banana,","computer,","keyboard,",
      "morning,","evening,","teacher,","student,","school,","college,","library,",
      "mountain,","river,","ocean,","desert,","forest,","village,","city,","country,",
      "weather,","climate,","nature,","animal,","butterfly,","elephant,","giraffe,",
      "monkey,","rabbit,","squirrel,","turtle,","dolphin,","whale,","shark,","penguin,",
      "airplane,","bicycle,","motorcycle,","hospital,","restaurant,","market,","station,",
      "journey,","holiday,","weekend,","birthday,","festival,","celebration,","tradition,",
      "language,","culture,","history,","science,","mathematics,","physics,","chemistry,",
      "biology,","geography,","philosophy,","psychology,","technology,","engineering,"
    ],
    hard: [
      "extraordinary,","sophisticated,","magnificent,","breathtaking,","phenomenal,",
      "unprecedented,","revolutionary,","technological,","environmental,","architectural,",
      "philosophical,","psychological,","mathematical,","astronomical,","geographical,",
      "communication,","international,","responsibility,","opportunity,","possibility,",
      "development,","achievement,","improvement,","establishment,","encouragement,",
      "understanding,","consideration,","investigation,","determination,","concentration,",
      "imagination,","inspiration,","motivation,","celebration,","explanation,",
      "accomplishment,","acknowledgment,","administration,","characteristic,","classification,"
    ]
  },
  bn: {
    easy: [
      "বই","কলম","ঘর","বাড়ি","গাছ","ফুল","পাখি","মাছ","গরু","ছাগল",
      "নদী","পাহাড়","আকাশ","সূর্য","চাঁদ","তারা","মেঘ","বৃষ্টি","হাত","পা",
      "চোখ","কান","নাক","মুখ","মাথা","চুল","জল","দুধ","ভাত","রুটি",
      "আম","কাঁঠাল","কলা","পেঁয়াজ","রসুন","মরিচ","লবণ","চিনি","তেল","ঘি",
      "মা","বাবা","ভাই","বোন","দাদা","দাদি","নানা","নানি","ছেলে","মেয়ে",
      "শহর","গ্রাম","দেশ","বিদেশ","স্কুল","কলেজ","বাজার","দোকান","রাস্তা","ঘাট"
    ],
    medium: [
      "বাংলাদেশ,","রাজধানী,","ঢাকা,","চট্টগ্রাম,","খুলনা,","রাজশাহী,","সিলেট,","বরিশাল,",
      "পরিবার,","সমাজ,","শিক্ষক,","শিক্ষার্থী,","বিদ্যালয়,","বিশ্ববিদ্যালয়,","গ্রন্থাগার,",
      "পর্বত,","সমুদ্র,","মরুভূমি,","বনভূমি,","হ্রদ,","ঝর্ণা,","প্রকৃতি,","প্রাণী,",
      "প্রজাপতি,","হাতি,","জিরাফ,","বানর,","খরগোশ,","কাছিম,","ডলফিন,","তিমি,","হাঙর,","পেঙ্গুইন,",
      "বিমান,","সাইকেল,","মোটরসাইকেল,","হাসপাতাল,","রেস্টুরেন্ট,","স্টেশন,",
      "ভ্রমণ,","ছুটি,","সপ্তাহান্ত,","জন্মদিন,","উৎসব,","উদযাপন,","ঐতিহ্য,","সংস্কৃতি,"
    ],
    hard: [
      "অসাধারণ,","বিস্ময়কর,","চমকপ্রদ,","অবিশ্বাস্য,","প্রযুক্তিগত,","পরিবেশগত,",
      "স্থাপত্য,","দার্শনিক,","মনস্তাত্ত্বিক,","গাণিতিক,","জ্যোতির্বিজ্ঞান,","ভৌগোলিক,",
      "যোগাযোগ,","আন্তর্জাতিক,","দায়িত্ব,","সুযোগ,","সম্ভাবনা,","উন্নয়ন,","অর্জন,",
      "উন্নতি,","প্রতিষ্ঠা,","উৎসাহ,","বোঝাপড়া,","বিবেচনা,","তদন্ত,","সংকল্প,","একাগ্রতা,",
      "কল্পনা,","অনুপ্রেরণা,","প্রেরণা,","উদযাপন,","ব্যাখ্যা,","সম্পাদনা,"
    ]
  }
};

/* ─── 2. PARAGRAPH DATABASE ───────────────────────── */
const PARAGRAPHS = {
  en: {
    easy: [
      "The sun rises in the east and sets in the west. Every morning brings new hope. People wake up and start their daily work. Children go to school. Farmers work hard in their fields. Birds sing sweet songs in the trees. It is a beautiful world we live in.",
      "Reading books is a great habit. It helps us learn new things. A good book can teach us many lessons about life. We can read story books, science books, or history books. Reading every day makes us smarter and wiser. Everyone should read at least one book a month.",
      "Water is life. Without water, no living thing can survive. We drink water every day. Plants need water to grow. Animals need water to live. We should always save water because it is precious. Do not waste it. Every drop counts."
    ],
    medium: [
      "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet. Practice makes a man perfect, so keep typing every single day. A journey of a thousand miles begins with a single step. The best way to predict the future is to invent it. Simplicity is the ultimate sophistication in software design. Success is not final, failure is not fatal. The only way to do great work is to love what you do. In the middle of difficulty lies opportunity. Every great achievement begins with a simple decision to try.",
      "Education is the most powerful weapon which you can use to change the world. It is the key to success in life. A good education opens many doors of opportunity. It teaches us how to think, how to solve problems, and how to communicate with others. Education is not only about books and exams, but also about learning values, discipline, and respect for others. Everyone deserves the right to education. Let us work together to make our world a better place.",
      "Technology has changed our lives in many ways. We use smartphones, computers, and the internet every day. Communication is now easier and faster than ever before. We can talk to people across the world in seconds. We can learn new things online, work from home, and share our ideas with millions of people. But we must also be careful. Too much screen time is not good for our health. Balance is the key."
    ],
    hard: [
      "The extraordinary complexity of modern software systems demands rigorous testing, careful documentation, and relentless attention to detail. Programming isn't about what you know; it's about what you can figure out, and that requires consistent, deliberate practice every single day. Algorithmic thinking involves breaking down problems into smaller, manageable components and solving them systematically with efficiency and precision. The best engineers are not those who write the most code, but those who solve the right problems in the simplest possible way. Mastery comes not from talent alone, but from thousands of hours of focused, purposeful effort.",
      "Successful people maintain a positive focus in life no matter what is going on around them. They stay focused on their past successes rather than their past failures. They understand that failure is not the opposite of success, but a stepping stone on the path to it. Every setback is an opportunity to learn something new. Every challenge is a chance to grow. The most successful people are not those who never fail, but those who never give up. They keep moving forward, one small step at a time, until they reach their goals."
    ]
  },
  bn: {
    easy: [
      "সূর্য পূর্ব দিকে ওঠে এবং পশ্চিম দিকে অস্ত যায়। প্রতিটি সকাল নতুন আশা নিয়ে আসে। মানুষ ঘুম থেকে উঠে কাজ শুরু করে। শিশুরা ব্যাগ নিয়ে স্কুলে যায়। কৃষকরা মাঠে পরিশ্রম করে। পাখিরা গাছে মিষ্টি গান গায়। আমাদের এই পৃথিবী সত্যিই সুন্দর।",
      "বই পড়া একটি মহৎ অভ্যাস। এটি আমাদের নতুন জিনিস শিখতে সাহায্য করে। একটি ভালো বই আমাদের জীবনের অনেক শিক্ষা দিতে পারে। আমরা গল্পের বই, বিজ্ঞানের বই বা ইতিহাসের বই পড়তে পারি। প্রতিদিন পড়া আমাদের আরও বুদ্ধিমান করে তোলে। প্রত্যেকের উচিত মাসে অন্তত একটি বই পড়া।",
      "পানি হলো জীবন। পানি ছাড়া কোনো প্রাণী বাঁচতে পারে না। আমরা প্রতিদিন পানি পান করি। গাছের বেড়ে ওঠার জন্য পানি প্রয়োজন। প্রাণীদের বেঁচে থাকার জন্য পানি দরকার। আমাদের সর্বদা পানি বাঁচানো উচিত কারণ এটি অমূল্য। প্রতিটি বিন্দু গুরুত্বপূর্ণ।"
    ],
    medium: [
      "শিক্ষা হলো সবচেয়ে শক্তিশালী অস্ত্র যা দিয়ে আপনি বিশ্বকে বদলাতে পারেন। এটি জীবনে সফলতার চাবিকাঠি। একটি ভালো শিক্ষা সুযোগের অনেক দরজা খুলে দেয়। এটি আমাদের চিন্তা করতে, সমস্যা সমাধান করতে এবং অন্যদের সাথে যোগাযোগ করতে শেখায়। শিক্ষা শুধু বই এবং পরীক্ষার বিষয় নয়, বরং মূল্যবোধ, শৃঙ্খলা এবং অন্যদের প্রতি সম্মান শেখার বিষয়। প্রত্যেকেরই শিক্ষার অধিকার রয়েছে। চলুন একসাথে কাজ করি আমাদের বিশ্বকে আরও ভালো জায়গা করতে।",
      "প্রযুক্তি আমাদের জীবনকে অনেকভাবে বদলে দিয়েছে। আমরা প্রতিদিন স্মার্টফোন, কম্পিউটার এবং ইন্টারনেট ব্যবহার করি। যোগাযোগ এখন আগের চেয়ে অনেক সহজ এবং দ্রুত। আমরা সেকেন্ডের মধ্যে বিশ্বজুড়ে মানুষের সাথে কথা বলতে পারি। আমরা অনলাইনে নতুন জিনিস শিখতে পারি, বাড়ি থেকে কাজ করতে পারি এবং লক্ষ লক্ষ মানুষের সাথে আমাদের ধারণা শেয়ার করতে পারি। তবে আমাদের সতর্কও থাকতে হবে। অতিরিক্ত স্ক্রিন টাইম আমাদের স্বাস্থ্যের জন্য ভালো নয়। ভারসাম্যই মূল চাবিকাঠি।",
      "বাংলাদেশের প্রকৃতি অপরূপ সৌন্দর্যে ভরা। এদেশের নদী, নালা, খাল, বিল, পুকুর, সবুজ ক্ষেত এবং গাছপালা সত্যিই মনোমুগ্ধকর। এখানকার মানুষ অত্যন্ত আন্তরিক এবং অতিথিপরায়ণ। এই দেশের ষড়ঋতুর বৈচিত্র্য সত্যিই অনন্য। বর্ষায় নদীগুলো ভরে ওঠে, শীতে কুয়াশায় ঢেকে যায় চারদিক, গ্রীষ্মে তীব্র গরম, আর বসন্তে ফুলে ফুলে ভরে যায় গাছ। আমাদের উচিত এই সৌন্দর্য রক্ষা করা এবং ভবিষ্যৎ প্রজন্মের জন্য সংরক্ষণ করা।"
    ],
    hard: [
      "প্রোগ্রামিং শেখার মূল রহস্য হলো ধৈর্য ধরে প্রতিদিন অনুশীলন করা এবং ছোট ছোট সমস্যা সমাধান করে এগিয়ে যাওয়া। প্রোগ্রামিং শুধু কোড লেখা নয়, বরং চিন্তা করার একটি শিল্প। যখন আপনি একটি সমস্যার সমাধান করেন, তখন আপনার মস্তিষ্ক নতুন নতুন সংযোগ তৈরি করে। প্রতিটি ভুল একটি শিক্ষা, প্রতিটি বাধা একটি সুযোগ। প্রকৃত প্রোগ্রামার তারাই যারা হার মানেন না, বরং প্রতিনিধিত্ব করেন। তাদের কাছে প্রতিটি জটিল সমস্যা একটি মজার ধাঁধা। সময়ের সাথে সাথে অভিজ্ঞতা অর্জিত হয়, এবং অভিজ্ঞতার সাথে আসে আত্মবিশ্বাস।"
    ]
  }
};

/* ─── 3. TRANSLATIONS ────────────────────────────── */
const TRANSLATIONS = {
  en: {
    appTitle: "Typing Practice Pro",
    welcomeTitle: "Typing Practice Pro",
    welcomeSubtitle: "For the love of typing",
    credit1: "Idea & Advisor: Nishat Hossain Badhon",
    credit2: "Crafted by: DeepSeek AI & Gemini",
    startBtn: "Start",
    restart: "Restart",
    mySentences: "My Sentences",
    correct: "Correct",
    wrong: "Wrong",
    best: "Best",
    accuracy: "Accuracy",
    time: "Time",
    wpm: "WPM",
    resultTitle: "Test Complete!",
    tryAgain: "Try Again",
    copy: "Copy",
    home: "Home",
    newRecord: "New Record!",
    savedTitle: "Saved Sentences",
    savedAddLabel: "➕ Add New Sentence",
    savedAddPlaceholder: "Type a word or sentence to add...",
    savedListLabel: "📋 Saved List",
    addBtn: "Add",
    cancelEdit: "Cancel Edit",
    editBtn: "Edit",
    deleteBtn: "Delete",
    savedEmpty: "No saved sentences yet. Add your first one above!",
    aboutTitle: "About & Roadmap",
    fbTitle: "Your Feedback",
    fbHelp: "Your thoughts help us improve.",
    fbName: "👤 Your Name (optional)",
    fbRating: "⭐ Rating (optional)",
    fbCat: "🏷️ Category (multiple)",
    fbComment: "📝 Your Comment *",
    fbSubmit: "Submit & Download",
    fbClear: "Clear",
    fbNote: "💡 Submitting will download a .txt file you can share anywhere.",
    setTitle: "Settings",
    setLang: "🌐 UI Language",
    setTheme: "🎨 Theme",
    setSound: "🔊 Sound",
    setData: "💾 Backup",
    setReset: "🗑️ Reset All Data",
    setNote: "💾 All data stays on your device.",
    footerText: "Idea & Advisor: Nishat Hossain Badhon | Crafted by: DeepSeek AI & Gemini",
    toastSaved: "✅ Saved successfully!",
    toastAdded: "✅ Added!",
    toastUpdated: "✅ Updated!",
    toastDeleted: "🗑️ Deleted!",
    toastCleared: "🗑️ Cleared!",
    toastCopied: "📋 Copied to clipboard!",
    toastExported: "📤 Backup downloaded!",
    toastImported: "📥 Backup imported!",
    toastReset: "🗑️ All data reset!",
    toastFeedback: "✅ Feedback downloaded! Thank you!",
    toastNoComment: "⚠️ Please write a comment first.",
    toastNoData: "⚠️ Nothing to copy.",
    toastImportFail: "❌ Invalid file.",
    toastEmptyInput: "⚠️ Please write something first.",
    toastNoCustom: "⚠️ No custom sentences. Add some first!",
    confirmDelete: "Delete this sentence?",
    confirmClearAll: "Clear ALL saved sentences?",
    placeholder: "Start typing...",
    sentencesCount: "sentences",
    placeholderFeedback: "Write your thoughts here..."
  },
  bn: {
    appTitle: "টাইপিং প্র্যাকটিস প্রো",
    welcomeTitle: "টাইপিং প্র্যাকটিস প্রো",
    welcomeSubtitle: "টাইপিং শেখার আনন্দে",
    credit1: "আইডিয়া ও উপদেষ্টা: নিশাত হোসেন বাধন",
    credit2: "তৈরি করেছে: DeepSeek AI ও Gemini",
    startBtn: "শুরু করুন",
    restart: "আবার শুরু",
    mySentences: "আমার বাক্য",
    correct: "সঠিক",
    wrong: "ভুল",
    best: "সেরা",
    accuracy: "নির্ভুলতা",
    time: "সময়",
    wpm: "WPM",
    resultTitle: "টেস্ট সম্পন্ন!",
    tryAgain: "আবার চেষ্টা",
    copy: "কপি",
    home: "হোম",
    newRecord: "নতুন রেকর্ড!",
    savedTitle: "সেভ করা বাক্য",
    savedAddLabel: "➕ নতুন বাক্য যোগ করুন",
    savedAddPlaceholder: "শব্দ বা বাক্য লিখুন...",
    savedListLabel: "📋 সেভ করা তালিকা",
    addBtn: "যোগ করুন",
    cancelEdit: "এডিট বাতিল",
    editBtn: "এডিট",
    deleteBtn: "মুছুন",
    savedEmpty: "এখনো কোনো বাক্য সেভ করা হয়নি। উপরে প্রথমটি যোগ করুন!",
    aboutTitle: "পরিচিতি ও রোডম্যাপ",
    fbTitle: "আপনার মতামত",
    fbHelp: "আপনার মতামত আমাদের উন্নত করতে সাহায্য করে।",
    fbName: "👤 আপনার নাম (ঐচ্ছিক)",
    fbRating: "⭐ রেটিং (ঐচ্ছিক)",
    fbCat: "🏷️ ক্যাটাগরি (একাধিক)",
    fbComment: "📝 আপনার মন্তব্য *",
    fbSubmit: "সাবমিট ও ডাউনলোড",
    fbClear: "মুছুন",
    fbNote: "💡 সাবমিট করলে একটি .txt ফাইল ডাউনলোড হবে।",
    setTitle: "সেটিংস",
    setLang: "🌐 ইন্টারফেস ভাষা",
    setTheme: "🎨 থিম",
    setSound: "🔊 সাউন্ড",
    setData: "💾 ব্যাকআপ",
    setReset: "🗑️ সব ডেটা রিসেট",
    setNote: "💾 সব ডেটা আপনার ডিভাইসেই থাকে।",
    footerText: "আইডিয়া ও উপদেষ্টা: নিশাত হোসেন বাধন | তৈরি: DeepSeek AI ও Gemini",
    toastSaved: "✅ সফলভাবে সেভ হয়েছে!",
    toastAdded: "✅ যোগ করা হয়েছে!",
    toastUpdated: "✅ আপডেট হয়েছে!",
    toastDeleted: "🗑️ মুছে ফেলা হয়েছে!",
    toastCleared: "🗑️ মুছে ফেলা হয়েছে!",
    toastCopied: "📋 ক্লিপবোর্ডে কপি হয়েছে!",
    toastExported: "📤 ব্যাকআপ ডাউনলোড হয়েছে!",
    toastImported: "📥 ব্যাকআপ ইমপোর্ট হয়েছে!",
    toastReset: "🗑️ সব ডেটা রিসেট হয়েছে!",
    toastFeedback: "✅ মতামত ডাউনলোড হয়েছে! ধন্যবাদ!",
    toastNoComment: "⚠️ অনুগ্রহ করে মন্তব্য লিখুন।",
    toastNoData: "⚠️ কপি করার কিছু নেই।",
    toastImportFail: "❌ ভুল ফাইল।",
    toastEmptyInput: "⚠️ অনুগ্রহ করে কিছু লিখুন।",
    toastNoCustom: "⚠️ কোনো কাস্টম বাক্য নেই। আগে যোগ করুন!",
    confirmDelete: "এই বাক্যটি মুছে ফেলবেন?",
    confirmClearAll: "সব সেভ করা বাক্য মুছে ফেলবেন?",
    placeholder: "টাইপ করা শুরু করুন...",
    sentencesCount: "টি বাক্য",
    placeholderFeedback: "এখানে আপনার মতামত লিখুন..."
  }
};

/* ─── 4. STATE ────────────────────────────────────── */
let state = {
  uiLang: "en",
  textLang: "en",
  theme: "dark",
  sound: true,
  customSentences: { en: [], bn: [] },
  bestScores: { en: 0, bn: 0 },
  achievements: [],
  streak: { count: 0, lastDate: null },
  totalSessions: 0,
  bestAccuracy: 0,
  customTab: "en",
  feedbackRating: 0,
  mode: "words"
};

let test = {
  target: "",
  startTime: null,
  timer: null,
  isRunning: false,
  isFinished: false,
  isPaused: false,
  correctKeys: 0,
  wrongKeys: 0,
  totalKeys: 0,
  lastTyped: "",
  timeLimit: 60,
  elapsed: 0
};

let audioCtx = null;
let currentAboutTab = "about";
let editingIndex = -1;   // -1 = new, >=0 = editing existing
let isComposing = false; // ★ অভ্র/বিজয় বা বাংলা IME টাইপিং ট্র্যাক করার জন্য ফ্লাগ

/* ─── 5. STORAGE ──────────────────────────────────── */
function saveState() {
  try { localStorage.setItem("typingProState", JSON.stringify(state)); }
  catch (e) { console.error("Save failed", e); }
}

function loadState() {
  try {
    const raw = localStorage.getItem("typingProState");
    if (raw) state = Object.assign(state, JSON.parse(raw));
  } catch (e) { console.error("Load failed", e); }
}

/* ─── 6. SOUND ────────────────────────────────────── */
function beep(freq, duration) {
  if (!state.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}
function playWrong()  { beep(180, 0.08); }
function playFinish() {
  beep(600, 0.12);
  setTimeout(() => beep(800, 0.12), 120);
  setTimeout(() => beep(1000, 0.20), 240);
}

/* ─── 7. TOAST ────────────────────────────────────── */
let toastTimer = null;
function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.className = "toast show " + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}

/* ─── 8. MODAL HELPERS ────────────────────────────── */
function openModal(id) { document.getElementById(id).classList.add("show"); }
function closeModal(id) { document.getElementById(id).classList.remove("show"); }

/* ─── 9. TRANSLATE UI ────────────────────────────── */
function t(key) { return TRANSLATIONS[state.uiLang][key] || key; }

function applyTranslations() {
  document.documentElement.lang = state.uiLang;
  document.getElementById("appTitle").textContent = t("appTitle");
  document.getElementById("btnRestart").textContent = t("restart");
  document.getElementById("btnCustom").textContent = t("mySentences");
  document.getElementById("btnTryAgain").textContent = t("tryAgain");
  document.getElementById("btnCopy").textContent = t("copy");
  document.getElementById("btnHome").textContent = t("home");
  document.getElementById("welcomeBtnText").textContent = t("startBtn");

  // Saved modal
  document.getElementById("savedTitle").textContent = t("savedTitle");
  document.getElementById("savedAddLabel").textContent = t("savedAddLabel");
  document.getElementById("savedAddInput").placeholder = t("savedAddPlaceholder");
  document.getElementById("savedListLabel").textContent = t("savedListLabel");
  document.getElementById("btnAddSaved").textContent = t("addBtn");
  document.getElementById("btnCancelEdit").textContent = t("cancelEdit");

  document.querySelectorAll(".stat span").forEach((el, i) => {
    const keys = ["wpm", "accuracy", "time", "correct", "wrong", "best"];
    const icons = ["⚡ ", "🎯 ", "⏱️ ", "✅ ", "❌ ", "🏆 "];
    if (el) el.textContent = icons[i] + t(keys[i]);
  });

  document.getElementById("resultTitle").textContent = t("resultTitle");
  document.getElementById("newRecordText").textContent = t("newRecord");
  document.getElementById("aboutTitle").textContent = t("aboutTitle");
  document.getElementById("fbTitle").textContent = t("fbTitle");
  document.getElementById("fbHelp").textContent = t("fbHelp");
  document.getElementById("fbNameLabel").textContent = t("fbName");
  document.getElementById("fbRatingLabel").textContent = t("fbRating");
  document.getElementById("fbCatLabel").textContent = t("fbCat");
  document.getElementById("fbCommentLabel").textContent = t("fbComment");
  document.getElementById("fbSubmit").textContent = t("fbSubmit");
  document.getElementById("fbClear").textContent = t("fbClear");
  document.getElementById("fbNote").textContent = t("fbNote");
  document.getElementById("fbComment").placeholder = t("placeholderFeedback");
  document.getElementById("setTitle").textContent = t("setTitle");
  document.getElementById("setLangLabel").textContent = t("setLang");
  document.getElementById("setThemeLabel").textContent = t("setTheme");
  document.getElementById("setSoundLabel").textContent = t("setSound");
  document.getElementById("setDataLabel").textContent = t("setData");
  document.getElementById("setResetLabel").textContent = t("setReset");
  document.getElementById("setNote").textContent = t("setNote");
  document.getElementById("footerText").textContent = t("footerText");
  document.getElementById("input").placeholder = t("placeholder");

  renderSavedList();
}

/* ─── 10. THEME ───────────────────────────────────── */
function applyTheme() {
  if (state.theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  const dark = document.getElementById("themeDark");
  const light = document.getElementById("themeLight");
  if (dark) dark.classList.toggle("active", state.theme === "dark");
  if (light) light.classList.toggle("active", state.theme === "light");
}

function setTheme(theme) {
  state.theme = theme;
  applyTheme();
  saveState();
}

/* ─── 11. UI LANGUAGE ─────────────────────────────── */
function setUILang(lang) {
  state.uiLang = lang;
  const en = document.getElementById("uiLangEn");
  const bn = document.getElementById("uiLangBn");
  if (en) en.classList.toggle("active", lang === "en");
  if (bn) bn.classList.toggle("active", lang === "bn");
  applyTranslations();
  renderAboutTab(currentAboutTab);
  saveState();
}

/* ─── 12. SOUND TOGGLE ────────────────────────────── */
function toggleSound() { state.sound = !state.sound; updateSoundUI(); saveState(); }
function setSound(on) { state.sound = on; updateSoundUI(); saveState(); }
function updateSoundUI() {
  const soundBtn = document.getElementById("soundBtn");
  if (soundBtn) {
    soundBtn.textContent = state.sound ? "🔊" : "🔇";
    soundBtn.classList.toggle("active", state.sound);
  }
  const onBtn = document.getElementById("soundOn");
  const offBtn = document.getElementById("soundOff");
  if (onBtn) onBtn.classList.toggle("active", state.sound);
  if (offBtn) offBtn.classList.toggle("active", !state.sound);
}

/* ─── 13. MODE CHANGE ─────────────────────────────── */
function onModeChange() {
  state.mode = document.getElementById("modeSelect").value;
  const customWrap = document.getElementById("customSelectorWrap");
  if (state.mode === "custom") {
    customWrap.classList.remove("hidden");
    refreshCustomSelector();
  } else {
    customWrap.classList.add("hidden");
  }
  resetTest();
}

/* ─── 14. CUSTOM SELECTOR (short preview) ─────────── */
function getShortPreview(text) {
  const max = 30;
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max) + "...";
}

function refreshCustomSelector() {
  const lang = document.getElementById("textLangSelect").value;
  const sel = document.getElementById("customSelector");
  sel.innerHTML = '<option value="__random__">🎲 Random</option>';
  const list = state.customSentences[lang] || [];
  list.forEach((s, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = "📄 " + getShortPreview(s);
    sel.appendChild(opt);
  });
}

/* ─── 15. GENERATE TARGET ─────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWords(lang, diff, count) {
  const pool = WORDS[lang][diff];
  const result = [];
  while (result.length < count) {
    result.push(...shuffle(pool));
  }
  return result.slice(0, count);
}

function pickParagraph(lang, diff) {
  const pool = PARAGRAPHS[lang][diff];
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateTarget() {
  const lang = document.getElementById("textLangSelect").value;
  const diff = document.getElementById("diffSelect").value;
  const mode = document.getElementById("modeSelect").value;

  if (mode === "words") {
    const words = pickWords(lang, diff, 30);
    if (diff === "easy") {
      return words.join(" ");
    } else {
      return words.join(" ");
    }
  }

  if (mode === "paragraph") {
    return pickParagraph(lang, diff);
  }

  if (mode === "custom") {
    const list = state.customSentences[lang] || [];
    if (list.length === 0) {
      return state.uiLang === "bn"
        ? "⚠️ কোনো কাস্টম বাক্য নেই। 📚 বাটনে ক্লিক করে যোগ করুন।"
        : "⚠️ No custom sentences. Click 📚 button to add some.";
    }
    const sel = document.getElementById("customSelector").value;
    if (sel === "__random__") {
      const n = Math.min(list.length, 1 + Math.floor(Math.random() * 3));
      const picked = shuffle(list).slice(0, n);
      return picked.join(" ");
    } else {
      const idx = parseInt(sel);
      return list[idx] || list[0];
    }
  }

  return "";
}

function maybeExtendTarget() {
  if (state.mode !== "words") return;
  const typed = document.getElementById("input").value;
  const remaining = test.target.length - typed.length;
  if (remaining < 100) {
    const lang = document.getElementById("textLangSelect").value;
    const diff = document.getElementById("diffSelect").value;
    const more = pickWords(lang, diff, 30).join(" ");
    test.target += " " + more;
  }
}

/* ─── 16. RENDER TEXT ─────────────────────────────── */
function renderText() {
  const typed = document.getElementById("input").value;
  let html = "";
  for (let i = 0; i < test.target.length; i++) {
    const ch = test.target[i] === " " ? "&nbsp;" : test.target[i];
    const safe = ch === "<" ? "&lt;" : ch === ">" ? "&gt;" : ch === "&" ? "&amp;" : ch;
    if (i < typed.length) {
      html += typed[i] === test.target[i]
        ? `<span class="correct">${safe}</span>`
        : `<span class="wrong">${safe}</span>`;
    } else if (i === typed.length) {
      html += `<span class="current">${safe}</span>`;
    } else {
      html += safe;
    }
  }
  const textEl = document.getElementById("text");
  textEl.innerHTML = html;

  const cursor = textEl.querySelector(".current");
  if (cursor) {
    cursor.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }
}

/* ─── 17. TIMER ───────────────────────────────────── */
function startTimer() {
  if (test.timer || test.isFinished) return;
  test.startTime = Date.now();
  test.timer = setInterval(tickTimer, 100);
}

function tickTimer() {
  if (test.isPaused) return;
  test.elapsed = Math.floor((Date.now() - test.startTime) / 1000);
  const limit = test.timeLimit;

  if (limit > 0) {
    const remaining = Math.max(0, limit - test.elapsed);
    document.getElementById("time").textContent = remaining + "s";
    if (remaining <= 0) {
      finishTest();
      return;
    }
  } else {
    document.getElementById("time").textContent = test.elapsed + "s";
  }

  updateStats();
}

/* ─── 18. UPDATE STATS ────────────────────────────── */
function updateStats() {
  const elapsedMin = Math.max(test.elapsed / 60, 1 / 60);
  const wpm = Math.round((test.correctKeys / 5) / elapsedMin);
  const total = test.correctKeys + test.wrongKeys;
  const acc = total === 0 ? 100 : Math.round((test.correctKeys / total) * 100);

  document.getElementById("wpm").textContent = isFinite(wpm) ? wpm : 0;
  document.getElementById("acc").textContent = acc + "%";
  document.getElementById("correctCount").textContent = test.correctKeys;
  document.getElementById("wrongCount").textContent = test.wrongKeys;
  document.getElementById("bestScore").textContent =
    Math.max(state.bestScores.en, state.bestScores.bn) || 0;
}


/* ─── 19. INPUT HANDLING ──────────────────────────── */
function handleInput(e) {
  if (isComposing) return;

  const input = document.getElementById("input");
  
  // ★ এখানে NFKC নরমালাইজেশন ব্যবহার করা হলো যা ড + নুতা কে একটি একক 'ড়' তে রূপান্তর করে মেলাবে
  const typed = input.value.normalize('NFKC');
  const target = test.target.normalize('NFKC');

  if (test.isFinished) return;

  if (!test.isRunning && typed.length > 0) {
    test.isRunning = true;
    startTimer();
  }

  let correct = 0;
  let wrong = 0;

  for (let i = 0; i < typed.length; i++) {
    if (i < target.length) {
      if (typed[i] === target[i]) {
        correct++;
      } else {
        wrong++;
        if (i === typed.length - 1 && typed.length > test.lastTyped.length) {
          playWrong();
        }
      }
    } else {
      wrong++;
    }
  }

  test.correctKeys = correct;
  test.wrongKeys = wrong;
  test.lastTyped = typed;

  if (typed.length >= target.length) {
    if (test.timeLimit === 0 || state.mode === "paragraph" || state.mode === "custom") {
      finishTest();
      return;
    }
  }

  maybeExtendTarget();
  renderText();
  updateStats();
}



/* ─── 20. FINISH TEST ─────────────────────────────── */
function finishTest() {
  if (test.isFinished) return;
  test.isFinished = true;
  test.isRunning = false;
  if (test.timer) {
    clearInterval(test.timer);
    test.timer = null;
  }
  playFinish();

  const elapsedMin = Math.max(test.elapsed / 60, 1 / 60);
  const wpm = Math.round((test.correctKeys / 5) / elapsedMin);
  const cpm = Math.round(test.correctKeys / elapsedMin);
  const total = test.correctKeys + test.wrongKeys;
  const acc = total === 0 ? 100 : Math.round((test.correctKeys / total) * 100);

  state.totalSessions++;
  if (acc > state.bestAccuracy) state.bestAccuracy = acc;

  const lang = document.getElementById("textLangSelect").value;
  const isNewRecord = wpm > (state.bestScores[lang] || 0);
  if (isNewRecord) state.bestScores[lang] = wpm;

  const today = new Date().toDateString();
  if (state.streak.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.streak.lastDate === yesterday) {
      state.streak.count++;
    } else {
      state.streak.count = 1;
    }
    state.streak.lastDate = today;
  }

  saveState();

  document.getElementById("rWpm").textContent = isFinite(wpm) ? wpm : 0;
  document.getElementById("rAcc").textContent = acc + "%";
  document.getElementById("rTime").textContent = test.elapsed + "s";
  document.getElementById("rCorrect").textContent = test.correctKeys;
  document.getElementById("rWrong").textContent = test.wrongKeys;
  document.getElementById("rCpm").textContent = isFinite(cpm) ? cpm : 0;

  const newRecordEl = document.getElementById("newRecord");
  if (isNewRecord && wpm > 0) {
    newRecordEl.classList.remove("hidden");
  } else {
    newRecordEl.classList.add("hidden");
  }

  document.getElementById("input").disabled = true;
  openModal("resultModal");
}

/* ─── 21. RESET TEST ──────────────────────────────── */
function resetTest() {
  if (test.timer) {
    clearInterval(test.timer);
    test.timer = null;
  }

  test.isRunning = false;
  test.isFinished = false;
  test.isPaused = false;
  test.correctKeys = 0;
  test.wrongKeys = 0;
  test.totalKeys = 0;
  test.lastTyped = "";
  test.startTime = null;
  test.elapsed = 0;

  const timeSelect = document.getElementById("timeSelect");
  test.timeLimit = parseInt(timeSelect.value) || 0;

  const input = document.getElementById("input");
  input.value = "";
  input.disabled = false;
  input.focus();

  test.target = generateTarget();

  const timeEl = document.getElementById("time");
  if (test.timeLimit > 0) {
    timeEl.textContent = test.timeLimit + "s";
  } else {
    timeEl.textContent = "0s";
  }

  document.getElementById("pauseBtn").textContent = "⏸️";

  renderText();
  updateStats();
}

/* ─── 22. PAUSE ───────────────────────────────────── */
function togglePause() {
  if (test.isFinished || !test.isRunning) return;
  test.isPaused = !test.isPaused;
  const btn = document.getElementById("pauseBtn");
  btn.textContent = test.isPaused ? "▶️" : "⏸️";
  const input = document.getElementById("input");
  input.disabled = test.isPaused;
  if (!test.isPaused) {
    input.focus();
  }
}

/* ─── 23. SAVED SENTENCES ─────────────────────────── */
function openSavedModal() {
  cancelEdit();
  document.getElementById("savedAddInput").value = "";
  renderSavedList();
  openModal("savedModal");
}

function switchSavedTab(lang) {
  state.customTab = lang;
  document.getElementById("stabEn").classList.toggle("active", lang === "en");
  document.getElementById("stabBn").classList.toggle("active", lang === "bn");
  cancelEdit();
  renderSavedList();
  saveState();
}

function addSavedSentence() {
  const input = document.getElementById("savedAddInput");
  const text = input.value.trim();
  if (!text) {
    showToast(t("toastEmptyInput"), "error");
    return;
  }

  const lang = state.customTab;
  if (!state.customSentences[lang]) state.customSentences[lang] = [];

  if (editingIndex >= 0) {
    state.customSentences[lang][editingIndex] = text;
    showToast(t("toastUpdated"), "success");
    cancelEdit();
  } else {
    state.customSentences[lang].push(text);
    showToast(t("toastAdded"), "success");
  }

  input.value = "";
  saveState();
  renderSavedList();
  refreshCustomSelector();
}

function renderSavedList() {
  const lang = state.customTab;
  const list = state.customSentences[lang] || [];
  const container = document.getElementById("savedList");
  const countEl = document.getElementById("savedListCount");
  
  countEl.textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `<div class="saved-list-empty">${t("savedEmpty")}</div>`;
    return;
  }

  let html = "";
  list.forEach((text, i) => {
    const safe = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    html += `
      <div class="saved-item">
        <span class="saved-item-num">${i + 1}.</span>
        <span class="saved-item-text">${safe}</span>
        <div class="saved-item-actions">
          <button class="icon-btn" onclick="editSaved(${i})" title="${t("editBtn")}">✏️</button>
          <button class="icon-btn delete" onclick="deleteSaved(${i})" title="${t("deleteBtn")}">🗑️</button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function editSaved(index) {
  const lang = state.customTab;
  const list = state.customSentences[lang] || [];
  if (!list[index]) return;

  editingIndex = index;
  document.getElementById("savedAddInput").value = list[index];
  document.getElementById("savedAddInput").focus();
  document.getElementById("cancelEditBtn").classList.remove("hidden");
  document.getElementById("btnAddSaved").textContent = "💾 " + t("editBtn");
}

function cancelEdit() {
  editingIndex = -1;
  document.getElementById("savedAddInput").value = "";
  const cancelBtn = document.getElementById("cancelEditBtn");
  if (cancelBtn) cancelBtn.classList.add("hidden");
  const addBtn = document.getElementById("btnAddSaved");
  if (addBtn) addBtn.textContent = t("addBtn");
}

function deleteSaved(index) {
  if (!confirm(t("confirmDelete"))) return;
  const lang = state.customTab;
  const list = state.customSentences[lang] || [];
  list.splice(index, 1);
  state.customSentences[lang] = list;
  saveState();
  renderSavedList();
  refreshCustomSelector();
  showToast(t("toastDeleted"), "success");
}

/* ─── 24. ABOUT TABS ──────────────────────────────── */
function switchAboutTab(tab, btn) {
  currentAboutTab = tab;
  document.querySelectorAll(".atab").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderAboutTab(tab);
}

function renderAboutTab(tab) {
  const body = document.getElementById("aboutBody");
  const bn = state.uiLang === "bn";

  if (tab === "about") {
    body.innerHTML = `
      <div class="about-section">
        <h3>📖 ${bn ? "পরিচিতি" : "About"}</h3>
        <p>${bn
          ? "টাইপিং প্র্যাকটিস প্রো একটি আধুনিক, দ্রুত এবং সম্পূর্ণ অফলাইন টাইপিং প্র্যাকটিস অ্যাপ। এটি ইংরেজি এবং বাংলা উভয় ভাষায় টাইপিং অনুশীলনের জন্য তৈরি।"
          : "Typing Practice Pro is a modern, fast and fully offline typing practice app. It is built for practicing typing in both English and Bengali."}</p>
        <p>${bn
          ? "এই অ্যাপটি ভালোবাসা দিয়ে তৈরি করেছেন <strong>নিশাত হোসেন বাধন</strong> এর আইডিয়া ও তত্ত্বাবধানে, এবং কোড করেছেন <strong>DeepSeek AI ও Gemini</strong>।"
          : "This app was crafted with love under the idea and guidance of <strong>Nishat Hossain Badhon</strong>, and coded by <strong>DeepSeek AI & Gemini</strong>."}</p>
      </div>
      <div class="about-section">
        <h3>✨ ${bn ? "বৈশিষ্ট্য" : "Features"}</h3>
        <ul class="about-feature-list">
          <li>⚡ ${bn ? "রিয়েল-টাইম WPM, CPM, Accuracy" : "Real-time WPM, CPM, Accuracy"}</li>
          <li>📝 ${bn ? "Words / Paragraph / Custom মোড" : "Words / Paragraph / Custom modes"}</li>
          <li>🌐 ${bn ? "ইংরেজি ও বাংলা সাপোর্ট" : "English & Bengali support"}</li>
          <li>🎯 ${bn ? "৩টি কঠিনতা স্তর" : "3 difficulty levels"}</li>
          <li>💾 ${bn ? "লোকাল স্টোরেজ — সম্পূর্ণ অফলাইন" : "Local storage — fully offline"}</li>
        </ul>
      </div>
    `;
  } else if (tab === "v1") {
    body.innerHTML = `
      <div class="about-version-title">✨ Version 1.3</div>
      <div class="about-version-tag">${bn ? "বাগ ফিক্স ও কিবোর্ড আপডেট" : "Bug Fix & Keyboard Update"}</div>
      <ul class="about-feature-list">
        <li>✅ ${bn ? "কম্পিউটারে অভ্র/বিজয় বাংলা টাইপিং ফিক্সড" : "Computer Avro/Bijoy typing fixed"}</li>
        <li>✅ ${bn ? "শব্দ ভেঙে যাওয়ার সমস্যা সমাধান" : "Word breaking issue resolved"}</li>
        <li>✅ ${bn ? "নতুন কাস্টম সেভ/এডিট সিস্টেম" : "New custom save/edit system"}</li>
      </ul>
    `;
  } else if (tab === "v2") {
    body.innerHTML = `
      <div class="about-version-title">🚀 Version 2.0</div>
      <div class="about-version-tag">${bn ? "সোশ্যাল ও গেমিফিকেশন" : "Social & Gamification"}</div>
      <ul class="about-feature-list">
        <li>⏳ ${bn ? "লিডারবোর্ড" : "Leaderboard"}</li>
        <li>⏳ ${bn ? "অ্যাচিভমেন্ট ব্যাজ" : "Achievement badges"}</li>
        <li>⏳ ${bn ? "ডেইলি চ্যালেঞ্জ" : "Daily challenge"}</li>
      </ul>
    `;
  } else if (tab === "v3") {
    body.innerHTML = `
      <div class="about-version-title">🌌 Version 3.0</div>
      <div class="about-version-tag">${bn ? "AI ও অ্যাডভান্সড অ্যানালিটিক্স" : "AI & Advanced Analytics"}</div>
      <ul class="about-feature-list">
        <li>⏳ ${bn ? "AI কী-স্ট্রোক প্রেডিকশন" : "AI keystroke prediction"}</li>
        <li>⏳ ${bn ? "ভয়েস-টু-টাইপ মোড" : "Voice-to-type mode"}</li>
      </ul>
    `;
  } else if (tab === "v4") {
    body.innerHTML = `
      <div class="about-version-title">💎 Version 4.0</div>
      <div class="about-version-tag">${bn ? "আল্টিমেট এক্সপেরিয়েন্স" : "The Ultimate Experience"}</div>
      <ul class="about-feature-list">
        <li>⏳ ${bn ? "৩ডি ইন্টারফেস" : "3D interface"}</li>
        <li>⏳ ${bn ? "টাইপিং কোর্স মোড" : "Typing course mode"}</li>
      </ul>
    `;
  }
}

/* ─── 25. FEEDBACK ────────────────────────────────── */
function submitFeedback() {
  const comment = document.getElementById("fbComment").value.trim();
  if (!comment) {
    showToast(t("toastNoComment"), "error");
    return;
  }

  const name = document.getElementById("fbName").value.trim() || "(anonymous)";
  const rating = state.feedbackRating || 0;
  const cats = Array.from(document.querySelectorAll("#catRow input:checked"))
    .map(c => c.value);
  const catStr = cats.length ? cats.join(", ") : "(none)";

  let txt = "";
  txt += "═══════════════════════════════════════\n";
  txt += "  Typing Practice Pro — Feedback\n";
  txt += "═══════════════════════════════════════\n\n";
  txt += `Date    : ${new Date().toLocaleString()}\n`;
  txt += `Name    : ${name}\n`;
  txt += `Rating  : ${rating ? "★".repeat(rating) + "☆".repeat(5 - rating) : "(none)"}\n`;
  txt += `Category: ${catStr}\n\n`;
  txt += "Comment :\n" + comment + "\n\n";
  txt += "───────────────────────────────────────\n";
  txt += "Thank you for your feedback!\n";

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `typing_pro_feedback_${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(t("toastFeedback"), "success");
}

function clearFeedback() {
  document.getElementById("fbName").value = "";
  document.getElementById("fbComment").value = "";
  state.feedbackRating = 0;
  document.querySelectorAll(".star").forEach(s => {
    s.textContent = "☆";
    s.classList.remove("active");
  });
  document.querySelectorAll("#catRow input").forEach(c => c.checked = false);
}

/* ─── 26. BACKUP ──────────────────────────────────── */
function exportData() {
  const data = {
    version: "1.3",
    exportedAt: new Date().toISOString(),
    state: state
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `typing_pro_backup_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t("toastExported"), "success");
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.state) {
        state = Object.assign(state, data.state);
        saveState();
        applyTranslations();
        applyTheme();
        updateSoundUI();
        showToast(t("toastImported"), "success");
        location.reload();
      } else {
        showToast(t("toastImportFail"), "error");
      }
    } catch (err) {
      showToast(t("toastImportFail"), "error");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetAllData() {
  if (!confirm(state.uiLang === "bn"
    ? "সব ডেটা মুছে ফেলবেন?"
    : "Reset ALL data?")) return;
  localStorage.removeItem("typingProState");
  location.reload();
}

/* ─── 27. COPY RESULT ─────────────────────────────── */
function copyResult() {
  const text = `
⚡ Typing Practice Pro — Result
─────────────────────────────
WPM      : ${document.getElementById("rWpm").textContent}
Accuracy : ${document.getElementById("rAcc").textContent}
Time     : ${document.getElementById("rTime").textContent}
Correct  : ${document.getElementById("rCorrect").textContent}
Wrong    : ${document.getElementById("rWrong").textContent}
CPM      : ${document.getElementById("rCpm").textContent}
  `.trim();

  navigator.clipboard.writeText(text).then(() => {
    showToast(t("toastCopied"), "success");
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(t("toastCopied"), "success");
  });
}

/* ─── 28. WELCOME SCREEN ──────────────────────────── */
function runWelcomeAnimation() {
  const title = document.getElementById("welcomeTitle");
  const subtitle = document.getElementById("welcomeSubtitle");
  const credits = document.getElementById("welcomeCredits");
  const btn = document.getElementById("welcomeBtn");

  title.textContent = t("welcomeTitle");
  subtitle.textContent = t("welcomeSubtitle");
  document.getElementById("wCredit1").textContent = t("credit1");
  document.getElementById("wCredit2").textContent = t("credit2");
  document.getElementById("welcomeBtnText").textContent = t("startBtn");

  title.classList.add("show");
  subtitle.classList.add("show");
  credits.classList.add("show");
  btn.classList.add("show");
}

function startApp() {
  const welcome = document.getElementById("welcomeScreen");
  welcome.style.opacity = "0";
  setTimeout(() => {
    welcome.classList.add("hidden");
    document.getElementById("mainApp").classList.remove("hidden");
    resetTest();
    document.getElementById("input").focus();
  }, 700);
}

/* ─── 29. STAR RATING ─────────────────────────────── */
function initStarRating() {
  const stars = document.querySelectorAll(".star");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const val = parseInt(star.dataset.val);
      state.feedbackRating = val;
      stars.forEach(s => {
        const sv = parseInt(s.dataset.val);
        if (sv <= val) {
          s.textContent = "★";
          s.classList.add("active");
        } else {
          s.textContent = "☆";
          s.classList.remove("active");
        }
      });
    });
    star.addEventListener("mouseenter", () => {
      const val = parseInt(star.dataset.val);
      stars.forEach(s => {
        const sv = parseInt(s.dataset.val);
        s.textContent = sv <= val ? "★" : "☆";
      });
    });
  });
  const starRow = document.getElementById("starRow");
  if (starRow) {
    starRow.addEventListener("mouseleave", () => {
      stars.forEach(s => {
        const sv = parseInt(s.dataset.val);
        if (sv <= state.feedbackRating) {
          s.textContent = "★";
          s.classList.add("active");
        } else {
          s.textContent = "☆";
          s.classList.remove("active");
        }
      });
    });
  }
}

/* ─── 30. INIT ────────────────────────────────────── */
function init() {
  loadState();
  applyTheme();
  applyTranslations();
  updateSoundUI();

  document.getElementById("textLangSelect").value = state.textLang || "en";
  document.getElementById("modeSelect").value = state.mode || "words";

  document.getElementById("uiLangEn").classList.toggle("active", state.uiLang === "en");
  document.getElementById("uiLangBn").classList.toggle("active", state.uiLang === "bn");

  document.getElementById("soundOn").classList.toggle("active", state.sound);
  document.getElementById("soundOff").classList.toggle("active", !state.sound);

  runWelcomeAnimation();
  switchSavedTab(state.customTab || "en");
  initStarRating();
  renderAboutTab("about");

  const input = document.getElementById("input");
  
  // ★ কম্পিউটার কিবোর্ড (Avro/Bijoy) কম্পোজিশন ইভেন্ট লিসেনারসমূহ
  input.addEventListener("compositionstart", () => {
    isComposing = true;
  });

  input.addEventListener("compositionend", (e) => {
    isComposing = false;
    handleInput(e);
  });

  input.addEventListener("input", handleInput);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(m => m.classList.remove("show"));
    }
  });

  document.getElementById("textLangSelect").addEventListener("change", (e) => {
    state.textLang = e.target.value;
    saveState();
    if (state.mode === "custom") refreshCustomSelector();
  });

  document.querySelectorAll(".modal").forEach(m => {
    m.addEventListener("click", (e) => {
      if (e.target === m) {
        m.classList.remove("show");
      }
    });
  });

  const textDisplay = document.getElementById("text");
  if (textDisplay) {
    textDisplay.addEventListener("click", () => {
      if (!test.isFinished && !test.isPaused) {
        document.getElementById("input").focus();
      }
    });
  }

  const bestScoreEl = document.getElementById("bestScore");
  if (bestScoreEl) {
    bestScoreEl.textContent = Math.max(state.bestScores.en, state.bestScores.bn) || 0;
  }

  const savedInput = document.getElementById("savedAddInput");
  if (savedInput) {
    savedInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        addSavedSentence();
      }
    });
  }
}

/* ─── 31. RUN ─────────────────────────────────────── */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
