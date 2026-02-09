unction addNotice() {
    let text = document.getElementById("noticeText").value;
    let board = document.getElementById("noticeBoard");

    if (text.trim() === "") {
        alert("Please enter a notice");
        return;
    }

    if (board.innerText === "No notices yet") {
        board.innerHTML = "";
    }

    let notice = document.createElement("div");
    notice.className = "notice";
    notice.innerText = text;

    board.prepend(notice);
    document.getElementById("noticeText").value = "";
}