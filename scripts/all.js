document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const wrapper = document.querySelector(".wrapper");
  const sidebar = document.querySelector(".main-sidebar");

  sidebarToggle.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.classList.toggle("sidebar-collapse");
    wrapper.classList.toggle("sidebar-collapse");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("loginButton");
  setTimeout(function () {
    loginButton.classList.add("show");
  }, 500); // 延遲500毫秒後顯示按鈕
});

$(document).ready(function () {
  $('[data-widget="pushmenu"]').PushMenu();
});
document.addEventListener("DOMContentLoaded", function () {
  // 獲取所有的通知項目
  const notificationItems = document.querySelectorAll(".notification-item");

  // 初始化時檢查本地存儲中的已讀狀態
  notificationItems.forEach((item) => {
    const notificationText = item.textContent.trim();
    if (localStorage.getItem("read-" + notificationText)) {
      item.classList.add("read");
    }

    // 為每個通知項目添加點擊事件
    item.addEventListener("click", function () {
      // 將該項目標記為已讀
      this.classList.add("read");

      // 保存到本地存儲
      localStorage.setItem("read-" + notificationText, "true");

      // 這裡可以添加代碼來通知伺服器該通知已讀
      // markAsReadOnServer(this); // 假設有一個函數用來通知伺服器已讀狀態
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const notificationDropdown = document.getElementById("notificationDropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const notificationBadge = document.getElementById("notificationBadge");

  // 有新通知時顯示紅點
  function checkNewNotifications() {
    const hasNewNotifications = true; // 模擬有新消息，實際應根據後端狀態來設置
    if (hasNewNotifications) {
      notificationBadge.style.display = "block";
    } else {
      notificationBadge.style.display = "none";
    }
  }

  // 當點擊鈴鐺時，顯示或隱藏通知
  notificationDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
      setTimeout(() => (dropdownMenu.style.display = "none"), 300); // 讓transition生效
    } else {
      dropdownMenu.style.display = "block";
      setTimeout(() => dropdownMenu.classList.add("show"), 10); // 延遲以觸發CSS過渡
      notificationBadge.style.display = "none"; // 點擊後隱藏紅點
    }
  });

  // 當點擊頁面其他部分時，隱藏通知
  document.addEventListener("click", function (event) {
    if (
      !notificationDropdown.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
      setTimeout(() => (dropdownMenu.style.display = "none"), 300);
    }
  });

  checkNewNotifications(); // 初始化檢查通知
});
