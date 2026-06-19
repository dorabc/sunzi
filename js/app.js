/* ====================================================================
   三十六計 · 渲染与交互
   ==================================================================== */
(function () {
  'use strict';

  const CN_NUM = ['零','一','二','三','四','五','六','七','八','九','十'];
  const cnNum = (n) => n <= 10 ? CN_NUM[n] : (n < 20 ? '十' + CN_NUM[n - 10] : CN_NUM[Math.floor(n/10)] + '十' + (n%10 ? CN_NUM[n%10] : ''));
  const GROUP_CN = ['一','二','三','四','五','六'];

  const $  = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  // ---------- 配图：图片加载失败时回退到水墨占位 ----------
  function figureHTML(s, big) {
    const ph = `
      <div class="fig-placeholder">
        <div>
          <div class="ph-glyph">${s.name.charAt(0)}</div>
          <div class="ph-text">配图位 · ${s.image}</div>
        </div>
      </div>`;
    // 若图片不存在则保留占位（onerror 移除 img）
    return `<img src="images/${s.image}" alt="${s.name} 配图" loading="lazy"
                 onerror="this.remove()">${ph}`;
  }

  // ---------- 渲染套路与卡片 ----------
  function renderGroups() {
    const main = $('#main');
    const nav  = $('#groupNav');
    let navHTML = '';
    let mainHTML = '';

    GROUPS.forEach((g, gi) => {
      const items = STRATAGEMS.filter(s => s.group === g.key);
      navHTML += `<a href="#group-${gi + 1}">${g.key}</a>`;

      const cards = items.map(s => `
        <article class="card" data-id="${s.id}" role="button" tabindex="0"
                 aria-label="第${cnNum(s.id)}计 ${s.name}">
          <div class="card-fig">
            <span class="card-no">第 ${s.id} 计</span>
            ${figureHTML(s)}
          </div>
          <div class="card-body">
            <h3 class="card-name">${s.name}</h3>
            <p class="card-pinyin">${s.pinyin}</p>
            <p class="card-meaning">${s.meaning}</p>
            <span class="card-more">展开详解</span>
          </div>
        </article>`).join('');

      mainHTML += `
        <section class="group-block" id="group-${gi + 1}">
          <div class="group-head">
            <div class="group-index">第${GROUP_CN[gi]}套</div>
            <div class="group-titles">
              <h2 class="group-name">${g.key}</h2>
              <p class="group-sub">${g.subtitle}</p>
            </div>
            <span class="group-range">第 ${g.range[0]}–${g.range[1]} 计</span>
          </div>
          <div class="card-grid">${cards}</div>
        </section>`;
    });

    nav.innerHTML  = navHTML;
    main.innerHTML = mainHTML;
  }

  // ---------- 详情弹层 ----------
  const modal = $('#modal');
  const card  = $('#modalCard');
  let curId = null;

  function modalHTML(s) {
    const notes = s.notes.map(n => `
      <li class="note-item">
        <span class="note-char">${n.char}</span>
        <span class="note-py">${n.pinyin}</span>
        <span class="note-def">${n.note}</span>
      </li>`).join('');

    return `
      <div class="m-hero">
        <button class="m-close" data-close aria-label="关闭">✕</button>
        ${figureHTML(s, true)}
        <div class="m-titlebar">
          <div class="m-no">第 ${cnNum(s.id)} 计 · ${s.group}</div>
          <div class="m-name">${s.name}</div>
          <div class="m-pinyin">${s.pinyin}　|　${s.meaning}</div>
        </div>
      </div>
      <div class="m-body">
        <div class="m-section">
          <div class="m-label">原 文</div>
          <p class="m-original">${s.original}</p>
        </div>
        <div class="m-section">
          <div class="m-label">注 音 注 释</div>
          <ul class="notes-list">${notes}</ul>
        </div>
        <div class="m-section">
          <div class="m-label">白 话 译 文</div>
          <p class="m-text">${s.translation}</p>
        </div>
        <div class="m-section">
          <div class="m-label">按 语</div>
          <p class="m-anno">${s.annotation}</p>
        </div>
        <div class="m-section">
          <div class="m-label">解 析 与 史 例</div>
          <p class="m-text">${s.analysis}</p>
        </div>
        <div class="m-section">
          <div class="m-label">配 图 提 示 词</div>
          <div class="prompt-box">
            <div class="pb-head">
              <span>🖌 AI 绘图 Prompt（水墨风）</span>
              <button class="copy-btn" id="copyBtn">复制</button>
            </div>
            <div class="prompt-text" id="promptText">${s.prompt}</div>
          </div>
        </div>
        <div class="m-pager">
          <button id="prevBtn" ${s.id === 1 ? 'disabled' : ''}>← 上一计</button>
          <button id="nextBtn" ${s.id === 36 ? 'disabled' : ''}>下一计 →</button>
        </div>
      </div>`;
  }

  function openModal(id) {
    const s = STRATAGEMS.find(x => x.id === id);
    if (!s) return;
    curId = id;
    card.innerHTML = modalHTML(s);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    card.scrollTop = 0;

    $('#prevBtn').onclick = () => openModal(id - 1);
    $('#nextBtn').onclick = () => openModal(id + 1);
    $('#copyBtn').onclick = (e) => {
      navigator.clipboard.writeText(s.prompt).then(() => {
        const b = e.target; b.textContent = '已复制 ✓'; b.classList.add('done');
        setTimeout(() => { b.textContent = '复制'; b.classList.remove('done'); }, 1800);
      });
    };
  }

  function closeModal() {
    modal.hidden = true;
    curId = null;
    document.body.style.overflow = '';
  }

  // ---------- 事件绑定 ----------
  document.addEventListener('click', (e) => {
    const c = e.target.closest('.card');
    if (c) { openModal(+c.dataset.id); return; }
    if (e.target.closest('[data-close]')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    const c = e.target.closest && e.target.closest('.card');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(+c.dataset.id); return; }
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft' && curId > 1) openModal(curId - 1);
    else if (e.key === 'ArrowRight' && curId < 36) openModal(curId + 1);
  });

  // ---------- 返回顶部 ----------
  const toTop = $('#toTop');
  toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  // ---------- 初始化 ----------
  renderGroups();
})();
