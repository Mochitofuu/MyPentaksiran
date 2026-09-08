// GANTIKAN DENGAN MAKLUMAT ANDA DARI LANGKAH 1
const SUPABASE_URL = "MASUKKAN_URL_SUPABASE_ANDA_DI_SINI";
const SUPABASE_ANON_KEY = "MASUKKAN_ANON_KEY_ANDA_DI_SINI";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const authForm = document.getElementById("authForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnAuth = document.getElementById("btnAuth");
const toggleAuthMode = document.getElementById("toggleAuthMode");
const toggleText = document.getElementById("toggleText");
const authAlert = document.getElementById("authAlert");

let isSignUp = false;

function showAlert(message, isError = true) {
  if (!authAlert) return;
  authAlert.classList.remove("hidden", "bg-red-50", "text-red-600", "bg-emerald-50", "text-emerald-600");
  authAlert.classList.add(isError ? "bg-red-50" : "bg-emerald-50", isError ? "text-red-600" : "text-emerald-600");
  authAlert.textContent = message;
}

if (toggleAuthMode) {
  toggleAuthMode.addEventListener("click", () => {
    isSignUp = !isSignUp;
    btnAuth.textContent = isSignUp ? "Daftar Akaun" : "Log Masuk";
    toggleText.textContent = isSignUp ? "Sudah mempunyai akaun?" : "Belum ada akaun?";
    toggleAuthMode.textContent = isSignUp ? "Log Masuk" : "Daftar Akaun";
    authAlert.classList.add("hidden");
  });
}

if (authForm) {
  authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    btnAuth.disabled = true;
    btnAuth.textContent = "Memproses...";

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        showAlert("Pendaftaran berjaya! Sila tukar ke mod Log Masuk.", false);
        isSignUp = false;
        btnAuth.textContent = "Log Masuk";
        toggleText.textContent = "Belum ada akaun?";
        toggleAuthMode.textContent = "Daftar Akaun";
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.href = "dashboard.html";
      }
    } catch (err) {
      showAlert(err.message || "Ralat berlaku. Sila cuba lagi.");
    } finally {
      btnAuth.disabled = false;
      if (!isSignUp) btnAuth.textContent = "Log Masuk";
    }
  });
}
