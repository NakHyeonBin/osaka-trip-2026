/* Static trip dashboard: no API key or application server required. */
const hotel = "헨나호텔 익스프레스 오사카 난바 닛폰바시";
const tripDays = [
  {
    date: "11.12 목", short: "DAY 01", title: "공항에서 난바로", color: "#3977df", soft: "#edf3ff", theme: "도착 · 체크인", summary: "간사이공항 → INNN 픽업 → 닛폰바시", weather: "도착일 · 무리한 저녁 일정 없이",
    stops: [
      {time:"18:30", name:"간사이 국제공항 도착", detail:"입국 심사·수하물 수령 여유 60–90분", search:"간사이 국제공항", lat:34.4347,lng:135.244,kind:"flight",note:"항공편 도착 지연과 입국장 혼잡에 따라 픽업 시간을 조정하세요."},
      {time:"20:00 전후", name:"INNN 예약 차량 미팅", detail:"기사 미팅 위치·연락 수단을 출발 전 확인", search:"Kansai International Airport Terminal 1", lat:34.435,lng:135.243,kind:"car",mode:"전용 차량",duration:"50–75분",note:"예약 바우처의 미팅 포인트와 지연 시 연락 방법을 확인하세요."},
      {time:"21:00–21:30", name:"호텔 체크인", detail:hotel, search:"Henn na Hotel Express Osaka Namba Nipponbashi", lat:34.6656,lng:135.5065,kind:"hotel",mode:"도보",duration:"차량 하차 후 확인",note:"짐을 풀고 늦은 저녁은 호텔 주변에서 간단히 해결하는 편이 안전합니다."},
      {time:"선택", name:"도톤보리 야간 산책", detail:"컨디션이 괜찮으면 글리코상 주변만 짧게", search:"도톤보리 글리코 사인", lat:34.6687,lng:135.5011,kind:"walk",mode:"도보",duration:"약 10–15분",note:"첫날 야키니쿠 예약은 일정에서 제외했습니다. 21시 이후 도착과 대기 변수를 고려한 선택 일정입니다."}
    ]
  },
  {
    date:"11.13 금", short:"DAY 02", title:"먹고 쇼핑하고, 우메다의 밤", color:"#d98835", soft:"#fff3e7", theme:"난바 · 신사이바시 · 우메다", summary:"난바 아침 → 미즈노 → 신사이바시 → 우메다 공중정원", weather:"저녁 예약은 20:00 전후로 요청 권장",
    stops: [
      {time:"09:00",name:"이치란 난바 미도스지점",detail:"라멘 아침 식사 · 해당 점포 안내상 09:00 오픈",search:"이치란 난바 미도스지점",lat:34.6664,lng:135.5014,kind:"food",note:"도톤보리 본관은 영업 종료 안내가 있어 난바 미도스지점으로 변경했습니다. 대기 줄에 따라 식사 시간을 조정하세요.",official:"https://en.ichiran.com/shop/hourstable.html?lang=en"},
      {time:"09:50",name:"리쿠로 오지상 난바 본점",detail:"치즈케이크 구매 · 1F 09:00–20:00",search:"리쿠로 오지상 난바 본점",lat:34.6662,lng:135.5018,kind:"food",mode:"도보",duration:"약 5–8분",note:"공식 매장 안내 기준. 예약은 받지 않으며 혼잡 시 구매 수량 제한이 있을 수 있습니다.",official:"https://www.rikuro.co.jp/shoplist/134.html"},
      {time:"11:00",name:"미즈노 오코노미야키",detail:"점심 · 11:00–22:00 · 대기 포함 75–100분 확보",search:"미즈노 오코노미야키 도톤보리",lat:34.6688,lng:135.5026,kind:"food",mode:"도보",duration:"약 10분",note:"공식 사이트 기준 목요일 휴무지만 이날은 금요일 영업일입니다. 인기 점포라 대기시간이 크게 달라질 수 있습니다. 줄이 길면 점심을 먼저 먹고 이후 매장 방문 시간을 줄이세요.",official:"https://www.mizuno-osaka.com/index2.html"},
      {time:"12:40",name:"HUMAN MADE 신사이바시 PARCO",detail:"1F · 10:00–20:00(파르코 안내) · 상품 확인",search:"HUMAN MADE Shinsaibashi PARCO",lat:34.6745,lng:135.5012,kind:"shop",mode:"도보",duration:"약 15분",note:"신사이바시 PARCO 공식 매장 페이지에서 1F 입점 확인. 쇼핑 30분으로 압축한 일정입니다. 재고는 매장 문의가 필요합니다.",official:"https://shinsaibashi.parco.jp/shop/detail/?cd=028077"},
      {time:"13:15",name:"STÜSSY 오사카",detail:"1-7-9 Nishishinsaibashi · 공식 안내 11:00–19:00",search:"Stüssy Osaka 1-7-9 Nishishinsaibashi",lat:34.6727,lng:135.497,kind:"shop",mode:"도보",duration:"약 8–12분",note:"공식 Chapter 페이지의 주소와 영업시간 기준. 쇼핑은 25분으로 잡았습니다. 인기 상품 재고·입장 대기 여부를 확인하세요.",official:"https://kr.stussy.com/blogs/chapters/stussy-osaka"},
      {time:"13:45",name:"우메다로 이동",detail:"오사카 메트로 미도스지선 + 역내 도보",search:"Osaka Metro Shinsaibashi Station",lat:34.675,lng:135.501,kind:"train",mode:"지하철",duration:"약 25–35분",nextSearch:"LINKS UMEDA",nextLat:34.7045,nextLng:135.497},
      {time:"14:20",name:"LINKS UMEDA",detail:"GU 3F · 10:00–21:00",search:"LINKS UMEDA",lat:34.7045,lng:135.497,kind:"shop",mode:"도보",duration:"역에서 약 5–10분",note:"GU 공식 입점 안내 기준 3F. 방문 시간을 30분으로 잡았습니다.",official:"https://links-umeda.jp/shop/gu%E3%80%80links-umeda/"},
      {time:"14:55",name:"그랜드 프런트 오사카 남관",detail:"Bshop(DANTON) · PORTER · mont-bell",search:"Grand Front Osaka South Building",lat:34.7041,lng:135.4947,kind:"shop",mode:"도보",duration:"약 8분",note:"공식 매장 정보에서 Bshop·PORTER 남관 3F, mont-bell 남관 5F(11:00–21:00) 확인. 세 브랜드 70분 방문은 빠른 편이므로 구매 순서를 정하세요.",official:"https://www.gfo-sc.jp/shop/list/"},
      {time:"16:15",name:"Standard Products 우메다 EST",detail:"EST 2F · 11:00–21:00",search:"Standard Products Umeda EST",lat:34.7038,lng:135.5013,kind:"shop",mode:"도보",duration:"약 12분",note:"EST 공식 점포 안내에서 매장명·층·영업시간 확인. 방문 25분으로 압축했습니다.",official:"https://www.est-sc.com/shop_guide/index.php?c=shop_guide_view&pk=16165531160096"},
      {time:"16:50",name:"Onitsuka Tiger NU 차야마치",detail:"NU 1F · 11:00–21:00",search:"Onitsuka Tiger NU Chayamachi",lat:34.7082,lng:135.5002,kind:"shop",mode:"도보",duration:"약 10분",note:"NU 차야마치 공식 매장 안내에서 1F와 11:00–21:00 확인. 신발 착화·사이즈 대기는 시간이 더 필요할 수 있습니다.",official:"https://nu-chayamachi.com/shop/onitsukatiger"},
      {time:"17:25",name:"한큐 우메다 본점 · 한큐 맨즈",detail:"Vivienne Westwood · 본점 3F 확인",search:"Hankyu Umeda Main Store",lat:34.7029,lng:135.4985,kind:"shop",mode:"도보",duration:"약 12분",note:"한큐 본점 3F 공식 플로어 가이드에 Vivienne Westwood 기재. 게스트 쿠폰은 해외여행자 면세 자격, 여권 제시 등 조건이 있고 제외 브랜드·상품이 있습니다. 방문은 35분으로 압축했습니다.",official:"https://website.hankyu-dept.co.jp/fl/english/honten/store/floor3f.html"},
      {time:"18:15",name:"우메다 공중정원",detail:"전망대 · 일반 영업 09:30–22:30 / 최종 입장 22:00 · 성인 ¥2,000",search:"우메다 스카이빌딩 공중정원 전망대",lat:34.7052,lng:135.4902,kind:"view",mode:"도보",duration:"약 15–20분",note:"공식 안내 기준 운영시간·요금. 지정 웹 티켓 또는 당일권 구매 가능. 11월 13일 특별 영업 공지가 있는지 출발 전 재확인하세요. 11월 중순 일몰 풍경을 원한다면 쇼핑을 더 줄여 약 16:45 입장으로 당기세요.",official:"https://www.skybldg.co.jp/observatory/information/"},
      {time:"20:30 전후",name:"鮨バル -enishi- · Sushi Bar enishi Namba",detail:"센니치마에 2-2-6 · TableCheck 한국어 예약 페이지",search:"Sushi Bar enishi Namba 2-2-6 Sennichimae",lat:34.6668,lng:135.5041,kind:"food",mode:"지하철·도보",duration:"약 30–40분",note:"정확한 매장명은 鮨バル -enishi- / Sushi Bar enishi Namba. 예약 가능 시간은 예약 화면에서 확인하고 20:30 전후로 요청하세요.",official:"https://www.tablecheck.com/ko/sushi-bal-enishi"}
    ],
    decision:"오사카성은 기본 동선에서 제외했습니다. 난바·신사이바시와 우메다 쇼핑을 모두 넣은 날에 성까지 더하면 대중교통 이동과 관람으로 최소 2시간 이상이 추가됩니다. 공중정원과 저녁 예약을 지키기 위해 이번 일정에서는 우선순위를 낮췄습니다.", decisionLink:"오사카성 지도에서 보기"
  },
  {
    date:"11.14 토",short:"DAY 03",title:"난바의 마지막 식사, 귀국",color:"#2d9278",soft:"#eaf7f3",theme:"마지막 쇼핑 · 공항",summary:"호텔 체크아웃 → 덴푸라 마키노 → 난바 → 간사이공항",weather:"공항 16:30까지 도착 목표 · 여유 있게 출발",
    stops:[
      {time:"09:30",name:"호텔 체크아웃 · 짐 보관 요청",detail:hotel,search:"Henn na Hotel Express Osaka Namba Nipponbashi",lat:34.6656,lng:135.5065,kind:"hotel",note:"체크아웃 뒤 짐 보관 가능 여부와 보관 마감 시간을 프런트에서 확인하세요."},
      {time:"11:00",name:"덴푸라 마키노 난바 센니치마에점",detail:"점심 · 11:00 오픈 안내 · 대기 포함 약 75분",search:"덴푸라 마키노 난바 센니치마에점",lat:34.6653,lng:135.5024,kind:"food",mode:"도보",duration:"약 8–12분",note:"점포 공식 LINE 안내에 주소·영업 정보가 표시됩니다. 토요일 대기시간을 고려해 식사 75분을 잡았습니다.",official:"https://page.line.me/501ogpxn"},
      {time:"12:20",name:"난바 마지막 쇼핑 · 카페",detail:"기념품 구매와 면세 영수증 정리 · 90분",search:"난바 오사카",lat:34.6649,lng:135.5013,kind:"shop",mode:"도보",duration:"약 5–15분",note:"환급 대상 구매품은 공항 세관 확인 전 수하물에 넣어 위탁하지 마세요."},
      {time:"14:00",name:"호텔에서 짐 찾기",detail:"역 이동 전에 여권·항공권·구매품 확인",search:"Henn na Hotel Express Osaka Namba Nipponbashi",lat:34.6656,lng:135.5065,kind:"hotel",mode:"도보",duration:"약 10–15분",note:"난카이 난바역에 14:30 전후 도착하도록 출발합니다."},
      {time:"14:40 목표",name:"난카이 난바역 → 간사이공항",detail:"공항급행 약 45분 또는 라피트 약 35–40분 · 열차 시간 확인",search:"Nankai Namba Station",lat:34.6627,lng:135.5018,kind:"train",mode:"난카이 전철",duration:"약 35–50분",note:"정확한 열차 시각과 승강장은 난카이 공식 시간표에서 확인하세요.",official:"https://www.nankai.co.jp/traffic/railway/timetable.html"},
      {time:"15:30–16:00 예상",name:"간사이공항 도착",detail:"요청 목표 16:30 이전 도착 · 19:20 출발",search:"간사이 국제공항",lat:34.4347,lng:135.244,kind:"flight",mode:"열차",duration:"역에서 터미널 이동 포함",note:"항공사 체크인·수하물 마감과 터미널을 확인하세요. 2026년 11월 면세 환급 확인은 보안검색 전이므로 구매품 접근이 가능해야 합니다."}
    ]
  }
];

const checks = [
  "INNN 픽업 바우처 · 기사 미팅 위치 저장",
  "스시 바 이니시 예약 시간 확정",
  "공중정원 11월 13일 영업·웹 티켓 확인",
  "호텔 체크아웃 후 짐 보관 확인",
  "난카이 공항행 열차 시간표 확인",
  "에어로케이 터미널 · 체크인 마감 확인",
  "면세 환급 수단 등록 · 여권 지참",
  "환급 상품은 세관 확인 전 위탁 수하물에 넣지 않기"
];

const googleSearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const naverSearch = (q) => `https://map.naver.com/p/search/${encodeURIComponent(q)}`;
const kakaoSearch = (q) => `https://map.kakao.com/link/search/${encodeURIComponent(q)}`;
const directions = (a,b,mode) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode === "도보" ? "walking" : mode === "전용 차량" ? "driving" : "transit"}`;
let activeDay = 0;
let selectedStop = 0;
const maps = new Map();
const mapLayerGroups = new Map();

function safeOpen(href){ window.open(href,"_blank","noopener,noreferrer"); }
function locationLinks(query, previous, mode, official){
  return `<a class="primary-link" href="${naverSearch(query)}" target="_blank" rel="noopener">네이버지도 ↗</a><a href="${kakaoSearch(query)}" target="_blank" rel="noopener">카카오맵 ↗</a>${previous ? `<a href="${directions(previous,query,mode)}" target="_blank" rel="noopener">${mode || "대중교통"} 길찾기 ↗</a>` : `<a href="${googleSearch(query)}" target="_blank" rel="noopener">구글지도 ↗</a>`}${official ? `<a href="${official}" target="_blank" rel="noopener">공식 안내 ↗</a>` : ""}`;
}

function renderOverview(){
  document.querySelector("#overview-grid").innerHTML = tripDays.map((d,i)=>`<button class="overview-day" style="--day-color:${d.color}" data-overview="${i}" aria-label="${d.date} 일정 보기"><span class="day-label">${d.short} · ${d.date}</span><strong>${d.title}</strong><small>${d.summary}</small><span class="arrow">↗</span></button>`).join("");
  document.querySelectorAll("[data-overview]").forEach(button=>button.addEventListener("click",()=>showDay(Number(button.dataset.overview),true)));
}
function renderTabs(){
  document.querySelector("#day-tabs").innerHTML = tripDays.map((d,i)=>`<button class="day-tab" id="tab-${i}" role="tab" aria-selected="${i===activeDay}" aria-controls="panel-${i}" tabindex="${i===activeDay?0:-1}" data-day="${i}"><span>${d.date}</span></button>`).join("");
  document.querySelectorAll("[data-day]").forEach(button=>{
    button.addEventListener("click",()=>showDay(Number(button.dataset.day)));
    button.addEventListener("keydown",e=>{if(["ArrowRight","ArrowLeft"].includes(e.key)){e.preventDefault();const step=e.key==="ArrowRight"?1:-1;const next=(Number(button.dataset.day)+step+tripDays.length)%tripDays.length;showDay(next);document.querySelector(`#tab-${next}`).focus();}});
  });
}
function mapShell(day,index){
  return `<section class="card map-card"><div class="map-head"><div><p class="eyebrow">ROUTE MAP · ${day.short}</p><h3>${day.theme}</h3><p>번호를 누르거나 일정 항목을 선택해 이동 구간을 살펴보세요.</p></div><span class="map-count">${day.stops.length} stops</span></div><div class="route-map" id="map-${index}" role="img" aria-label="${day.date} 일정 지도"></div><div class="map-links"><a href="${naverSearch(day.stops[0].search)}" target="_blank" rel="noopener">네이버지도에서 열기 ↗</a><a href="${kakaoSearch(day.stops[0].search)}" target="_blank" rel="noopener">카카오맵에서 열기 ↗</a></div><div class="legend"><span><i style="--day-color:${day.color}"></i> ${day.date} 방문 순서</span><span>점선은 구간 연결선 · 실제 길찾기는 일정의 링크 이용</span></div></section>`;
}
function renderTimeline(day,index){
  const rows = day.stops.map((s,j)=>{
    const prev = j ? day.stops[j-1].search : null;
    const move = s.mode ? `<div class="leg"><span class="leg-mode">${s.mode}</span><span>이전 장소에서 ${s.duration || "이동"}</span></div>` : "";
    return `<article class="stop ${j===selectedStop?"active":""}" data-stop="${j}" tabindex="0" role="button" aria-label="지도에서 ${s.name} 선택"><div class="stop-number">${j+1}</div><div class="stop-body"><div class="stop-top"><div><h4>${s.name}</h4><p class="stop-desc">${s.detail}</p></div><span class="stop-time">${s.time}</span></div>${move}<div class="place-links">${locationLinks(s.search,prev,s.mode,s.official)}</div>${s.note?`<div class="route-summary"><strong>메모</strong><span>${s.note}</span></div>`:""}</div></article>`;
  }).join("");
  return `<section class="card timeline-card"><p class="eyebrow">YOUR DAY, STEP BY STEP</p><h3>시간별 일정</h3>${rows}<div class="route-summary"><strong>오늘의 동선</strong><span>${day.summary}</span></div></section>`;
}
function renderDay(){
  const day=tripDays[activeDay];
  const panel=document.querySelector("#day-content");
  panel.innerHTML=`<section class="day-panel" id="panel-${activeDay}" role="tabpanel" aria-labelledby="tab-${activeDay}" style="--day-color:${day.color};--day-soft:${day.soft}"><div class="day-title-row"><div><span class="day-theme"><i class="dot"></i>${day.short} · ${day.theme}</span><h2>${day.title}</h2></div><span class="weather-note">${day.weather}</span></div>${mapShell(day,activeDay)}${renderTimeline(day,activeDay)}${day.decision?`<section class="card decision-card"><div class="section-heading"><div><p class="eyebrow">ITINERARY CHOICE</p><h2>오사카성은 다음 기회에</h2></div><span class="decision-badge">선택 일정에서 제외</span></div><p>${day.decision}</p><p class="note-line">오사카성을 추가하려면 우메다 쇼핑을 크게 줄이거나, 둘째 날 저녁 예약을 늦춰야 합니다.</p><p class="note-line">둘째 날 쇼핑은 약 3시간 55분에 4개 상권과 7개 브랜드를 묶었습니다. 매장별 체류가 짧으니 구매 우선순위를 정하고, 미즈노 대기가 길어지면 일부 쇼핑을 다음으로 미루세요.</p><div class="place-links"><a href="${naverSearch("오사카성")}" target="_blank" rel="noopener">${day.decisionLink} ↗</a></div></section>`:""}</section>`;
  panel.querySelectorAll("[data-stop]").forEach(row=>{
    const select=()=>selectStop(Number(row.dataset.stop));
    row.addEventListener("click",e=>{if(e.target.closest("a"))return;select();});
    row.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select();}});
  });
  initMap(activeDay);
}
function showDay(index, scroll=false){
  activeDay=index;selectedStop=0;
  document.querySelectorAll(".day-tab").forEach((tab,i)=>{tab.setAttribute("aria-selected",String(i===index));tab.tabIndex=i===index?0:-1;});
  renderDay();
  if(scroll)document.querySelector("#day-tabs").scrollIntoView({behavior:"smooth",block:"start"});
}
function selectStop(index){
  selectedStop=index;
  document.querySelectorAll(".stop").forEach((row,i)=>row.classList.toggle("active",i===index));
  const group=mapLayerGroups.get(activeDay);const map=maps.get(activeDay);if(!group||!map)return;
  const marker=group.markers[index];if(marker){map.setView(marker.getLatLng(),Math.max(map.getZoom(),14),{animate:true});marker.openPopup();}
}
function initMap(index){
  if(typeof L==="undefined"){
    const node=document.querySelector(`#map-${index}`);if(node)node.innerHTML='<div class="map-fallback">지도를 불러오지 못했습니다.<br>일정의 네이버지도·카카오맵 링크로 장소와 대중교통 경로를 확인할 수 있어요.</div>';
    return;
  }
  const day=tripDays[index];let map=maps.get(index);
  const mapNode=document.querySelector(`#map-${index}`);
  if(map&&map.getContainer()!==mapNode){map.remove();maps.delete(index);mapLayerGroups.delete(index);map=null;}
  if(!map){
    map=L.map(`map-${index}`,{scrollWheelZoom:false,zoomControl:true});maps.set(index,map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(map);
    const coords=day.stops.map(s=>[s.lat,s.lng]);
    L.polyline(coords,{color:day.color,weight:4,opacity:.75,dashArray:"7 8"}).addTo(map);
    const markers=day.stops.map((s,j)=>{
      const icon=L.divIcon({className:"",html:`<span class="pin" style="--pin-color:${day.color}">${j+1}</span>`,iconSize:[29,29],iconAnchor:[14,14]});
      const marker=L.marker([s.lat,s.lng],{icon}).bindPopup(`<strong>${j+1}. ${s.name}</strong><small>${s.time}${s.mode?` · ${s.mode} ${s.duration||""}`:""}</small>`).addTo(map);
      marker.on("click",()=>{selectedStop=j;document.querySelectorAll(".stop").forEach((row,k)=>row.classList.toggle("active",k===j));});return marker;
    });
    mapLayerGroups.set(index,{markers});map.fitBounds(coords,{padding:[24,24],maxZoom:14});
  }
  setTimeout(()=>map.invalidateSize(),80);
}
function renderChecklist(){
  const key="osaka-trip-2026-checklist";let saved={};try{saved=JSON.parse(localStorage.getItem(key)||"{}");}catch{}
  document.querySelector("#checklist").innerHTML=checks.map((task,i)=>`<label class="check-item"><input type="checkbox" data-check="${i}" ${saved[i]?"checked":""}><span>${task}</span></label>`).join("");
  document.querySelectorAll("[data-check]").forEach(input=>input.addEventListener("change",()=>{
    let state={};try{state=JSON.parse(localStorage.getItem(key)||"{}");}catch{}state[input.dataset.check]=input.checked;
    try{localStorage.setItem(key,JSON.stringify(state));document.querySelector("#saved-state").textContent="저장됨 · 이 기기";}catch{document.querySelector("#saved-state").textContent="저장 공간을 사용할 수 없음";}
    updateProgress(state);
  }));
  updateProgress(saved);
}
function updateProgress(state){
  const done=checks.reduce((sum,_,i)=>sum+(state[i]?1:0),0);document.querySelector("#progress-count").textContent=`${done} / ${checks.length}`;document.querySelector("#progress-bar").style.width=`${done/checks.length*100}%`;
}
renderOverview();renderTabs();renderChecklist();renderDay();
