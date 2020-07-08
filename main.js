// Truy cập từng cuộc hội thoại
function _access_All_Conversations(class_Name) {
    let all_Conversation = document.getElementsByClassName(class_Name);
    return all_Conversation;
}

// Chọn button tin nhắn
document.querySelector('ul.sidebar-nav').childNodes[3].click();

// Xử lý vòng lặp
while(true) {
    // Bật lọc tin nhắn chưa đọc
    document.querySelector('ul.sidebar-nav').childNodes[1].click();

    // Biến lưu trữ giá trị tất cả các cuộc hội thoại đã được load
    let all_Conversation = _access_All_Conversations('conversation-list-item');

    // Xử lý cho từng cuộc hội thoại
    for(i of all_Conversation) {
        // Click vào đối tượng
        i.click();
    }

    // Tắt lọc tin nhắn chưa đọc
    document.querySelector('ul.sidebar-nav').childNodes[1].click();

    // Dừng vòng lặp
    break;
}