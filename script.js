/* =========================================================
   DATA — add a new tool by adding one object here.
   Use "logo" for a PNG from /images, or "icon" for a
   Font Awesome fallback when no logo file exists yet.
   ========================================================= */
const TOOLS = [
  {
    title: "Project Heartbeat Dashboard",
    description: "Business process dashboard tracking Heartbeat's key operational metrics in real time.",
    category: "BI Dashboard",
    logo: "images/PowerBI logo.png",
    url: "https://app.powerbi.com/links/Pg2lMXC8Qu?ctid=43aa4ce1-f125-4390-a30c-5375aae87717&pbi_source=linkShare&bookmarkGuid=47eebd1d-ed6e-417e-8823-c419ebcfab50"
  },
  {
    title: "OPS Flow Studio",
    description: "Interactive AI process animator that visualizes operational flows end to end.",
    category: "Automation",
    logo: "images/OPS Flow Studio Logo.png",
    url: "https://claude.ai/public/artifacts/5e59396e-4df4-4da7-b588-ecf0c8f3e55c"
  },
  {
    title: "Heartbeat iNote",
    description: "AI-powered notes assistant that captures, organizes, and summarizes your work.",
    category: "AI Tool",
    logo: "images/Heartbeat iNote Logo R.png",
    url: "https://m365.cloud.microsoft/chat/?titleId=T_e5fd87a2-5b37-5324-452f-485374f01e07&source=embedded-builder"
  },
  {
    title: "Heartbeat iMeet",
    description: "AI meeting assistant for transcription, summaries, and action item tracking.",
    category: "AI Tool",
    logo: "images/iMeet Logo.png",
    url: "https://claude.ai/public/artifacts/fce2a060-0d2e-4863-bfa2-7b319a34fad9"
  },
  {
    title: "Core Express Business Process Model",
    description: "Interactive business process model mapping Core Express operations end to end.",
    category: "Process Model",
    icon: "images/BMPN Logo.png",
    url: "https://aramex-my.sharepoint.com/:b:/p/saeedal/IQBtKts3kbcxTK2Qp6GRUa9LAZe25x5dD-lGtbr59NbnWls?e=W6298E"
  }
];

/* =========================================================
   RENDER
   ========================================================= */
const grid = document.getElementById('toolsGrid');

function thumbGradient(seedIndex){
  const gradients = [
    "linear-gradient(135deg,#E4002B,#7A0016)",
    "linear-gradient(135deg,#2C2C2E,#000000)",
    "linear-gradient(135deg,#B4001F,#2C2C2E)",
    "linear-gradient(135deg,#3A3A3D,#E4002B)",
    "linear-gradient(135deg,#1C1C1E,#B4001F)"
  ];
  return gradients[seedIndex % gradients.length];
}

function thumbMarkup(tool){
  if(tool.logo){
    return `<div class="thumb-logo"><img src="${tool.logo}" alt="${tool.title} logo"></div>`;
  }
  return `<div class="thumb-icon"><i class="${tool.icon}"></i></div>`;
}

function renderTools(list){
  grid.innerHTML = "";

  list.forEach((tool, i) => {
    const card = document.createElement('article');
    card.className = 'tool-card';
    card.style.animationDelay = (i * 0.05) + 's';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', tool.title + ' — opens in new tab');

    card.innerHTML = `
      <div class="thumb" style="background:${thumbGradient(i)}">
        ${thumbMarkup(tool)}
      </div>
      <div class="card-body">
        <div class="card-top-row">
          <div class="card-title">${tool.title}</div>
          <i class="fa-solid fa-arrow-up-right-from-square card-arrow"></i>
        </div>
        <div class="card-desc">${tool.description}</div>
        <span class="badge">${tool.category}</span>
      </div>
    `;

    const open = () => window.open(tool.url, '_blank', 'noopener');
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
    });

    grid.appendChild(card);
  });
}

renderTools(TOOLS);
