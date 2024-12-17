document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // ลบคลาส active ออกจากปุ่มทั้งหมด
            filters.forEach(f => f.classList.remove('active'));

            // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
            filter.classList.add('active');

            const category = filter.dataset.filter;

            items.forEach(item => {
                // ซ่อนทุก item ก่อน
                item.style.opacity = '0';

                // รอการเปลี่ยนแปลงก่อนซ่อนหรือแสดงรายการ
                setTimeout(() => {
                    if (category === 'all' || item.classList.contains(category)) {
                        item.style.display = 'block';

                        // แสดง item ด้วยการ fade in
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
});
