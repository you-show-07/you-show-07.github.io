const archetypes = [
  {
    id: "boss",
    keywords: ["上司", "部長", "課長", "指示", "会議", "社長"],
    title: "記憶喪失の暴君",
    base: "ブレルノドン",
    className: "職場系",
    element: "混乱",
    weakness: "議事録",
    palette: ["#ef476f", "#f6c85f", "#3b1f2b"],
    loot: "ねじれた付箋"
  },
  {
    id: "train",
    keywords: ["電車", "満員", "遅延", "駅", "通勤", "改札"],
    title: "圧縮装甲",
    base: "マンインゴーレム",
    className: "通勤系",
    element: "圧",
    weakness: "早めの帰宅",
    palette: ["#5da9e9", "#f6c85f", "#18283b"],
    loot: "折れないつり革"
  },
  {
    id: "weather",
    keywords: ["低気圧", "頭痛", "雨", "台風", "湿気", "眠い"],
    title: "天圧の竜",
    base: "タイフーン・ハイドラ",
    className: "天候系",
    element: "鈍痛",
    weakness: "ぬるい白湯",
    palette: ["#2fd6b5", "#5da9e9", "#1b3134"],
    loot: "晴れ待ちの鱗"
  },
  {
    id: "sns",
    keywords: ["SNS", "通信", "サーバー", "障害", "重い", "ログイン"],
    title: "混沌の悪魔",
    base: "サーバー・ダウン",
    className: "通信系",
    element: "焦燥",
    weakness: "再起動の祈り",
    palette: ["#ef476f", "#2fd6b5", "#271f37"],
    loot: "404の角"
  },
  {
    id: "monday",
    keywords: ["月曜", "会社行きたくない", "仕事行きたくない", "朝", "出社"],
    title: "週災獣",
    base: "マンデーブリンガー",
    className: "曜日系",
    element: "倦怠",
    weakness: "金曜の幻影",
    palette: ["#f6c85f", "#ef476f", "#312518"],
    loot: "折れた目覚まし"
  },
  {
    id: "home",
    keywords: ["家事", "洗濯", "皿", "掃除", "育児", "ゴミ"],
    title: "無限増殖",
    base: "カジノコシ",
    className: "生活系",
    element: "反復",
    weakness: "完璧を捨てる札",
    palette: ["#a4d65e", "#5da9e9", "#1d3023"],
    loot: "片方だけの靴下"
  },
  {
    id: "default",
    keywords: [],
    title: "日常歪曲",
    base: "モヤモヤン",
    className: "日常系",
    element: "もや",
    weakness: "よく寝る",
    palette: ["#a4d65e", "#f6c85f", "#22242b"],
    loot: "ほぐれたため息"
  }
];

const raids = [
  {
    id: "monday",
    name: "週災獣『マンデーブリンガー』",
    trigger: ["月曜", "会社行きたくない", "仕事行きたくない", "出社"],
    hp: 180000000,
    maxHp: 180000000,
    level: 88,
    copy: "全国の布団から未練を吸い上げる曜日災厄。",
    palette: ["#f6c85f", "#ef476f", "#19151a"]
  },
  {
    id: "weather",
    name: "天災竜『タイフーン・ハイドラ』",
    trigger: ["低気圧", "頭痛", "雨", "台風", "湿気"],
    hp: 96000000,
    maxHp: 96000000,
    level: 74,
    copy: "だるさのデバフを広域にまき散らす気圧の竜。",
    palette: ["#2fd6b5", "#5da9e9", "#18242c"]
  },
  {
    id: "server",
    name: "混沌の悪魔『サーバー・ダウン』",
    trigger: ["SNS", "通信", "サーバー", "障害", "ログイン"],
    hp: 128000000,
    maxHp: 128000000,
    level: 99,
    copy: "同じ叫びが一斉に流れ込むほど巨大化する突発型ボス。",
    palette: ["#ef476f", "#2fd6b5", "#24172f"]
  }
];

const state = {
  filter: "all",
  sort: "hot",
  hero: {
    xp: 1240,
    hp: 100,
    title: "満員電車を生き延びし見習い",
    materials: 3
  },
  titles: [
    "満員電車を生き延びし見習い",
    "日常を笑いに変える大賢者",
    "低気圧に膝をつかぬ聖騎士",
    "コメント欄の吟遊詩人"
  ],
  quests: [],
  raid: Object.assign({}, raids[0]),
  logs: [
    "ギルド創設。ため息が経験値に変換された。",
    "名無しの浄化士が称号を装備した。"
  ]
};

const samples = [
  {
    rant: "上司の指示が昨日と真逆になって、こっちの記憶だけ疑われた",
    rage: 82,
    author: "羊皮紙の新人"
  },
  {
    rant: "満員電車でリュックが一生こちらの脇腹に刺さっている",
    rage: 70,
    author: "つり革の民"
  },
  {
    rant: "低気圧で頭痛がヤバいのに、会議だけは元気に増える",
    rage: 76,
    author: "湿度の敗者"
  }
];

const questTemplate = document.querySelector("#questTemplate");
const questFeed = document.querySelector("#questFeed");
const raidBanner = document.querySelector("#raidBanner");
const raidCard = document.querySelector("#raidCard");
const honorLog = document.querySelector("#honorLog");
const rageInput = document.querySelector("#rageInput");
const rageValue = document.querySelector("#rageValue");
const rantInput = document.querySelector("#rantInput");
const summonForm = document.querySelector("#summonForm");
const previewName = document.querySelector("#previewName");
const previewMeta = document.querySelector("#previewMeta");
const previewCanvas = document.querySelector("#previewMonster");
const privacyLine = document.querySelector(".privacy-line");
const privacyState = document.querySelector("#privacyState");
const sortSelect = document.querySelector("#sortSelect");

function normalize(text) {
  return text.trim().replace(/\s+/g, " ");
}

function pickArchetype(text) {
  const target = text.toLowerCase();
  const match = archetypes.find(function(type) {
    return type.keywords.some(function(word) {
      return target.includes(word.toLowerCase());
    });
  });
  return match || archetypes[archetypes.length - 1];
}

function makeId() {
  if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  return "quest-" + Date.now() + "-" + Math.random().toString(16).slice(2);
}

function buildMonster(text, rage) {
  const archetype = pickArchetype(text);
  const seed = Array.from(text).reduce(function(sum, char) {
    return sum + char.charCodeAt(0);
  }, rage);
  const suffixes = ["改", "怒", "怨", "眠", "濁", "裂"];
  const suffix = suffixes[seed % suffixes.length];
  const hp = Math.round(80 + rage * 1.65 + (seed % 36));
  return {
    id: makeId(),
    rant: text,
    rage: rage,
    maxHp: hp,
    hp: hp,
    heat: rage + (seed % 25),
    author: "あなた",
    name: archetype.title + "・" + archetype.base + suffix,
    className: archetype.className,
    archetype: archetype.id,
    element: archetype.element,
    weakness: archetype.weakness,
    loot: archetype.loot,
    palette: archetype.palette,
    tags: ["#" + archetype.element, "弱点:" + archetype.weakness, "素材:" + archetype.loot],
    comments: [],
    usedActions: {
      empathy: false,
      cheer: false
    },
    createdAt: Date.now(),
    cleared: false
  };
}

function questCopy(quest) {
  return "「" + quest.rant + "」から発生。" + quest.element + "属性を帯び、弱点は" + quest.weakness + "。";
}

function detectNames(text) {
  const hasHonorific = /[一-龥ぁ-んァ-ヶ]{2,}(さん|君|くん|氏|部長|課長|先輩)/.test(text);
  const hasAtName = /@\w+/.test(text);
  return hasHonorific || hasAtName;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatHp(value) {
  if (value >= 100000000) return (value / 100000000).toFixed(1) + "億";
  if (value >= 10000) return Math.round(value / 10000) + "万";
  return String(Math.max(0, Math.round(value)));
}

function addLog(message) {
  state.logs.unshift(message);
  state.logs = state.logs.slice(0, 8);
  renderLogs();
}

function getLevel() {
  return Math.max(1, Math.floor(state.hero.xp / 260) + 3);
}

function gainXp(amount) {
  state.hero.xp += amount;
  const level = getLevel();
  if (state.hero.xp > 1600 && !state.titles.includes("ため息を素材化する錬金術師")) {
    state.titles.push("ため息を素材化する錬金術師");
    addLog("称号『ため息を素材化する錬金術師』が解放された。");
  }
  if (level >= 10 && !state.titles.includes("世界災厄に名を刻む英雄")) {
    state.titles.push("世界災厄に名を刻む英雄");
    addLog("称号『世界災厄に名を刻む英雄』が解放された。");
  }
}

function calculateDamage(kind, text) {
  if (kind === "empathy") return 13 + Math.floor(Math.random() * 9);
  if (kind === "cheer") return 18 + Math.floor(Math.random() * 10);
  const lengthBonus = clamp(text.length, 6, 42);
  const funnyBonus = /笑|草|逆に|もはや|伝説|ラスボス|世界|宇宙|優勝/.test(text) ? 20 : 0;
  const empathyBonus = /わかる|お疲れ|つらい|えらい|休んで|生きてるだけ/.test(text) ? 13 : 0;
  return Math.round(14 + lengthBonus * 0.8 + funnyBonus + empathyBonus);
}

function isHostile(text) {
  return /お前が悪い|自己責任|ばか|バカ|無能|黙れ|消えろ|死ね/.test(text);
}

function strikeQuest(id, kind, text) {
  const quest = state.quests.find(function(item) { return item.id === id; });
  if (!quest || quest.cleared) return;
  const skillText = text || "";
  const isLimitedAction = kind === "empathy" || kind === "cheer";

  if (isLimitedAction) {
    if (!quest.usedActions) {
      quest.usedActions = { empathy: false, cheer: false };
    }
    if (quest.usedActions[kind]) {
      toast(kind === "empathy" ? "このクエストにはもう『わかる』済みです。" : "このクエストにはもう『慰め』済みです。");
      return;
    }
    quest.usedActions[kind] = true;
  }

  if (kind === "skill" && isHostile(skillText)) {
    const heal = 28;
    quest.hp = clamp(quest.hp + heal, 0, quest.maxHp + 80);
    state.hero.hp = clamp(state.hero.hp - 12, 0, 100);
    quest.comments.unshift({
      text: "結界が反転。刺々しい言葉が魔物の養分になった。",
      damage: "+" + heal,
      type: "penalty"
    });
    addLog("審問結界が作動。悪意は魔物に吸収された。");
    toast("そのスキルは結界に弾かれました。");
    render();
    return;
  }

  const damage = calculateDamage(kind, skillText);
  const critical = kind === "skill" && damage >= 54;
  quest.hp = clamp(quest.hp - damage, 0, quest.maxHp);
  quest.heat += Math.round(damage / 3);
  quest.comments.unshift({
    text: skillText || (kind === "empathy" ? "わかるの一撃" : "お疲れさまの回復斬り"),
    damage: "-" + damage,
    type: critical ? "critical" : "normal"
  });

  gainXp(critical ? 56 : 28);
  if (critical) addLog(quest.name + "にクリティカルヒット。金色の余韻が残った。");

  if (quest.hp <= 0) {
    quest.cleared = true;
    state.hero.materials += 1;
    gainXp(90);
    addLog(quest.name + "を討伐。素材『" + quest.loot + "』を獲得した。");
    toast("討伐完了。愚痴は名誉に変換されました。");
  }

  render();
}

function hitRaid() {
  const damage = 640000 + Math.floor(Math.random() * 520000);
  state.raid.hp = clamp(state.raid.hp - damage, 0, state.raid.maxHp);
  gainXp(44);
  addLog(state.raid.name + "へ " + formatHp(damage) + " ダメージ。");
  if (state.raid.hp === 0) {
    addLog(state.raid.name + "が浄化された。次の災厄が観測された。");
    const nextIndex = (raids.findIndex(function(raid) { return raid.id === state.raid.id; }) + 1) % raids.length;
    state.raid = Object.assign({}, raids[nextIndex]);
  }
  render();
}

function updateRaidFromText(text) {
  const matched = raids.find(function(raid) {
    return raid.trigger.some(function(word) {
      return text.toLowerCase().includes(word.toLowerCase());
    });
  });
  if (matched && matched.id !== state.raid.id) {
    state.raid = Object.assign({}, matched, { hp: Math.round(matched.maxHp * 0.78) });
    addLog(matched.name + "がトレンドから顕現した。");
  } else if (matched) {
    state.raid.hp = clamp(state.raid.hp + 1200000, 0, state.raid.maxHp);
    addLog(matched.name + "が共鳴で巨大化した。");
  }
}

function summon(text, rage, author) {
  const quest = buildMonster(text, rage);
  quest.author = author || "あなた";
  state.quests.unshift(quest);
  gainXp(quest.author === "あなた" ? 40 : 0);
  updateRaidFromText(text);
  addLog(quest.author + "が" + quest.name + "を召喚した。");
  render();
}

function getSortedQuests() {
  let quests = state.quests.slice();
  if (state.filter === "cleared") quests = quests.filter(function(quest) { return quest.cleared; });
  if (state.filter === "raid") {
    quests = quests.filter(function(quest) { return quest.archetype === state.raid.id || quest.rage >= 80; });
  }
  if (state.filter === "all") quests = quests.filter(function(quest) { return !quest.cleared; });
  if (state.sort === "new") quests.sort(function(a, b) { return b.createdAt - a.createdAt; });
  if (state.sort === "hot") quests.sort(function(a, b) { return b.heat - a.heat; });
  if (state.sort === "danger") quests.sort(function(a, b) { return b.hp - a.hp; });
  return quests;
}

function renderQuest(quest) {
  const node = questTemplate.content.firstElementChild.cloneNode(true);
  const canvas = node.querySelector(".monster-art");
  const classNode = node.querySelector(".quest-class");
  const title = node.querySelector("h3");
  const status = node.querySelector(".quest-status");
  const copy = node.querySelector(".quest-copy");
  const tags = node.querySelector(".tags");
  const hpText = node.querySelector(".hp-text");
  const hpBar = node.querySelector(".hp-track span");
  const comments = node.querySelector(".comments");
  const input = node.querySelector(".skill-input input");

  node.classList.toggle("cleared", quest.cleared);
  node.classList.toggle("raid-quest", quest.archetype === state.raid.id);
  classNode.textContent = quest.className;
  title.textContent = quest.name;
  status.textContent = quest.cleared ? "浄化済" : quest.author;
  copy.textContent = questCopy(quest);
  tags.innerHTML = quest.tags.map(function(tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("");

  const hpRatio = Math.round((quest.hp / quest.maxHp) * 100);
  hpText.textContent = "HP " + formatHp(quest.hp) + " / " + formatHp(quest.maxHp);
  hpBar.style.width = clamp(hpRatio, 0, 100) + "%";

  drawMonster(canvas, quest.palette, quest.rage, quest.archetype);

  const empathyButton = node.querySelector(".empathize");
  const cheerButton = node.querySelector(".cheer");
  const usedActions = quest.usedActions || {};

  empathyButton.disabled = quest.cleared || !!usedActions.empathy;
  cheerButton.disabled = quest.cleared || !!usedActions.cheer;
  if (usedActions.empathy) empathyButton.textContent = "✓ わかる済";
  if (usedActions.cheer) cheerButton.textContent = "✓ 慰め済";

  empathyButton.addEventListener("click", function() { strikeQuest(quest.id, "empathy", ""); });
  cheerButton.addEventListener("click", function() { strikeQuest(quest.id, "cheer", ""); });
  node.querySelector(".skill-input button").addEventListener("click", function() {
    const value = normalize(input.value);
    if (!value) {
      input.focus();
      return;
    }
    input.value = "";
    strikeQuest(quest.id, "skill", value);
  });
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      node.querySelector(".skill-input button").click();
    }
  });

  comments.innerHTML = quest.comments.slice(0, 3).map(function(comment) {
    return '<div class="comment ' + comment.type + '"><span>' + escapeHtml(comment.text) + '</span><strong class="damage">' + comment.damage + '</strong></div>';
  }).join("");

  return node;
}

function render() {
  renderFeed();
  renderRaid();
  renderProfile();
  renderLogs();
  renderStats();
  updatePreview();
}

function renderFeed() {
  const quests = getSortedQuests();
  questFeed.innerHTML = "";
  if (!quests.length) {
    const empty = document.createElement("div");
    empty.className = "quest-card";
    empty.innerHTML = '<div class="quest-main"><div class="quest-body"><span class="quest-class">静寂</span><h3>掲示板は一時的に平和です</h3><p class="quest-copy">ギルドの火は静かに揺れている。</p></div></div>';
    questFeed.append(empty);
    return;
  }
  quests.forEach(function(quest) { questFeed.append(renderQuest(quest)); });
}

function renderRaid() {
  const ratio = clamp(Math.round((state.raid.hp / state.raid.maxHp) * 100), 0, 100);
  raidBanner.innerHTML = '<div><strong>' + escapeHtml(state.raid.name) + '</strong><p>Lv.' + state.raid.level + ' / HP ' + formatHp(state.raid.hp) + ' / ' + escapeHtml(state.raid.copy) + '</p></div><button class="raid-hit" type="button">総攻撃</button>';
  raidBanner.querySelector("button").addEventListener("click", hitRaid);

  raidCard.innerHTML = '<div class="raid-card-inner"><canvas class="raid-portrait" width="300" height="136" aria-label="世界災厄"></canvas><div class="raid-name"><strong>' + escapeHtml(state.raid.name) + '</strong><span>Lv.' + state.raid.level + '</span></div><div class="hp-line"><span class="hp-text">HP ' + formatHp(state.raid.hp) + ' / ' + formatHp(state.raid.maxHp) + '</span><div class="hp-track"><span style="width:' + ratio + '%"></span></div></div><p>' + escapeHtml(state.raid.copy) + '</p><button class="raid-hit" type="button">援軍を呼ぶ</button></div>';
  drawRaid(raidCard.querySelector("canvas"), state.raid.palette, state.raid.id);
  raidCard.querySelector("button").addEventListener("click", hitRaid);
}

function renderProfile() {
  const level = getLevel();
  const next = 260;
  const ratio = ((state.hero.xp % next) / next) * 100;
  document.querySelector("#heroLevel").textContent = level;
  document.querySelector("#heroXp").textContent = state.hero.xp;
  document.querySelector("#activeTitle").textContent = state.hero.title;
  document.querySelector("#xpBar").style.width = ratio + "%";

  const titlePicks = document.querySelector("#titlePicks");
  titlePicks.innerHTML = "";
  state.titles.forEach(function(title) {
    const button = document.createElement("button");
    button.className = "title-chip" + (title === state.hero.title ? " active" : "");
    button.type = "button";
    button.textContent = title;
    button.addEventListener("click", function() {
      state.hero.title = title;
      renderProfile();
      toast("称号を『" + title + "』に変更しました。");
    });
    titlePicks.append(button);
  });
  drawHero(document.querySelector("#heroPortrait"), level);
}

function renderLogs() {
  honorLog.innerHTML = state.logs.map(function(log) { return "<li>" + escapeHtml(log) + "</li>"; }).join("");
}

function renderStats() {
  const active = state.quests.filter(function(quest) { return !quest.cleared; }).length;
  const heat = state.quests.reduce(function(sum, quest) { return sum + quest.heat; }, 0);
  document.querySelector("#activeCount").textContent = active;
  document.querySelector("#guildHeat").textContent = Math.max(82, Math.round(heat / 4));
}

function updatePreview() {
  const text = normalize(rantInput.value) || "上司の指示が昨日と違う";
  const rage = Number(rageInput.value);
  const monster = buildMonster(text, rage);
  previewName.textContent = monster.name.replace(/[改怒怨眠濁裂]$/, "予兆体");
  previewMeta.textContent = monster.element + " / HP " + monster.maxHp;
  drawMonster(previewCanvas, monster.palette, rage, monster.archetype);

  rageValue.value = rage;
  const hasName = detectNames(text);
  privacyLine.classList.toggle("warning", hasName);
  privacyState.textContent = hasName ? "匿名化推奨" : "結界安定";
}

function drawMonster(canvas, palette, rage, type) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  const main = palette[0];
  const accent = palette[1];
  const dark = palette[2];
  ctx.fillStyle = dark;
  ctx.fillRect(0, 0, width, height);
  drawBackgroundRunes(ctx, width, height, accent);

  const cx = width / 2;
  const cy = height / 2 + 8;
  const bodyWidth = 62 + rage * 0.38;
  const bodyHeight = 52 + rage * 0.28;
  ctx.fillStyle = main;
  roundedBlob(ctx, cx - bodyWidth / 2, cy - bodyHeight / 2, bodyWidth, bodyHeight, 22);
  ctx.fill();

  if (type === "weather") {
    drawTentacles(ctx, cx, cy, bodyWidth, bodyHeight, accent);
  } else if (type === "train") {
    drawArmor(ctx, cx, cy, bodyWidth, bodyHeight);
  } else {
    drawHorns(ctx, cx, cy, bodyWidth, bodyHeight, accent);
  }

  ctx.fillStyle = "#121318";
  const eyeY = cy - 8;
  ctx.beginPath();
  ctx.arc(cx - bodyWidth * 0.18, eyeY, 5 + rage / 30, 0, Math.PI * 2);
  ctx.arc(cx + bodyWidth * 0.18, eyeY, 5 + rage / 30, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#121318";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy + 10, 14, 0.08 * Math.PI, 0.92 * Math.PI);
  ctx.stroke();
}

function drawBackgroundRunes(ctx, width, height, color) {
  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i += 1) {
    const x = 18 + i * 36;
    ctx.beginPath();
    ctx.moveTo(x, 16);
    ctx.lineTo(x + 14, 36);
    ctx.lineTo(x - 8, 52);
    ctx.stroke();
  }
  ctx.restore();
}

function drawHorns(ctx, cx, cy, bodyWidth, bodyHeight, accent) {
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.moveTo(cx - bodyWidth * 0.32, cy - bodyHeight * 0.35);
  ctx.lineTo(cx - bodyWidth * 0.52, cy - bodyHeight * 0.72);
  ctx.lineTo(cx - bodyWidth * 0.12, cy - bodyHeight * 0.48);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx + bodyWidth * 0.32, cy - bodyHeight * 0.35);
  ctx.lineTo(cx + bodyWidth * 0.52, cy - bodyHeight * 0.72);
  ctx.lineTo(cx + bodyWidth * 0.12, cy - bodyHeight * 0.48);
  ctx.closePath();
  ctx.fill();
}

function drawTentacles(ctx, cx, cy, bodyWidth, bodyHeight, accent) {
  ctx.strokeStyle = accent;
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  for (let i = -2; i <= 2; i += 1) {
    ctx.beginPath();
    ctx.moveTo(cx + i * 15, cy + bodyHeight * 0.3);
    ctx.quadraticCurveTo(cx + i * 22, cy + 46, cx + i * 10, cy + 58);
    ctx.stroke();
  }
}

function drawArmor(ctx, cx, cy, bodyWidth, bodyHeight) {
  ctx.fillStyle = "rgba(255,255,255,0.32)";
  for (let i = 0; i < 4; i += 1) {
    ctx.fillRect(cx - bodyWidth * 0.38 + i * 22, cy - bodyHeight * 0.18, 12, bodyHeight * 0.72);
  }
}

function roundedBlob(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}

function drawRaid(canvas, palette, type) {
  drawMonster(canvas, palette, type === "server" ? 98 : 88, type);
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.strokeStyle = palette[1];
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2 + 6, 48, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawHero(canvas, level) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#15161b";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#f6c85f";
  ctx.beginPath();
  ctx.arc(width / 2, height / 2 - 4, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2fd6b5";
  ctx.fillRect(22, 48, 32, 12);
  ctx.fillStyle = "#111217";
  ctx.beginPath();
  ctx.arc(30, 34, 3, 0, Math.PI * 2);
  ctx.arc(46, 34, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ef476f";
  ctx.font = "700 12px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("Lv." + level, width / 2, 68);
}

function drawBrandSeal() {
  const canvas = document.querySelector("#brandSeal");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 44, 44);
  ctx.fillStyle = "#111217";
  ctx.fillRect(0, 0, 44, 44);
  ctx.strokeStyle = "#f6c85f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(22, 22, 17, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#ef476f";
  ctx.beginPath();
  ctx.moveTo(22, 8);
  ctx.lineTo(31, 29);
  ctx.lineTo(13, 29);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#2fd6b5";
  ctx.fillRect(19, 17, 6, 18);
}

function toast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.append(node);
  window.setTimeout(function() { node.remove(); }, 2600);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

summonForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const text = normalize(rantInput.value);
  if (!text) return;
  summon(text, Number(rageInput.value), "あなた");
  rantInput.value = "";
  updatePreview();
  toast("ギルド掲示板に魔物が流れました。");
});

rageInput.addEventListener("input", updatePreview);
rantInput.addEventListener("input", updatePreview);
sortSelect.addEventListener("change", function(event) {
  state.sort = event.target.value;
  renderFeed();
});

document.querySelectorAll(".tab").forEach(function(tab) {
  tab.addEventListener("click", function() {
    document.querySelectorAll(".tab").forEach(function(node) { node.classList.remove("active"); });
    tab.classList.add("active");
    state.filter = tab.dataset.filter;
    renderFeed();
  });
});

samples.forEach(function(item, index) {
  const quest = buildMonster(item.rant, item.rage);
  quest.author = item.author;
  quest.createdAt = Date.now() - index * 540000;
  quest.comments = index === 0 ? [{ text: "昨日の指示にもセーブポイント欲しい", damage: "-62", type: "critical" }] : [];
  quest.hp = clamp(quest.hp - (index === 0 ? 62 : 0), 0, quest.maxHp);
  state.quests.push(quest);
});

drawBrandSeal();
render();
