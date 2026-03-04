const fs = require('fs');
const path = require('path');
const localesPath = path.join(process.cwd(), 'src', 'i18n', 'locales');

const en = JSON.parse(fs.readFileSync(path.join(localesPath, 'en.json')));
const ru = JSON.parse(fs.readFileSync(path.join(localesPath, 'ru.json')));
const uz = JSON.parse(fs.readFileSync(path.join(localesPath, 'uz.json')));

const auth = {
  auth: {
    welcome: ["Welcome Back", "С возвращением", "Xush kelibsiz"],
    createTitle: ["Create Account", "Создать аккаунт", "Hisob yaratish"],
    descLogin: ["Sign in to access the demo", "Войдите, чтобы получить доступ к демо", "Demoga kirish uchun kiring"],
    descReg: ["Register to try the free demo", "Зарегистрируйтесь, чтобы попробовать бесплатную демоверсию", "Bepul demoni sinab ko'rish uchun ro'yxatdan o'ting"],
    emailLabel: ["Email", "Email", "Email"],
    emailPlaceholder: ["you@example.com", "вы@example.com", "siz@example.com"],
    passLabel: ["Password", "Пароль", "Parol"],
    passPlaceholder: ["Min. 6 characters", "Мин. 6 символов", "Kaminida 6 ta belgi"],
    processing: ["Processing...", "Обработка...", "Jarayonda..."],
    btnSign: ["Sign In", "Войти", "Kirish"],
    btnCreate: ["Create Account", "Создать аккаунт", "Hisob yaratish"],
    noAccount: ["Don't have an account?", "Нет аккаунта?", "Hisobingiz yo'qmi?"],
    hasAccount: ["Already have an account?", "Уже есть аккаунт?", "Allaqachon hisobingiz bormi?"],
    btnReg: ["Register", "Регистрация", "Ro'yxatdan o'tish"],
    errNoAccount: ["No account found with this email. Please register first.", "Аккаунт с таким email не найден. Пожалуйста, сначала зарегистрируйтесь.", "Bu elektron pochta bilan hisob topilmadi. Avval ro'yxatdan o'ting."],
    errPass: ["Incorrect password. Please try again.", "Неверный пароль. Попробуйте снова.", "Noto'g'ri parol. Qaytadan urinib ko'ring."],
    succLogin: ["Signed in successfully! You can now access the demo.", "Успешный вход! Теперь вы можете зайти в демо.", "Muvaffaqiyatli kirdingiz! Endi demoga kirishingiz mumkin."],
    errExists: ["An account with this email already exists. Try signing in.", "Аккаунт с таким email уже существует. Попробуйте войти.", "Bu elektron pochta manzili bilan hisob allaqachon mavjud. Kirishga harakat qiling."],
    succReg: ["Account created! You can now access the demo.", "Аккаунт создан! Теперь вы можете зайти в демо.", "Hisob yaratildi! Endi demoga kirishingiz mumkin."]
  }
};

for (const [key, val] of Object.entries(auth)) {
  en[key] = {};
  ru[key] = {};
  uz[key] = {};
  for (const [k, v] of Object.entries(val)) {
    en[key][k] = v[0] || v[0];
    ru[key][k] = v[1] || v[0];
    uz[key][k] = v[2] || v[1] || v[0];
  }
}

fs.writeFileSync(path.join(localesPath, 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(localesPath, 'ru.json'), JSON.stringify(ru, null, 2));
fs.writeFileSync(path.join(localesPath, 'uz.json'), JSON.stringify(uz, null, 2));

console.log('JSONs updated 5: Auth modal');
