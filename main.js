function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    datetimeElement.textContent = formattedDateTime;
}

// Cập nhật thời gian mỗi giây
setInterval(updateDateTime, 1000);

// Khởi động cập nhật thời gian ban đầu
updateDateTime();


// Lấy thẻ input và button tìm kiếm
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Xử lý sự kiện khi người dùng nhấn nút tìm kiếm
searchButton.addEventListener('click', function () {
  performSearch();
});

// Xử lý sự kiện khi người dùng nhấn phím Enter trong ô tìm kiếm
searchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
      performSearch();
  }
});

// Hàm thực hiện tìm kiếm
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  // Thực hiện tìm kiếm dựa trên searchTerm ở đây
  // Ví dụ: chuyển hướng đến trang tìm kiếm hoặc hiển thị kết quả tìm kiếm trên trang này
  alert('Bạn đang tìm kiếm: ' + searchTerm);
}
