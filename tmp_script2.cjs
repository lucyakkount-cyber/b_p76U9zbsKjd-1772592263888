const fs = require('fs');
const path = require('path');
const localesPath = path.join(process.cwd(), 'src', 'i18n', 'locales');

const en = JSON.parse(fs.readFileSync(path.join(localesPath, 'en.json')));
const ru = JSON.parse(fs.readFileSync(path.join(localesPath, 'ru.json')));
const uz = JSON.parse(fs.readFileSync(path.join(localesPath, 'uz.json')));

const additions = {
  redirect: {
    status: ["REDIRECTING", "ПЕРЕНАПРАВЛЕНИЕ", "QAYTA YO'NALTIRILMOQDA"],
    heading: ["Taking you to Quantum VRM", "Переходим в Quantum VRM", "Quantum VRM ga yo'naltirilmoqdasiz"],
    desc: ["You will be redirected shortly...", "Вскоре вы будете перенаправлены...", "Siz birozdan so'ng qayta yo'naltirilasiz..."]
  },
  demo: {
    boot1: ["3D Avatar loaded", "3D-аватар загружен", "3D Avatar yuklandi"],
    boot2: ["AI engine connected", "ИИ-движок подключен", "AI dvigateli ulandi"],
    boot3: ["Expressions engine ready", "Движок мимики готов", "Yuz ifodalari dvigateli tayyor"],
    boot4: ["Voice pipeline active", "Голосовой канал активен", "Ovozli aloqa faol"],
    bootLabel: ["AVATAR", "АВАТАР", "AVATAR"]
  },
  pricing: {
    stdName: ["Standard", "Стандарт", "Standart"],
    proName: ["Pro", "Профи", "Pro"],
    plusName: ["Plus", "Плюс", "Plus"]
  }
};

for (const [key, val] of Object.entries(additions)) {
  if (!en[key]) en[key] = {};
  if (!ru[key]) ru[key] = {};
  if (!uz[key]) uz[key] = {};
  for (const [k, v] of Object.entries(val)) {
    en[key][k] = v[0] || v[0];
    ru[key][k] = v[1] || v[0];
    uz[key][k] = v[2] || v[1] || v[0];
  }
}

fs.writeFileSync(path.join(localesPath, 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(localesPath, 'ru.json'), JSON.stringify(ru, null, 2));
fs.writeFileSync(path.join(localesPath, 'uz.json'), JSON.stringify(uz, null, 2));

console.log('JSONs updated 6: Missing strings from Redirect, Demo logs, Pricing');
