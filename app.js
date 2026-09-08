// Pusat Pengurusan Global Tema & Bahasa MyPentaksiran

// 1. Terapkan Tema Secepat Mungkin (Dark / Light)
(function initTheme() {
  const isDark = localStorage.getItem("app_theme") === "dark";
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

// Kamus Bahasa Global
window.AppI18n = {
  ms: {
    backDashboard: "← Papan Pemuka",
    backClass: "← Kembali ke Kelas",
    backStudents: "← Senarai Murid",
    dskpBank: "Bank DSKP",
    profileTitle: "Profil Guru & Akaun",
    signOut: "Log Keluar",
    menuMain: "Menu Utama",
    tapMenu: "Tekan untuk menu ☰",
    systemOptions: "Pilihan Sistem",
    langLabel: "Bahasa / Language",
    darkLabel: "Mod Gelap (Dark Mode)",
    save: "Simpan",
    cancel: "Batal",
    delete: "Padam",
    edit: "Ubah",
    report: "Laporan",
    saving: "Menyimpan...",
    saved: "Tersimpan ✓",
    printPdf: "Cetak / Simpan PDF",
    exportCsv: "📥 Eksport Excel (CSV)",
    evidence: "Evidens",
    addStudent: "+ Tambah Murid",
    addClass: "+ Tambah Kelas",
    addDskp: "+ Tambah DSKP",
    pbdBtn: "📝 PBD",
    activityBtn: "⭐ Sahsiah & Tugasan",
    confirmDelete: "Adakah anda pasti mahu memadam rekod ini?"
  },
  en: {
    backDashboard: "← Dashboard",
    backClass: "← Back to Class",
    backStudents: "← Student List",
    dskpBank: "DSKP Bank",
    profileTitle: "Teacher Profile & Account",
    signOut: "Sign Out",
    menuMain: "Main Menu",
    tapMenu: "Tap for menu ☰",
    systemOptions: "System Settings",
    langLabel: "Language",
    darkLabel: "Dark Mode",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    report: "Report",
    saving: "Saving...",
    saved: "Saved ✓",
    printPdf: "Print / Save PDF",
    exportCsv: "📥 Export Excel (CSV)",
    evidence: "Evidence",
    addStudent: "+ Add Student",
    addClass: "+ Add Class",
    addDskp: "+ Add DSKP",
    pbdBtn: "📝 PBD",
    activityBtn: "⭐ Behavior & Homework",
    confirmDelete: "Are you sure you want to delete this record?"
  }
};

window.getLang = function() {
  return localStorage.getItem("app_lang") || "ms";
};

window.toggleTheme = function() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("app_theme", isDark ? "dark" : "light");
  return isDark;
};

window.toggleLanguage = function() {
  const current = window.getLang();
  const next = current === "ms" ? "en" : "ms";
  localStorage.setItem("app_lang", next);
  location.reload();
};
