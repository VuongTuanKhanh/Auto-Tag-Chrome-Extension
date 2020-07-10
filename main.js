// Khai báo Time Range
const limit = 1500;

// Khai báo một brand Object
function _brand(name, max = 5) {
    this.name = name;
    this.current_TV = 0;
    this.max = max;
}
console.log('- Đã tạo Constructor')

// Biến lưu giữ các Button
let buttons;
console.log('- Đã khai báo biến lưu trữ các nút');

// Khai báo danh sách TV
let TV = [];
console.log('- Đã khai báo danh sách TV');

// Tạo nút Untagged
let Untagged;
console.log('- Đã tạo nút Untagged');

// Tạo danh sách các brand hiện tại
let brands = [
    brand_1 = new _brand('Brand 1'),
    brand_2 = new _brand('Brand 2'),
]
console.log('- Đã tạo Brand List')

// Hàm Async
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Chọn button tin nhắn
async function Click_Button_Tin_Nhan() {
    // await sleep(limit);
    document.querySelector('ul.sidebar-nav').childNodes[3].click();
    console.log('- Chọn Button Tin nhắn');
}

// Click vào đoạn hội thoại đầu tiên để lấy danh sách các button
async function Chon_Hoi_Thoai_Dau_Tien() {
    // await sleep(limit);
    document.getElementsByClassName('conversation-list-item')[0].click()
    console.log('- Chọn đoạn hội thoại đầu tiên để lấy danh sách các button');
}

// Lấy toàn bộ button
async function Lay_Cac_Button() {
    // await sleep(limit);
    buttons = document.getElementsByClassName('btn-tag-item');
    console.log('- Đã lấy các button', buttons);
}

// Đẩy các TV vào danh sách và tạo nút Untagged
async function Them_TV_Vao_Danh_Sach() {
    // await sleep(limit);
    for (const i in buttons) {
        // Kiểm tra tag có là TV
        try {
            if (buttons[i].textContent.split(' ')[0] == 'TV') {
                TV.push(buttons[i]);
                console.log(' + Đã đẩy', buttons[i].textContent);
            }

            // Tạo nút Untagged
            if (buttons[i].textContent == 'Untagged') {
                Untagged = buttons[i];
                console.log(' + Đã tạo nút Untagged');
            }
        } catch {}
    }
    console.log('- Untagged Button:', Untagged);
}

// Lọc thẻ
async function Loc_The() {
    // await sleep(limit);
    document.getElementsByClassName('btn-show-multi-filter-tag set_font_family')[0].click()
    console.log('- Đã Click Lọc thẻ');
}

// Lọc thẻ hội thoại
async function Loc_The_Hoi_Thoai() {
    // await sleep(limit);
    document.getElementsByClassName('ant-dropdown-menu-submenu-title')[0].click()
    console.log('- Đã Click lọc hội thoại');
}

// Lọc thẻ Untagged
async function Loc_The_Untagged() {
    // await sleep(limit);
    document.getElementsByClassName('item-tag-conv')[10].click()
    console.log('- Đã lọc thẻ Untagged');
}

// Xác nhận thẻ
async function Xac_Nhan_The() {
    // await sleep(limit);
    document.getElementsByClassName('btn-filter-tags')[1].click()
    console.log('- Đã Click OK');
}

// Lọc tin nhắn chưa đọc
async function Loc_Tin_Nhan_Chua_Doc() {
    // await sleep(limit);
    document.querySelector('ul.sidebar-nav').childNodes[1].click();
    console.log('- Đã lọc tin nhắn chưa đọc');
}

// Truy cập tất cả cuộc hội thoại
function _access_All_Conversations(class_Name) {
    let all_Conversation = document.getElementsByClassName(class_Name);
    return all_Conversation;
}

async function main() {
    // Click vào Button tin nhắn
    Click_Button_Tin_Nhan();
    await sleep(limit);

    // Chọn hội thoại đầu tiên để lấy danh sách Button
    Chon_Hoi_Thoai_Dau_Tien();
    await sleep(limit);

    // Lấy ra danh sách các Button
    Lay_Cac_Button();
    await sleep(limit);

    // Thêm các TV có trong danh sách các Button và tạo biến Untagged
    Them_TV_Vao_Danh_Sach();
    await sleep(limit);

    // Lọc thẻ
    Loc_The();
    await sleep(limit);

    // Lọc thẻ hội thoại
    Loc_The_Hoi_Thoai();
    await sleep(limit);

    // Chọn lọc thẻ Untagged
    Loc_The_Untagged();
    await sleep(limit);

    // Click OK
    Xac_Nhan_The();
    await sleep(limit);

    // Biến cờ
    let flat = true;

    // Thiết lập Interval
    let app = setInterval(async function () {
        console.log('Vòng lặp');

        await sleep(limit);
        Loc_Tin_Nhan_Chua_Doc();

        // Biến lưu trữ giá trị tất cả các cuộc hội thoại đã được load
        await sleep(limit);
        let all_Conversation = _access_All_Conversations('conversation-list-item');
        console.log('- Đã lấy danh sách hội thoại');

        // Nếu danh sách tin nhắn không rỗng, tiến hành xử lý
        if ((await all_Conversation).length > 0) {

            // Duyệt từng cuộc hội thoại
            for (let i of all_Conversation) {
                // Truy cập vào đoạn hội thoại
                await sleep(limit);
                i.click();
                console.log('- Click vào đoạn hội thoại thứ', i);

                await sleep(limit);
                // Kiểm tra số lượng tab, nếu khách mới thì sẽ là 2 ( Brand + Untagged )
                if (i.lastChild.lastChild.firstChild.firstChild.children.length == 2) {

                    if (flat) {
                        flat = false;
                        continue;
                    }

                    console.log('- Vòng lặp kiểm tra Length', i.lastChild.lastChild.firstChild.firstChild.children.length);

                    for (let brand of brands) {
                        await sleep(limit);
                        console.log('- Brand hiện tại:', brand.name);

                        for (let tag of i.lastChild.lastChild.firstElementChild.firstChild.children) {
                            await sleep(limit);
                            console.log('- Tag hiện tại:', tag.textContent);

                            if (tag.textContent == brand.name) {

                                console.log(tag.textContent, '==', brand.name)

                                // Click vào TV hiện tại của brand
                                await sleep(limit);
                                TV[brand.current_TV].click();

                                console.log('- Chọn', TV[brand.current_TV].textContent);
                                console.log('- Click:', brand.name, 'Length:', i.lastChild.lastChild.firstChild.firstChild.children.length, 'Current:', brand.current_TV)

                                flat = false;

                                // Bỏ chọn Untagged
                                await sleep(limit);
                                Untagged.click();
                                console.log('- Bỏ chọn Untagged');

                                // Ấn chưa đọc
                                await sleep(limit);
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
        } else {
            console.log('- Chưa có cuộc hội thoại nào');
        }

        // Tạm dừng app
        clearInterval(app);

    }, 3000);
}

main();