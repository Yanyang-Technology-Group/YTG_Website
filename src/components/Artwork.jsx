import { ArrowUpRight, Braces, Check, CodeXml, Globe2, MessageCircle, Search, TrainFront } from 'lucide-react';
import { BrandMark } from './Icons';

export function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-grid" />
      <div className="art-label"><CodeXml size={15} /><span>BUILT IN THE OPEN</span><span className="art-label-dot" /></div>
      <svg className="hero-cube" viewBox="0 0 520 460" fill="none">
        <defs>
          <linearGradient id="cube-top" x1="150" y1="70" x2="365" y2="210" gradientUnits="userSpaceOnUse"><stop stopColor="#8fbdff" /><stop offset="1" stopColor="#3b88ff" /></linearGradient>
          <linearGradient id="cube-left" x1="145" y1="150" x2="260" y2="335" gradientUnits="userSpaceOnUse"><stop stopColor="#3986ff" /><stop offset="1" stopColor="#0062ff" /></linearGradient>
          <linearGradient id="cube-right" x1="367" y1="150" x2="260" y2="330" gradientUnits="userSpaceOnUse"><stop stopColor="#0062ff" /><stop offset="1" stopColor="#003fa6" /></linearGradient>
          <linearGradient id="cube-small" x1="65" y1="184" x2="123" y2="246" gradientUnits="userSpaceOnUse"><stop stopColor="#7eb3ff" /><stop offset="1" stopColor="#0062ff" /></linearGradient>
        </defs>
        <ellipse cx="264" cy="266" rx="219" ry="128" stroke="var(--art-orbit)" strokeDasharray="4 7" transform="rotate(-17 264 266)" />
        <path d="m55 278 203-117 208 119-203 118L55 278Z" fill="var(--art-platform)" stroke="var(--art-line)" />
        <path d="m55 278 208 120v13L55 291v-13Zm208 120 203-118v13L263 411v-13Z" fill="var(--art-platform-side)" stroke="var(--art-line)" />
        <path d="m97 278 162-93 165 95-161 93-166-95Z" stroke="var(--art-line)" strokeDasharray="3 5" />
        <path d="m261 177 110 64-110 64-111-64 111-64Z" fill="#0062ff" opacity=".09" transform="translate(0 34)" />
        <path d="M150 153 260 89l110 64-110 64-110-64Z" fill="url(#cube-top)" stroke="#a4cbff" strokeWidth="1.2" />
        <path d="m150 153 110 64v117l-110-64V153Z" fill="url(#cube-left)" />
        <path d="m260 217 110-64v117l-110 64V217Z" fill="url(#cube-right)" />
        <path d="m150 153 110 64 110-64M260 217v117" stroke="#b4d4ff" strokeOpacity=".5" />
        <path d="m174 171 61 35m-61-20 24 14m-24 2 45 26" stroke="white" strokeOpacity=".25" strokeWidth="2" />
        <g transform="matrix(.89 .51 0 1 177 208)"><path d="m17 0-17 17 17 17m38-34 17 17-17 17M42-7 30 40" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></g>
        <path d="m290 245 49-29m-49 43 49-29m-49 43 29-17" stroke="#77adff" strokeWidth="3" strokeLinecap="round" opacity=".65" />
        <path d="m215 134 45-26 45 26-45 26-45-26Z" stroke="white" strokeOpacity=".4" />
        <path d="m260 120-24 14 24 14 24-14-24-14Z" fill="white" fillOpacity=".85" />
        <path d="m390 212 29-17 29 17-29 17-29-17Z" fill="#a7cbff" /><path d="m390 212 29 17v32l-29-17v-32Z" fill="#438eff" /><path d="m419 229 29-17v32l-29 17v-32Z" fill="#0062ff" />
        <path d="m75 190 27-16 27 16-27 16-27-16Z" fill="#c0d9ff" /><path d="m75 190 27 16v30l-27-16v-30Z" fill="url(#cube-small)" /><path d="m102 206 27-16v30l-27 16v-30Z" fill="#428cff" />
        <path d="M366 112v-25m-12 12h24M129 292v-15m-7 7h14" stroke="var(--art-cross)" strokeWidth="1.5" />
        <circle cx="404" cy="316" r="5" fill="#0062ff" /><circle cx="404" cy="316" r="11" stroke="#0062ff" strokeOpacity=".2" />
        <circle cx="137" cy="116" r="4" fill="#5a97ff" />
        <path d="m118 119 44 25m212 171 20-11M410 151l-25 14" stroke="var(--art-line)" strokeDasharray="3 3" />
      </svg>
      <div className="art-code">
        <div className="art-code-top"><span><i /><i /><i /></span><small>projects.ts</small><Braces size={12} /></div>
        <code><span className="code-keyword">const</span> projects = {'{'}<br /><span className="code-indent">type: <span className="code-string">'community'</span>,</span><br /><span className="code-indent">source: <span className="code-string">'open'</span></span><br />{'}'}<span className="code-cursor">_</span></code>
      </div>
      <span className="art-caption"><span />COMMUNITY / WEB / MINECRAFT</span>
    </div>
  );
}

function CommunityArtwork() {
  return (
    <div className="mock-browser">
      <div className="mock-browser-top"><span className="mock-dots"><i /><i /><i /></span><span>YComm · 社区</span><Globe2 size={10} /></div>
      <div className="mock-community-nav"><span><BrandMark />晏阳社区</span><span>社区　 资源　 消息</span><span className="mock-avatar">Y</span></div>
      <div className="mock-community-main">
        <aside><strong>发现社区</strong><span className="mock-selected"><MessageCircle size={10} />全部讨论</span><span>　社区公告</span><span>　交流分享</span><span>　资源讨论</span><div className="mock-sidebar-line" /></aside>
        <div className="mock-posts"><div className="mock-post-heading"><strong>社区讨论</strong><span>＋ 发起讨论</span></div><div className="mock-search"><Search size={9} />搜索讨论…</div>{['欢迎来到晏阳社区', '使用问题与反馈', '资源分享与讨论'].map((title, index) => <div className="mock-post" key={title}><span className={`mock-post-avatar avatar-${index}`}>{['Y', 'C', '↗'][index]}</span><div><strong>{title}</strong><span>社区交流 · 开放分享</span></div><MessageCircle size={10} /><small>{['12', '8', '6'][index]}</small></div>)}</div>
      </div>
    </div>
  );
}

function FlutterArtwork() {
  return <><span className="flutter-decor flutter-decor--one" /><span className="flutter-decor flutter-decor--two" /><div className="mock-phone"><div className="phone-island" /><div className="phone-status">9:41<span>▰ ▪</span></div><div className="phone-title"><BrandMark />晏阳社区<MessageCircle size={12} /></div><div className="phone-tabs"><strong>发现</strong><span>最新</span><span>关注</span></div><div className="phone-welcome">晏阳社区<span>浏览讨论与资源</span><Braces size={27} /></div>{['社区公告与使用说明', '资源下载与问题反馈'].map((text, i) => <div className="phone-post" key={text}><span className={`mock-post-avatar avatar-${i}`}>Y</span><div><strong>{text}</strong><span>晏阳社区 · 讨论</span></div></div>)}<div className="phone-bottom"><MessageCircle size={13} /><Globe2 size={13} /><Check size={13} /><span className="phone-user" /></div></div><div className="flutter-tag"><span className="flutter-diamond" />Flutter<span className="tiny-separator" />一份代码，多个平台</div></>;
}

function WebsiteArtwork() {
  return <div className="mock-city-browser"><div className="mock-browser-top"><span className="mock-dots"><i /><i /><i /></span><span>YANYANG CITY</span><ArrowUpRight size={10} /></div><div className="city-site-nav"><BrandMark /><strong>晏阳城市建设</strong><span>关于　 加入　 线路图</span></div><div className="city-site-copy"><span>MINECRAFT · FABRIC 1.20.1</span><strong>晏阳城市建设<br />服务器官网</strong><span className="city-site-button">查看介绍 ↗</span></div><svg className="city-illustration" viewBox="0 0 280 190" fill="none"><path d="m9 125 130-76 131 76-130 76L9 125Z" fill="var(--city-ground)" /><path d="m20 132 110-64M67 160l120-70m-59 106 125-72m-211-9 139 81m-90-109 137 79" stroke="var(--city-road)" strokeWidth="9" /><path d="m70 74 35-20 36 20-35 20-36-20Z" fill="#9bc4ff" /><path d="m70 74 36 20v61l-36-21V74Z" fill="#4e93fa" /><path d="m106 94 35-20v60l-35 21V94Z" fill="#0062ff" /><path d="m149 75 28-16 29 16-29 17-28-17Z" fill="#c7deff" /><path d="m149 75 28 17v51l-28-16V75Z" fill="#8ab9fa" /><path d="m177 92 29-17v52l-29 16V92Z" fill="#639ded" /><path d="m128 127 23-13 24 13-24 14-23-14Z" fill="#bfdbfe" /><path d="m128 127 23 14v30l-23-14v-30Z" fill="#80b5ff" /><path d="m151 141 24-14v30l-24 14v-30Z" fill="#428aff" /><path d="m81 89 15 9m-15 4 15 9m-15 4 15 9m91-23 10-6m-10 18 10-6" stroke="white" strokeOpacity=".7" strokeWidth="3" /><path d="M220 139v-25" stroke="#56936d" strokeWidth="3" /><path d="m207 119 13-27 14 27h-27Z" fill="#80b79a" /></svg></div>;
}

function MtrArtwork() {
  return <><svg className="transit-map" viewBox="0 0 400 210" fill="none"><path d="M-15 156H99a25 25 0 0 0 25-25V80a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24v54a24 24 0 0 0 24 24h160" stroke="var(--transit-muted)" strokeWidth="6" /><path d="M-15 106h180a28 28 0 0 1 28 28v18a25 25 0 0 0 25 25h200" stroke="#0062ff" strokeWidth="7" /><path d="M-10 40h82a25 25 0 0 1 25 25v9a25 25 0 0 0 25 25h154a25 25 0 0 0 25-25V20" stroke="#72adce" strokeWidth="5" /><path d="M343-10v104a22 22 0 0 1-22 22h-57a23 23 0 0 0-23 23v81" stroke="#b0a0dc" strokeWidth="5" />{[[43,106],[97,106],[156,106],[241,177],[306,177],[345,177],[48,40],[147,99],[274,99],[343,58]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5.5" fill="var(--map-station)" stroke="var(--map-station-border)" strokeWidth="2" />)}<circle cx="241" cy="158" r="9" fill="var(--map-station)" stroke="#0062ff" strokeWidth="3" /><text x="30" y="92" className="map-label">YANYANG</text><text x="294" y="197" className="map-label">NEXT STOP: OPEN SOURCE</text></svg><div className="train-emblem"><TrainFront size={30} strokeWidth={1.5} /></div><span className="mtr-version">MTR 4.0.5/4.1.0 · Fabric 1.20.x/1.21.x</span></>;
}

function SignArtwork() {
  return <><div className="sign-code">&amp;c &amp;l &amp;r <span>·</span> &#0062ff</div><div className="color-sign"><div className="sign-screw sign-screw--left" /><div className="sign-screw sign-screw--right" /><div className="sign-text">{'你好，世界！'.split('').map((char, index) => <span key={index} style={{ color: ['#0062ff','#5d6cdb','#a56abc','#cf7890','#c79750','#60a69b'][index] }}>{char}</span>)}</div><span>HELLO, COLORFUL WORLD.</span></div><div className="sign-post" /><span className="sign-palette">{['#0062ff','#5d6cdb','#a56abc','#cf7890','#c79750','#60a69b'].map((color) => <i key={color} style={{ background: color }} />)}</span></>;
}

const artworks = { community: CommunityArtwork, flutter: FlutterArtwork, website: WebsiteArtwork, mtr: MtrArtwork, colorfulsign: SignArtwork };

export function ProjectArtwork({ type, large = false }) {
  const Artwork = artworks[type] || CommunityArtwork;
  return <div className={`project-art project-art--${type} ${large ? 'project-art--large' : ''}`} aria-hidden="true"><span className="artwork-hint">概念示意</span><Artwork /></div>;
}
