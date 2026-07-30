/* =========================================================================
   PSH HERITAGE — DANH SÁCH DI TÍCH & DI SẢN
   -------------------------------------------------------------------------
   ĐÂY LÀ FILE DUY NHẤT BẠN CẦN SỬA để thêm/bớt địa điểm.
   Cả trang chủ (đếm số liệu) và trang gallery đều đọc từ đây.

   📖 Hướng dẫn đầy đủ, có ví dụ: xem file HUONG-DAN.md ở thư mục gốc.

   CÁCH THÊM NHANH — chép dòng dưới, dán vào trong `items: [ ... ]` của đúng tỉnh:

     { name:'Tên di tích',        name_en:'English name',
       type:'Cấp xếp hạng',       type_en:'Ranking in English',
       era:'Niên đại',            era_en:'Era in English',
       lat:21.0000, lng:105.0000,
       viewer:'https://link-viewer-cua-ban',
       photo:'images/ten-file-anh.jpg',
       splats:'30.0M', captured:'08/2026', unesco:false, tone:0 },

   Nhớ: chữ để trong nháy đơn '...', số thì không, cuối mỗi khối có dấu phẩy.
   Toạ độ lấy bằng cách bấm chuột phải trên Google Maps.

   ⚠️ Ô nào có đuôi `_en` là bản tiếng Anh. NẾU BỎ TRỐNG hoặc không viết ô đó,
      trang sẽ tự dùng lại bản tiếng Việt — không bị vỡ, chỉ là chỗ đó không dịch.

   Mỗi địa điểm:
     name / name_en     : tên hiển thị
     type / type_en     : cấp xếp hạng / loại hình
     era / era_en       : niên đại
     lat, lng           : toạ độ để cắm ghim bản đồ  ⚠️ hiện là toạ độ gần đúng, nên rà lại
     viewer             : LINK VIEWER 3DGS của địa điểm đó (trang bên ngoài).
                          → Để '' (chuỗi rỗng) nếu chưa có: thẻ sẽ tự hiện "Sắp ra mắt".
     splats             : số hạt splat (dữ liệu mẫu — sửa theo bản quét thật)
     captured           : tháng/năm quét (dữ liệu mẫu)
     captured_en        : chỉ cần khi `captured` có chữ tiếng Việt, ví dụ "Dự kiến 10/2026"
     unesco             : true nếu thuộc danh mục UNESCO
     photo              : ẢNH XEM TRƯỚC THẬT, ví dụ 'images/dai-noi-hue.jpg'
                          → Không viết ô này thì thẻ tự dùng ảnh mẫu xám. Cắt 16:9 cho đẹp.
     tone               : 0–3, chỉ để ảnh placeholder có nhịp màu khác nhau
                          (không còn tác dụng khi đã có `photo`)

   ⚠️ Các link `viewer` bên dưới là LINK MẪU. Thay bằng link thật rồi xoá
      dải cảnh báo màu vàng ở đầu trang gallery.html.
   ========================================================================= */

window.PSH_HERITAGE = [
  {
    region: 'Miền Bắc',
    region_en: 'Northern Vietnam',
    blurb: 'Kinh thành, đền chùa và địa mạo đá vôi của châu thổ sông Hồng.',
    blurb_en: 'Imperial citadels, temples and the limestone karst of the Red River Delta.',
    cities: [
      {
        city: 'Hà Nội', city_en: 'Hanoi',
        items: [
          { name:'Hoàng thành Thăng Long', name_en:'Thăng Long Imperial Citadel',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'Thế kỷ XI', era_en:'11th century',
            lat:21.0345, lng:105.8400,
            viewer:'https://lcc-viewer.xgrids.com/pub/32ef8d04-5ad8-4e8a-a9d2-42ae8e4d08db',
            photo:'images/hoangthanhthanglong.webp',
            splats:'48.2M', captured:'03/2025', unesco:true, tone:0 },

          { name:'Văn Miếu – Quốc Tử Giám', name_en:'Temple of Literature',
            type:'Di tích quốc gia đặc biệt', type_en:'Special National Monument',
            era:'1070', era_en:'1070',
            lat:21.0293, lng:105.8355,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/van-mieu-quoc-tu-giam',
            splats:'36.9M', captured:'03/2025', unesco:false, tone:1 },

          { name:'Chùa Một Cột', name_en:'One Pillar Pagoda',
            type:'Di tích quốc gia', type_en:'National Monument',
            era:'1049', era_en:'1049',
            lat:21.0359, lng:105.8339,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/chua-mot-cot',
            splats:'12.4M', captured:'04/2025', unesco:false, tone:2 },

          { name:'Nhà thờ Lớn Hà Nội', name_en:"St. Joseph's Cathedral",
            type:'Kiến trúc Pháp thuộc', type_en:'French colonial architecture',
            era:'1886', era_en:'1886',
            lat:21.0288, lng:105.8489,
            viewer:'',
            splats:'—', captured:'Dự kiến 09/2026', captured_en:'Planned 09/2026', unesco:false, tone:3 }
        ]
      },
      {
        city: 'Ninh Bình', city_en: 'Ninh Binh',
        items: [
          { name:'Quần thể danh thắng Tràng An', name_en:'Tràng An Landscape Complex',
            type:'Di sản hỗn hợp thế giới', type_en:'Mixed World Heritage',
            era:'Địa mạo karst', era_en:'Karst landscape',
            lat:20.2506, lng:105.8964,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/trang-an',
            splats:'92.7M', captured:'01/2025', unesco:true, tone:1 },

          { name:'Cố đô Hoa Lư', name_en:'Hoa Lư Ancient Capital',
            type:'Di tích quốc gia đặc biệt', type_en:'Special National Monument',
            era:'Thế kỷ X', era_en:'10th century',
            lat:20.2842, lng:105.9114,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/co-do-hoa-lu',
            splats:'41.3M', captured:'01/2025', unesco:true, tone:2 }
        ]
      },
      {
        city: 'Quảng Ninh', city_en: 'Quang Ninh',
        items: [
          { name:'Vịnh Hạ Long', name_en:'Hạ Long Bay',
            type:'Di sản thiên nhiên thế giới', type_en:'World Natural Heritage',
            era:'Karst ngập nước', era_en:'Drowned karst',
            lat:20.9101, lng:107.1839,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/vinh-ha-long',
            splats:'128.5M', captured:'11/2024', unesco:true, tone:0 }
        ]
      },
      {
        city: 'Bắc Ninh', city_en: 'Bac Ninh',
        items: [
          { name:'Đền Đô (Đền Lý Bát Đế)', name_en:'Đền Đô — Temple of the Eight Lý Kings',
            type:'Di tích quốc gia đặc biệt', type_en:'Special National Monument',
            era:'1030', era_en:'1030',
            lat:21.1170, lng:105.9530,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/den-do',
            splats:'27.6M', captured:'05/2025', unesco:false, tone:3 },

          { name:'Chùa Dâu', name_en:'Dâu Pagoda',
            type:'Di tích quốc gia đặc biệt', type_en:'Special National Monument',
            era:'Thế kỷ II', era_en:'2nd century',
            lat:21.0470, lng:106.0080,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/chua-dau',
            splats:'22.1M', captured:'05/2025', unesco:false, tone:0 }
        ]
      },
      {
        city: 'Hà Giang', city_en: 'Ha Giang',
        items: [
          { name:'Dinh thự họ Vương', name_en:'Vương Family Mansion',
            type:'Di tích kiến trúc nghệ thuật quốc gia', type_en:'National Architectural Monument',
            era:'1919', era_en:'1919',
            lat:23.2167, lng:105.3167,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/dinh-thu-ho-vuong',
            splats:'31.8M', captured:'10/2024', unesco:false, tone:1 }
        ]
      }
    ]
  },

  {
    region: 'Miền Trung',
    region_en: 'Central Vietnam',
    blurb: 'Kinh đô triều Nguyễn, phố cảng Hội An và tháp gạch Chăm Pa.',
    blurb_en: 'The Nguyễn dynasty capital, the port town of Hội An and Cham brick towers.',
    cities: [
      {
        city: 'Thừa Thiên Huế', city_en: 'Hue',
        items: [
          { name:'Đại Nội Huế', name_en:'Hue Imperial City',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'1805', era_en:'1805',
            lat:16.4698, lng:107.5786,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/dai-noi-hue',
            splats:'156.4M', captured:'02/2025', unesco:true, tone:2 },

          { name:'Lăng Khải Định', name_en:'Tomb of Khải Định',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'1931', era_en:'1931',
            lat:16.4000, lng:107.5744,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/lang-khai-dinh',
            splats:'58.9M', captured:'02/2025', unesco:true, tone:3 },

          { name:'Lăng Tự Đức', name_en:'Tomb of Tự Đức',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'1867', era_en:'1867',
            lat:16.4569, lng:107.5497,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/lang-tu-duc',
            splats:'64.2M', captured:'02/2025', unesco:true, tone:0 },

          { name:'Chùa Thiên Mụ', name_en:'Thiên Mụ Pagoda',
            type:'Di tích quốc gia', type_en:'National Monument',
            era:'1601', era_en:'1601',
            lat:16.4536, lng:107.5450,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/chua-thien-mu',
            splats:'29.7M', captured:'02/2025', unesco:false, tone:1 }
        ]
      },
      {
        city: 'Quảng Nam', city_en: 'Quang Nam',
        items: [
          { name:'Phố cổ Hội An', name_en:'Hội An Ancient Town',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'Thế kỷ XV', era_en:'15th century',
            lat:15.8770, lng:108.3270,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/pho-co-hoi-an',
            splats:'112.3M', captured:'12/2024', unesco:true, tone:2 },

          { name:'Chùa Cầu', name_en:'Japanese Covered Bridge',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'1593', era_en:'1593',
            lat:15.8772, lng:108.3260,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/chua-cau',
            splats:'18.6M', captured:'12/2024', unesco:true, tone:3 },

          { name:'Thánh địa Mỹ Sơn', name_en:'Mỹ Sơn Sanctuary',
            type:'Di sản văn hoá thế giới', type_en:'World Cultural Heritage',
            era:'Thế kỷ IV', era_en:'4th century',
            lat:15.7639, lng:108.1244,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/thanh-dia-my-son',
            splats:'74.8M', captured:'12/2024', unesco:true, tone:0 }
        ]
      },
      {
        city: 'Quảng Bình', city_en: 'Quang Binh',
        items: [
          { name:'Động Phong Nha', name_en:'Phong Nha Cave',
            type:'Di sản thiên nhiên thế giới', type_en:'World Natural Heritage',
            era:'Karst 400 triệu năm', era_en:'400-million-year karst',
            lat:17.5850, lng:106.2833,
            viewer:'',
            splats:'—', captured:'Dự kiến 11/2026', captured_en:'Planned 11/2026', unesco:true, tone:1 }
        ]
      },
      {
        city: 'Khánh Hoà', city_en: 'Khanh Hoa',
        items: [
          { name:'Tháp Bà Ponagar', name_en:'Po Nagar Cham Towers',
            type:'Di tích quốc gia', type_en:'National Monument',
            era:'Thế kỷ VIII', era_en:'8th century',
            lat:12.2653, lng:109.1955,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/thap-ba-ponagar',
            splats:'33.5M', captured:'06/2025', unesco:false, tone:2 }
        ]
      },
      {
        city: 'Bình Định', city_en: 'Binh Dinh',
        items: [
          { name:'Tháp Đôi Quy Nhơn', name_en:'Twin Cham Towers, Quy Nhơn',
            type:'Di tích quốc gia', type_en:'National Monument',
            era:'Thế kỷ XII', era_en:'12th century',
            lat:13.7797, lng:109.2178,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/thap-doi-quy-nhon',
            splats:'19.4M', captured:'06/2025', unesco:false, tone:3 }
        ]
      }
    ]
  },

  {
    region: 'Miền Nam',
    region_en: 'Southern Vietnam',
    blurb: 'Kiến trúc thuộc địa, công trình tôn giáo và di tích chiến tranh.',
    blurb_en: 'Colonial architecture, religious landmarks and wartime sites.',
    cities: [
      {
        city: 'TP. Hồ Chí Minh', city_en: 'Ho Chi Minh City',
        items: [
          { name:'Dinh Độc Lập', name_en:'Independence Palace',
            type:'Di tích quốc gia đặc biệt', type_en:'Special National Monument',
            era:'1966', era_en:'1966',
            lat:10.7772, lng:106.6958,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/dinh-doc-lap',
            splats:'87.1M', captured:'04/2025', unesco:false, tone:0 },

          { name:'Nhà thờ Đức Bà Sài Gòn', name_en:'Saigon Notre-Dame Cathedral',
            type:'Kiến trúc Pháp thuộc', type_en:'French colonial architecture',
            era:'1880', era_en:'1880',
            lat:10.7797, lng:106.6990,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/nha-tho-duc-ba',
            splats:'52.3M', captured:'04/2025', unesco:false, tone:1 },

          { name:'Bưu điện Trung tâm Sài Gòn', name_en:'Saigon Central Post Office',
            type:'Kiến trúc Pháp thuộc', type_en:'French colonial architecture',
            era:'1891', era_en:'1891',
            lat:10.7799, lng:106.6997,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/buu-dien-trung-tam',
            splats:'38.7M', captured:'04/2025', unesco:false, tone:2 },

          { name:'Địa đạo Củ Chi', name_en:'Củ Chi Tunnels',
            type:'Di tích quốc gia đặc biệt', type_en:'Special National Monument',
            era:'1948', era_en:'1948',
            lat:11.1417, lng:106.4644,
            viewer:'',
            splats:'—', captured:'Dự kiến 10/2026', captured_en:'Planned 10/2026', unesco:false, tone:3 }
        ]
      },
      {
        city: 'Tây Ninh', city_en: 'Tay Ninh',
        items: [
          { name:'Toà Thánh Cao Đài Tây Ninh', name_en:'Cao Đài Holy See',
            type:'Di tích kiến trúc nghệ thuật', type_en:'Architectural Monument',
            era:'1947', era_en:'1947',
            lat:11.3018, lng:106.1300,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/toa-thanh-tay-ninh',
            splats:'69.5M', captured:'07/2025', unesco:false, tone:0 }
        ]
      },
      {
        city: 'An Giang', city_en: 'An Giang',
        items: [
          { name:'Miếu Bà Chúa Xứ Núi Sam', name_en:'Bà Chúa Xứ Temple, Sam Mountain',
            type:'Di tích quốc gia', type_en:'National Monument',
            era:'1820', era_en:'1820',
            lat:10.6800, lng:105.0900,
            viewer:'https://viewer.xgrids.com/REPLACE_ME/mieu-ba-chua-xu',
            splats:'25.9M', captured:'07/2025', unesco:false, tone:1 }
        ]
      },
      {
        city: 'Cần Thơ', city_en: 'Can Tho',
        items: [
          { name:'Nhà cổ Bình Thuỷ', name_en:'Bình Thuỷ Ancient House',
            type:'Di tích kiến trúc nghệ thuật quốc gia', type_en:'National Architectural Monument',
            era:'1870', era_en:'1870',
            lat:10.0640, lng:105.7360,
            viewer:'',
            splats:'—', captured:'Dự kiến 12/2026', captured_en:'Planned 12/2026', unesco:false, tone:2 }
        ]
      }
    ]
  }
];

/* Bỏ dấu tiếng Việt — dùng cho ô tìm kiếm gõ không dấu vẫn ra kết quả. */
window.pshDeaccent = function (s) {
  return String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

/* Làm phẳng thành một mảng để đếm, lọc và cắm ghim. */
window.PSH_FLAT = (function () {
  var out = [], n = 0;
  window.PSH_HERITAGE.forEach(function (r) {
    r.cities.forEach(function (c) {
      c.items.forEach(function (it) {
        out.push(Object.assign({}, it, {
          region: r.region,
          region_en: r.region_en || r.region,
          city: c.city,
          city_en: c.city_en || c.city,
          id: 'psh-' + (n++),
          live: Boolean(it.viewer),
          /* Tìm kiếm khớp cả tiếng Việt lẫn tiếng Anh, có dấu hay không đều được. */
          search: window.pshDeaccent([
            it.name, it.name_en, c.city, c.city_en,
            r.region, r.region_en, it.type, it.type_en
          ].filter(Boolean).join(' ')).toLowerCase()
        }));
      });
    });
  });
  return out;
})();
