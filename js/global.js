document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle untuk Mobile Responsive (Sidebar dari Kanan)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    const closeMenu = () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    };

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open', isOpen);

            // Animasi ikon hamburger menjadi 'X' (opsional)
            const icon = hamburger.querySelector('i');
            if (isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Tutup sidebar saat salah satu link navigasi diklik
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) closeMenu();
            });
        });
    }

    // Tutup sidebar saat klik di luar drawer atau hamburger (mis. backdrop)
    document.addEventListener('click', (e) => {
        if (!navLinks || !navLinks.classList.contains('active')) return;
        if (navLinks.contains(e.target) || (hamburger && hamburger.contains(e.target))) return;
        closeMenu();
    });

    // Dynamic Active Link pada Navbar
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            // Hapus class active dari semua
            menuItem.forEach(item => item.classList.remove('active'));
            // Tambahkan ke halaman saat ini
            menuItem[i].classList.add('active');
        }
    }
});