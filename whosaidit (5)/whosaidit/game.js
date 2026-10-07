// -------------------- DATA --------------------
// Local seed clips (always available) + remote public-domain catalog
// The game fetches additional clips from the internet while you play

const LOCAL_LIBRARY = [
  {
    id: "churchill_1", speaker: "Winston Churchill", category: "World Leaders",
    audioUrl: "audio/churchill_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "normal",
    distractors: ["Franklin D. Roosevelt", "John F. Kennedy", "Neville Chamberlain"]
  },
  {
    id: "kennedy_1", speaker: "John F. Kennedy", category: "Presidents",
    audioUrl: "audio/kennedy_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "easy",
    distractors: ["Ronald Reagan", "Lyndon B. Johnson", "Richard Nixon"]
  },
  {
    id: "armstrong_1", speaker: "Neil Armstrong", category: "Explorers & Astronauts",
    audioUrl: "audio/armstrong_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "easy",
    distractors: ["John F. Kennedy", "Buzz Aldrin", "Yuri Gagarin"]
  },
  {
    id: "fdr_1", speaker: "Franklin D. Roosevelt", category: "Presidents",
    audioUrl: "audio/fdr_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "normal",
    distractors: ["Winston Churchill", "Harry Truman", "Dwight Eisenhower"]
  },
  {
    id: "reagan_1", speaker: "Ronald Reagan", category: "Presidents",
    audioUrl: "audio/reagan_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "normal",
    distractors: ["John F. Kennedy", "George H. W. Bush", "Margaret Thatcher"]
  },
  {
    id: "gehrig_1", speaker: "Lou Gehrig", category: "Athletes",
    audioUrl: "audio/gehrig_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "hard",
    distractors: ["Babe Ruth", "Joe DiMaggio", "Mickey Mantle"]
  },
  {
    id: "steinem_1", speaker: "Gloria Steinem", category: "Activists",
    audioUrl: "audio/steinem_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "hard",
    distractors: ["Eleanor Roosevelt", "Betty Friedan", "Rosa Parks"]
  },
  {
    id: "macarthur_1", speaker: "Douglas MacArthur", category: "Military Leaders",
    audioUrl: "audio/macarthur_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "normal",
    distractors: ["Dwight Eisenhower", "George Patton", "Chester Nimitz"]
  },
  {
    id: "lbj_1", speaker: "Lyndon B. Johnson", category: "Presidents",
    audioUrl: "audio/lbj_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "normal",
    distractors: ["John F. Kennedy", "Martin Luther King Jr.", "Robert F. Kennedy"]
  },
  {
    id: "chamberlain_1", speaker: "Neville Chamberlain", category: "World Leaders",
    audioUrl: "audio/chamberlain_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "hard",
    distractors: ["Winston Churchill", "Adolf Hitler", "Franklin D. Roosevelt"]
  },
  {
    id: "edward_1", speaker: "King Edward VIII", category: "Royalty",
    audioUrl: "audio/edward_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "hard",
    distractors: ["King George VI", "Winston Churchill", "Queen Elizabeth II"]
  },
  {
    id: "jesse_1", speaker: "Jesse Jackson", category: "Activists",
    audioUrl: "audio/jesse_short.mp3", duration: 12,
    source: "Public Domain", difficulty: "normal",
    distractors: ["Martin Luther King Jr.", "Malcolm X", "Barack Obama"]
  }
];

// Remote public-domain clips (Archive.org / open sources)
// These are fetched progressively while the player is playing
const REMOTE_CATALOG = [
  {
    id: "remote_truman", speaker: "Harry S. Truman", category: "Presidents",
    audioUrl: "https://archive.org/download/GreatestSpeechesBabbleLabs/Inaugural%20Address%20-%20Harry%20S.%20Truman%20%281949%29.mp3",
    duration: 12, source: "Public Domain - Archive.org", difficulty: "normal",
    distractors: ["Franklin D. Roosevelt", "Dwight Eisenhower", "John F. Kennedy"],
    remote: true, trimStart: 5
  },
  {
    id: "remote_nixon", speaker: "Richard Nixon", category: "Presidents",
    audioUrl: "https://archive.org/download/GreatestSpeechesBabbleLabs/Concession%20Stand%20-%20Richard%20M.%20Nixon%20%281962%29.mp3",
    duration: 12, source: "Public Domain - Archive.org", difficulty: "normal",
    distractors: ["John F. Kennedy", "Ronald Reagan", "Lyndon B. Johnson"],
    remote: true, trimStart: 8
  },
  {
    id: "remote_eisenhower", speaker: "Dwight D. Eisenhower", category: "Presidents",
    audioUrl: "https://archive.org/download/GreatestSpeechesBabbleLabs/Address%20to%20the%20Nation%20-%20Dwight%20D.%20Eisenhower%20%281961%29.mp3",
    duration: 12, source: "Public Domain - Archive.org", difficulty: "normal",
    distractors: ["Harry Truman", "John F. Kennedy", "Douglas MacArthur"],
    remote: true, trimStart: 3
  },
  {
    id: "remote_pershing", speaker: "John J. Pershing", category: "Military Leaders",
    audioUrl: "https://archive.org/download/GreatestSpeechesBabbleLabs/Address%20from%20France%20-%20John%20J.%20%22Black%20Jack%22%20Pershing%20%281914%29.mp3",
    duration: 12, source: "Public Domain - Archive.org", difficulty: "hard",
    distractors: ["Douglas MacArthur", "George Patton", "Dwight Eisenhower"],
    remote: true, trimStart: 0
  },
  {
    id: "remote_king_edward", speaker: "King Edward VIII", category: "Royalty",
    audioUrl: "https://archive.org/download/GreatestSpeechesBabbleLabs/Abdication%20Address%20-%20King%20Edward%20VIII%20%281936%29.mp3",
    duration: 12, source: "Public Domain - Archive.org", difficulty: "hard",
    distractors: ["King George VI", "Winston Churchill", "Queen Elizabeth II"],
    remote: true, trimStart: 10
  }
];

// 20+ categories supported by the system
const CATEGORIES = [
  "All",
  "World Leaders",
  "Presidents",
  "Military Leaders",
  "Activists",
  "Explorers & Astronauts",
  "Athletes",
  "Royalty",
  "Scientists",
  "Writers & Authors",
  "Actors & Entertainers",
  "Musicians",
  "Business Leaders",
  "Journalists",
  "Religious Figures",
  "Civil Rights",
  "Inventors",
  "Philosophers",
  "Sports Legends",
  "Historical Figures",
  "Public Figures",
  "Fictional Characters",
  "Internet Personalities",
  "Random"
];

const REVEAL_STAGES = [2, 4, 7, 12];
const SCORING = {
  BASE_POINTS: 1000,
  MAX_AUDIO_BONUS: 800,
  STREAK_MULTIPLIER_STEP: 0.15,
  MAX_STREAK_MULTIPLIER: 2.5,
  RESPONSE_SPEED_BONUS: 200
};

// Live library grows as remote clips are fetched
let AUDIO_LIBRARY = [...LOCAL_LIBRARY];
const fetchedRemoteIds = new Set();

/** Fetch a remote clip into the live library (used while playing) */
async function fetchRemoteClip(meta) {
  if (fetchedRemoteIds.has(meta.id)) return meta;
  try {
    // Trigger browser cache / availability check
    const res = await fetch(meta.audioUrl, { method: "HEAD", mode: "cors" });
    if (!res.ok && res.status !== 0) {
      // Some archive.org responses are opaque; still try
      console.warn("Remote HEAD failed, will still attempt playback", meta.id);
    }
    fetchedRemoteIds.add(meta.id);
    if (!AUDIO_LIBRARY.find(c => c.id === meta.id)) {
      AUDIO_LIBRARY.push({ ...meta });
    }
    return meta;
  } catch (e) {
    console.warn("Could not prefetch remote clip", meta.id, e);
    return null;
  }
}

/** Background: pull next unused remote clips while player is in a round */
function prefetchNextRemotes(count = 2) {
  const pending = REMOTE_CATALOG.filter(c => !fetchedRemoteIds.has(c.id));
  const batch = pending.slice(0, count);
  batch.forEach(c => fetchRemoteClip(c));
}

// -------------------- AUDIO MANAGER --------------------
class AudioManager {
  constructor() {
    this.audio = new Audio();
    this.audio.preload = "auto";
    this.audio.volume = 1;
    this.audio.crossOrigin = "anonymous";
    this.currentClip = null;
    this.unlockedDuration = 0;
    this.isPlaying = false;
    this.onTimeUpdate = null;
    this.onEnded = null;
    this.preloadCache = new Map();
    this.audioContext = null;
    this.analyser = null;
    this._sourceConnected = false;
    this._unlockedByGesture = false;

    this.audio.addEventListener("timeupdate", () => {
      if (this.onTimeUpdate) this.onTimeUpdate(this.audio.currentTime, this.unlockedDuration);
      if (this.unlockedDuration > 0 && this.audio.currentTime >= this.unlockedDuration - 0.05 && this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
        if (this.onEnded) this.onEnded();
      }
    });
    this.audio.addEventListener("ended", () => {
      this.isPlaying = false;
      if (this.onEnded) this.onEnded();
    });
    this.audio.addEventListener("error", (e) => {
      console.error("Audio error:", this.audio.error, this.audio.src);
    });
  }

  /** Call from any user gesture to unlock autoplay policies */
  async unlock() {
    if (this._unlockedByGesture) return;
    try {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioContext.state === "suspended") {
        await this.audioContext.resume();
      }
      // Silent unlock play
      const prev = this.audio.src;
      if (!prev) {
        // tiny silent data uri not needed if we have real clips
      }
      this._unlockedByGesture = true;
    } catch (e) {
      console.warn("Audio unlock:", e);
    }
  }

  async initAudioContext() {
    try {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioContext.state === "suspended") {
        await this.audioContext.resume();
      }
      // Connect analyser only once
      if (!this._sourceConnected && this.audioContext) {
        try {
          const source = this.audioContext.createMediaElementSource(this.audio);
          this.analyser = this.audioContext.createAnalyser();
          this.analyser.fftSize = 256;
          source.connect(this.analyser);
          this.analyser.connect(this.audioContext.destination);
          this._sourceConnected = true;
        } catch (e) {
          // Already connected or not allowed — still play through element
          console.warn("Analyser connect skipped:", e.message);
        }
      }
    } catch (e) {
      console.warn("AudioContext init:", e);
    }
  }

  async loadClip(clipMeta) {
    this.currentClip = clipMeta;
    this.unlockedDuration = 0;
    this.audio.pause();
    this.audio.src = clipMeta.audioUrl;
    this.audio.load();
    return new Promise((resolve, reject) => {
      const onReady = () => {
        cleanup();
        resolve();
      };
      const onErr = (e) => {
        cleanup();
        console.error("Load failed:", clipMeta.audioUrl, e);
        // Resolve anyway so game continues; play may still work
        resolve();
      };
      const cleanup = () => {
        this.audio.removeEventListener("canplaythrough", onReady);
        this.audio.removeEventListener("error", onErr);
      };
      this.audio.addEventListener("canplaythrough", onReady);
      this.audio.addEventListener("error", onErr);
      // Timeout fallback
      setTimeout(() => { cleanup(); resolve(); }, 8000);
    });
  }

  preload(clipMeta) {
    if (!clipMeta || this.preloadCache.has(clipMeta.id)) return;
    const a = new Audio();
    a.preload = "auto";
    a.src = clipMeta.audioUrl;
    a.load();
    this.preloadCache.set(clipMeta.id, a);
  }

  setUnlocked(seconds) {
    this.unlockedDuration = Math.min(seconds, this.currentClip?.duration || 12);
  }

  async playFromStart() {
    await this.unlock();
    await this.initAudioContext();
    this.audio.currentTime = 0;
    this.audio.volume = 1;
    try {
      await this.audio.play();
      this.isPlaying = true;
    } catch (e) {
      console.error("playFromStart failed:", e);
      // Retry once after short delay (some browsers need it)
      try {
        await new Promise(r => setTimeout(r, 100));
        await this.audio.play();
        this.isPlaying = true;
      } catch (e2) {
        console.error("play retry failed:", e2);
      }
    }
  }

  async playUnlocked() {
    await this.unlock();
    await this.initAudioContext();
    if (this.audio.currentTime >= this.unlockedDuration) this.audio.currentTime = 0;
    this.audio.volume = 1;
    try {
      await this.audio.play();
      this.isPlaying = true;
    } catch (e) {
      console.error("playUnlocked failed:", e);
    }
  }

  pause() { this.audio.pause(); this.isPlaying = false; }
  stop() { this.audio.pause(); this.audio.currentTime = 0; this.isPlaying = false; }
  getUnlockedDuration() { return this.unlockedDuration; }

  destroy() {
    this.stop();
    this.audio.src = "";
    this.preloadCache.clear();
  }
}

// -------------------- SCORING --------------------
class ScoringSystem {
  constructor() { this.reset(); }

  reset() {
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.totalAnswered = 0;
    this.totalAudioUsed = 0;
  }

  calculatePoints(audioUsed, maxDuration = 12, responseTimeMs = 0) {
    const progress = Math.min(audioUsed / maxDuration, 1);
    const audioFactor = Math.pow(1 - progress, 1.4);
    const audioBonus = Math.round(SCORING.MAX_AUDIO_BONUS * audioFactor);
    const streakMult = Math.min(1 + this.streak * SCORING.STREAK_MULTIPLIER_STEP, SCORING.MAX_STREAK_MULTIPLIER);
    const speedBonus = responseTimeMs > 0 && responseTimeMs < 3000
      ? Math.round(SCORING.RESPONSE_SPEED_BONUS * (1 - responseTimeMs / 3000)) : 0;
    return Math.round((SCORING.BASE_POINTS + audioBonus + speedBonus) * streakMult);
  }

  recordAnswer({ correct, audioUsed, points }) {
    this.totalAnswered++;
    this.totalAudioUsed += audioUsed;
    if (correct) {
      this.correctCount++;
      this.streak++;
      this.maxStreak = Math.max(this.maxStreak, this.streak);
      this.score += points;
    } else {
      this.streak = 0;
    }
    return { points: correct ? points : 0, streak: this.streak, totalScore: this.score };
  }

  getStats() {
    const accuracy = this.totalAnswered > 0 ? Math.round((this.correctCount / this.totalAnswered) * 100) : 0;
    const avgAudio = this.totalAnswered > 0 ? (this.totalAudioUsed / this.totalAnswered).toFixed(1) : 0;
    return {
      score: this.score, correct: this.correctCount, total: this.totalAnswered,
      accuracy, avgAudioUsed: avgAudio, maxStreak: this.maxStreak, currentStreak: this.streak
    };
  }
}

// -------------------- QUESTION MANAGER --------------------
class QuestionManager {
  constructor() {
    this.queue = [];
    this.currentIndex = 0;
  }

  // Always read from the live library (grows as remote clips arrive)
  getLibrary() {
    return AUDIO_LIBRARY;
  }

  filterLibrary({ category = "All", difficulty = "Normal" } = {}) {
    let filtered = [...this.getLibrary()];
    if (category && category !== "All") filtered = filtered.filter(c => c.category === category);
    if (difficulty === "Easy") filtered = filtered.filter(c => c.difficulty === "easy" || c.difficulty === "normal");
    else if (difficulty === "Hard") filtered = filtered.filter(c => c.difficulty === "hard" || c.difficulty === "normal");
    if (filtered.length === 0) filtered = [...this.getLibrary()];
    return filtered;
  }

  prepareQueue(count, options = {}) {
    // Kick off background internet fetches so later rounds can use new voices
    prefetchNextRemotes(3);

    const pool = this.filterLibrary(options).sort(() => Math.random() - 0.5);
    this.queue = [];
    for (let i = 0; i < count; i++) this.queue.push(this._buildQuestion(pool[i % pool.length]));
    this.currentIndex = 0;
    return this.queue;
  }

  _buildQuestion(clip) {
    const options = [clip.speaker, ...clip.distractors].slice(0, 4);
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return {
      id: clip.id + "_" + Date.now() + Math.random().toString(36).slice(2, 6),
      clip, options, correctAnswer: clip.speaker, stages: REVEAL_STAGES, answered: false, audioUsed: 0
    };
  }

  getCurrent() { return this.queue[this.currentIndex] || null; }
  getNext() { this.currentIndex++; return this.getCurrent(); }
  hasMore() { return this.currentIndex < this.queue.length - 1; }
  getProgress() { return { current: this.currentIndex + 1, total: this.queue.length }; }
}

// -------------------- LEADERBOARD --------------------
class Leaderboard {
  constructor() {
    this.STORAGE_KEY = "whosaidit_leaderboard_v1";
    this.PB_KEY = "whosaidit_personal_best";
    this.entries = this._load();
  }

  _load() {
    try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "[]"); } catch { return []; }
  }
  _save() {
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.entries.slice(0, 100))); } catch {}
  }

  submit({ name, score, mode, config, date = new Date().toISOString() }) {
    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name: (name || "Anonymous").slice(0, 20), score, mode, config: config || {}, date
    };
    this.entries.push(entry);
    this.entries.sort((a, b) => b.score - a.score);
    this._save();
    try {
      const pb = JSON.parse(localStorage.getItem(this.PB_KEY) || "{}");
      if (!pb[mode] || score > pb[mode].score) {
        pb[mode] = { score, date, name: entry.name };
        localStorage.setItem(this.PB_KEY, JSON.stringify(pb));
      }
    } catch {}
    return { rank: this.entries.findIndex(e => e.id === entry.id) + 1, entry };
  }

  getTop(limit = 15, modeFilter = null) {
    let list = this.entries;
    if (modeFilter) list = list.filter(e => e.mode === modeFilter);
    return list.slice(0, limit);
  }

  getPersonalBest(mode) {
    try { return JSON.parse(localStorage.getItem(this.PB_KEY) || "{}")[mode] || null; } catch { return null; }
  }
}

// -------------------- WEBRTC (multiplayer) --------------------
class WebRTCManager {
  constructor() {
    this.peer = null;
    this.connection = null;
    this.isHost = false;
    this.roomCode = null;
    this.onMessage = null;
    this.onConnected = null;
    this.onDisconnected = null;
    this.onError = null;
  }

  async init() {
    if (typeof Peer === "undefined") {
      await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js";
        s.onload = resolve; s.onerror = reject;
        document.head.appendChild(s);
      });
    }
  }

  _generateCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  async createRoom() {
    await this.init();
    this.isHost = true;
    this.roomCode = this._generateCode();
    return new Promise((resolve, reject) => {
      this.peer = new Peer("whosaidit-" + this.roomCode, { debug: 1 });
      this.peer.on("open", () => resolve(this.roomCode));
      this.peer.on("connection", (conn) => {
        this.connection = conn;
        this._setupConnection(conn);
      });
      this.peer.on("error", (err) => { if (this.onError) this.onError(err); reject(err); });
    });
  }

  async joinRoom(code) {
    await this.init();
    this.isHost = false;
    this.roomCode = code.toUpperCase();
    return new Promise((resolve, reject) => {
      this.peer = new Peer({ debug: 1 });
      this.peer.on("open", () => {
        const conn = this.peer.connect("whosaidit-" + this.roomCode, { reliable: true });
        this.connection = conn;
        this._setupConnection(conn);
        conn.on("open", () => resolve(this.roomCode));
        conn.on("error", reject);
      });
      this.peer.on("error", (err) => { if (this.onError) this.onError(err); reject(err); });
    });
  }

  _setupConnection(conn) {
    conn.on("open", () => { if (this.onConnected) this.onConnected(); });
    conn.on("data", (data) => { if (this.onMessage) this.onMessage(data); });
    conn.on("close", () => { this.connection = null; if (this.onDisconnected) this.onDisconnected(); });
    conn.on("error", (err) => { if (this.onError) this.onError(err); });
  }

  send(data) {
    if (this.connection && this.connection.open) { this.connection.send(data); return true; }
    return false;
  }

  destroy() {
    if (this.connection) this.connection.close();
    if (this.peer) this.peer.destroy();
    this.connection = null;
    this.peer = null;
  }
}

// -------------------- UI --------------------
class UI {
  constructor() {
    this.screens = {
      home: document.getElementById("screen-home"),
      soloSettings: document.getElementById("screen-solo-settings"),
      multiLobby: document.getElementById("screen-multi-lobby"),
      game: document.getElementById("screen-game"),
      results: document.getElementById("screen-results"),
      leaderboard: document.getElementById("screen-leaderboard")
    };
    this.el = {
      scoreDisplay: document.getElementById("score-display"),
      streakDisplay: document.getElementById("streak-display"),
      roundLabel: document.getElementById("round-label"),
      timerDisplay: document.getElementById("timer-display"),
      progressFill: document.getElementById("progress-fill"),
      waveform: document.getElementById("waveform"),
      audioLabel: document.getElementById("audio-label"),
      heardTime: document.getElementById("heard-time"),
      maxTime: document.getElementById("max-time"),
      btnReveal: document.getElementById("btn-reveal"),
      answersGrid: document.getElementById("answers-grid"),
      scorePopup: document.getElementById("score-popup"),
      finalScore: document.getElementById("final-score"),
      statCorrect: document.getElementById("stat-correct"),
      statAccuracy: document.getElementById("stat-accuracy"),
      statAvg: document.getElementById("stat-avg"),
      statStreak: document.getElementById("stat-streak"),
      pbDisplay: document.getElementById("pb-display"),
      submitName: document.getElementById("submit-name"),
      leaderboardList: document.getElementById("leaderboard-list"),
      roomCodeDisplay: document.getElementById("room-code-display"),
      roomStatus: document.getElementById("room-status"),
      multiScores: document.getElementById("multi-scores"),
      myScore: document.getElementById("my-score"),
      friendScore: document.getElementById("friend-score")
    };
    this.waveBars = [];
    this._buildWaveform();
  }

  showScreen(name) {
    Object.values(this.screens).forEach(s => s.classList.remove("active"));
    if (this.screens[name]) this.screens[name].classList.add("active");
  }

  _buildWaveform() {
    this.el.waveform.innerHTML = "";
    this.waveBars = [];
    for (let i = 0; i < 32; i++) {
      const bar = document.createElement("div");
      bar.className = "wave-bar";
      bar.style.height = "8px";
      this.el.waveform.appendChild(bar);
      this.waveBars.push(bar);
    }
  }

  updateWaveformProgress(currentTime, unlocked) {
    const progress = unlocked > 0 ? Math.min(currentTime / unlocked, 1) : 0;
    this.el.heardTime.textContent = currentTime.toFixed(1);
    const t = Date.now() / 1000;
    this.waveBars.forEach((bar, i) => {
      const center = this.waveBars.length / 2;
      const dist = Math.abs(i - center) / center;
      const wave = Math.sin(t * 4.2 + i * 0.55) * 0.5 + Math.sin(t * 2.7 + i * 0.3) * 0.3;
      const height = 6 + (1 - dist * 0.6) * (18 + wave * 22);
      bar.style.height = `${Math.max(3, height)}px`;
      bar.classList.toggle("active", i / this.waveBars.length < progress);
    });
  }

  setListeningState(listening) {
    this.el.audioLabel.innerHTML = listening
      ? `<span class="listening-pulse"></span> LISTENING…`
      : "PAUSED";
  }

  onAudioSegmentEnded() { this.setListeningState(false); }

  updateUnlockProgress(unlocked, stages) {
    this.el.maxTime.textContent = unlocked;
    const isMax = unlocked >= stages[stages.length - 1];
    this.el.btnReveal.disabled = isMax;
    this.el.btnReveal.textContent = isMax ? "Full clip" : "Hear more →";
  }

  showRound({ question, progress, score, streak }) {
    this.el.scoreDisplay.textContent = score;
    this._updateStreak(streak);
    this.el.roundLabel.textContent = `Round ${progress.current} / ${progress.total}`;
    this.el.progressFill.style.width = `${(progress.current / progress.total) * 100}%`;
    this.el.heardTime.textContent = "0";
    this.el.maxTime.textContent = REVEAL_STAGES[0];
    this.el.btnReveal.disabled = false;
    this.el.btnReveal.textContent = "Hear more →";
    this.setListeningState(true);

    const grid = this.el.answersGrid;
    grid.innerHTML = "";
    question.options.forEach((opt, i) => {
      const card = document.createElement("button");
      card.className = "answer-card";
      card.textContent = opt;
      card.dataset.answer = opt;
      card.style.opacity = "0";
      card.style.transform = "translateY(10px)";
      grid.appendChild(card);
      requestAnimationFrame(() => {
        setTimeout(() => {
          card.style.transition = "opacity 220ms cubic-bezier(0.22,1,0.36,1), transform 220ms cubic-bezier(0.22,1,0.36,1)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 40 + i * 50);
      });
    });
  }

  showAnswerResult({ correct, selected, correctAnswer, points, streak, totalScore }) {
    this.el.answersGrid.querySelectorAll(".answer-card").forEach(card => {
      card.classList.add("disabled");
      if (card.dataset.answer === correctAnswer) card.classList.add("correct");
      else if (card.dataset.answer === selected && !correct) card.classList.add("wrong");
    });
    this.el.scoreDisplay.textContent = totalScore;
    this._updateStreak(streak, true);
    if (correct && points > 0) this._showScorePopup(points, streak);
    this.setListeningState(false);
  }

  _updateStreak(streak, animate = false) {
    const el = this.el.streakDisplay;
    if (streak > 1) {
      el.textContent = `🔥 ${streak}`;
      if (animate) {
        el.classList.remove("streak-flash");
        void el.offsetWidth;
        el.classList.add("streak-flash");
      }
    } else el.textContent = "";
  }

  _showScorePopup(points, streak = 0) {
    const popup = this.el.scorePopup;
    let text = `+${points}`;
    if (streak >= 5) text = `🔥 +${points}`;
    else if (streak >= 3) text = `+${points}  ×${streak}`;
    popup.textContent = text;
    popup.classList.remove("show");
    void popup.offsetWidth;
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 1000);
  }

  updateTimer(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    this.el.timerDisplay.textContent = `${m}:${s.toString().padStart(2, "0")}`;
    this.el.timerDisplay.classList.remove("hidden");
  }

  showResults(stats) {
    this.showScreen("results");
    this.el.finalScore.textContent = stats.score;
    this.el.statCorrect.textContent = `${stats.correct}/${stats.total}`;
    this.el.statAccuracy.textContent = `${stats.accuracy}%`;
    this.el.statAvg.textContent = `${stats.avgAudioUsed}s`;
    this.el.statStreak.textContent = stats.maxStreak;
  }

  setPersonalBest(pb) {
    this.el.pbDisplay.textContent = pb ? `Personal best: ${pb.score}` : "";
  }

  renderLeaderboard(entries) {
    const list = this.el.leaderboardList;
    list.innerHTML = "";
    if (entries.length === 0) {
      list.innerHTML = `<li style="justify-content:center;color:var(--text-muted)">No scores yet. Be the first!</li>`;
      return;
    }
    entries.forEach((e, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="rank">#${i + 1}</span><span class="name">${e.name}</span>
        <span style="color:var(--text-muted);font-size:0.8rem">${e.mode}</span>
        <span class="score">${e.score}</span>`;
      list.appendChild(li);
    });
  }

  setRoomCode(code) { this.el.roomCodeDisplay.textContent = code; }
  setRoomStatus(text) { this.el.roomStatus.textContent = text; }
  showMultiScores(my, friend) {
    this.el.multiScores.classList.remove("hidden");
    this.el.myScore.textContent = my;
    this.el.friendScore.textContent = friend;
  }
}

// -------------------- GAME ENGINE --------------------
class GameEngine {
  constructor(ui) {
    this.ui = ui;
    this.audio = new AudioManager();
    this.questions = new QuestionManager();
    this.scoring = new ScoringSystem();
    this.leaderboard = new Leaderboard();
    this.mode = null;
    this.settings = {};
    this.state = "idle";
    this.timerInterval = null;
    this.timeLeft = 0;
    this.lastRevealTime = 0;
    this.currentStageIndex = 0;

    this.audio.onTimeUpdate = (t, unlocked) => this.ui.updateWaveformProgress(t, unlocked);
    this.audio.onEnded = () => this.ui.onAudioSegmentEnded();
  }

  startSolo(settings) {
    this.settings = settings;
    this.scoring.reset();
    this.state = "playing";
    const count = settings.rounds || 10;
    this.questions.prepareQueue(count, { category: settings.category, difficulty: settings.difficulty });
    if (settings.timeLimit) {
      this.mode = "solo-time";
      this.timeLeft = settings.timeLimit * 60;
      this._startTimer();
    } else {
      this.mode = "solo-rounds";
    }
    this._startRound();
  }

  _startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.ui.updateTimer(this.timeLeft);
      if (this.timeLeft <= 0) this.endGame();
    }, 1000);
  }

  async _startRound() {
    const q = this.questions.getCurrent();
    if (!q) { this.endGame(); return; }
    this.currentStageIndex = 0;
    this.lastRevealTime = performance.now();
    // Keep pulling fresh internet voices for upcoming rounds
    prefetchNextRemotes(2);
    const nextQ = this.questions.queue[this.questions.currentIndex + 1];
    if (nextQ) this.audio.preload(nextQ.clip);

    this.ui.showRound({
      question: q,
      progress: this.questions.getProgress(),
      score: this.scoring.score,
      streak: this.scoring.streak
    });

    await this.audio.loadClip(q.clip);
    this.audio.setUnlocked(REVEAL_STAGES[0]);
    this.currentStageIndex = 0;
    await this.audio.playFromStart();
    this.ui.setListeningState(true);
  }

  revealMore() {
    if (this.state !== "playing") return;
    if (this.currentStageIndex < REVEAL_STAGES.length - 1) {
      this.currentStageIndex++;
      const newUnlock = REVEAL_STAGES[this.currentStageIndex];
      this.audio.setUnlocked(newUnlock);
      this.lastRevealTime = performance.now();
      this.audio.playUnlocked();
      this.ui.updateUnlockProgress(newUnlock, REVEAL_STAGES);
      this.ui.setListeningState(true);
    }
  }

  async submitAnswer(selected) {
    if (this.state !== "playing") return;
    this.state = "revealing";
    this.audio.pause();
    const q = this.questions.getCurrent();
    const audioUsed = this.audio.getUnlockedDuration();
    const responseTime = performance.now() - this.lastRevealTime;
    const correct = selected === q.correctAnswer;
    let points = 0;
    if (correct) points = this.scoring.calculatePoints(audioUsed, q.clip.duration, responseTime);
    const result = this.scoring.recordAnswer({ correct, audioUsed, points });
    q.answered = true;
    q.audioUsed = audioUsed;

    this.ui.showAnswerResult({
      correct, selected, correctAnswer: q.correctAnswer,
      points: result.points, streak: result.streak, totalScore: result.totalScore, audioUsed
    });

    setTimeout(() => {
      if (this.mode === "solo-time" && this.timeLeft <= 0) { this.endGame(); return; }
      if (this.questions.hasMore()) {
        this.questions.getNext();
        this.state = "playing";
        this._startRound();
      } else this.endGame();
    }, 1350);
  }

  endGame() {
    this.state = "results";
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
    this.audio.stop();
    this.ui.showResults({ ...this.scoring.getStats(), mode: this.mode, settings: this.settings });
  }

  submitToLeaderboard(name) {
    const modeKey = this.mode === "solo-time" ? `time-${this.settings.timeLimit}` : `rounds-${this.settings.rounds}`;
    return this.leaderboard.submit({ name, score: this.scoring.score, mode: modeKey, config: this.settings });
  }

  getLeaderboard(mode = null) { return this.leaderboard.getTop(15, mode); }
  getPersonalBest(mode) { return this.leaderboard.getPersonalBest(mode); }

  destroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.audio.destroy();
  }
}

// -------------------- BOOT --------------------
const ui = new UI();
const engine = new GameEngine(ui);
const webrtc = new WebRTCManager();

const soloSettings = {
  type: "rounds", rounds: 10, timeLimit: 3, category: "All", difficulty: "Normal"
};

// Navigation
document.querySelectorAll("[data-action]").forEach(el => {
  el.addEventListener("click", () => {
    const action = el.dataset.action;
    if (action === "solo") ui.showScreen("soloSettings");
    else if (action === "multi") { ui.showScreen("multiLobby"); resetMultiLobby(); }
    else if (action === "leaderboard") {
      ui.renderLeaderboard(engine.getLeaderboard());
      ui.showScreen("leaderboard");
    } else if (action === "home") {
      engine.destroy();
      webrtc.destroy();
      ui.showScreen("home");
    }
  });
});

function setupOptionGroup(containerId, key) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      const val = btn.dataset.value;
      if (key === "type") {
        soloSettings.type = val;
        document.getElementById("rounds-group").classList.toggle("hidden", val !== "rounds");
        document.getElementById("time-group").classList.toggle("hidden", val !== "time");
      } else if (key === "rounds") soloSettings.rounds = parseInt(val, 10);
      else if (key === "time") soloSettings.timeLimit = parseInt(val, 10);
      else if (key === "category") soloSettings.category = val;
      else if (key === "difficulty") soloSettings.difficulty = val;
    });
  });
}

setupOptionGroup("solo-type", "type");
setupOptionGroup("solo-rounds", "rounds");
setupOptionGroup("solo-time", "time");
setupOptionGroup("solo-category", "category");
setupOptionGroup("solo-difficulty", "difficulty");

document.getElementById("btn-start-solo").addEventListener("click", async () => {
  const settings = { category: soloSettings.category, difficulty: soloSettings.difficulty };
  if (soloSettings.type === "rounds") settings.rounds = soloSettings.rounds;
  else settings.timeLimit = soloSettings.timeLimit;
  // Unlock audio on this user gesture (required by browsers)
  await engine.audio.unlock();
  ui.showScreen("game");
  document.getElementById("timer-display").classList.add("hidden");
  engine.startSolo(settings);
});

document.getElementById("btn-reveal").addEventListener("click", () => engine.revealMore());

document.getElementById("answers-grid").addEventListener("click", (e) => {
  const card = e.target.closest(".answer-card");
  if (!card || card.classList.contains("disabled")) return;
  engine.submitAnswer(card.dataset.answer);
});

document.getElementById("btn-submit-score").addEventListener("click", () => {
  const name = document.getElementById("submit-name").value.trim() || "Anonymous";
  const result = engine.submitToLeaderboard(name);
  const btn = document.getElementById("btn-submit-score");
  btn.textContent = `Submitted! Rank #${result.rank}`;
  btn.disabled = true;
});

document.getElementById("btn-play-again").addEventListener("click", () => {
  document.getElementById("btn-submit-score").textContent = "Submit Score";
  document.getElementById("btn-submit-score").disabled = false;
  ui.showScreen("soloSettings");
});

// Multiplayer
function resetMultiLobby() {
  document.getElementById("create-panel").classList.remove("hidden");
  document.getElementById("join-panel").classList.add("hidden");
  document.getElementById("multi-settings").classList.add("hidden");
  document.getElementById("btn-create-room").classList.add("selected");
  document.getElementById("btn-join-room").classList.remove("selected");
  ui.setRoomCode("----");
  ui.setRoomStatus("Creating room…");
  webrtc.destroy();
}

document.getElementById("btn-create-room").addEventListener("click", async () => {
  document.getElementById("create-panel").classList.remove("hidden");
  document.getElementById("join-panel").classList.add("hidden");
  document.getElementById("btn-create-room").classList.add("selected");
  document.getElementById("btn-join-room").classList.remove("selected");
  try {
    ui.setRoomStatus("Creating room…");
    const code = await webrtc.createRoom();
    ui.setRoomCode(code);
    ui.setRoomStatus("Waiting for friend to join…");
    webrtc.onConnected = () => {
      ui.setRoomStatus("Friend connected! Choose settings & start.");
      document.getElementById("multi-settings").classList.remove("hidden");
    };
    webrtc.onDisconnected = () => ui.setRoomStatus("Friend disconnected.");
    webrtc.onError = (err) => ui.setRoomStatus("Connection error: " + (err.message || err.type || "unknown"));
  } catch {
    ui.setRoomStatus("Failed to create room. Try again.");
  }
});

document.getElementById("btn-join-room").addEventListener("click", () => {
  document.getElementById("create-panel").classList.add("hidden");
  document.getElementById("join-panel").classList.remove("hidden");
  document.getElementById("multi-settings").classList.add("hidden");
  document.getElementById("btn-join-room").classList.add("selected");
  document.getElementById("btn-create-room").classList.remove("selected");
});

document.getElementById("btn-join-confirm").addEventListener("click", async () => {
  const code = document.getElementById("join-code-input").value.trim().toUpperCase();
  if (code.length !== 4) { alert("Enter a 4-character room code"); return; }
  try {
    ui.setRoomStatus("Connecting…");
    await webrtc.joinRoom(code);
    ui.setRoomStatus("Connected! Waiting for host to start…");
    document.getElementById("join-panel").classList.add("hidden");
    webrtc.onMessage = (data) => {
      if (data.type === "start") {
        alert("Match starting!");
      }
    };
  } catch {
    ui.setRoomStatus("Could not join. Check the code.");
  }
});

document.getElementById("btn-start-multi").addEventListener("click", () => {
  webrtc.send({ type: "start", rounds: 10 });
  ui.showScreen("game");
  engine.startSolo({ rounds: 10, category: "All", difficulty: "Normal" });
  ui.showMultiScores(0, 0);
});

document.getElementById("multi-rounds")?.querySelectorAll(".option-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("multi-rounds").querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (!ui.screens.game.classList.contains("active")) return;
  const map = { "1": 0, "2": 1, "3": 2, "4": 3 };
  if (map[e.key] !== undefined) {
    const cards = document.querySelectorAll("#answers-grid .answer-card");
    if (cards[map[e.key]] && !cards[map[e.key]].classList.contains("disabled")) {
      cards[map[e.key]].click();
    }
  }
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    document.getElementById("btn-reveal").click();
  }
});

document.addEventListener("gesturestart", e => e.preventDefault());
