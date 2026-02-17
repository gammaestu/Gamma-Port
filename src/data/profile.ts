export type SocialLink = {
  label: string
  href: string
}

export type Skill = {
  name: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
}

export type SkillGroup = {
  title: string
  items: Skill[]
}

export type Experience = {
  company: string
  role: string
  type?: string
  location?: string
  start: string
  end: string
  bullets: string[]
  tech?: string[]
}

export type Project = {
  title: string
  description: string
  highlights: string[]
  stack: string[]
  links?: SocialLink[]
}

export const PROFILE = {
  name: 'Gamma Estu Mahardika',
  role: 'Software Engineer',
  location: 'Indramayu, Indonesia',
  photo: '/profile-gamma.jpg', // ganti dengan path foto kamu sendiri di public/
  tagline:
    'Mahasiswa Rekayasa Perangkat Lunak Politeknik Negeri Indramayu yang fokus pada pengembangan sistem berbasis web dan mobile.',
  about:
    'Saya adalah mahasiswa Politeknik Negeri Indramayu jurusan Rekayasa Perangkat Lunak yang memiliki ketertarikan dalam pengembangan sistem berbasis web dan mobile. Terbiasa bekerja dalam tim maupun secara mandiri, serta memiliki semangat untuk terus belajar teknologi baru. Dengan latar belakang akademik dan pengalaman proyek, saya siap berkontribusi dalam menciptakan solusi perangkat lunak yang efektif dan inovatif.',
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/6289541321609' },
    { label: 'Email', href: 'mailto:Gammaestu05@gmail.com' },
    { label: 'Instagram', href: 'https://instagram.com/Gammaestu_' },
  ] satisfies SocialLink[],
}

export const SKILLS: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS / Tailwind CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Responsive Web Design', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', level: 'Advanced' },
      { name: 'Laravel', level: 'Advanced' },
      { name: 'REST API Design', level: 'Intermediate' },
      { name: 'MySQL / Database Design', level: 'Intermediate' },
      { name: 'Authentication & Authorization', level: 'Intermediate' },
    ],
  },
  {
    title: 'Mobile & Lainnya',
    items: [
      { name: 'Konsep Mobile App (Signix)', level: 'Intermediate' },
      { name: 'Integrasi QR Code', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Advanced' },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Kerja Tim & Kolaborasi', level: 'Advanced' },
      { name: 'Komunikasi Teknis', level: 'Intermediate' },
      { name: 'Problem Solving', level: 'Intermediate' },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'Politeknik Negeri Indramayu',
    role: 'Tugas Besar 1 | Website Toko Online',
    type: 'Project • Semester 2',
    location: 'Indramayu',
    start: '2024',
    end: '2024',
    bullets: [
      'Membangun website toko online sebagai etalase produk dengan tampilan menarik dan terorganisir.',
      'Menampilkan detail produk (foto, deskripsi, ukuran, harga) tanpa proses transaksi langsung di website.',
      'Memposisikan website sebagai media promosi dan informasi produk bagi calon pembeli.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    company: 'Politeknik Negeri Indramayu',
    role: 'Proyek 1 | Signix: Sistem Pengesahan Dokumen (Website)',
    type: 'Project • Semester 3',
    location: 'Indramayu',
    start: '2024',
    end: '2024',
    bullets: [
      'Mengembangkan sistem pengesahan dokumen berbasis QR Code untuk dosen dan ormawa.',
      'Membuat mekanisme kode unik pada setiap dokumen untuk menandai status sah.',
      'Memudahkan proses validasi dokumen agar lebih cepat dan akurat melalui pemindaian QR Code.',
    ],
    tech: ['Laravel', 'MySQL', 'QR Code'],
  },
  {
    company: 'Politeknik Negeri Indramayu',
    role:
      'Proyek 2 | Pengembangan Sistem Pengesahan Dokumen Dengan Teknologi QR Code (Website & Mobile)',
    type: 'Project • Semester 4',
    location: 'Indramayu',
    start: '2025',
    end: '2025',
    bullets: [
      'Mengembangkan lanjutan sistem Signix ke platform mobile agar lebih mudah diakses.',
      'Menambahkan aktor kemahasiswaan selain dosen dan ormawa dalam alur administrasi.',
      'Mendesain ulang alur pengesahan supaya konsisten antara versi website dan mobile.',
    ],
    tech: ['Laravel', 'REST API', 'Mobile'],
  },
  {
    company: 'Politeknik Negeri Indramayu',
    role: 'Proyek 3 | UPA Kerja Sama Polindra',
    type: 'Project • Semester 5',
    location: 'Indramayu',
    start: '2025',
    end: '2025',
    bullets: [
      'Mengembangkan sistem UPA Kerja Sama sebagai platform informasi dan pengelolaan kerja sama institusi.',
      'Melibatkan aktor alumni dan mitra untuk memperkuat ekosistem kolaborasi Polindra.',
      'Merancang fitur pengelolaan data kerja sama dan jaringan alumni agar lebih terstruktur.',
    ],
    tech: ['Web App', 'REST API', 'Database'],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Website Toko Online',
    description:
      'Website etalase produk yang menampilkan daftar produk dengan foto, deskripsi, ukuran, dan harga untuk kebutuhan promosi.',
    highlights: [
      'Listing produk yang rapi dan mudah dipahami pengguna.',
      'Tampilan responsif sehingga nyaman diakses di berbagai ukuran layar.',
      'Fokus pada UI yang bersih sebagai media promosi produk.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Signix — Sistem Pengesahan Dokumen (Website)',
    description:
      'Sistem pengesahan dokumen berbasis QR Code untuk dosen dan ormawa di Polindra, agar proses administrasi lebih cepat dan terverifikasi.',
    highlights: [
      'Pembuatan QR Code unik untuk setiap dokumen sebagai tanda sah.',
      'Halaman validasi dokumen yang bisa diakses melalui pemindaian QR Code.',
      'Mengurangi proses manual dalam pengecekan keaslian dokumen.',
    ],
    stack: ['Laravel', 'MySQL', 'QR Code'],
  },
  {
    title:
      'Signix — Pengembangan Website & Mobile untuk Pengesahan Dokumen',
    description:
      'Pengembangan lanjutan Signix ke platform mobile dan perluasan aktor pengguna hingga kemahasiswaan untuk mendukung alur administrasi kampus.',
    highlights: [
      'Sinkronisasi data pengesahan antara aplikasi website dan mobile.',
      'Perancangan alur multi-aktor (dosen, ormawa, kemahasiswaan).',
      'Fokus pada kemudahan akses pengesahan dokumen dari perangkat mobile.',
    ],
    stack: ['Laravel', 'REST API', 'Mobile'],
  },
  {
    title: 'UPA Kerja Sama Polindra',
    description:
      'Sistem informasi UPA Kerja Sama Polindra untuk mengelola data kerja sama institusi, alumni, dan mitra eksternal.',
    highlights: [
      'Manajemen data kerja sama yang lebih terstruktur dan mudah diakses.',
      'Fitur untuk memperkuat jaringan alumni dan mitra kampus.',
      'Antarmuka web yang disesuaikan dengan kebutuhan admin dan stakeholder.',
    ],
    stack: ['Web App', 'REST API', 'Database'],
  },
]

