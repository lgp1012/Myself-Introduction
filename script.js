const imgLogo = document.querySelector(".logo img");
const btnSeemoreIntructionPage = document.getElementById("btn-seemore");
const btnNextImg = document.getElementById("btn-next-img");
const btnPrevImg = document.getElementById("btn-prev-img");
const detailJourney = {
    "nganhau": {
        title: "Trại Ngành ấu (2023)",
        imgURL: "./assets/images/nganhau.jpg",
        message: `Đây là hoạt động mở đầu cho con đường trở thành GLV-HT của mình.\n
        Lúc đó mình được mời tham gia trại ngành ấu của xứ đoàn mình dưới vai trò người đội trưởng của 1 nhóm.
        Sau 1 ngày cùng chơi cùng sinh hoạt với các em thiếu nhi trong đội, mình cảm thấy các em rất dễ thương và mình có mong muốn được giúp các em có thêm sân chơi giống như ngày hôm nay.
        Vì vậy lúc đó trong mình chợt có ý định sẽ tham gia vào tập thể GLV-HT của giáo xứ.`
    },
    "siloam": {
        title: "Trại Siloam I (2023)",
        imgURL: "./assets/images/siloam.jpg",
        message: ""
    },
    "vaodoi": {
        title: "Tuyên hứa Vào đời & Trao khăn Dự trưởng (2023)",
        imgURL: "./assets/images/tuyenhuavaodoi.png",
        message: ""
    },
    "thamgia-htc1": {
        title: "Tham gia khoá học Huynh Trưởng cấp 1 (2024)",
        imgURL: "./assets/images/htc1.jpg",
        message: ""
    },
    "samac-htc1": {
        title: "Tham gia Sa mạc huấn luyện Huynh Trưởng cấp 1 (2024)",
        imgURL: "./assets/images/smht.jpg",
        message: ""
    },
    "tuyenhua-htc1": {
        title: "Tuyên hứa Huynh Trưởng cấp 1 (2024)",
        imgURL: "./assets/images/thc1.jpg",
        message: ""
    },
    "thamgia-glvc1": {
        title: "Tham gia khoá học Giáo lý viên cấp 1 (2024)",
        imgURL: "./assets/images/hocglvc1.jpg",
        message: ""
    },
    "totnghiep-glvc1": {
        title: "Tốt nghiệp khoá học Giáo lý viên cấp 1 (2025)",
        imgURL: "./assets/images/glvc1.jpg",
        message: ""
    }
};

const imgMyself = ["myself1", "myself2", "myself3", "myself4", "myself5"];

const detailJourneyBox = document.querySelectorAll(".content-journey-box");
const btnCloseModal = document.getElementById("btn-close-modal");

const imgIntroduction = document.querySelector(".content-introduction-right img");
let indexImgIntroduction = 0;

btnNextImg.addEventListener("click", () => {
    indexImgIntroduction++;
    if (indexImgIntroduction >= imgMyself.length) {
        indexImgIntroduction = 0; // Quay lại ảnh đầu tiên
    }
    imgIntroduction.src = `./assets/images/${imgMyself[indexImgIntroduction]}.jpg`;
});

btnPrevImg.addEventListener("click", () => {
    indexImgIntroduction--;
    if (indexImgIntroduction < 0) {
        indexImgIntroduction = imgMyself.length - 1; // Đi tới ảnh cuối cùng
    }
    imgIntroduction.src = `./assets/images/${imgMyself[indexImgIntroduction]}.jpg`;
});

// Click vào logo để quay về trang giới thiệu
imgLogo.addEventListener("click", () => {
    window.location.href = "#page-introduction";
})

// Click vào nút "Theo dõi hành trình ..." để chuyển sang page journey
btnSeemoreIntructionPage.addEventListener("click", () => {
    window.location.href = "#page-journey";
})

detailJourneyBox.forEach((box) => {
    document.querySelector(`#${box.id} .btn-detail-journey`).addEventListener("click", () => {
        openModal(box.id);
    })
})

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