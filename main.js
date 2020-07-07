// Truy cập từng cuộc hội thoại
function _access_All_Conversations(class_Name) {
    let all_Conversation = document.getElementsByClassName(class_Name);
    return all_Conversation;
}

// Xử lý vòng lặp
while(true) {
    // Biến lưu trữ giá trị tất cả các cuộc hội thoại đã được load
    let all_Conversation = _access_All_Conversations('conversation-list-item');

    // Xử lý cho từng cuộc hội thoại
    for(i of all_Conversation) {
        // In đối tượng ra màn hình Console
        console.log(i);
        // Click vào đối tượng
        i.click();
    }

    // Dừng vòng lặp
    break;
}