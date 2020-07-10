let all_Conversation;

let flat = true;

let temp = 0;

// Xử lý vòng lặp
while (temp < 5) {
    // Xử lý cho từng cuộc hội thoại
    for (let i of all_Conversation) {
        // Truy cập vào đoạn hội thoại
        i.click();
        console.log('- Click vào đoạn hội thoại thứ', i);

        // Kiểm tra số lượng tab, nếu khách mới thì sẽ là 1
        if (i.lastChild.lastChild.firstChild.firstChild.children.length == 2) {

            if (flat) {
                flat = false;
                continue;
            }

            console.log('- Vòng lặp kiểm tra Length', i.lastChild.lastChild.firstChild.firstChild.children.length);

            for (let brand of brands) {
                console.log('- Brand hiện tại:', i.lastChild.lastChild.firstElementChild.firstChild.firstChild.textContent);

                for (let tag of i.lastChild.lastChild.firstElementChild.firstChild.children) {
                    console.log('- Tag hiện tại:', tag.textContent);

                    if (tag.textContent == brand.name) {

                        console.log(tag.textContent, '==', brand.name)

                        // Click vào TV hiện tại của brand
                        TV[brand.current_TV].click();

                        console.log('- Chọn', TV[brand.current_TV].textContent);
                        console.log('- Click:', brand.name, 'Length:', i.lastChild.lastChild.firstChild.firstChild.children.length, 'Current:', brand.current_TV)

                        flat = false;

                        // Bỏ chọn Untagged
                        try {
                            Untagged.click();
                            console.log('- Bỏ chọn Untagged');
                        } catch {};

                        // Ấn chưa đọc
                        document.querySelectorAll('.chat-menu-bar>li')[4].click()
                        console.log('- Ấn chưa đọc')

                        // Tăng TV của brand lên 1
                        brand.current_TV += 1;

                        // Kiểm tra TV có vượt quá số lượng quy định
                        if (brand.current_TV == brand.max) {
                            brand.current_TV = 0;
                        }
                        break;
                    }
                }
            }
        }
    }

    // Tắt lọc tin nhắn chưa đọc
    document.querySelector('ul.sidebar-nav').childNodes[1].click();

    // Sleep
    temp++;
}
