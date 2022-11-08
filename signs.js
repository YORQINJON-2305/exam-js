const roadSymbols = [
  {
    "id": 0,
    "symbol_title": "Yo'l bering",
    "symbol_img": "./images/signs/yol_bering.gif",
    "isComplete": false
  },
  {
    "id": 1,
    "symbol_title": "Turar-joy dahasi",
    "symbol_img": "./images/signs/aholi_punkti.gif",
    "isComplete": false
  },
  {
    "id": 2,
    "symbol_title": "Asosiy yolning oxiri",
    "symbol_img": "./images/signs/asosiy_tugash.gif",
    "isComplete": false
  },
  {
    "id": 3,
    "symbol_title": "Asosiy yo’lning yo’nalishi",
    "symbol_img": "./images/signs/asosiy_yol_sxemasi.gif",
    "isComplete": false
  },
  {
    "id": 4,
    "symbol_title": "Asosiy yol",
    "symbol_img": "./images/signs/asosiy_yol.gif",
    "isComplete": false
  },
  {
    "id": 5,
    "symbol_title": "Avtomagistral",
    "symbol_img": "./images/signs/avtomagistral.gif",
    "isComplete": false
  },
  {
    "id": 6,
    "symbol_title": "Avtomagistral oxiri",
    "symbol_img": "./images/signs/avtomagistral_tugashi.gif",
    "isComplete": false
  },
  {
    "id": 7,
    "symbol_title": "Velosiped yolkasi",
    "symbol_img": "./images/signs/velosiped_yolkasi.gif",
    "isComplete": false
  },
  {
    "id": 8,
    "symbol_title": "Transport vositalarini yuvish joyi",
    "symbol_img": "./images/signs/avtomoyka.gif",
    "isComplete": false
  },
  {
    "id": 9,
    "symbol_title": "Texnik xizmat ko’rsatish joyi",
    "symbol_img": "./images/signs/avtoservis.gif",
    "isComplete": false
  },
  {
    "id": 10,
    "symbol_title": "Aylanma harakatlanish",
    "symbol_img": "./images/signs/aylanma_yol.gif",
    "isComplete": false
  },
  {
    "id": 11,
    "symbol_title": "Belgilangan yo’nalishli transport vositalari uchun mo’ljallangan bo’lak",
    "symbol_img": "./images/signs/belgilangan_yonalishli_transport_yolak.gif",
    "isComplete": false
  },
  {
    "id": 12,
    "symbol_title": "Yonilg’i shaxobchasi",
    "symbol_img": "./images/signs/benzin.gif",
    "isComplete": false
  },
  {
    "id": 13,
    "symbol_title": "Bir izli temir yo’l",
    "symbol_img": "./images/signs/bir_izli_temir.gif",
    "isComplete": false
  },
  {
    "id": 14,
    "symbol_title": "Bolalar",
    "symbol_img": "./images/signs/bolalar.gif",
    "isComplete": false
  },
  {
    "id": 15,
    "symbol_title": "Oxiri berk yo’l, ko’cha",
    "symbol_img": "./images/signs/boshi_berk_kocha.gif",
    "isComplete": false
  },
  {
    "id": 16,
    "symbol_title": "Boshqa xavf-xatar",
    "symbol_img": "./images/signs/boshqa_xavf.gif",
    "isComplete": false
  },
  {
    "id": 17,
    "symbol_title": "Chapga burilish taqiqlanadi",
    "symbol_img": "./images/signs/burilish_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 18,
    "symbol_title": "Eng kam tezlik belgilangan yo’lning oxiri",
    "symbol_img": "./images/signs/eng_kam_tezlik_oxiri.gif",
    "isComplete": false
  },
  {
    "id": 19,
    "symbol_title": "Avtomobillarni ko’rikdan o’tkazish joyi",
    "symbol_img": "./images/signs/estakada.gif",
    "isComplete": false
  },
  {
    "id": 20,
    "symbol_title": "Harakatlanish taqiqlangan",
    "symbol_img": "./images/signs/faqat_odamlaga.gif",
    "isComplete": false
  },
  {
    "id": 21,
    "symbol_title": "Harakatlanish chapga",
    "symbol_img": "./images/signs/harakatlanish_chapga.gif",
    "isComplete": false
  },
  {
    "id": 22,
    "symbol_title": "Harakatlanish o'nga",
    "symbol_img": "./images/signs/harakatlanish_onga.gif",
    "isComplete": false
  },
  {
    "id": 23,
    "symbol_title": "Harakatlanish o'nga yoki tog'riga",
    "symbol_img": "./images/signs/harakatlanish_onga_togriga.gif",
    "isComplete": false
  },
  {
    "id": 24,
    "symbol_title": "Harakatlanish tasviri",
    "symbol_img": "./images/signs/harakatlanish_tasviri.gif",
    "isComplete": false
  },
  {
    "id": 25,
    "symbol_title": "Harakatlanish tog'riga",
    "symbol_img": "./images/signs/harakatlanish_togriga.gif",
    "isComplete": false
  },
  {
    "id": 26,
    "symbol_title": "Ichimlik suvi",
    "symbol_img": "./images/signs/ichimlik_suvi.gif",
    "isComplete": false
  },
  {
    "id": 27,
    "symbol_title": "Ikki tomonlama harakatlanish",
    "symbol_img": "./images/signs/ikki_tomonlama_xarakatlanish.gif",
    "isComplete": false
  },
  {
    "id": 28,
    "symbol_title": "Dam olish joyi",
    "symbol_img": "./images/signs/kemping.gif",
    "isComplete": false
  },
  {
    "id": 29,
    "symbol_title": "Kirish taqiqlangan",
    "symbol_img": "./images/signs/kirish_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 30,
    "symbol_title": "Mehmonxona",
    "symbol_img": "./images/signs/kasalxona.gif",
    "isComplete": false
  },
  {
    "id": 31,
    "symbol_title": "Kotarma koprik",
    "symbol_img": "./images/signs/kotarma_koprik.gif",
    "isComplete": false
  },
  {
    "id": 32,
    "symbol_title": "Cheklangan balandlik",
    "symbol_img": "./images/signs/maksimal_balandlik.gif",
    "isComplete": false
  },
  {
    "id": 33,
    "symbol_title": "Cheklangan kenglik",
    "symbol_img": "./images/signs/maksimal_kenglik.gif",
    "isComplete": false
  },
  {
    "id": 34,
    "symbol_title": "Vazn cheklangan",
    "symbol_img": "./images/signs/maksimal_ogrlik.gif",
    "isComplete": false
  },
  {
    "id": 35,
    "symbol_title": "Cheklangan uzunlik",
    "symbol_img": "./images/signs/maksimal_uzunlik.gif",
    "isComplete": false
  },
  {
    "id": 36,
    "symbol_title": "Avtobus va trolleybus to’xtash joyi",
    "symbol_img": "./images/signs/marshrut.gif",
    "isComplete": false
  },
  {
    "id": 37,
    "symbol_title": "Mexanik transport vositalarining harakatlanishi taqiqlangan",
    "symbol_img": "./images/signs/mexanik_taqiqlangan.gif",
    "isComplete": false
  },
  {
    "id": 38,
    "symbol_title": "Mototsikllar harakatlanishi taqiqlangan",
    "symbol_img": "./images/signs/motosikl_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 39,
    "symbol_title": "Eng kam oraliq",
    "symbol_img": "./images/signs/oraliq_masofa.gif",
    "isComplete": false
  },
  {
    "id": 40,
    "symbol_title": "Oshxona",
    "symbol_img": "./images/signs/oshxona.gif",
    "isComplete": false
  },
  {
    "id": 41,
    "symbol_title": "Ot-arava harakatlanishi taqiqlangan",
    "symbol_img": "./images/signs/ot_arava_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 42,
    "symbol_title": "To’xtab turish joyi",
    "symbol_img": "./images/signs/parkovka.gif",
    "isComplete": false
  },
  {
    "id": 43,
    "symbol_title": "Pastlab uchuvchi samolyotlar",
    "symbol_img": "./images/signs/pastlab_uchuvchi_samolyot.gif",
    "isComplete": false
  },
  {
    "id": 44,
    "symbol_title": "Piyodalar o’tish joyi",
    "symbol_img": "./images/signs/piyodalar_otish_joyi.gif",
    "isComplete": false
  },
  {
    "id": 45,
    "symbol_title": "Piyodalar yo’lkasi",
    "symbol_img": "./images/signs/piyodalar_yolagi.gif",
    "isComplete": false
  },
  {
    "id": 46,
    "symbol_title": "Shlagbaumsiz temir yo’l kesishmasi",
    "symbol_img": "./images/signs/poyezd.gif",
    "isComplete": false
  },
  {
    "id": 47,
    "symbol_title": "Qayrilish ta'qiqlanadi",
    "symbol_img": "./images/signs/qayrilish_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 48,
    "symbol_title": "Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi",
    "symbol_img": "./images/signs/qayta_tizilish_sxemasi.gif",
    "isComplete": false
  },
  {
    "id": 49,
    "symbol_title": "Quvib o’tish taqiqlanadi",
    "symbol_img": "./images/signs/quvib_otish_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 50,
    "symbol_title": "Quvib o’tish ta'qiqlangan hududning oxiri",
    "symbol_img": "./images/signs/quvib_otish_taqiqlanadi_tugadi.gif",
    "isComplete": false
  },
  {
    "id": 51,
    "symbol_title": "Radar",
    "symbol_img": "./images/signs/radar.jpg",
    "isComplete": false
  },
  {
    "id": 52,
    "symbol_title": "Ro’paradagi harakatlanishga nisbatan imtiyoz",
    "symbol_img": "./images/signs/ropara_imtiyo.gif",
    "isComplete": false
  },
  {
    "id": 53,
    "symbol_title": "Ro’para harakatlanishning ustunligi",
    "symbol_img": "./images/signs/ropara_ustunlik.gif",
    "isComplete": false
  },
  {
    "id": 54,
    "symbol_title": "Shlagbaumli temir yo'l kesishmasi",
    "symbol_img": "./images/signs/shlakbaumli_temiryol.gif",
    "isComplete": false
  },
  {
    "id": 55,
    "symbol_title": "Sirpanchiq yo’l",
    "symbol_img": "./images/signs/sirpanchiq_yol.gif",
    "isComplete": false
  },
  {
    "id": 56,
    "symbol_title": "Sohilga chiqish",
    "symbol_img": "./images/signs/soxilga_chiqish.gif",
    "isComplete": false
  },
  {
    "id": 57,
    "symbol_title": "To’xtamasdan harakatlanish taqiqlangan",
    "symbol_img": "./images/signs/stop.gif",
    "isComplete": false
  },
  {
    "id": 58,
    "symbol_title": "Svetofor tartibga soladi",
    "symbol_img": "./images/signs/svetofor.gif",
    "isComplete": false
  },
  {
    "id": 59,
    "symbol_title": "Ta’mirlash ishlari",
    "symbol_img": "./images/signs/tamirlash_ishlari.gif",
    "isComplete": false
  },
  {
    "id": 60,
    "symbol_title": "Ta’sir oralig’i",
    "symbol_img": "./images/signs/tasir_doirasi.gif",
    "isComplete": false
  },
  {
    "id": 61,
    "symbol_title": "Taksi to’xtab turish joyi",
    "symbol_img": "./images/signs/taxi.gif",
    "isComplete": false
  },
  {
    "id": 62,
    "symbol_title": "Telefon",
    "symbol_img": "./images/signs/telefon.gif",
    "isComplete": false
  },
  {
    "id": 63,
    "symbol_title": "Temir yo’l kesishmasining yaqinligi haqida ogohlantirish",
    "symbol_img": "./images/signs/temiryol_kesishmasining_yaqinligi.gif",
    "isComplete": false
  },
  {
    "id": 64,
    "symbol_title": "Yuqori tezlik cheklangan",
    "symbol_img": "./images/signs/tezlik-cheklangan.gif",
    "isComplete": false
  },
  {
    "id": 65,
    "symbol_title": "Tik nishablik",
    "symbol_img": "./images/signs/tik_nishablik.gif",
    "isComplete": false
  },
  {
    "id": 66,
    "symbol_title": "Tik balandlik",
    "symbol_img": "./images/signs/tik_qiyalik.gif",
    "isComplete": false
  },
  {
    "id": 67,
    "symbol_title": "Tirkama bilan harakatlanish taqiqlangan",
    "symbol_img": "./images/signs/tirkama_taqiq.gif",
    "isComplete": false
  },
  {
    "id": 68,
    "symbol_title": "Xojatxona",
    "symbol_img": "./images/signs/toilet.gif",
    "isComplete": false
  },
  {
    "id": 69,
    "symbol_title": "Tonnel",
    "symbol_img": "./images/signs/tonnel.gif",
    "isComplete": false
  },
  {
    "id": 70,
    "symbol_title": "Tosh otilishi",
    "symbol_img": "./images/signs/tosh_otilishi.gif",
    "isComplete": false
  },
  {
    "id": 71,
    "symbol_title": "Toshlar tushishi",
    "symbol_img": "./images/signs/tosh_tushishi.gif",
    "isComplete": false
  },
  {
    "id": 72,
    "symbol_title": "To’siqni o’ngdan yoki chapdan chetlab o’tish",
    "symbol_img": "./images/signs/tosiq_chap_ili_ong.gif",
    "isComplete": false
  },
  {
    "id": 73,
    "symbol_title": "To’siqni chapdan chetlab o’tish",
    "symbol_img": "./images/signs/tosiq_chapdan.gif",
    "isComplete": false
  },
  {
    "id": 74,
    "symbol_title": "To’siqni chapdan o'ngdan chetlab o'tish",
    "symbol_img": "./images/signs/tosiq_ongdan.gif",
    "isComplete": false
  },
  {
    "id": 75,
    "symbol_title": "Tovush moslamalaridan foydalanish ta'qiqlangan",
    "symbol_img": "./images/signs/tovushli_signal.gif",
    "isComplete": false
  },
  {
    "id": 76,
    "symbol_title": "To’xtab turish ta'qiqlangan",
    "symbol_img": "./images/signs/toxtab_turish.gif",
    "isComplete": false
  },
  {
    "id": 77,
    "symbol_title": "To’xtash taqiqlangan",
    "symbol_img": "./images/signs/toxtash_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 78,
    "symbol_title": "Transport vositasini to’xtab turish joyiga qo’yish usuli",
    "symbol_img": "./images/signs/toxtash_usuli.gif",
    "isComplete": false
  },
  {
    "id": 79,
    "symbol_title": "Traktorlar harakatlanishi taqiqlangan",
    "symbol_img": "./images/signs/traktor.gif",
    "isComplete": false
  },
  {
    "id": 80,
    "symbol_title": "Tramvay yo’li bilan kesishuv",
    "symbol_img": "./images/signs/tramvay_kesishuv.gif",
    "isComplete": false
  },
  {
    "id": 81,
    "symbol_title": "Tramvay to’xtash joyi",
    "symbol_img": "./images/signs/tramvay.gif",
    "isComplete": false
  },
  {
    "id": 82,
    "symbol_title": "Transport vositasining turi",
    "symbol_img": "./images/signs/transport_vositasi_turi.gif",
    "isComplete": false
  },
  {
    "id": 83,
    "symbol_title": "Turar-joy dahasining oxiri",
    "symbol_img": "./images/signs/turar_joy_tugash.gif",
    "isComplete": false
  },
  {
    "id": 84,
    "symbol_title": "Mol haydab o’tish",
    "symbol_img": "./images/signs/uy_hayvonlari.gif",
    "isComplete": false
  },
  {
    "id": 85,
    "symbol_title": "Velosipedda harakatlanish ta'qiqlangan",
    "symbol_img": "./images/signs/velik_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 86,
    "symbol_title": "Velosiped yo’lkasi bilan kesishuv",
    "symbol_img": "./images/signs/velosiped.gif",
    "isComplete": false
  },
  {
    "id": 87,
    "symbol_title": "Piyodalarning yer ostidan o’tish joyi",
    "symbol_img": "./images/signs/yer_osti_yoli.gif",
    "isComplete": false
  },
  {
    "id": 88,
    "symbol_title": "Piyodalarning yer ustidan o’tish joyi",
    "symbol_img": "./images/signs/yer_usti_yoli.gif",
    "isComplete": false
  },
  {
    "id": 89,
    "symbol_title": "Yonlama shamol",
    "symbol_img": "./images/signs/yonlama_shamol.gif",
    "isComplete": false
  },
  {
    "id": 90,
    "symbol_title": "Yovvoyi hayvonlar",
    "symbol_img": "./images/signs/yovvoyi_hayvonlar.gif",
    "isComplete": false
  },
  {
    "id": 91,
    "symbol_title": "Yuk avtomobillarida quvib o’tish taqiqlangan",
    "symbol_img": "./images/signs/yuk_avtomobil_quvish_taqiqlanadi.gif",
    "isComplete": false
  },
  {
    "id": 92,
    "symbol_title": "Yuk avtommobillarida quvib o’tish taqiqlangan hududning oxiri",
    "symbol_img": "./images/signs/yuk_avtomobil_quvish_taqiqlanadi_oxiri.gif",
    "isComplete": false
  },
  {
    "id": 93,
    "symbol_title": "Tirbandlik",
    "symbol_img": "./images/signs/tirbandlik.gif",
    "isComplete": false
  },
  {
    "id": 94,
    "symbol_title": "Notekis yo’l",
    "symbol_img": "./images/signs/notekis_yol.gif",
    "isComplete": false
  },
  {
    "id": 95,
    "symbol_title": "Barcha cheklovlarning oxiri",
    "symbol_img": "./images/signs/barcha.gif",
    "isComplete": false
  },
  {
    "id": 96,
    "symbol_title": "Tavsiya etilgan tezlik",
    "symbol_img": "./images/signs/tavsiya_etilgan_tezlik.gif",
    "isComplete": false
  },
  {
    "id": 97,
    "symbol_title": "Surat va video",
    "symbol_img": "./images/signs/surat_foto.png",
    "isComplete": false
  },
  {
    "id": 98,
    "symbol_title": "Falokatli holatlar uchun kirish yo’li",
    "symbol_img": "./images/signs/xatar_yol.gif",
    "isComplete": false
  },
  {
    "id": 99,
    "symbol_title": "Shifoxona",
    "symbol_img": "./images/signs/shifoxona.gif",
    "isComplete": false
  },
  {
    "id": 100,
    "symbol_title": "Yuqori tezlik cheklangan hududning oxiri",
    "symbol_img": "./images/signs/maksimal_tezlik_tugadi.gif",
    "isComplete": false
  }
]