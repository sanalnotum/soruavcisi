// ==========================================
// SORU AVCISI - MERKEZİ VERİ TABANI & MÜFREDAT (db.js)
// ==========================================

const ERROR_REASONS = [
  "Bilgi / Konu Eksikliği",
  "Dikkat / İşlem Hatası",
  "Soru Kökünü Yanlış Okuma",
  "Süre / Zaman Baskısı",
  "Grafik / Şekil Yorumlama",
  "Öncüllü / Yorum Tıkanıklığı",
  "Formül / Kural Unutulması",
  "İşlem Hatası / İşlem Kalabalığı",
  "Yeni Nesil / Model Soru Tıkanıklığı",
  "Ön Yargı / Psikolojik Blok"
];

const MASTER_CURRICULUM = {
  "MAARİF": {
    "1. Sınıf": {
      "Hayat Bilgisi": [
        "Öğretmeni ve arkadaşlarıyla tanışabilme",
        "Sınıf ve okul ortamını tanıyabilme",
        "Sınıf ve okul ortamında kurallara uygun davranabilme",
        "Bireysel özelliklerini açıklayabilme",
        "Sağlıklı büyüme ve gelişme için yapılması gerekenleri belirleyebilme",
        "Kişisel alan sınırlarını koruyabilme",
        "Temel trafik kurallarına uygun davranabilme",
        "Acil durumlarda yapılması gerekenleri belirleyebilme",
        "Ailenin özelliklerini ifade edebilme",
        "Aile yaşamında nezaket ve görgü kurallarına uygun davranabilme",
        "Evdeki kaynakları bilinçli tüketebilme",
        "Yakın çevresindeki tarihi, kültürel ve doğal zenginlikleri fark edebilme",
        "Milli ve dini bayramların önemini kavrayabilme",
        "Bitki ve hayvanların yaşamımızdaki yerini ve önemini fark edebilme",
        "Doğal çevreyi korumak için sorumluluk alabilme"
      ],
      "Matematik": [
        "Nesneleri niteliklerine göre gruplandırabilme",
        "Nesne sayılarını belirleyebilme ve okuyabilme",
        "Doğal sayıları yazabilme ve sıralayabilme",
        "Toplama işleminin anlamını kavrayabilme",
        "Toplama işlemi yapabilme",
        "Çıkarma işleminin anlamını kavrayabilme",
        "Çıkarma işlemi yapabilme",
        "Paralarımızı tanılayabilme ve temel alışveriş ilişkisini kurabilme",
        "Geometrik cisimleri ve şekilleri tanıyabilme",
        "Uzunlukları standart olmayan birimlerle ölçebilme"
      ],
      "Türkçe": [
        "Dinleme / izleme stratejilerini uygulayabilme",
        "Görsellerden hareketle olayları tahmin edebilme",
        "Sesleri ayırt edebilme ve doğru telaffuz edebilme",
        "Okuma akıcılığı kazanabilme",
        "Metnin konusunu ve ana fikrini belirleyebilme",
        "Yazım ve noktalama kurallarına uygun yazabilme",
        "Kendi duygu ve düşüncelerini yazılı ve sözlü ifade edebilme"
      ],
      "Fen Bilimleri": [
        "Çevresindeki canlı ve cansız varlıkları ayırt edebilme",
        "Duyu organlarını ve görevlerini tanıyabilme",
        "Dünya'nın şekli hakkındaki görüşleri ve kanıtları kavrayabilme",
        "Maddenin hallerini ve temel özelliklerini gözlemleyebilme",
        "Işık ve ses kaynaklarını ayırt edebilme"
      ]
    },
    "2. Sınıf": {
      "Hayat Bilgisi": [
        "Okulundaki sosyal etkinliklere katılım sağlayabilme",
        "Arkadaşlık ilişkilerinde empati kurabilme",
        "Sağlıklı beslenme kurallarına uyabilme",
        "Kişisel hijyen alışkanlıklarını sürdürebilme",
        "Ev içi sorumluluklarını yerine getirebilme",
        "Trafikte güvenli yolculuk kurallarını uygulayabilme",
        "Ülkesinin yönetim birimlerini ve milli sembollerini tanıyabilme",
        "Doğal afetlere karşı hazırlıklı olabilme bilinci kazanabilme"
      ],
      "Matematik": [
        "Üç basamaklı doğal sayıları okuyabilme ve yazabilme",
        "Doğal sayılarda toplama ve çıkarma işlemlerini yapabilme",
        "Çarpma işleminin anlamını kavramak ve pratik yapabilme",
        "Bölme işleminin anlamını kavrayabilme",
        "Kesirlerin bütün, yarım ve çeyrek ilişkisini kurabilme",
        "Zaman birimleri (saat, dakika, gün, ay, yıl) arasındaki ilişkiyi kavrayabilme",
        "Geometrik örüntüleri fark edebilme ve oluşturabilme"
      ],
      "Türkçe": [
        "Metindeki bilinmeyen kelimelerin anlamını tahmin edebilme",
        "Şiir, hikaye ve bilgilendirici metinleri türüne uygun okuyabilme",
        "Noktalama işaretlerini (nokta, virgül, soru işareti, ünlem) yerinde kullanabilme",
        "Olayları oluş sırasına göre anlatabilme ve yazabilme",
        "Görsel okuma becerilerini geliştirebilme"
      ],
      "Fen Bilimleri": [
        "Beş duyu organımızla çevremizi algılama yolları",
        "Canlıların yaşam döngüsü",
        "Bitkilerin büyümesi için gereken şartlar",
        "Maddenin nitelenen özellikleri (renk, koku, sertlik vb.)",
        "Çevremizdeki sesler ve ses kirliliği"
      ]
    },
    "3. Sınıf": {
      "Hayat Bilgisi": [
        "Milli egemenlik ve bağımsızlık sembolleri",
        "Kültürel mirasımız ve geleneklerimiz",
        "Yaşadığı yerin coğrafi ve fiziki özellikleri",
        "Tasarruf bilinci ve bütçe yönetimi",
        "Bitki yetiştirme ve doğa sevgisi"
      ],
      "Matematik": [
        "Üç ve dört basamaklı sayılarla işlemler",
        "Çarpma ve bölme işlemlerinde stratejiler",
        "Zaman ölçüleri ve problem çözme",
        "Tartma ve sıvı ölçme birimleri",
        "Geometrik cisimlerin köşe, ayrıt ve yüzleri"
      ],
      "Türkçe": [
        "Paragrafta ana düşünce ve yardımcı düşünceler",
        "Atasözleri ve deyimlerin anlamları",
        "Metin içi ve metin dışı anlam kurma",
        "Yazım yanlışlarını bulma ve düzeltme"
      ],
      "Fen Bilimleri": [
        "Dünyamızın katmanları",
        "Gezegenimizi tanımak",
        "Kuvvetin itme ve çekme etkileri",
        "Elektrikli araçlar ve güvenli elektrik kullanımı",
        "Doğal ve yapay çevre"
      ]
    },
    "4. Sınıf": {
      "Sosyal Bilgiler": [
        "Birey ve toplum",
        "Kültürümüz ve tarihçemiz",
        "İnsanlar, yerler ve çevre",
        "Bilim, teknoloji ve toplum",
        "Üretim, dağıtım ve tüketim"
      ],
      "Matematik": [
        "Milyona kadar olan doğal sayılar",
        "Kesirlerle işlemler ve toplama-çıkarma",
        "Ondalık gösterimler",
        "Geometride açı ölçme ve çizme",
        "Alan ve çevre hesaplamaları"
      ],
      "Türkçe": [
        "Gerçek, mecaz ve terim anlam",
        "Okuduğunu anlama ve eleştirel okuma",
        "Yazım kuralları (da/de, ki, mi ekleri)",
        "Grafik, tablo ve harita okuma"
      ],
      "Fen Bilimleri": [
        "Besinlerimiz ve sindirim sistemi",
        "Kuvvetin hareket üzerindeki etkileri",
        "Maddenin özellikleri ve değişimleri",
        "Aydınlatma ve ses teknolojileri",
        "İnsan ve çevre ilişkileri",
        "Yer kabuğu ve taşlar"
      ]
    },
    "5. Sınıf": {
      "Matematik": [
        "Doğal Sayılarla İşlemler", "Kesirler", "Ondalık Gösterimler", "Yüzdeler", 
        "Temel Geometrik Kavramlar ve Çizimler", "Üçgen ve Dörtgenler", "Veri Toplama ve Değerlendirme", 
        "Uzunluk ve Zaman Ölçme", "Çevre ve Alan Ölçme", "Geometrik Cisimler"
      ],
      "Türkçe": [
        "Sözcükte Anlam", "Cümlede Anlam", "Paragraf Analizi", "Yazım Kuralları ve Noktalama İşaretleri", "Metin Türleri", "Fiiller"
      ],
      "Fen Bilimleri": [
        "Güneş, Dünya ve Ay", "Canlılar Dünyası", "Kuvvetin Büyüklüğünün Ölçülmesi", "Madde ve Isı", 
        "Işığın Yayılması", "İnsan ve Çevre", "Elektrik Devreleri"
      ],
      "Sosyal Bilgiler": [
        "Birlikte Yaşamak", "Evimiz Dünya", "Köklerimiz", "Ağacın Üzerindeki Hayat", "Teknoloji ve İnsan", "Etkin Vatandaşlık"
      ],
      "Din Kültürü ve Ahlak Bilgisi": [
        "Allah İnancı", "Ramazan ve Oruç", "İslam Güzel Ahlaktır", "Hz. Muhammed ve Aile Hayatı", "Çevre ve Din"
      ],
      "İngilizce": [
        "Hello!", "My Town", "Games and Hobbies", "My Daily Routine", "Health", "Movies", "Party Time", "Fitness", "The Animal Shelter", "Festivals"
      ]
    },
    "6. Sınıf": {
      "Matematik": [
        "Doğal Sayılarla İşlemler", "Çarpanlar ve Katlar", "Kümeler", "Tam Sayılar", "Kesirlerle İşlemler", 
        "Ondalık Gösterimler", "Oran", "Cebirsel İfadeler", "Veri Analizi", "Açılar", "Alan Ölçme", "Çember", "Geometrik Cisimler"
      ],
      "Türkçe": ["Sözcükte ve Cümlede Anlam", "Paragraf Analizi", "İsimler ve Sıfatlar", "Zamirler", "Noktalama ve Yazım Kuralları"],
      "Fen Bilimleri": ["Güneş Sistemi ve Tutulmalar", "Vücudumuzdaki Sistemler", "Kuvvet ve Hareket", "Madde ve Isı", "Ses ve Özellikleri"],
      "Sosyal Bilgiler": ["Birey ve Toplum", "Kültür ve Miras", "İnsanlar, Yerler ve Çevre", "Bilim, Teknoloji ve Toplum", "Üretim, Dağıtım ve Tüketim"]
    },
    "7. Sınıf": {
      "Matematik": ["Tam Sayılarla İşlemler", "Rasyonel Sayılar", "Cebirsel İfadeler", "Eşitlik ve Denklem", "Oran ve Orantı", "Yüzdeler", "Doğrular ve Açılar", "Çokgenler", "Çember ve Daire", "Veri Analizi"],
      "Türkçe": ["Fiiller (Eylemler)", "Zarflar", "Ek Fiil", "Fiilimsiler", "Anlatım Bozuklukları"],
      "Fen Bilimleri": ["Güneş Sistemi ve Ötesi", "Hücre ve Bölünmeler", "Kuvvet ve Enerji", "Saf Madde ve Karışımlar", "Işığın Madde ile Etkileşimi"],
      "Sosyal Bilgiler": ["İletişim ve İnsan İlişkileri", "Osmanlı Tarihi", "Nüfusumuz ve Yerleşme", "Ekonomi ve Sosyal Hayat", "Yaşayan Demokrasi"]
    },
    "8. Sınıf": {
      "Matematik": ["Çarpanlar ve Katlar", "Üslü ifadeler", "Kareköklü İfadeler", "Veri Analizi", "Olasılık", "Cebirsel İfadeler", "Doğrusal Denklemler", "Eşitsizlikler", "Üçgenler", "Eşlik ve Benzerlik", "Dönüşüm Geometrisi", "Geometrik Cisimler"],
      "Türkçe": ["Fiilimsiler", "Cümlenin Ögeleri", "Fiilde Çatı", "Cümle Türleri", "Yazım Kuralları", "Anlatım Bozuklukları", "Sözel Mantık"],
      "Fen Bilimleri": ["Mevsimler ve İklim", "DNA ve Genetik Kod", "Basınç", "Madde ve Endüstri", "Basit Makineler", "Enerji Dönüşümleri", "Elektrik Enerjisi"],
      "T.C. İnkılap Tarihi ve Atatürkçülük": ["Bir Kahraman Doğuyor", "Millî Uyanış", "Ya İstiklal Ya Ölüm", "Atatürkçülük", "Demokratikleşme", "Dış Politika"]
    },
    "9. Sınıf": {
      "Matematik": ["Mantık", "Kümeler", "Denklemler ve Eşitsizlikler", "Üçgenler", "Veri, Sayma ve Olasılık"],
      "Türk Dili ve Edebiyatı": ["Giriş", "Hikaye", "Şiir", "Masal / Fabl", "Roman", "Tiyatro"],
      "Fizik": ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Hareket ve Kuvvet", "Enerji"],
      "Kimya": ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Maddenin Halleri"],
      "Biyoloji": ["Yaşam Bilimi Biyoloji", "Hücre", "Canlılar Dünyası"],
      "Tarih": ["Tarih ve Zaman", "İnsanlığın İlk Dönemleri", "Orta Çağ'da Dünya", "İlk ve Orta Çağlarda Türk Dünyası"],
      "Coğrafya": ["Doğa ve İnsan", "Dünya'nın Şekli ve Hareketleri", "Coğrafi Konum", "Harita Bilgisi", "Atmosfer ve İklim", "İç ve Dış Kuvvetler"]
    },
    "10. Sınıf": {
      "Matematik": ["Sayma ve Olasılık", "Fonksiyonlar", "Polinomlar", "İkinci Dereceden Denklemler", "Dörtgenler ve Çokgenler", "Katı Cisimler"],
      "Türk Dili ve Edebiyatı": ["Hikaye", "Şiir", "Destek / Efsane", "Roman", "Tiyatro"],
      "Fizik": ["Elektrik ve Manyetizma", "Basınç ve Kaldırma Kuvveti", "Dalgalar", "Optik"],
      "Kimya": ["Kimyanın Temel Kanunları", "Kimyasal Hesaplamalar", "Karışımlar", "Asitler, Bazlar ve Tuzlar"],
      "Biyoloji": ["Hücre Bölünmeleri", "Kalıtımın Genel İlkeleri", "Ekosistem Ekolojisi"],
      "Tarih": ["Yerleşme ve Devletleşme", "Beylikten Devlete Osmanlı", "Dünya Gücü Osmanlı"],
      "Coğrafya": ["Nüfus ve Yerleşme", "Türkiye'nin Beşeri Coğrafyası", "Doğal Afetler"]
    },
    "11. Sınıf": {
      "Matematik": ["Trigonometri", "Analitik Geometri", "Fonksiyonlarda Uygulamalar", "Denklem ve Eşitsizlik Sistemleri", "Çember ve Daire", "Uzay Geometri", "Olasılık"],
      "Türk Dili ve Edebiyatı": ["Giriş ve Hikaye", "Şiir", "Makale", "Sohbet / Fıkra", "Roman", "Tiyatro"],
      "Fizik": ["Kuvvet ve Hareket", "Tork ve Denge", "Basit Makineler", "İtme ve Momentum", "Elektrik Alan"],
      "Kimya": ["Modern Atom Teorisi", "Gazlar", "Sıvı Çözeltiler", "Kimyasal Tepkimelerde Enerji", "Hız", "Denge"],
      "Biyoloji": ["İnsan Fizyolojisi", "Sistemler", "Komünite ve Popülasyon Ekolojisi"],
      "Tarih": ["Değişen Dünya Dengeleri", "Değişim Çağında Avrupa ve Osmanlı", "Denge Stratejisi"],
      "Coğrafya": ["Ekosistemler", "Biyoçeşitlilik", "Nüfus Politikaları", "Göç ve Şehirleşme"]
    },
    "12. Sınıf": {
      "Matematik": ["Üstel ve Logaritmik Fonksiyonlar", "Diziler", "Trigonometri", "Dönüşümler", "Limit ve Süreklilik", "Türev", "İntegral"],
      "Türk Dili ve Edebiyatı": ["Cumhuriyet Dönemi Türk Edebiyatı", "Şiir", "Roman", "Tiyatro", "Deneme"],
      "Fizik": ["Düzgün Çembersel Hareket", "Basit Harmonik Hareket", "Dalga Mekaniği", "Modern Fizik"],
      "Kimya": ["Kimya ve Elektrik", "Karbon Kimyasına Giriş", "Organik Bileşikler"],
      "Biyoloji": ["Genden Proteine", "Enerji Dönüşümleri", "Bitki Biyolojisi"],
      "Tarih": ["Milli Mücadele", "Atatürkçülük ve Türk İnkılabı", "Dünya Savaşı Sürecinde Türkiye"],
      "Coğrafya": ["Türkiye Ekonomisi", "Jeopolitik Konum", "Bölgeler ve Ülkeler", "Çevre ve Toplum"]
    }
  },
  "YKS (TYT + AYT)": {
    "TYT Matematik": ["Temel Kavramlar", "Sayı Basamakları", "Bölünebilme Kuralları", "OBEB-OKEK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran - Orantı", "Denklem Çözme", "Problemler", "Kümeler", "Mantık", "Fonksiyonlar", "Polinomlar", "Permütasyon - Kombinasyon", "Olasılık", "Veri - İstatistik"],
    "TYT Türkçe": ["Ses Bilgisi", "Dil Bilgisi", "Noktalama İşaretleri", "Yazım Kuralları", "Anlatım Bozukluğu", "Paragraf", "Cümlede Anlam", "Sözcükte Anlam"],
    "TYT Geometri": ["Açılar ve Üçgenler", "Çokgenler", "Yamuk", "Eşkenar Dörtgen", "Deltoid", "Kare", "Dikdörtgen", "Çember ve Daire", "Analitik Geometri", "Katı Cisimler"],
    "TYT Fizik": ["Fizik Bilimine Giriş", "Madde Ve Özellikleri", "Sıvıların Kaldırma Kuvveti", "Basınç", "Isı, Sıcaklık ve Genleşme", "Hareket ve Kuvvet", "Dinamik", "İş, Güç ve Enerji", "Elektrostatik", "Elektrik Akımı ve Devreler", "Elektriksel Enerji ve Güç", "Optik", "Manyetizma", "Dalgalar"],
    "TYT Kimya": ["Kimya Bilimi", "Atomun Yapısı", "Periyodik Tablo", "Maddenin Halleri", "Kimyasal Türler Arası Etkileşimler", "Kimyasal Hesaplamalar", "Kimyanın Temel Kanunları", "Asit, Baz ve Tuz", "Karışımlar", "Kimya Her Yerde"],
    "TYT Biyoloji": ["Canlıların Ortak Özellikleri", "Canlıların Temel Bileşenleri", "Hücre ve Organelleri", "Madde Geçişleri", "Canlıların Sınıflandırılması", "Hücre Bölünmeleri ve Üreme", "Kalıtım", "Ekosistem Ekoloji", "Bitkiler Biyolojisi"],
    "TYT Tarih": ["Tarih ve Zaman", "İlk ve Orta Çağlarda Türk Dünyası", "İslam Medeniyetinin Doğuşu", "Türklerin İslamiyet’i Kabulü ve İlk Türk İslam Devletleri", "Beylikten Devlete Osmanlı", "Dünya Gücü Osmanlı", "Değişim Çağında Avrupa ve Osmanlı", "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)", "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya", "Milli Mücadele", "Atatürkçülük ve Türk İnkılabı"],
    "TYT Coğrafya": ["Doğa ve İnsan", "Dünya’nın Şekli ve Hareketleri", "Coğrafi Konum", "Harita Bilgisi", "Atmosfer ve Sıcaklık", "İklim Bilgisi", "iç ve Dış Kuvvetler", "Nüfus ve Yerleşme", "Türkiye’nin Yer Şekilleri", "Ekonomik Faaliyetler", "Bölgeler", "Uluslararası Ulaşım Hatları", "Doğal Afetler"],
    "TYT Felsefe": ["Felsefenin Alanı", "Bilgi Felsefesi", "Bilim Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Siyaset Felsefesi", "Din Felsefesi", "Sanat Felsefesi"],
    "TYT Din Kültürü": ["Bilgi ve İnanç", "İbadetler", "Ahlak ve Değerler", "Hz. Muhammed (S.A.V)", "Vahiy ve Akıl", "İslam Düşüncesinde Yorumlar, Mezhepler", "Din, Kültür ve Medeniyet"],
    "AYT Matematik": ["Fonksiyonlar", "Polinomlar", "2.Dereceden Denklemler", "Eşitsizlikler", "Parabol", "Permütasyon-Kombinasyon", "Olasılık", "Binom Açılımı", "Trigonometri", "Logaritma", "Diziler", "Limit", "Türev", "İntegral"],
    "AYT Geometri": ["Doğruda ve Üçgende Açı", "Özel Üçgenler", "Açıortay - Kenarortay", "Üçgende Alan Benzerlik", "Açı Kenar Bağıntıları", "Çokgenler", "Özel Dörtgenler", "Çember ve Daire", "Noktanın Analitiği", "Doğrunun Analitiği", "Dönüşüm Geometrisi", "Katı Cisimler", "Çemberin Analitiği"],
    "AYT Fizik": ["Vektörler", "Hareket", "Newton’un Hareket Yasaları", "Atışlar", "İş, Güç ve Enerji", "İtme ve Momentum", "Kuvvet, Tork ve Denge", "Kütle Merkezi", "Basit Makineler", "Elektrik Alan ve Potansiyel", "Paralel Levhalar ve Sığa", "Manyetik Alan ve Manyetik Kuvvet", "İndüksiyon, Alternatif Akım ve Transformatörler", "Düzgün Çembersel Hareket", "Dönme, Yuvarlanma ve Açısal Momentum", "Kütle Çekim ve Kepler Yasaları", "Basit Harmonik Hareket", "Dalga Mekaniği", "Atom Fiziğine Giriş ve Radyoaktivite", "Modern Fizik", "Modern Fiziğin Teknolojideki Uygulamaları"],
    "AYT Kimya": ["Kimya Bilimi", "Atom ve Yapısı", "Periyodik Sistem", "Kimyasal Türler Arası Etkileşim", "Kimyasal Hesaplamalar", "Modern Atom Teorisi", "Gazlar", "Sıvı Çözeltiler", "Kimyasal Tepkimelerde Enerji", "Kimyasal Tepkimelerde Hız", "Kimyasal Tepkimelerde Denge", "Asit-Baz Dengesi", "Çözünürlük Dengesi", "Kimya ve Elektrik", "Organik Kimya"],
    "AYT Biyoloji": ["Sinir Sistemi", "Endokrin Sistem", "Duyu Organları", "Destek ve Hareket Sistemi", "Sindirim Sistemi", "Dolaşım Sistemi", "Solunum Sistemi", "Üriner Sistem", "Üreme Sistemi ve Embriyonik Gelişim", "Komünite ve Popülasyon Ekolojisi", "Genden Proteine", "Canlılık ve Enerji", "Fotosentez ve Kemosentez", "Hücresel Solunum", "Bitki Biyolojisi", "Canlılar ve Çevre"],
    "AYT Edebiyat": ["Anlam Bilgisi", "Dil Bilgisi", "Metin Türleri", "Şiir Bilgisi", "Edebi Sanatlar", "İslamiyet Öncesi Türk Edebiyatı ve Geçiş Dönemi", "Halk Edebiyatı", "Divan Edebiyatı", "Tanzimat Edebiyatı", "Servet-i Fünun Ve Fecr-i Ati Edebiyatı", "Milli Edebiyat", "Cumhuriyet Dönemi Edebiyatı", "Batı Edebiyat Akımları"],
    "AYT Coğrafya": ["İklim ve Yer Şekilleri", "Coğrafi Konum", "Dünya’nın Şekli ve Hareketleri", "Harita Bilgisi", "İç ve Dış Kuvvetler", "Ekosistem", "Nüfus Politikaları", "Yerleşmelerin Özellikleri", "Uluslararası Ulaşım Hatları", "Ekonomik Faaliyetler ve Doğal Kaynaklar", "Geçmişten Geleceğe Şehir ve Ekonomi", "Türkiye’de Ekonomi", "Türkiye’nin İşlevsel Bölgeleri ve Kalkınma Projeleri", "Küresel Ticaret", "Kültür Bölgeleri", "Uluslararası Örgütler", "Ülkeler Arası Etkileşimler", "Bölgeler ve Ülkeler", "Çevre ve Toplum"],
    "AYT Tarih": ["Tarih ve Zaman", "İnsanlığın İlk Dönemleri", "İlk ve Orta Çağlarda Türk Dünyası", "İslam Medeniyetinin Doğuşu", "Türklerin İslamiyet’i Kabulü ve İlk Türk İslam Devletleri", "Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi", "Beylikten Devlete Osmanlı", "Devletleşme Sürecinde Savaşçılar ve Askerler", "Dünya Gücü Osmanlı", "Sultan ve Osmanlı Merkez Teşkilatı", "Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti", "Değişim Çağında Avrupa ve Osmanlı", "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)", "Devrimler Çağında Değişen Devlet-Toplum İlişkileri", "Sermaye ve Emek", "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya", "Milli Mücadele", "Atatürkçülük ve Türk İnkılabı", "İki Savaş Arasındaki Dönemde Türkiye ve Dünya", "II. Dünya Savaşı Sürecinde - Sonrasında Türkiye ve Dünya", "XXI. Yüzyılın Eşiğinde Türkiye ve Dünya"],
    "AYT Felsefe": ["Felsefe ve Bilim", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Sanat Felsefesi", "Din Felsefesi", "20. Yüzyıl Felsefesi", "Mantığa Giriş", "Klasik Mantık", "Mantık ve Dil", "Psikoloji Bilimini Tanıyalım", "Psikolojinin Temel Süreçleri", "Öğrenme Bellek Düşünme", "Ruh Sağlığının Temelleri", "Sosyolojiye Giriş", "Birey ve Toplum", "Toplumsal Yapı", "Toplumsal Değişme ve Gelişme", "Toplum ve Kültür", "Toplumsal Kurumlar"],
    "AYT Din Kültürü": ["İslam’da İbadet", "Allah, İnsan İlişkisi", "Dünya ve Ahiret", "Kur’an’a Göre Hz. Muhammed", "Kur’an’da Bazı Kavramlar", "İnançla İlgili Meseleler", "Yahudilik ve Hristiyanlık", "İslam ve Bilim", "Anadolu’da İslam", "İslam Düşüncesinde Tasavvufi Yorumlar ve Mezhepler", "Güncel Dini Meseleler", "Hint ve Çin Dinleri"]
  },
  "LGS": {
    "LGS Matematik": ["Üslü Sayılar", "Köklü Sayılar", "Çarpanlar ve Katlar", "Olasılık", "Veri Analizi", "Eşitsizlikler", "Cebirsel İfadeler", "Doğrusal Denklemler ve Eğilim", "Dönüşüm Geometrisi", "Geometrik Cisimler", "Üçgenler", "Eşlik ve Benzerlik"],
    "LGS Türkçe": ["Fiilimsiler", "Sözcükte Anlam", "Deyimler ve Atasözleri", "Söz Sanatları", "Cümlede Anlam", "Parçada Anlam", "Cümlenin Ögeleri", "Noktalama İşaretleri", "Metin Türleri", "Fiillerde Çatı", "Cümle Türleri", "Yazım Kuralları", "Anlatım Bozukluğu", "Sözel Mantık"],
    "LGS Fen Bilimleri": ["Mevsimler ve İklim", "DNA ve Genetik Kod", "Basınç", "Madde ve Endüstri", "Basit Makineler", "Enerji Dönüşümleri ve Çevre Bilimi", "Elektrik Yükleri ve Elektrik Enerjisi"],
    "LGS İnkılap Tarihi": ["Bir Kahraman Doğuyor", "Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar", "Ya İstiklal Ya Ölüm", "Atatürkçülük ve Çağdaşlaşan Türkiye", "Demokratikleşme Çabaları", "Atatürk Dönemi Türk Dış Politikası", "Atatürk'ün Vefatı ve Sonrası"],
    "LGS İngilizce": ["Friendship", "Teen Life", "In The Kitchen", "On The Phone", "The Internet", "Adventures", "Tourism", "Chores", "Science", "Natural Forces"],
    "LGS Din Kültürü": ["Kader İnancı", "Bir Peygamber Tanıyorum: Hz. Musa", "Zekat ve Sadaka", "Din ve Hayat", "Hz. Muhammed'in Örnekliği", "Kur'an-ı Kerim'in Özellikleri"]
  },
  "KPSS": {
    "Genel Yetenek Türkçe": ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Sözcükte Yapı ve Ekler", "Sözcük Türleri", "Cümlenin Ögeleri", "Cümle Türleri", "Anlatım Bozuklukları", "Sözel Mantık"],
    "Genel Yetenek Matematik": ["Temel Kavramlar", "Sayı Basamakları", "Bölme ve Bölünebilme", "Asal Çarpanlar ve EBOB-EKOK", "Rasyonel ve Ondalık Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü ve Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Denklem Çözme", "Sayı, Kesir ve Yaş Problemleri", "İşçi ve Havuz Problemleri", "Yüzde, Kar-Zarar ve Faiz Problemleri", "Karışım Problemleri", "Hız ve Hareket Problemleri", "Kümeler ve İşlem", "Fonksiyonlar", "Permütasyon, Kombinasyon ve Olasılık", "Sayısal Mantık"],
    "Genel Yetenek Geometri": ["Doğruda ve Üçgende Açılar", "Özel Üçgenler", "Açıortay ve Kenarortay", "Üçgende Benzerlik ve Alan", "Çokgenler ve Dörtgenler", "Çember ve Daire", "Analitik Geometri", "Katı Cisimler"],
    "Genel Kültür Tarih": ["İslamiyet Öncesi Türk Tarihi", "İlk Türk-İslam Devletleri", "Osmanlı Devleti Kuruluş ve Yükselme", "Osmanlı Devleti Kültür ve Medeniyeti", "XVII. ve XVIII. Yüzyıllarda Osmanlı", "XIX. ve XX. Yüzyıl Başlarında Osmanlı", "Kurtuluş Savaşı Hazırlık Dönemi", "I. ve II. TBMM Dönemi", "Kurtuluş Savaşı Muharebeler ve Antlaşmalar", "Atatürk İlke ve İnkılapları", "Atatürk Dönemi İç ve Dış Politika", "Çağdaş Türk ve Dünya Tarihi"],
    "Genel Kültür Coğrafya": ["Türkiye'nin Coğrafi Konumu", "Türkiye'nin Yer Şekilleri ve Su Varlığı", "Türkiye'nin İklimi ve Bitki Örtüsü", "Türkiye'de Toprak ve Doğa Varlığı", "Türkiye'nin Nüfusu ve Yerleşme", "Türkiye'de Tarım ve Hayvancılık", "Türkiye'de Madenler ve Enerji Kaynakları", "Türkiye'de Sanayi ve Ulaşım", "Türkiye'de Ticaret ve Turizm", "Türkiye'nin Coğrafi Bölgeleri"],
    "Genel Kültür Vatandaşlık": ["Temel Hukuk Kavramları", "Devlet Biçimleri ve Hükümet Sistemleri", "Türk Anayasa Tarihi", "1982 Anayasası Temel İlkeleri", "Temel Hak ve Ödevler", "Yasama Organı (TBMM)", "Yürütme Organı ve Cumhurbaşkanlığı", "Yargı Organı ve Yüksek Mahkemeler", "İdare Hukuku ve Türkiye'nin İdari Yapısı", "Uluslararası Kuruluşlar ve Güncel Olaylar"],
    "Eğitim Bilimleri": ["Gelişim Psikolojisi", "Öğrenme Psikolojisi", "Öğretim İlke ve Yöntemleri", "Program Geliştirme", "Sınıf Yönetimi", "Öğretim Teknolojileri ve Materyal Tasarımı", "Ölçme ve Değerlendirme", "Rehberlik ve Özel Eğitim"]
  },
  "ALES": {
    "ALES Sayısal": ["Temel Kavramlar ve Sayı Kümeleri", "Basamak Analizi ve Bölünebilme", "Rasyonel Sayılar ve EBOB-EKOK", "Üslü ve Köklü İfadeler", "Eşitsizlik ve Mutlak Değer", "Çarpanlara Ayırma ve Sadeleştirme", "Oran-Orantı ve Denklem Kurma", "Sayı, Kesir ve Yaş Problemleri", "Hız, Yüzde, Kar-Zarar ve Karışım Problemleri", "Kümeler ve Fonksiyonlar", "Permütasyon, Kombinasyon ve Olasılık", "Geometri (Açılar, Üçgenler, Dörtgenler, Çember)", "Sayı Dizileri ve Örüntüler", "Tablo ve Grafik Yorumlama", "Sayısal Akıl Yürütme ve Mantık"],
    "ALES Sözel": ["Sözcükte ve Söz Öbeklerinde Anlam", "Cümlede Anlam ve Kavramlar", "Cümle Tamamlama ve Oluşturma", "Düşünceyi Geliştirme Yolları", "Paragrafta Ana Düşünce ve Yardımcı Düşünceler", "Paragrafta Yapı ve Akışı Bozan Cümle", "Paragrafta Çıkarım ve Yorum", "İki Paragrafa Bölme ve Paragraf Tamamlama", "Çoklu Paragraf Soruları", "Sözel Akıl Yürütme ve Mantıksal Çıkarım", "Sözel Sıralama ve Eşleştirme Oyunları"]
  },
  "DGS": {
    "DGS Sayısal": ["Temel İşlem Yeteneği", "Sayılar ve Rasyonel Kesirler", "Bölünebilme ve OBEB-OKEK", "Üslü ve Köklü Sayılar", "Özdeşlikler ve Çarpanlara Ayırma", "Eşitsizlik ve Mutlak Değer", "Oran-Orantı", "Sayı, Kesir ve Yaş Problemleri", "İşçi, Hareket ve Yüzde Problemleri", "Grafik ve Tablo Problemleri", "Kümeler, Fonksiyonlar ve Olasılık", "Geometri (Açılar, Alan, Çember, Analitik)", "Sayısal Mantık ve Şekil İlişkileri"],
    "DGS Sözel": ["Sözcükte Anlam ve Söz Grupları", "Cümlenin Anlam ve Yorumu", "Cümle Birleştirme ve Tamamlama", "Paragrafta Konu ve Ana Fikir", "Paragrafta Yardımcı Fikirler", "Paragrafta Boşluk Doldurma", "Anlatım Teknikleri ve Biçimleri", "Paragraf Tamamlama ve Cümle Sıralama", "Sözel Mantık ve Çıkarım Analizi"]
  },
  "AGS": {
    "Sözel Yetenek": ["Sözcükte ve Söz Gruplarında Anlam", "Cümlede Anlam ve Anlatım", "Paragrafta Anlam ve Yapı", "Sözel Muhakeme ve Mantıksal Çıkarım"],
    "Sayısal Yetenek": ["Temel Matematiksel İşlemler", "Sayısal İlişkiler ve Problemler", "Tablo ve Grafik Analizi", "Sayısal Muhakeme ve Mantık"],
    "Tarih": ["İslamiyet Öncesi ve İlk Türk-İslam Devletleri", "Osmanlı Devleti Siyasi ve Teşkilat Tarihi", "Kurtuluş Savaşı ve Milli Mücadele", "Atatürk İlkeleri ve İnkılap Tarihi"],
    "Türkiye Coğrafyası": ["Türkiye'nin Fiziki Coğrafyası", "Türkiye'nin Beşeri ve Nüfus Coğrafyası", "Türkiye'nin Ekonomik Coğrafyası"],
    "Eğitimin Temelleri ve Mevzuat": ["Eğitimin Felsefi, Sosyal ve Tarihi Temelleri", "Türk Eğitim Sisteminin Genel Amaç ve İlkeleri", "Öğretmenlik Meslek Kanunu", "Milli Eğitim Temel Kanunu (1739)", "Milli Eğitim Bakanlığı Teşkilat ve Görev Mevzuatı"]
  },
  "ÖABT": {
    "Matematik Alan Bilgisi": ["Analiz (Kalkülüs) ve İleri Analiz", "Diferansiyel Denklemler", "Lineer Cebir ve Soyut Cebir", "Analitik Geometri ve Öklid Geometrisi", "Olasılık ve İstatistik"],
    "Türkçe / Edebiyat Alan Bilgisi": ["Eski Türk Dili ve Yeni Türk Dili", "Halk Edebiyatı ve Mitoloji", "Eski Türk Edebiyatı (Divan)", "Yeni Türk Edebiyatı (Tanzimat - Cumhuriyet)", "Dilbilim ve Dünya Edebiyatı"],
    "Fen Bilimleri Alan Bilgisi": ["Fizik Alanı (Mekanik, Elektrik, Dalgalar, Modern Fizik)", "Kimya Alanı (Genel, Organik, Fizikokimya, Analitik)", "Biyoloji Alanı (Sitoloji, Genetik, Ekoloji, Fizyoloji)", "Yer Bilimleri ve Astronomi"],
    "Sosyal Bilgiler Alan Bilgisi": ["Tarih Alan Bilgisi", "Coğrafya Alan Bilgisi", "Siyaset Bilimi ve Uluslararası İlişkiler", "Sosyoloji, Felsefe ve Arkeoloji", "Sosyal Bilgilerin Temelleri"],
    "Sınıf Öğretmenliği Alan Bilgisi": ["Temel Matematik ve Fen Bilimleri", "Türk Dili ve Cumhuriyet Dönemi Edebiyatı", "Türkiye Coğrafyası ve Tarihi", "Çevre Eğitimi, Drama ve Sanat"],
    "İngilizce (İLT) Alan Bilgisi": ["Linguistics and Language Awareness", "Language Acquisition and Learning Theories", "Approaches and Methods in ELT", "English Literature and Literary Analysis", "Teaching Language Skills"],
    "Tüm Branşlar Alan Eğitimi": ["Özel Öğretim Yöntem ve Teknikleri", "Ders Müfredat Programı Analizi ve Kazanımlar", "Kavram Yanılgıları ve Giderme Yolları", "Ders Materyali Tasarımı ve Ölçme-Değerlendirme"]
  },
  "TUS": {
    "Temel Tıp Bilimleri": ["Anatomi", "Histoloji ve Embriyoloji", "Fizyoloji", "Tıbbi Biyokimya", "Tıbbi Mikrobiyoloji", "Tıbbi Patoloji", "Tıbbi Farmakoloji"],
    "Klinik Tıp Bilimleri": ["Dahiliye (İç Hastalıkları)", "Pediatri (Çocuk Sağlığı ve Hastalıkları)", "Genel Cerrahi", "Kadın Hastalıkları ve Doğum", "Küçük Stajlar (Kardiyoloji, Nöroloji, Psikiyatri, KBB, Göz, Dermatoloji, Ortopedi, Üroloji)"]
  },
  "DUS": {
    "Temel Bilimler (DUS)": ["Tıbbi Anatomi", "Histoloji ve Embriyoloji", "Fizyoloji", "Tıbbi Biyokimya", "Tıbbi Mikrobiyoloji", "Tıbbi Patoloji", "Tıbbi Farmakoloji"],
    "Klinik Bilimler (DUS)": ["Protetik Diş Tedavisi", "Restoratif Diş Tedavisi", "Ağız, Diş ve Çene Cerrahisi", "Ağız, Diş ve Çene Radyolojisi", "Periodontoloji", "Ortodonti", "Endodonti", "Pedodonti (Çocuk Diş Hekimliği)"]
  },
  "EUS": {
    "Eczacılık Temel ve Klinik Bilimleri": ["Farmasötik Kimya", "Farmakoloji ve Klinik Eczacılık", "Farmasötik Teknoloji", "Farmakognozi ve Fitoterapi", "Farmasötik Toksikoloji", "Biyokimya ve Klinik Biyokimya", "Farmasötik Mikrobiyoloji", "Farmasötik Botanik", "Eczacılık Mevzuatı ve Deontoloji"]
  },
  "YÖKDİL": {
    "Gramer ve Kelime Bilgisi": ["Zamanlar (Tenses) ve Modals", "Bağlaçlar (Conjunctions & Transitions)", "Relative & Noun Clauses", "Edatlar ve Phrasal Verbs", "Akademik Kelime Bilgisi (Vocabulary)"],
    "Okuma ve Soru Tipleri": ["Cümle Tamamlama (Sentence Completion)", "Paragraf Soruları ve Çıkarım", "Anlamca En Yakın Cümle (Restatement)", "Çeviri Soruları (İngilizce - Türkçe / Türkçe - İngilizce)", "Paragraf Tamamlama", "Akışı Bozan Cümleyi Bulma (Irrelevant Sentence)"],
    "Uzmanlık Alan Metinleri": ["Sağlık Bilimleri Özel Terminolojisi", "Fen Bilimleri Özel Terminolojisi", "Sosyal Bilimler Özel Terminolojisi"]
  }
};