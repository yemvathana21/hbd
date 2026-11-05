/**
 * ============================================================================
 * Soriya's Birthday Surprise Website — Interactive Script
 * Dedicated to Soriya Man — Birthday: November 25, 2026
 * Bilingual Support: English (EN) & Khmer (KM)
 *
 * HOW TO CUSTOMIZE / INSERT SORIYA'S REAL PHOTOGRAPHS:
 * ----------------------------------------------------------------------------
 * 1. Place Soriya's real image files into the folder:
 *      assets/images/photo-01.jpg
 *      assets/images/photo-02.jpg
 *      ...
 *      assets/images/photo-24.jpg
 *
 * 2. You can customize each photo's title, caption, and category in the
 *    `galleryItems` array below in both English and Khmer!
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL TRANSLATION DICTIONARY
     ========================================================================== */
  const translations = {
    // Navigation
    navHome: { en: 'Home', km: 'ទំព័រដើម' },
    navIntro: { en: 'Today Is Yours', km: 'ថ្ងៃពិសេសរបស់អ្នក' },
    navGallery: { en: 'Photo Gallery', km: 'កម្រងរូបថត' },
    navWishes: { en: 'Wishes', km: 'ពាក្យជូនពរ' },
    navSurprise: { en: 'Surprise', km: 'កាដូពិសេស' },
    navSurpriseBtn: { en: 'Special Surprise 🌷', km: 'កាដូពិសេស 🌷' },
    menuOpen: { en: 'Open navigation menu', km: 'បើកម៉ឺនុយរុករក' },
    menuClose: { en: 'Close navigation menu', km: 'បិទម៉ឺនុយរុករក' },

    // Opening Surprise Gate
    boomKicker: {
      en: 'A little surprise is waiting',
      km: 'កាដូតូចមួយកំពុងរង់ចាំ',
    },
    boomTitle: {
      en: 'Ready to boom?',
      km: 'តើអ្នករួចរាល់ហើយឬ?',
    },
    boomSubtitle: {
      en: 'Something special is hiding inside. Tap the gift to open it.',
      km: 'មានអ្វីពិសេសលាក់នៅខាងក្នុង។ ចុចលើកាដូដើម្បីបើកវា។',
    },
    boomButton: {
      en: 'Tap to open',
      km: 'ចុចដើម្បីបើក',
    },
    boomNote: {
      en: 'Made with love for Soriya ♡',
      km: 'បង្កើតឡើងដោយក្តីស្រឡាញ់សម្រាប់ សូរិយា ♡',
    },

    // Hero Section
    heroTag: {
      en: 'A SPECIAL DAY FOR SOMEONE SPECIAL',
      km: 'ថ្ងៃពិសេសសម្រាប់មនុស្សដ៏ពិសេស',
    },
    heroTitle: {
      en: 'Happy Birthday, Soriya!',
      km: 'រីករាយថ្ងៃខួបកំណើត, សូរិយា!',
    },
    heroDate: {
      en: 'November 25, 2026',
      km: '២៥ វិច្ឆិកា ២០២៦',
    },
    heroDesc: {
      en: 'A little collection of moments, smiles, and memories made just for you.',
      km: 'ការចងក្រងនូវរាល់ស្នាមញញឹម និងអនុស្សាវរីយ៍ដ៏ស្រស់ស្អាតបំផុតសម្រាប់អ្នក។',
    },
    heroCta: {
      en: 'Explore Your Little Surprise',
      km: 'ទស្សនាកាដូតូចមួយនេះ',
    },

    // Introduction Section
    introKicker: {
      en: 'Welcome to Your Scrapbook',
      km: 'សូមស្វាគមន៍មកកាន់សៀវភៅអនុស្សាវរីយ៍',
    },
    introHeading: {
      en: 'Today Is All About You ♡',
      km: 'ថ្ងៃនេះគឺជាថ្ងៃរបស់អ្នក ♡',
    },
    introText: {
      en: 'Today is your special day, and I just wanted to create something a little different for you. Here are some little moments worth celebrating.',
      km: 'ថ្ងៃនេះគឺជាថ្ងៃដ៏ពិសេសរបស់អ្នក ហើយខ្ញុំចង់បង្កើតអ្វីមួយដែលប្លែក និងមានន័យសម្រាប់អ្នក។ នេះជារាល់ពេលវេលាដ៏មានតម្លៃដែលគួរឱ្យចងចាំ។',
    },
    introSignature: {
      en: 'For Soriya Man',
      km: 'សម្រាប់ សូរិយា ម៉ាន',
    },

    // Gallery Section
    galleryKicker: {
      en: 'Memories & Smiles',
      km: 'អនុស្សាវរីយ៍ & ស្នាមញញឹម',
    },
    galleryTitle: {
      en: 'Beautiful Moments, Beautiful Memories',
      km: 'ពេលវេលាដ៏ស្រស់ស្អាត អនុស្សាវរីយ៍មិនអាចបំភ្លេច',
    },
    gallerySubtitle: {
      en: 'A curated digital scrapbook of {count} treasured moments. Click any photograph to view in full size.',
      km: 'កម្រងរូបថតអនុស្សាវរីយ៍ទាំង {count} សន្លឹក។ ចុចលើរូបថតដើម្បីមើលទំហំពេញ។',
    },
    filterAll: { en: 'All Memories', km: 'អនុស្សាវរីយ៍ទាំងអស់' },
    filterJoy: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    filterAdventure: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    filterWarm: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    viewFull: { en: 'View Full', km: 'មើលរូបពេញ' },
    photoWord: { en: 'Photo', km: 'រូបថត' },
    photoOf: { en: 'of', km: 'នៃ' },
    gallerySwapHint: {
      en: 'Tap the camera on any photo to add your own — saved in this browser.',
      km: 'ចុចរូបកាមេរ៉ាលើរូបថតណាមួយ ដើម្បីបន្ថែមរូបថតរបស់អ្នក — រក្សាទុកក្នុងកម្មវិធីរុករកនេះ។',
    },
    swapPhoto: { en: 'Change this photo', km: 'ប្តូររូបថតនេះ' },
    photoSaved: { en: 'Photo updated ♡', km: 'រូបថតត្រូវបានធ្វើបច្ចុប្បន្នភាព ♡' },
    photoErrorType: {
      en: 'Please choose an image file.',
      km: 'សូមជ្រើសរើសឯកសាររូបភាព។',
    },
    photoErrorSize: {
      en: 'That image is too large. Please choose one under 25 MB.',
      km: 'រូបភាពនេះធំពេក។ សូមជ្រើសរើសរូបភាពតូចជាង ២៥ MB។',
    },
    photoErrorGeneric: {
      en: 'Sorry, that photo could not be saved.',
      km: 'សូមទោស រូបថតនេះមិនអាចរក្សាទុកបានទេ។',
    },
    resetPhotos: { en: 'Reset photos', km: 'កំណត់រូបថតឡើងវិញ' },
    photosReset: {
      en: 'Original photos restored',
      km: 'រូបថតដើមត្រូវបានស្ដារឡើងវិញ',
    },
    resetPhotosConfirm: {
      en: 'Restore all original photos? Your added photos will be removed from this browser.',
      km: 'ស្ដាររូបថតដើមទាំងអស់? រូបថតដែលអ្នកបានបន្ថែមនឹងត្រូវលុបចេញពីកម្មវិធីរុករកនេះ។',
    },
    backToTop: { en: 'Back to top', km: 'ត្រឡប់ទៅខាងលើ' },

    // Gallery Guide Box
    guideTitle: {
      en: "How to add Soriya's real photographs:",
      km: 'របៀបបញ្ចូលរូបថតពិតរបស់ សូរិយា៖',
    },
    guideText: {
      en: "Save Soriya's real photo files into assets/images/ as photo-01.jpg, photo-02.jpg ... up to photo-24.jpg. The website will automatically display them!",
      km: 'ដាក់រូបថតពិតរបស់ សូរិយា ទៅក្នុងថត assets/images/ ដោយដាក់ឈ្មោះថា photo-01.jpg, photo-02.jpg ... រហូតដល់ photo-24.jpg។ គេហទំព័រនឹងបង្ហាញរូបថតទាំងនោះដោយស្វ័យប្រវត្តិ!',
    },

    // Wishes Section
    wishesKicker: {
      en: 'Heartfelt Wishes',
      km: 'ពាក្យជូនពរពីចិត្ត',
    },
    wishesTitle: {
      en: 'A Few Words for You ♡',
      km: 'ពាក្យជូនពរខ្លះៗសម្រាប់អ្នក ♡',
    },
    wishesSubtitle: {
      en: 'Warm thoughts and gentle blessings for your special day and the journey ahead.',
      km: 'ការគិតដ៏កក់ក្តៅ និងពរជ័យដ៏ប្រពៃសម្រាប់ថ្ងៃពិសេសរបស់អ្នក និងដំណើរជីវិតទៅមុខ។',
    },
    wish1: {
      en: '"May your days always be filled with happiness."',
      km: '«សូមឱ្យរាល់ថ្ងៃរបស់អ្នកតែងតែពោរពេញដោយសុភមង្គល។»',
    },
    wish2: {
      en: '"Keep smiling and never stop being yourself."',
      km: '«សូមបន្តញញឹមជានិច្ច និងកុំឈប់ធ្វើជាខ្លួនអ្នកដ៏ស្រស់ស្អាត។»',
    },
    wish3: {
      en: '"May this new chapter bring you beautiful opportunities."',
      km: '«សូមឱ្យវ័យថ្មីនេះនាំមកនូវឱកាសល្អៗជាច្រើនក្នុងជីវិត។»',
    },
    wish4: {
      en: '"Wishing you countless reasons to smile."',
      km: '«សូមជូនពរឱ្យអ្នកមានមូលហេតុរាប់មិនអស់ដើម្បីញញឹម។»',
    },

    // Interactive Blessing Envelope
    openEnvelope: {
      en: 'Open a Special Birthday Blessing ♡',
      km: 'បើកសំបុត្រពាក្យជូនពរពិសេស ♡',
    },
    closeEnvelope: {
      en: 'Close Letter',
      km: 'បិទសំបុត្រ',
    },
    letterGreeting: {
      en: 'Dear Soriya,',
      km: 'សូរិយា ជាទីស្រឡាញ់,',
    },
    letterP1: {
      en: 'Birthdays are gentle reminders of how much joy, laughter, and light one wonderful person can bring into the lives of those around them.',
      km: 'ថ្ងៃខួបកំណើត គឺជាការរំឭកដ៏ទន់ភ្លន់ថា មនុស្សដ៏អស្ចារ្យម្នាក់អាចនាំមកនូវសេចក្តីរីករាយ សំណើច និងពន្លឺយ៉ាងច្រើនដល់មនុស្សជុំវិញខ្លួន។',
    },
    letterP2: {
      en: "As you turn this beautiful new page on November 25, 2026, I hope you take a moment to look back at all you've achieved, and look forward with excitement to all the magical adventures waiting just around the corner.",
      km: 'នៅពេលឈានចូលដល់ទំព័រថ្មីដ៏ស្រស់បំព្រងនៅថ្ងៃទី ២៥ ខែវិច្ឆិកា ឆ្នាំ ២០២៦ នេះ សូមឱ្យអ្នកមានមោទនភាពចំពោះអ្វីៗដែលអ្នកបានសម្រេច និងទន្ទឹងរង់ចាំដោយក្តីរំភើបចំពោះដំណើរជីវិតដ៏អស្ចារ្យដែលកំពុងរង់ចាំនៅខាងមុខ។',
    },
    letterP3: {
      en: 'May you always stay surrounded by good health, true friends, peaceful mornings, and endless reasons to smile.',
      km: 'សូមឱ្យអ្នកតែងតែជួបតែសុខភាពល្អ មិត្តភក្តិល្អ ព្រឹកព្រលឹមដ៏ស្ងប់សុខ និងមូលហេតុរាប់មិនអស់ដើម្បីញញឹម។',
    },
    letterClosing: {
      en: 'With warmest wishes, always ♡',
      km: 'ដោយក្តីជូនពរយ៉ាងកក់ក្តៅជានិច្ច ♡',
    },

    // Final Surprise Section
    surpriseKicker: {
      en: 'A Special Closing Note',
      km: 'សារចុងក្រោយដ៏ពិសេស',
    },
    surpriseTitle: {
      en: 'Once Again, Happy Birthday, Soriya! 🌷',
      km: 'ជាថ្មីម្តងទៀត រីករាយថ្ងៃខួបកំណើត, សូរិយា! 🌷',
    },
    surpriseMessage: {
      en: 'I hope your birthday is filled with laughter, happiness, and unforgettable moments. Keep shining and enjoy every little moment of your special day.',
      km: 'ខ្ញុំសង្ឃឹមថាថ្ងៃខួបកំណើតរបស់អ្នកនឹងពោរពេញដោយសំណើច សេចក្តីសុខ និងពេលវេលាមិនអាចបំភ្លេចបាន។ សូមបន្តបញ្ចេញពន្លឺ និងរីករាយជាមួយគ្រប់វិនាទីនៃថ្ងៃដ៏ពិសេសនេះ។',
    },
    cardSealTitle: {
      en: "Soriya Man's 2026 Birthday Collection",
      km: 'កម្រងអនុស្សាវរីយ៍ខួបកំណើត ២០២៦ របស់ សូរិយា ម៉ាន',
    },
    cardSealSub: {
      en: 'November 25, 2026 · Celebrated with love and care',
      km: '២៥ វិច្ឆិកា ២០២៦ · អបអរដោយក្តីស្រឡាញ់ និងការយកចិត្តទុកដាក់',
    },
    celebrateBtn: {
      en: 'Made with a little extra care ♡',
      km: 'បង្កើតឡើងដោយក្តីស្រឡាញ់ ♡',
    },
    celebrationToast: {
      en: 'Wishing you the happiest birthday ever, Soriya! Keep shining bright! ✨',
      km: 'សូមជូនពរឱ្យ សូរិយា មានថ្ងៃខួបកំណើតដ៏រីករាយបំផុត! សូមបន្តចែងចាំងជានិច្ច! ✨',
    },

    // Music Player
    musicTitle: {
      en: 'Birthday Melody',
      km: 'បទភ្លេងខួបកំណើត',
    },
    musicClickToPlay: {
      en: 'Click to Play',
      km: 'ចុចដើម្បីស្តាប់',
    },
    musicPlaying: {
      en: 'Playing ♪',
      km: 'កំពុងចាក់ ♪',
    },
    musicPaused: {
      en: 'Paused',
      km: 'ផ្អាក',
    },

    // Footer
    footerCreated: {
      en: 'Created especially for',
      km: 'បង្កើតឡើងជាពិសេសសម្រាប់',
    },
    footerDate: {
      en: 'November 25, 2026',
      km: '២៥ វិច្ឆិកា ២០២៦',
    },
    footerSub: {
      en: 'Designed as a digital birthday scrapbook with',
      km: 'រចនាឡើងជាសៀវភៅអនុស្សាវរីយ៍ឌីជីថលដោយ',
    },
  };

  function getStoredLanguage() {
    try {
      return localStorage.getItem('soriya_lang') || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function storeLanguage(lang) {
    try {
      localStorage.setItem('soriya_lang', lang);
    } catch (e) {
      // Storage can be unavailable in private browsing; ignore it.
    }
  }

  let currentLang = getStoredLanguage();
  let hasStartedMusic = false;

  function t(key) {
    if (!translations[key]) return key;
    return translations[key][currentLang] || translations[key]['en'] || key;
  }

  function toKhmerDigits(num) {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return String(num).replace(/[0-9]/g, (digit) => khmerDigits[parseInt(digit, 10)]);
  }

  /* ==========================================================================
     2. PHOTO GALLERY CONFIGURATION (BILINGUAL)
     ========================================================================== */
  const galleryItems = [
    {
      id: 1,
      src: 'assets/images/photo-01.jpg',
      title: { en: 'Sweet Smiles & Sunshine', km: 'ស្នាមញញឹមផ្អែមល្ហែម & ពន្លឺថ្ងៃ' },
      caption: {
        en: 'A warm smile that brightens any room.',
        km: 'ស្នាមញញឹមដ៏កក់ក្តៅដែលធ្វើឱ្យគ្រប់ទីកន្លែងពោរពេញដោយពន្លឺ។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 2,
      src: 'assets/images/photo-02.jpg',
      title: { en: 'Coffee Shop Afternoon', km: 'រសៀលនៅហាងកាហ្វេ' },
      caption: {
        en: 'Warm lattes and quiet little conversations.',
        km: 'កាហ្វេឡាតេក្តៅៗ និងការជជែកគ្នាយ៉ាងស្ងប់ស្ងាត់។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 3,
      src: 'assets/images/photo-03.jpg',
      title: { en: 'Park Stroll in Spring', km: 'ដើរលំហែក្នុងសួនច្បារ' },
      caption: {
        en: 'Gentle afternoon walks under leafy trees.',
        km: 'ដើរលំហែកាយពេលរសៀលក្រោមម្លប់ដើមឈើត្រឈឹងត្រឈៃ។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 4,
      src: 'assets/images/photo-04.jpg',
      title: { en: 'Golden Hour Glow', km: 'ពន្លឺព្រះអាទិត្យអស្តង្គត' },
      caption: {
        en: 'Caught in the softest golden sunset light.',
        km: 'សម្រស់ដ៏ទន់ភ្លន់ក្រោមពន្លឺថ្ងៃរៀបលិចពណ៌មាស។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 5,
      src: 'assets/images/photo-05.jpg',
      title: { en: 'Favorite Rainy Day', km: 'ថ្ងៃភ្លៀងដ៏កក់ក្តៅ' },
      caption: {
        en: 'Listening to raindrops cozy by the window.',
        km: 'ស្តាប់សំឡេងដំណក់ទឹកភ្លៀងក្បែរបង្អួចយ៉ាងមានក្តីសុខ។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 6,
      src: 'assets/images/photo-06.jpg',
      title: { en: 'Spontaneous Adventures', km: 'ដំណើរផ្សងព្រេងភ្លាមៗ' },
      caption: {
        en: 'Unplanned road trips and happy memories.',
        km: 'ដំណើរកម្សាន្តដែលពោរពេញដោយសំណើច និងភាពរីករាយ។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 7,
      src: 'assets/images/photo-07.jpg',
      title: { en: 'Unstoppable Laughter', km: 'សំណើចឥតឈប់ឈរ' },
      caption: {
        en: 'When everything was just too funny to stop.',
        km: 'ពេលដែលរឿងគ្រប់យ៉ាងធ្វើឱ្យយើងផ្ទុះសំណើចបាត់អស់ទុក្ខកង្វល់។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 8,
      src: 'assets/images/photo-08.jpg',
      title: { en: 'Quiet Bookish Corners', km: 'ជ្រុងសៀវភៅដ៏ស្ងប់ស្ងាត់' },
      caption: {
        en: 'Lost in pages and gentle peaceful hours.',
        km: 'ជក់ចិត្តនឹងទំព័រសៀវភៅក្នុងម៉ោងពេលដ៏ស្ងប់សុខ។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 9,
      src: 'assets/images/photo-09.jpg',
      title: { en: 'A Beautiful New Morning', km: 'ព្រឹកព្រលឹមដ៏ស្រស់បំព្រង' },
      caption: {
        en: 'Waking up to gentle sunshine and fresh tea.',
        km: 'ភ្ញាក់ឡើងទទួលពន្លឺព្រះអាទិត្យ និងតែក្តៅៗដ៏ឈ្ងុយឆ្ងាញ់។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 10,
      src: 'assets/images/photo-10.jpg',
      title: { en: 'Sweet Treats & Pastries', km: 'នំផ្អែមដ៏ឈ្ងុយឆ្ងាញ់' },
      caption: {
        en: 'The best strawberry tart we ever tasted.',
        km: 'រសជាតិនំស្ត្រប៊ែរីដ៏ឈ្ងុយឆ្ងាញ់ដែលមិនអាចបំភ្លេចបាន។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 11,
      src: 'assets/images/photo-11.jpg',
      title: { en: 'The Warmest Hugs', km: 'ការឱបដ៏កក់ក្តៅបំផុត' },
      caption: {
        en: 'Treasured moments with people who care.',
        km: 'ពេលវេលាដ៏មានតម្លៃជាមួយមនុស្សដែលតែងតែបារម្ភពីយើង។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 12,
      src: 'assets/images/photo-12.jpg',
      title: { en: 'City Lights & Dreams', km: 'ពន្លឺភ្លើងទីក្រុង & ក្តីស្រមៃ' },
      caption: {
        en: 'Wandering under sparkling city twilight.',
        km: 'ដើរលំហែក្រោមពន្លឺភ្លើងទីក្រុងរាត្រីដ៏ស្រស់ស្អាត។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 13,
      src: 'assets/images/photo-13.jpg',
      title: { en: 'Flower Market Sunday', km: 'ផ្សារផ្កានាថ្ងៃអាទិត្យ' },
      caption: {
        en: 'Fresh peonies, blush roses, and sweet scents.',
        km: 'ផ្កាកុលាប និងផ្កាស្រស់ៗជាមួយក្លិនក្រអូបប្រហើរ។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 14,
      src: 'assets/images/photo-14.jpg',
      title: { en: 'Candid Little Moments', km: 'រូបថតបែបធម្មជាតិ' },
      caption: {
        en: 'The most genuine expression captured naturally.',
        km: 'ទឹកមុខ និងស្នាមញញឹមពិតៗដែលផ្តិតជាប់ដោយធម្មជាតិ។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 15,
      src: 'assets/images/photo-15.jpg',
      title: { en: 'Chasing Soft Sunsets', km: 'គយគន់ថ្ងៃលិចដ៏រ៉ូមែនទិក' },
      caption: {
        en: 'Pastel clouds drifting slowly into dusk.',
        km: 'ពពកពណ៌ផ្កាឈូកអណ្តែតយឺតៗពេលព្រលប់។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 16,
      src: 'assets/images/photo-16.jpg',
      title: { en: 'Stories Shared Together', km: 'រឿងរ៉ាវដែលបានចែករំលែក' },
      caption: {
        en: 'Hours that flew by while talking about everything.',
        km: 'ពេលវេលាហោះកន្លងផុតយ៉ាងលឿនពេលជជែកគ្នាពីគ្រប់រឿងរ៉ាវ។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 17,
      src: 'assets/images/photo-17.jpg',
      title: { en: 'A Gentle Breeze', km: 'ខ្យល់ជំនោរដ៏ត្រជាក់' },
      caption: {
        en: 'Cool wind, peaceful skies, and clear thoughts.',
        km: 'ខ្យល់បក់រំភើយ មេឃស្រឡះ និងចិត្តស្ងប់។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 18,
      src: 'assets/images/photo-18.jpg',
      title: { en: 'Your Kindness & Light', km: 'ចិត្តសប្បុរស & ពន្លឺរបស់អ្នក' },
      caption: {
        en: 'Always bringing warmth wherever you go.',
        km: 'តែងតែនាំមកនូវភាពកក់ក្តៅ និងភាពរីករាយគ្រប់ទីកន្លែង។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 19,
      src: 'assets/images/photo-19.jpg',
      title: { en: 'Daydreaming by the Window', km: 'ការស្រមៃក្បែរបង្អួច' },
      caption: {
        en: 'Thinking of dream destinations and future steps.',
        km: 'គិតពីគោលដៅក្នុងក្តីស្រមៃ និងជំហានជីវិតទៅមុខ។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 20,
      src: 'assets/images/photo-20.jpg',
      title: { en: 'The Best Days Ahead', km: 'ថ្ងៃល្អៗដែលកំពុងរង់ចាំ' },
      caption: {
        en: 'Looking forward with excited, shining eyes.',
        km: 'សម្លឹងទៅមុខដោយកែវភ្នែកភ្លឺថ្លា និងពោរពេញដោយក្តីសង្ឃឹម។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 21,
      src: 'assets/images/photo-21.jpg',
      title: { en: 'Cozy Sweaters & Tea', km: 'អាវរងាកក់ក្តៅ & តែមួយពែង' },
      caption: {
        en: 'Wrapped up warm against chilly mornings.',
        km: 'ភាពកក់ក្តៅក្នុងព្រឹកដ៏ត្រជាក់ស្រួល។',
      },
      category: 'warm',
      categoryLabel: { en: 'Warm Memories', km: 'អនុស្សាវរីយ៍កក់ក្តៅ' },
    },
    {
      id: 22,
      src: 'assets/images/photo-22.jpg',
      title: { en: 'Unforgettable Little Smiles', km: 'ស្នាមញញឹមតូចៗដែលមិនអាចបំភ្លេច' },
      caption: {
        en: 'The little moments that make life so special.',
        km: 'រាល់វិនាទីតូចៗដែលធ្វើឱ្យជីវិតនេះមានអត្ថន័យ។',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
    {
      id: 23,
      src: 'assets/images/photo-23.jpg',
      title: { en: 'Starry Night Thoughts', km: 'ការគិតក្រោមមេឃពេញដោយផ្កាយ' },
      caption: {
        en: 'Looking up at a sky full of endless possibilities.',
        km: 'សម្លឹងមើលមេឃផ្កាយដែលពោរពេញដោយឱកាសគ្មានទីបញ្ចប់។',
      },
      category: 'adventure',
      categoryLabel: { en: 'Little Adventures', km: 'ដំណើរកម្សាន្ត' },
    },
    {
      id: 24,
      src: 'assets/images/photo-24.jpg',
      title: { en: 'Happy 2026 Chapter', km: 'ជំពូកថ្មីនៃឆ្នាំ ២០២៦' },
      caption: {
        en: "November 25, 2026 — Soriya's Special Day!",
        km: '២៥ វិច្ឆិកា ២០២៦ — ថ្ងៃខួបកំណើតដ៏ពិសេសរបស់ សូរិយា!',
      },
      category: 'joy',
      categoryLabel: { en: 'Smiles & Joy', km: 'ស្នាមញញឹម & ក្តីរីករាយ' },
    },
  ];

  let currentCategory = 'all';
  let activeLightboxIndex = 0;
  let activeFilteredList = [...galleryItems];
  let lastFocusedElement = null;

  // Remember the original placeholder images so the reset button can restore them.
  const defaultPhotoSources = new Map(galleryItems.map((item) => [item.id, item.src]));

  /* ==========================================================================
     3. DOM ELEMENTS & TEXT LOCALIZATION
     ========================================================================== */
  function applyLanguage(lang) {
    currentLang = lang;
    storeLanguage(lang);

    document.documentElement.lang = lang;
    if (lang === 'km') {
      document.body.classList.add('lang-km');
    } else {
      document.body.classList.remove('lang-km');
    }

    // Update Language Toggle buttons active state
    const enBtn = document.getElementById('lang-btn-en');
    const kmBtn = document.getElementById('lang-btn-km');
    if (enBtn && kmBtn) {
      if (lang === 'km') {
        enBtn.classList.remove('active');
        kmBtn.classList.add('active');
      } else {
        kmBtn.classList.remove('active');
        enBtn.classList.add('active');
      }
    }

    // Static Elements with data-i18n
    const galleryCount = galleryItems.length;
    const galleryCountStr = lang === 'km' ? toKhmerDigits(galleryCount) : String(galleryCount);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!translations[key]) return;
      let text = translations[key][lang] || translations[key]['en'];
      if (text.includes('{count}')) {
        text = text.replace(/\{count\}/g, galleryCountStr);
      }
      el.textContent = text;
    });

    // Brand logo
    const brandLogo = document.getElementById('brand-logo-text');
    if (brandLogo) {
      brandLogo.textContent = lang === 'km' ? 'សូរិយា ម៉ាន ♡' : 'Soriya Man ♡';
    }

    // Mobile menu toggle label
    const menuToggle = document.getElementById('menu-toggle-btn');
    const primaryNav = document.getElementById('primary-nav');
    if (menuToggle) {
      const isMenuOpen = primaryNav && primaryNav.classList.contains('open');
      menuToggle.setAttribute('aria-label', isMenuOpen ? t('menuClose') : t('menuOpen'));
    }

    // Opening surprise gate button label
    const introOpenBtn = document.getElementById('open-surprise-btn');
    if (introOpenBtn) {
      introOpenBtn.setAttribute('aria-label', t('boomButton'));
    }

    // Back to top button label
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.setAttribute('aria-label', t('backToTop'));
      backToTopBtn.title = t('backToTop');
    }

    // Filter Buttons
    const btnAll = document.querySelector('[data-category="all"]');
    const btnJoy = document.querySelector('[data-category="joy"]');
    const btnAdv = document.querySelector('[data-category="adventure"]');
    const btnWarm = document.querySelector('[data-category="warm"]');
    if (btnAll) btnAll.textContent = `${t('filterAll')} (${galleryCountStr})`;
    if (btnJoy) btnJoy.textContent = t('filterJoy');
    if (btnAdv) btnAdv.textContent = t('filterAdventure');
    if (btnWarm) btnWarm.textContent = t('filterWarm');

    // Envelope Button
    const envelopeBtn = document.getElementById('open-envelope-btn');
    const revealedLetter = document.getElementById('revealed-letter');
    if (envelopeBtn) {
      const isOpen = revealedLetter && revealedLetter.classList.contains('open');
      const label = isOpen ? t('closeEnvelope') : t('openEnvelope');
      envelopeBtn.setAttribute('aria-expanded', String(isOpen));
      envelopeBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${
            isOpen
              ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
              : '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'
          }
        </svg>
        ${label}
      `;
    }

    // Music Player Status
    const musicStatusText = document.getElementById('music-status-text');
    if (musicStatusText) {
      if (isPlaying) {
        musicStatusText.textContent = t('musicPlaying');
      } else if (hasStartedMusic) {
        musicStatusText.textContent = t('musicPaused');
      } else {
        musicStatusText.textContent = t('musicClickToPlay');
      }
    }

    // Re-render gallery cards with new language
    renderGallery();

    // If lightbox is currently open, update its content too
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      updateLightboxContent();
    }
  }

  // Setup Language Switcher Listeners
  const enBtn = document.getElementById('lang-btn-en');
  const kmBtn = document.getElementById('lang-btn-km');
  if (enBtn) {
    enBtn.addEventListener('click', () => applyLanguage('en'));
  }
  if (kmBtn) {
    kmBtn.addEventListener('click', () => applyLanguage('km'));
  }

  /* ==========================================================================
     3b. MOBILE NAVIGATION MENU
     ========================================================================== */
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const navMenu = document.getElementById('primary-nav');

  function closeMobileMenu() {
    if (!navMenu || !menuToggleBtn) return;
    navMenu.classList.remove('open');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    menuToggleBtn.setAttribute('aria-label', t('menuOpen'));
    document.body.classList.remove('menu-open');
  }

  function openMobileMenu() {
    if (!navMenu || !menuToggleBtn) return;
    navMenu.classList.add('open');
    menuToggleBtn.setAttribute('aria-expanded', 'true');
    menuToggleBtn.setAttribute('aria-label', t('menuClose'));
    document.body.classList.add('menu-open');
  }

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close when clicking outside the menu
    document.addEventListener('click', (event) => {
      if (!navMenu.classList.contains('open')) return;
      if (navMenu.contains(event.target) || menuToggleBtn.contains(event.target)) return;
      closeMobileMenu();
    });

    // Reset the menu when resizing back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMobileMenu();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    });
  }

  /* ==========================================================================
     4. RENDER PHOTO GALLERY & FILTER TABS
     ========================================================================== */
  const galleryGrid = document.getElementById('masonry-gallery');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    activeFilteredList = galleryItems.filter((item) => {
      if (currentCategory === 'all') return true;
      return item.category.toLowerCase() === currentCategory.toLowerCase();
    });

    activeFilteredList.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card fade-in-element';
      card.dataset.photoId = String(item.id);
      card.style.setProperty('--reveal-delay', `${(index % 6) * 70}ms`);

      const itemTitle = item.title[currentLang] || item.title['en'];
      const itemCaption = item.caption[currentLang] || item.caption['en'];
      const itemCategory = item.categoryLabel[currentLang] || item.categoryLabel['en'];
      const photoNumStr = currentLang === 'km' ? toKhmerDigits(item.id) : String(item.id).padStart(2, '0');
      const photoWordStr = t('photoWord');
      const viewLabel = `${t('viewFull')} — ${photoWordStr} ${photoNumStr}: ${itemTitle}`;
      const swapLabel = `${t('swapPhoto')} — ${photoWordStr} ${photoNumStr}`;

      card.innerHTML = `
        <div class="photo-wrapper">
          <button class="photo-open-btn" type="button" aria-label="${viewLabel}">
            <img src="${item.src}" alt="${itemTitle}" loading="lazy" />
            <span class="photo-overlay" aria-hidden="true">
              <span class="overlay-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                ${t('viewFull')}
              </span>
            </span>
          </button>

          <button class="photo-swap-btn" type="button" title="${t('swapPhoto')}" aria-label="${swapLabel}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </button>

          <input
            class="photo-file-input"
            type="file"
            accept="image/*"
            data-photo-id="${item.id}"
            hidden
          />
        </div>
        <div class="card-meta">
          <div class="card-header-row">
            <span class="card-photo-num">${photoWordStr} ${photoNumStr}</span>
            <span class="card-category">${itemCategory}</span>
          </div>
          <h3 class="card-title">${itemTitle}</h3>
          <p class="card-caption">${itemCaption}</p>
        </div>
      `;

      galleryGrid.appendChild(card);
    });

    observeFadeInElements();
  }

  // Filter Buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderGallery();
    });
  });

  // Delegated gallery actions: open the lightbox or replace a photo.
  if (galleryGrid) {
    galleryGrid.addEventListener('click', (event) => {
      if (event.target.classList.contains('photo-file-input')) {
        event.stopPropagation();
        return;
      }

      const swapBtn = event.target.closest('.photo-swap-btn');
      if (swapBtn) {
        event.preventDefault();
        event.stopPropagation();
        const card = swapBtn.closest('.gallery-card');
        const input = card && card.querySelector('.photo-file-input');
        if (input) {
          input.value = '';
          input.click();
        }
        return;
      }

      const card = event.target.closest('.gallery-card');
      if (!card) return;
      const photoId = Number(card.dataset.photoId);
      const index = activeFilteredList.findIndex((item) => item.id === photoId);
      if (index !== -1) openLightbox(index);
    });

    galleryGrid.addEventListener('change', (event) => {
      const input = event.target.closest('.photo-file-input');
      if (!input) return;
      event.stopPropagation();
      const file = input.files && input.files[0];
      const card = input.closest('.gallery-card');
      const photoId = Number(input.dataset.photoId);
      input.value = '';
      if (file && card) handlePhotoFile(file, photoId, card);
    });
  }

  const resetPhotosBtn = document.getElementById('reset-photos-btn');
  if (resetPhotosBtn) {
    resetPhotosBtn.addEventListener('click', resetGalleryPhotos);
  }

  /* ==========================================================================
     4b. PHOTO SWAP — UPLOAD, PERSIST IN THE BROWSER, AND RESET
     ========================================================================== */
  const PHOTO_DB_NAME = 'soriya_birthday_photos';
  const PHOTO_DB_VERSION = 1;
  const PHOTO_STORE_NAME = 'photos';
  const PHOTO_LS_PREFIX = 'soriya_custom_photo_';
  const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;
  const MAX_PHOTO_DIMENSION = 1600;
  const MAX_DATA_URL_LENGTH = 1400000;

  let photoDbPromise = null;
  let photoToast = null;
  let photoToastTimer = null;

  function openPhotoDatabase() {
    if (photoDbPromise) return photoDbPromise;

    photoDbPromise = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error('IndexedDB is unavailable'));
        return;
      }

      let request;
      try {
        request = window.indexedDB.open(PHOTO_DB_NAME, PHOTO_DB_VERSION);
      } catch (error) {
        reject(error);
        return;
      }

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(PHOTO_STORE_NAME)) {
          db.createObjectStore(PHOTO_STORE_NAME, { keyPath: 'id' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Could not open photo storage'));
      request.onblocked = () => reject(new Error('Photo storage is blocked'));
    }).catch((error) => {
      // Allow a later attempt (for example after the browser unblocks storage).
      photoDbPromise = null;
      throw error;
    });

    return photoDbPromise;
  }

  function readAllPhotoRecords(db) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(PHOTO_STORE_NAME, 'readonly');
      const request = transaction.objectStore(PHOTO_STORE_NAME).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error || new Error('Could not read photos'));
    });
  }

  function savePhotoRecord(id, dataUrl) {
    return openPhotoDatabase()
      .then(
        (db) =>
          new Promise((resolve, reject) => {
            const transaction = db.transaction(PHOTO_STORE_NAME, 'readwrite');
            transaction.objectStore(PHOTO_STORE_NAME).put({
              id,
              dataUrl,
              updatedAt: Date.now(),
            });
            transaction.oncomplete = () => resolve(true);
            transaction.onerror = () =>
              reject(transaction.error || new Error('Could not save photo'));
            transaction.onabort = () =>
              reject(transaction.error || new Error('Could not save photo'));
          })
      )
      .then(() => {
        try {
          localStorage.removeItem(PHOTO_LS_PREFIX + id);
        } catch (error) {
          // Ignore storage cleanup failures.
        }
        return true;
      })
      .catch(() => {
        // localStorage keeps the feature working on file:// in browsers that
        // block IndexedDB, even though it has a smaller quota.
        try {
          localStorage.setItem(PHOTO_LS_PREFIX + id, dataUrl);
          return true;
        } catch (error) {
          return false;
        }
      });
  }

  function loadSavedPhotos() {
    const saved = new Map();

    return openPhotoDatabase()
      .then(readAllPhotoRecords)
      .then((records) => {
        records.forEach((record) => {
          if (record && record.dataUrl) saved.set(Number(record.id), record.dataUrl);
        });
      })
      .catch(() => {
        // Fall back to localStorage below.
      })
      .then(() => {
        galleryItems.forEach((item) => {
          if (saved.has(item.id)) return;
          try {
            const dataUrl = localStorage.getItem(PHOTO_LS_PREFIX + item.id);
            if (dataUrl) saved.set(item.id, dataUrl);
          } catch (error) {
            // Storage can be unavailable in private browsing.
          }
        });

        saved.forEach((dataUrl, id) => {
          if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) return;
          const item = galleryItems.find((entry) => entry.id === id);
          if (item) item.src = dataUrl;
        });

        updateResetButton();
        return saved.size;
      });
  }

  function clearSavedPhotos() {
    const clearDatabase = openPhotoDatabase()
      .then(
        (db) =>
          new Promise((resolve, reject) => {
            const transaction = db.transaction(PHOTO_STORE_NAME, 'readwrite');
            transaction.objectStore(PHOTO_STORE_NAME).clear();
            transaction.oncomplete = () => resolve();
            transaction.onerror = () =>
              reject(transaction.error || new Error('Could not clear photos'));
            transaction.onabort = () =>
              reject(transaction.error || new Error('Could not clear photos'));
          })
      )
      .catch(() => {
        // localStorage is cleared below regardless.
      });

    return clearDatabase.then(() => {
      try {
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith(PHOTO_LS_PREFIX)) localStorage.removeItem(key);
        });
      } catch (error) {
        // Ignore storage cleanup failures.
      }
    });
  }

  function hasCustomPhotos() {
    return galleryItems.some((item) => item.src !== defaultPhotoSources.get(item.id));
  }

  function updateResetButton() {
    const button = document.getElementById('reset-photos-btn');
    if (button) button.hidden = !hasCustomPhotos();
  }

  function showPhotoToast(message, type) {
    if (!photoToast) {
      photoToast = document.createElement('div');
      photoToast.className = 'photo-toast';
      photoToast.setAttribute('role', 'status');
      photoToast.setAttribute('aria-live', 'polite');
      document.body.appendChild(photoToast);
    }

    photoToast.textContent = message;
    photoToast.dataset.type = type || 'success';
    photoToast.classList.remove('show');
    void photoToast.offsetWidth;
    photoToast.classList.add('show');

    window.clearTimeout(photoToastTimer);
    photoToastTimer = window.setTimeout(() => {
      photoToast.classList.remove('show');
    }, 3200);
  }

  function decodeImageFile(file) {
    return new Promise((resolve, reject) => {
      const objectUrl = URL.createObjectURL(file);
      const image = new Image();
      image.onload = () => resolve({ image, objectUrl });
      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Could not read the image'));
      };
      image.src = objectUrl;
    });
  }

  function preparePhoto(file) {
    return decodeImageFile(file).then(({ image, objectUrl }) => {
      try {
        const width = image.naturalWidth || image.width;
        const height = image.naturalHeight || image.height;
        if (!width || !height) throw new Error('The image is empty');

        const scale = Math.min(1, MAX_PHOTO_DIMENSION / Math.max(width, height));
        const targetWidth = Math.max(1, Math.round(width * scale));
        const targetHeight = Math.max(1, Math.round(height * scale));

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const context = canvas.getContext('2d');
        if (!context) throw new Error('Canvas is unavailable');

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, targetWidth, targetHeight);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(image, 0, 0, targetWidth, targetHeight);

        let quality = 0.86;
        let dataUrl = canvas.toDataURL('image/jpeg', quality);
        while (dataUrl.length > MAX_DATA_URL_LENGTH && quality > 0.55) {
          quality -= 0.07;
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }
        return dataUrl;
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    });
  }

  function handlePhotoFile(file, id, card) {
    if (!file) return;

    if (!file.type || !file.type.startsWith('image/')) {
      showPhotoToast(t('photoErrorType'), 'error');
      return;
    }

    if (file.size > MAX_UPLOAD_BYTES) {
      showPhotoToast(t('photoErrorSize'), 'error');
      return;
    }

    if (card) card.classList.add('is-swapping');

    preparePhoto(file)
      .then((dataUrl) =>
        savePhotoRecord(id, dataUrl).then((saved) => {
          if (!saved) throw new Error('Could not save the photo');

          const item = galleryItems.find((entry) => entry.id === id);
          if (!item) throw new Error('Could not find the photo');

          item.src = dataUrl;

          const targetCard = card || galleryGrid.querySelector(`[data-photo-id="${id}"]`);
          if (targetCard) {
            const image = targetCard.querySelector('.photo-open-btn img');
            if (image) {
              image.classList.remove('photo-updated');
              void image.offsetWidth;
              image.src = dataUrl;
              image.classList.add('photo-updated');
            }
          }

          updateResetButton();

          if (lightboxModal && lightboxModal.classList.contains('active')) {
            const activeItem = activeFilteredList[activeLightboxIndex];
            if (activeItem && activeItem.id === id) updateLightboxContent();
          }

          showPhotoToast(t('photoSaved'));
        })
      )
      .catch(() => {
        showPhotoToast(t('photoErrorGeneric'), 'error');
      })
      .finally(() => {
        if (card) card.classList.remove('is-swapping');
      });
  }

  function resetGalleryPhotos() {
    if (!hasCustomPhotos()) return;

    const confirmMessage = t('resetPhotosConfirm');
    if (typeof window.confirm === 'function' && !window.confirm(confirmMessage)) return;

    galleryItems.forEach((item) => {
      item.src = defaultPhotoSources.get(item.id);
    });

    clearSavedPhotos().finally(() => {
      updateResetButton();
      renderGallery();
      observeFadeInElements();

      if (lightboxModal && lightboxModal.classList.contains('active')) {
        updateLightboxContent();
      }

      showPhotoToast(t('photosReset'));
    });
  }

  /* ==========================================================================
     5. LIGHTBOX FUNCTIONALITY
     ========================================================================== */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  function openLightbox(index) {
    if (!activeFilteredList[index]) return;
    activeLightboxIndex = index;
    updateLightboxContent();
    lastFocusedElement = document.activeElement;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    // Restore focus before hiding the dialog so screen readers keep context.
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
    lightboxModal.setAttribute('aria-hidden', 'true');
  }

  function updateLightboxContent() {
    const item = activeFilteredList[activeLightboxIndex];
    if (!item) return;

    const itemTitle = item.title[currentLang] || item.title['en'];
    const itemCaption = item.caption[currentLang] || item.caption['en'];
    const itemCategory = item.categoryLabel[currentLang] || item.categoryLabel['en'];
    // Use the same global photo number shown on the gallery card
    const currentNum =
      currentLang === 'km' ? toKhmerDigits(item.id) : String(item.id).padStart(2, '0');
    const totalNum =
      currentLang === 'km'
        ? toKhmerDigits(galleryItems.length)
        : String(galleryItems.length).padStart(2, '0');

    lightboxImg.src = item.src;
    lightboxImg.alt = itemTitle;
    lightboxTitle.textContent = itemTitle;
    lightboxDesc.textContent = itemCaption;
    lightboxCounter.textContent = `${t('photoWord')} ${currentNum} ${t('photoOf')} ${totalNum} · ${itemCategory}`;
  }

  function showNextPhoto() {
    if (activeFilteredList.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % activeFilteredList.length;
    updateLightboxContent();
  }

  function showPrevPhoto() {
    if (activeFilteredList.length === 0) return;
    activeLightboxIndex =
      (activeLightboxIndex - 1 + activeFilteredList.length) % activeFilteredList.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevPhoto);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-dialog')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation + focus trap for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;

    if (e.key === 'Tab') {
      const focusable = [lightboxCloseBtn, lightboxPrevBtn, lightboxNextBtn].filter(Boolean);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      return;
    }

    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showNextPhoto();
    else if (e.key === 'ArrowLeft') showPrevPhoto();
  });

  /* ==========================================================================
     6. FLOATING FLOWER PETALS & HEARTS CANVAS
     ========================================================================== */
  const canvas = document.getElementById('petals-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const petalCount = 28;
    const petals = [];

    const petalColors = [
      'rgba(250, 210, 225, 0.75)',
      'rgba(253, 226, 228, 0.70)',
      'rgba(244, 172, 183, 0.65)',
      'rgba(255, 230, 238, 0.80)',
      'rgba(229, 107, 111, 0.55)',
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 10 + 8;
        this.speedY = Math.random() * 0.9 + 0.6;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1.5;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.isHeart = Math.random() < 0.22;
        this.sway = Math.random() * 2 * Math.PI;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.sway += this.swaySpeed;
        this.x += this.speedX + Math.sin(this.sway) * 0.8;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;

        if (this.isHeart) {
          const s = this.size * 0.6;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s, -s * 0.6, -s * 1.2, s * 0.5, 0, s * 1.2);
          ctx.bezierCurveTo(s * 1.2, s * 0.5, s, -s * 0.6, 0, s * 0.3);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    function animatePetals() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
      requestAnimationFrame(animatePetals);
    }
    animatePetals();
  }

  /* ==========================================================================
     7. BACKGROUND MUSIC PLAYER (WITH WEB AUDIO FALLBACK)
     ========================================================================== */
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicContainer = document.getElementById('floating-music-player');
  const musicStatusText = document.getElementById('music-status-text');
  const bgAudio = document.getElementById('bg-audio');

  let isPlaying = false;
  let webAudioCtx = null;
  let synthLoopTimer = null;

  function startChimeSynthesizer() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!webAudioCtx) webAudioCtx = new AudioContextClass();
      if (webAudioCtx.state === 'suspended') webAudioCtx.resume();

      const notes = [
        392.0, 392.0, 440.0, 392.0, 523.25, 493.88,
        392.0, 392.0, 440.0, 392.0, 587.33, 523.25,
        392.0, 392.0, 783.99, 659.25, 523.25, 493.88, 440.0,
        698.46, 698.46, 659.25, 523.25, 587.33, 523.25
      ];
      const durations = [
        0.4, 0.35, 0.8, 0.8, 0.8, 1.4,
        0.4, 0.35, 0.8, 0.8, 0.8, 1.4,
        0.4, 0.35, 0.8, 0.8, 0.7, 0.7, 1.2,
        0.4, 0.35, 0.8, 0.8, 0.8, 2.2
      ];

      let noteIndex = 0;

      function playNextNote() {
        if (!isPlaying) return;
        const freq = notes[noteIndex];
        const dur = durations[noteIndex] || 0.6;

        const osc = webAudioCtx.createOscillator();
        const gain = webAudioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, webAudioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, webAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.14, webAudioCtx.currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, webAudioCtx.currentTime + dur * 1.8);

        osc.connect(gain);
        gain.connect(webAudioCtx.destination);

        osc.start();
        osc.stop(webAudioCtx.currentTime + dur * 2);

        noteIndex = (noteIndex + 1) % notes.length;
        synthLoopTimer = setTimeout(playNextNote, dur * 1000);
      }

      playNextNote();
    } catch (e) {
      console.warn('Web Audio synthesis unavailable:', e);
    }
  }

  function stopChimeSynthesizer() {
    if (synthLoopTimer) {
      clearTimeout(synthLoopTimer);
      synthLoopTimer = null;
    }
  }

  function toggleMusic() {
    if (!isPlaying) {
      isPlaying = true;
      hasStartedMusic = true;
      if (musicContainer) musicContainer.classList.add('is-playing');
      if (musicToggleBtn) musicToggleBtn.classList.add('playing');
      if (musicStatusText) musicStatusText.textContent = t('musicPlaying');

      if (bgAudio) {
        bgAudio.volume = 0.65;
        const playPromise = bgAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log('Audio file play prevented, falling back to gentle chimes:', err);
            startChimeSynthesizer();
          });
        }
      } else {
        startChimeSynthesizer();
      }
    } else {
      isPlaying = false;
      if (musicContainer) musicContainer.classList.remove('is-playing');
      if (musicToggleBtn) musicToggleBtn.classList.remove('playing');
      if (musicStatusText) musicStatusText.textContent = t('musicPaused');

      if (bgAudio) bgAudio.pause();
      stopChimeSynthesizer();
    }
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', toggleMusic);
  }

  /* ==========================================================================
     7b. OPENING SURPRISE GATE — "READY TO BOOM?"
     ========================================================================== */
  const surpriseIntro = document.getElementById('surprise-intro');
  const openSurpriseBtn = document.getElementById('open-surprise-btn');

  function setPageInert(isInert) {
    const pageRegions = document.querySelectorAll(
      'body > header, body > main, body > footer, body > aside, #petals-canvas'
    );
    pageRegions.forEach((region) => {
      if (isInert) {
        region.setAttribute('inert', '');
      } else {
        region.removeAttribute('inert');
      }
    });
  }

  function createConfettiBurst() {
    if (!surpriseIntro) return;

    const colors = ['#E56B6F', '#F4ACB7', '#FAD2E1', '#DDA15E', '#FFF1E6', '#C97A7E'];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pieceCount = prefersReducedMotion ? 0 : 36;
    const spreadX = Math.min(window.innerWidth * 0.85, 760);
    const spreadY = Math.min(window.innerHeight * 0.55, 380);

    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement('span');
      piece.className = 'boom-confetti';
      piece.setAttribute('aria-hidden', 'true');
      piece.style.background = colors[i % colors.length];

      const x = (Math.random() - 0.5) * spreadX;
      const y = 60 - Math.random() * spreadY;
      const rotation = Math.random() * 720 - 360;

      piece.style.setProperty('--x', `${x.toFixed(0)}px`);
      piece.style.setProperty('--y', `${y.toFixed(0)}px`);
      piece.style.setProperty('--r', `${rotation.toFixed(0)}deg`);
      piece.style.setProperty('--delay', `${(Math.random() * 0.12).toFixed(2)}s`);

      surpriseIntro.appendChild(piece);
    }

    window.setTimeout(() => {
      surpriseIntro.querySelectorAll('.boom-confetti').forEach((piece) => piece.remove());
    }, 1800);
  }

  function openSurprise() {
    if (!surpriseIntro) return;
    if (
      surpriseIntro.classList.contains('booming') ||
      surpriseIntro.classList.contains('intro-hidden')
    ) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    surpriseIntro.classList.add('booming');
    document.body.classList.add('hero-revealed');
    createConfettiBurst();

    // Opening the gift is a user gesture, so the music can start right away.
    if (!isPlaying) {
      toggleMusic();
    }

    window.setTimeout(
      () => {
        surpriseIntro.classList.add('intro-hidden');
        document.body.classList.remove('intro-active');
        setPageInert(false);

        const heroHeading = document.querySelector('.hero-title');
        if (heroHeading) {
          heroHeading.setAttribute('tabindex', '-1');
          heroHeading.focus({ preventScroll: true });
        }

        surpriseIntro.setAttribute('aria-hidden', 'true');

        window.setTimeout(
          () => {
            surpriseIntro.style.display = 'none';
          },
          prefersReducedMotion ? 0 : 800
        );
      },
      prefersReducedMotion ? 0 : 700
    );
  }

  if (surpriseIntro && openSurpriseBtn) {
    setPageInert(true);

    openSurpriseBtn.addEventListener('click', openSurprise);

    // Let keyboard visitors skip the gate with Escape too.
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !surpriseIntro.classList.contains('intro-hidden')) {
        openSurprise();
      }
    });

    // Put focus on the gift so it can be opened with Enter/Space.
    window.setTimeout(() => {
      openSurpriseBtn.focus({ preventScroll: true });
    }, 60);
  }

  /* ==========================================================================
     8. INTERACTIVE WISH ENVELOPE / BLESSING
     ========================================================================== */
  const envelopeBtn = document.getElementById('open-envelope-btn');
  const revealedLetter = document.getElementById('revealed-letter');

  if (envelopeBtn && revealedLetter) {
    envelopeBtn.addEventListener('click', () => {
      const isOpen = revealedLetter.classList.contains('open');
      if (isOpen) {
        revealedLetter.classList.remove('open');
        envelopeBtn.setAttribute('aria-expanded', 'false');
        envelopeBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          ${t('openEnvelope')}
        `;
      } else {
        revealedLetter.classList.add('open');
        envelopeBtn.setAttribute('aria-expanded', 'true');
        envelopeBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          ${t('closeEnvelope')}
        `;
        revealedLetter.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /* ==========================================================================
     9. FINAL BIRTHDAY SURPRISE & CELEBRATION CONFETTI
     ========================================================================== */
  const celebrateBtn = document.getElementById('celebrate-btn');
  const celebrationToast = document.getElementById('celebration-toast');

  function triggerCelebrationConfetti() {
    const burstCount = 60;
    const colors = ['#E56B6F', '#F4ACB7', '#FAD2E1', '#DDA15E', '#FFCCD5', '#B56576'];

    for (let i = 0; i < burstCount; i++) {
      const confetti = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 6;
      const isCircle = Math.random() > 0.5;

      confetti.style.position = 'fixed';
      confetti.style.left = '50%';
      confetti.style.bottom = '20%';
      confetti.style.width = `${size}px`;
      confetti.style.height = `${isCircle ? size : size * 1.6}px`;
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = isCircle ? '50%' : '3px';
      confetti.style.zIndex = '1200';
      confetti.style.pointerEvents = 'none';
      confetti.style.transform = 'translate(-50%, 0)';

      document.body.appendChild(confetti);

      const angle = (Math.random() - 0.5) * Math.PI * 1.4;
      const velocity = Math.random() * 450 + 250;
      const vx = Math.sin(angle) * velocity;
      const vy = -Math.cos(angle) * velocity;
      const rot = (Math.random() - 0.5) * 720;

      const anim = confetti.animate(
        [
          { transform: 'translate(-50%, 0) rotate(0deg)', opacity: 1 },
          {
            transform: `translate(calc(-50% + ${vx}px), ${vy + 200}px) rotate(${rot}deg)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 1400 + 1200,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        }
      );

      anim.onfinish = () => confetti.remove();
    }

    if (celebrationToast) {
      // Update only the translated span so the toast keeps its emoji and
      // continues to respond to language changes.
      const toastText = celebrationToast.querySelector('[data-i18n="celebrationToast"]');
      if (toastText) toastText.textContent = t('celebrationToast');
      celebrationToast.classList.add('show');
      setTimeout(() => {
        celebrationToast.classList.remove('show');
      }, 4500);
    }
  }

  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', triggerCelebrationConfetti);
  }

  /* ==========================================================================
     10. SCROLL-TRIGGERED FADE-IN ANIMATIONS
     ========================================================================== */
  function observeFadeInElements() {
    const fadeElements = document.querySelectorAll('.fade-in-element:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      fadeElements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }

  /* ==========================================================================
     10b. SOFT MOTION: STAGGERED REVEALS, SCROLL PROGRESS, BACK TO TOP
     ========================================================================== */
  function applyRevealStagger() {
    document.querySelectorAll('.wishes-grid .wish-card').forEach((card, index) => {
      card.style.setProperty('--reveal-delay', `${index * 90}ms`);
    });
  }

  function initScrollUi() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;

      if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
      if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollTop > 560);
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    }

    update();
  }

  /* ==========================================================================
     11. INITIALIZATION
     ========================================================================== */
  function init() {
    // The hero gently rises once the gift gate opens. Without JavaScript the
    // class is never added, so the hero stays visible.
    if (document.getElementById('surprise-intro')) {
      document.body.classList.add('hero-primed');
    }

    applyLanguage(currentLang);
    applyRevealStagger();
    observeFadeInElements();
    initScrollUi();

    loadSavedPhotos().then((savedCount) => {
      if (!savedCount) return;

      // Update the already-rendered cards in place so the reveal animation
      // does not restart when saved photos finish loading.
      galleryItems.forEach((item) => {
        if (!galleryGrid) return;
        const card = galleryGrid.querySelector(`.gallery-card[data-photo-id="${item.id}"]`);
        const image = card && card.querySelector('.photo-open-btn img');
        if (image && image.getAttribute('src') !== item.src) {
          image.src = item.src;
        }
      });

      if (lightboxModal && lightboxModal.classList.contains('active')) {
        updateLightboxContent();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
