const imgLogo = document.querySelector(".logo img");
const btnSeemoreIntructionPage = document.getElementById("btn-seemore");
const btnNextImg = document.getElementById("btn-next-img");
const btnPrevImg = document.getElementById("btn-prev-img");
const detailJourney = {
  nganhau: {
    title: "Trại Ngành ấu (2023)",
    imgURL: "./assets/images/nganhau.jpg",
    message: `Đây là hoạt động mở đầu cho con đường trở thành GLV-HT của mình.\n
        Lúc đó mình được mời tham gia trại ngành ấu của xứ đoàn mình dưới vai trò người đội trưởng của 1 nhóm.
        Sau 1 ngày cùng chơi cùng sinh hoạt với các em thiếu nhi trong đội, mình cảm thấy các em rất dễ thương và mình có mong muốn được giúp các em có thêm sân chơi giống như ngày hôm nay.
        Vì vậy lúc đó trong mình chợt có ý định sẽ tham gia vào tập thể GLV-HT của giáo xứ.`,
  },
  siloam: {
    title: "Trại Siloam I (2023)",
    imgURL: "./assets/images/siloam.jpg",
    message: "",
  },
  vaodoi: {
    title: "Tuyên hứa Vào đời & Trao khăn Dự trưởng (2023)",
    imgURL: "./assets/images/tuyenhuavaodoi.png",
    message: "",
  },
  "thamgia-htc1": {
    title: "Tham gia khoá học Huynh Trưởng cấp 1 (2024)",
    imgURL: "./assets/images/htc1.jpg",
    message: "",
  },
  "samac-htc1": {
    title: "Tham gia Sa mạc huấn luyện Huynh Trưởng cấp 1 (2024)",
    imgURL: "./assets/images/smht.jpg",
    message: "",
  },
  "tuyenhua-htc1": {
    title: "Tuyên hứa Huynh Trưởng cấp 1 (2024)",
    imgURL: "./assets/images/thc1.jpg",
    message: "",
  },
  "thamgia-glvc1": {
    title: "Tham gia khoá học Giáo lý viên cấp 1 (2024)",
    imgURL: "./assets/images/hocglvc1.jpg",
    message: "",
  },
  "totnghiep-glvc1": {
    title: "Tốt nghiệp khoá học Giáo lý viên cấp 1 (2025)",
    imgURL: "./assets/images/glvc1.jpg",
    message: "",
  },
};

const imgMyself = ["myself1", "myself2", "myself3", "myself4", "myself5"];

const detailJourneyBox = document.querySelectorAll(".content-journey-box");
const btnCloseModal = document.getElementById("btn-close-modal");

const imgIntroduction = document.querySelector(
  ".content-introduction-right img",
);
let indexImgIntroduction = 0;

btnNextImg.addEventListener("click", () => {
  indexImgIntroduction++;
  if (indexImgIntroduction >= imgMyself.length) {
    indexImgIntroduction = 0;
  }
  imgIntroduction.src = `./assets/images/${imgMyself[indexImgIntroduction]}.jpg`;
});

btnPrevImg.addEventListener("click", () => {
  indexImgIntroduction--;
  if (indexImgIntroduction < 0) {
    indexImgIntroduction = imgMyself.length - 1;
  }
  imgIntroduction.src = `./assets/images/${imgMyself[indexImgIntroduction]}.jpg`;
});

// Click vào logo để quay về trang giới thiệu
imgLogo.addEventListener("click", () => {
  window.location.href = "#page-introduction";
});

// Click vào nút "Theo dõi hành trình ..." để chuyển sang page journey
btnSeemoreIntructionPage.addEventListener("click", () => {
  window.location.href = "#page-journey";
});

detailJourneyBox.forEach((box) => {
  document
    .querySelector(`#${box.id} .btn-detail-journey`)
    .addEventListener("click", () => {
      openModal(box.id);
    });
});

function openModal(id) {
  const detail = detailJourney[id];

  const modal = document.getElementById("modal-overplay");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalMessage = document.getElementById("modal-message");

  modalTitle.textContent = detail.title;
  modalImg.src = detail.imgURL;
  modalMessage.textContent = detail.message;

  modal.style.display = "flex";
}

btnCloseModal.addEventListener("click", () => {
  const modal = document.getElementById("modal-overplay");
  modal.style.display = "none";
});

// Đóng modal khi click ra ngoài khung nội dung (click vào overplay)
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal-overplay");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Validate Contact form
const btnSubmitFormContact = document.getElementById("btn-submit-form-contact");

// Thông báo lỗi riêng cho từng ô
const errorMessages = {
  name: "⚠ Vui lòng nhập họ & tên",
  email: "⚠ Email không hợp lệ (vd: example@gmail.com)",
  message: "⚠ Nội dung cần ít nhất 10 ký tự",
};

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  return {
    name: name.trim() !== "",
    email: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email),
    message: message.trim() !== "" && message.trim().length >= 10,
  };
}

function isValidForm(form) {
  return Object.values(form).every((value) => value === true);
}

// Hiện thông báo lỗi ngay dưới ô input
function showError(input, message) {
  // Xoá thông báo cũ nếu có
  clearError(input);

  input.style.border = "2px solid red";

  const errorEl = document.createElement("small");
  errorEl.classList.add("input-error-msg");
  errorEl.textContent = message;

  // Chèn thẻ small ngay sau ô input
  input.after(errorEl);
}

// Xoá thông báo lỗi
function clearError(input) {
  input.style.border = "";
  const next = input.nextElementSibling;
  if (next?.classList.contains("input-error-msg")) {
    next.remove();
  }
}

function clearTextInput(input) {
  input.value = "";
}

btnSubmitFormContact.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".form-contact input");
  const form = validateForm();

  if (!isValidForm(form)) {
    inputs.forEach((input) => {
      const field = input.id;
      if (!form[field]) {
        showError(input, errorMessages[field]);
      } else {
        clearError(input);
      }
    });
  } else {
    // Xoá hết lỗi khi hợp lệ
    inputs.forEach((input) => {
      clearError(input);
      clearTextInput(input);
    });

    alert("Cảm ơn bạn đã gửi lời nhắn!");
  }
});

// Tắt viền đỏ và thông báo lỗi khi người dùng bắt đầu nhập
const inputsConfig = document.querySelectorAll(".form-contact input");
inputsConfig.forEach((input) => {
  input.addEventListener("input", () => {
    clearError(input);
  });
});
