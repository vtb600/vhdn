/**
 * RELATED POSTS COMPONENT
 * ------------------------------------------------------
 * Cách dùng trong bất kỳ trang HTML nào:
 *
 * 1. Chèn 1 div rỗng tại vị trí muốn hiển thị:
 *    <div id="related-posts-root"></div>
 *
 * 2. Chèn script này trước thẻ </body>:
 *    <script src="https://vtb600.github.io/vhdn/shared/related-posts.js"></script>
 *
 * 3. Muốn thêm/sửa/xoá bài viết -> chỉ cần sửa mảng RELATED_POSTS bên dưới,
 *    KHÔNG cần sửa từng file html.
 * ------------------------------------------------------
 */

const RELATED_POSTS = [
  {
    url: "https://vtb600.github.io/vhdn/soket2507/index.html",
    thumb: "https://raw.githubusercontent.com/vtb600/vhdn/main/soket2507/thumb.jpeg",
    alt: "Hội nghị sơ kết công tác Đảng, công tác kinh doanh 6 tháng đầu năm 2026",
    date: "Tháng 7, 2026",
    title: "HỘI NGHỊ SƠ KẾT 6 THÁNG ĐẦU NĂM VÀ TRIỂN KHAI NHIỆM VỤ 6 THÁNG CUỐI NĂM 2026"
  },
  {
    url: "https://vtb600.github.io/vhdn/sangkien0207/index.html",
    thumb: "https://raw.githubusercontent.com/vtb600/vhdn/main/sangkien0207/bkg.png",
    alt: "Phiên họp Hội đồng sáng kiến 6 tháng đầu năm 2026",
    date: "Tháng 7, 2026",
    title: "HỘI ĐỒNG SÁNG KIẾN CHI NHÁNH - PHIÊN HỌP 6 THÁNG ĐẦU NĂM 2026"
  },
  {
    url: "https://vtb600.github.io/vhdn/hoithao1306/index.html",
    thumb: "https://raw.githubusercontent.com/vtb600/vhdn/main/hoithao1306/khaimac.jpg",
    alt: "VietinBank Bình Thuận tại vòng loại Hội thao NHNN khu vực 10",
    date: "Tháng 6, 2026",
    title: "VIETINBANK BÌNH THUẬN ĐẠT THÀNH TÍCH ẤN TƯỢNG TẠI VÒNG LOẠI HỘI THAO NHNN KV 10"
  },
  {
    url: "https://vtb600.github.io/vhdn/thieunhi0106/index.html",
    thumb: "https://raw.githubusercontent.com/vtb600/vhdn/main/thieunhi0106/sankhau.jpg",
    alt: "Ngày Quốc tế Thiếu nhi 1/6",
    date: "Tháng 6, 2026",
    title: "VIETINBANK - GẮN KẾT YÊU THƯƠNG - NGÀY QUỐC TẾ THIẾU NHI 1/6"
  },
  {
    url: "https://vtb600.github.io/vhdn/bantin0526/index.html",
    thumb: "https://raw.githubusercontent.com/vtb600/vhdn/main/bantin0526/chaybo.jpg",
    alt: "Bản tin VHDN tháng 5",
    date: "Tháng 5, 2026",
    title: "BẢN TIN VHDN CN BÌNH THUẬN THÁNG 5/2026"
  }
];

(function renderRelatedPosts() {
  const mount = document.getElementById("related-posts-root");
  if (!mount) {
    console.warn('[related-posts.js] Không tìm thấy <div id="related-posts-root"></div> trên trang này.');
    return;
  }

  // Nếu thẻ <script> có data-skip-css="true" -> trang đã tự thiết kế CSS riêng,
  // không chèn CSS mặc định của component nữa (tránh đè/lệch layout).
  const skipCSS = document.currentScript &&
    document.currentScript.dataset.skipCss === "true";

  // Inject CSS một lần (chỉ khi trang chưa có sẵn style riêng và chưa từng chèn)
  if (!skipCSS && !document.getElementById("related-posts-style")) {
    const style = document.createElement("style");
    style.id = "related-posts-style";
    style.textContent = `
      .related-posts {
        max-width: 1100px;
        margin: 40px auto;
        padding: 0 16px;
        box-sizing: border-box;
      }
      .related-posts-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .related-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
      }
      .related-card {
        display: block;
        text-decoration: none;
        color: inherit;
        border-radius: 12px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .related-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.14);
      }
      .related-card-thumb {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        display: block;
        background: #eee;
      }
      .related-card-body { padding: 12px 14px 16px; }
      .related-card-date {
        font-size: 12px;
        color: #888;
        margin-bottom: 6px;
      }
      .related-card-title {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }

  const cardsHTML = RELATED_POSTS.map(post => `
    <a href="${post.url}" class="related-card">
      <img src="${post.thumb}" alt="${post.alt}" class="related-card-thumb" loading="lazy" />
      <div class="related-card-body">
        <div class="related-card-date">${post.date}</div>
        <div class="related-card-title">${post.title}</div>
      </div>
    </a>
  `).join("");

  mount.innerHTML = `
    <section class="related-posts">
      <h2 class="related-posts-title">📰 Bài viết khác</h2>
      <div class="related-grid">
        ${cardsHTML}
      </div>
    </section>
  `;
})();
