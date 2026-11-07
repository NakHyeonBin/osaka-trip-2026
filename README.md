# Osaka Trip Dashboard 2026

Static, mobile-first itinerary for 12–14 November 2026. GitHub Pages serves the site directly; there is no build step, API key, or application server.

## Files

- `index.html` — Korean page shell and external Leaflet stylesheet/script.
- `styles.css` — responsive layout, cards, day themes, and mobile styles.
- `app.js` — itinerary data, route maps, map/list selection, map links, and local checklist persistence.

## Local preview

Open `index.html` directly or serve the repository root with any static HTTP server. The map uses Leaflet and standard OpenStreetMap tiles; when the map library or tiles are unavailable, Google Maps links remain available from every stop.

The map shows a small number of area anchors and connects them with a dashed sequence line. The line is not a road or rail route. Per-leg links open Google Maps walking, transit, or driving directions. Naver Map and Kakao Map search links were removed after checking Osaka searches: both kept the map centered in Korea and returned no matching Osaka business results in the tested browser.

The arrival pickup and departure ride with INNN are marked as booked by the traveler. The first pickup is listed at 18:00, while the flight is scheduled to land at 18:30; confirm the actual airport meeting time and wait policy with INNN. The first-night yakiniku reservation is at 20:45; the restaurant name and address are not present in the itinerary source, so the page asks the traveler to check the reservation confirmation.

The flight summary uses the published timetable matching the supplied Kansai arrival/departure times: Aero K RF318, CJJ 16:40 → KIX 18:30 on Nov 12; Aero K RF317, KIX 19:20 → CJJ 21:05 on Nov 14. The traveler’s ticket confirmation takes precedence if its times differ. Flight timing references: [CJJ–KIX schedule](https://www.directflights.com/CJJ-KIX) and [RF317 schedule](https://www.flight.info/RF317).

## Sources checked for this itinerary

- [Japan Tourism Agency tax-free refund method](https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00019.html)
- [Hankyu Umeda Guest Coupon and tax-free services](https://website.hankyu-dept.co.jp/fl/english/honten/service/)
- [Hankyu Umeda 3F floor guide](https://website.hankyu-dept.co.jp/fl/english/honten/store/floor3f.html)
- [Umeda Sky Building hours, admission, and ticket information](https://www.skybldg.co.jp/observatory/information/)
- [Rikuro Ojisan Namba Main Store](https://www.rikuro.co.jp/shoplist/134.html)
- [Ichiran Osaka store hours](https://en.ichiran.com/shop/hourstable.html?lang=en)
- [HUMAN MADE at Shinsaibashi PARCO](https://shinsaibashi.parco.jp/shop/detail/?cd=028077)
- [Stüssy Osaka Chapter](https://kr.stussy.com/blogs/chapters/stussy-osaka)
- [LINKS UMEDA GU](https://links-umeda.jp/shop/gu%E3%80%80links-umeda/)
- [Grand Front Osaka shop directory](https://www.gfo-sc.jp/shop/list/)
- [Standard Products at EST Umeda](https://www.est-sc.com/shop_guide/index.php?c=shop_guide_view&pk=16165531160096)
- [Onitsuka Tiger at NU Chayamachi](https://nu-chayamachi.com/shop/onitsukatiger)
- [Okonomiyaki Mizuno](https://www.mizuno-osaka.com/index2.html)
- [Sushi Bar enishi Namba, Korean TableCheck](https://www.tablecheck.com/ko/sushi-bal-enishi)
- [Tempura Makino Namba Sennichimae, official LINE account](https://page.line.me/501ogpxn)

Schedules are estimates. Recheck store notices, travel time, queue length, inventory, reservations, and airport instructions shortly before the trip.
